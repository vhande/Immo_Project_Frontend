const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors())

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
                res.send({error:"User exists"})
                console.log("User exists")
            }
        })
   
})

app.listen(4000, ()=> {
    console.log("Runnig")
})