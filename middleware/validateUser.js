//imported omdels and validator and bcrypt packages
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

const errMessages = {
    emailinUse: "That Email Is Already In Use",
    invalidEmail: "Valid Email Required", //when the email isn't the right length or characters
    userChars: "Username Must Only Use Alphanumeric Characters",
    userInUse: "That Username Is Already In Use",
    lengthIssue: (field) => {
        return `The Given ${field} Did Not Meet Length Requirements`;
    },
};

const validateUser = async (req, res, next) => {

  console.log(req.body);

    const { email, password, username } = req.body;



    if (email === undefined || password === undefined || username === undefined ) {
      return res.status(400).json({
        error: 'One or more missing fields'
      })
    }

    failedValues = [];

//all email validations are below: 
    if (!validator.isEmail(email)) {
        failedValues.push({
            key: "email",
            message: errMessages.invalidEmail,
        });
    }
    if ((email != undefined && email.length < 6) || email.length > 254) {
        failedValues.push({
            key: "email",
            message: errMessages.lengthIssue("Email"),
        });
    }
    const emailinUse = (await User.findOne({ email: email })) != null;
    if (emailinUse) {
        failedValues.push({
            key: "email",
            message: errMessages.emailinUse,
        });
    }

//username validations below:
    if (username == undefined || username.trim().length == 0 ||!validator.isLength(username, { min: 3, max: 21 })) {
        failedValues.push({
            key: "username",
            message: errMessages.lengthIssue("Username"),
        });
    } else if (!validator.isAlphanumeric(username, "en-US")) {
        failedValues.push({
            key: "username",
            message: errMessages.userChars,
        });
    }

    const userInUse = (await User.findOne({ username: username })) != null;
    if (userInUse) {
        failedValues.push({
            key: "username",
            message: errMessages.userInUse,
        });
    }

    if (!validator.isLength(password, { min: 7, max: 1000 })) {
        failedValues.push({
            key: "password",
            message: errMessages.lengthIssue("Password"),
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