const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

const msgs = {
    emailinUse: "Email Already In Use",
    invalidEmail: "Valid Email Required", //when the email isn't the right length or characters
    userChars: "Username Must Use Alphanumeric Characters Only",
    userInUse: "Username Already In Use",
    lengthIssue: (field) => {
        return `The Given ${field} Did Not Meet Length Requirements`;
    },
};

const validateUser = async(req, res, next) => {

  console.log(req.body);

    const { email, password, username } = req.body;

    if (email === undefined || password === undefined || username === undefined ) {
      return res.status(400).json({
        error: 'One or more missing fields'
      })
    }

    failedValues = [];

    if (!validator.isEmail(email)) {
        failedValues.push({
            key: "email",
            message: msgs.invalidEmail,
        });
    }

    const emailinUse = (await User.findOne({ email: email })) != null;
    if (emailinUse) {
        failedValues.push({
            key: "email",
            message: msgs.emailinUse,
        });
    }

    if ((email != undefined && email.length < 6) || email.length > 254) {
        failedValues.push({
            key: "email",
            message: msgs.lengthIssue("Email"),
        });
    }

    if (
        username == undefined ||
        username.trim().length == 0 ||
        !validator.isLength(username, { min: 3, max: 21 })
    ) {
        failedValues.push({
            key: "username",
            message: msgs.lengthIssue("Username"),
        });
    } else if (!validator.isAlphanumeric(username, "en-US")) {
        failedValues.push({
            key: "username",
            message: msgs.userChars,
        });
    }

    const userInUse = (await User.findOne({ username: username })) != null;
    if (userInUse) {
        failedValues.push({
            key: "username",
            message: msgs.userInUse,
        });
    }

    if (!validator.isLength(password, { min: 7, max: 1000 })) {
        failedValues.push({
            key: "password",
            message: msgs.lengthIssue("Password"),
        });
    }

    if (failedValues.length > 0) {
        res.status(400).json({
            validation_error: failedValues,
        });
    } else {

      const encryptedPassword = await bcrypt.hash(password, 10);

        req.userData = {
            email: email,
            username: username,
            password: encryptedPassword
        };

        next();
    }
};

module.exports = validateUser;