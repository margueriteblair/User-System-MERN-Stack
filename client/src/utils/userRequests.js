const {default: axios} =  require('axios')


module.exports = {
    loginReq: (form) => {
        const reqBody = {}
        for (const input of form) {
            if (input.value !== "") {
                reqBody[input.name] = input.value
            }
        }
        const loginUrl = 'https://localhost:3000/user/login'
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

