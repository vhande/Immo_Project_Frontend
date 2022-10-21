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

const User = mongoose.model('Users',userSchema)


app.post('/register', (req,res)=> {
    const {firstname, lastname, email, password} = req.body
    const securepassword = bcrypt.hashSync(password,10)
    const user = new User({firstname, lastname, email, password:securepassword})
    user.save()
    .then(answer=> {
        res.json({
            message:'saved',
            data:answer
        })
    })
})

app.listen(4000, ()=> {
    console.log("Runnig")
})