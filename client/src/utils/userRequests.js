const {default: axios} =  require('axios')
const baseURL = 'http://localhost:3000'
const validator = require('validator')

module.exports = {
    loginReq: async (form) => {
        const reqBody = {}, fieldErrors = {};
        for (const input of form) {
            if (input.name === "credential" && (input.value.length < 3 || input.value.length > 254)) {
                fieldErrors[input.name] = "\nInvalid length, must be between 3 and 254 characters!"
            }
            if (input.name === "password" && (input.value.length < 7 || input.value.length > 1000)) {
                fieldErrors[input.name] = "\nInvalid password length, password must be between 7 and 1000 characters\n"
            }
        }

        if (Object.entries(fieldErrors).length !== 0) {
            let errorStr = "";
            for (const field in fieldErrors) {
                errorStr += `\nError in field ${field !== "credential" ? field : "username or email"} - ${fieldErrors[field]}`
            }
            console.log(errorStr)
            alert(errorStr)
            return
        } else {
            for (const input of form) {
                reqBody[input.name] = input.value
            }
        }

        const loginUrl = baseURL + '/user/login'
        const reqData = {
            headers: {
                'Content-Type': 'application/json',

            },
            data: JSON.stringify(reqBody)
        }
        axios.put(loginUrl, reqData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
    },

    regReq: (form) => {
        for (const input of form) {
            console.log(input)
        }
    }
}

