const jwt = require('jsonwebtoken');
const bcrypt =  require('bcryptjs');
// const { JWT_SECRET } = require('');
const student = require('../model/student');
const User = require('../model/users');
const card = require('../model/card');

module.exports = (req, res, next) => {

    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({
            message: "You are not logged in"
        })
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, (err, payload) =>{
        if(err) {
            return res.status(500).json({
                message: "You are not logged in"
            })
        } 
        
        const {_id} = payload
        User.findById(_id)
        .then(userData => {
            req.user = userData
        })
        next()
    })
    // try {

    //     const token = req.headers.authorization.split(" ")[1];
    //     token = jwt.sign({ _id: User._id }, JWT_SECRET)
    //     res.json({ token })
    //     console.log(token);

    //     // const { username, password } = req.body;

    //     // if( !(username && password) ) {
    //     //     res.status(400).json({
    //     //         message: 'All inputs are required'
    //     //     })
    //     // }

    //     // const user = await User.findOne({ username });

    //     // if( User && (await bcrypt.compare(password, User.password))) {
    //     //     const token = jwt.sign(

    //     //     )
    //     // }


    // // const token = req.headers.authorization.split(" ")[1];
    // // const verification = jwt.verify(req.token, 'Secret Key');
    // // console.log(token, verification);
    // next();
    // }
    // catch {
    //     console.log("Check");
    //     return res.status(401).json({
    //         message: 'Invalid Token'
    //     })
    // }
}

// const checkAuth = require('jsonwebtoken');

