const jwt = require('jsonwebtoken')
const data = require('./data')
users = {
    100: { userid: 100, uname: "amal", password: "100"},
    101: { userid: 101, uname: "althaf", password: "101"},
    102: { userid: 102, uname: "sanal", password: "102" }
}

//register
const register = (userid, uname, password,email) => {
    return data.User.findOne({
        userid
    }).then(user => {
        if (user) {
            console.log(user);
            return {
                statusCode: 401,
                status: false,
                message: "Account number already exist!!!"
            }

        }
        else {
            const newUser = new data.User({
                userid,
                uname,
                password,
                email
            })
            newUser.save()
            return {
                statusCode: 200,
                status: true,
                message: "Account Created"
            }
        }
    })
}
const login = (userid, password) => {
  //ASYCHRONOUS
  return data.User.findOne({
    userid,
    password
  }).then(user => {
    if (user) {
      currentUserId = userid
      currentUserName = user.uname
    
      return {
        statusCode: 200,
        status: true,
        message: "succefully login",
        currentUserId,
        currentUserName,
    

      }
    }
    else {
      return {
        statusCode: 401,
        status: false,
        message: "invalid credentials"
      }
    }
  })
}



module.exports = {
    register,
    login
}