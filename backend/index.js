const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors())

const jwtSecret = process.env.KEY
const jwtExpirySeconds = 1000;

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.URL, (err) => console.log('connected'))
}

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const User = mongoose.model('users',userSchema)

app.post('/register', (req,res)=> {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    
    User.find({email})
    .then( data => 
        {
            if (data.length === 0) {
                const securepassword = bcrypt.hashSync(password,10)
                const user = new User({firstname, lastname, email, password:securepassword})
                user.save()
                .then(answer=> {
                    res.json({
                        message:'saved',
                        data:answer,
                        success:"Account created"
                    })
                
                })
            }
            else {
                res.send({error:"This e-mail address already exists in our database. Please use another one."})
                console.log("User exists")
            }
        })
   
})

app.post('/login', (req,res) => {
    const {email} = req.body;
    const {password} = req.body;
    User.find({email})
    .then(data => { 
        console.log(data)
        if (data.length > 0) {
            let isPassCorrect = bcrypt.compareSync(password,data[0].password)
            if(isPassCorrect) {
                jwt.sign({email}, jwtSecret,{
                    algorithm:"HS256", expiresIn:"600s"
                }, (err, token) => {
                    res.json({
                        payload: req.body,
                        token: token
                    })
                })
            } else {
                res.send({error:"Username or password incorrect"})
            }
        } else {
            res.send({error:"Username or password incorrect"})
            console.log("Username or password incorrect")        
        }
    })

})

app.listen(4000, ()=> {
    console.log("Runnig")
})