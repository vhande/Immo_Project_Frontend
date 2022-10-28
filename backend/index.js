const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require("multer");

require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors())


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.DIGITALCITY, (err) => console.log('connected'))
}

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const User = mongoose.model('users',userSchema)

const classifiedSchema = mongoose.Schema({
    type:String,
    classifiedtype:String,
    city:String,
    price:String,
    bedrooms:String,
    description:String,
    file:String
})

const ClassifiedRent = mongoose.model('classifiedsrent', classifiedSchema) 
const ClassifiedSale = mongoose.model('classifiedssale', classifiedSchema) 

app.use('/uploads',express.static('uploads'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

    const uploader = multer({ 
        storage
     })

     app.post('/ad',uploader.single("file"),(req, res) => {
        const classifiedtype = req.body.classifiedtype
        const propertytype = req.body.propertytype
        const city = req.body.city
        const price = req.body.price
        const bedrooms = req.body.bedrooms
        const description = req.body.description


        if (classifiedtype === "rent") {
        const classifiedrent= new ClassifiedRent({classifiedtype, propertytype, city, price, bedrooms, description, file:`/uploads/${req.file.filename}`})
        classifiedrent.save()
        res.json({
            success:"Your ad has been created"
        })

    } else {
        const classifiedsale= new ClassifiedSale({classifiedtype, propertytype, city, price, bedrooms, description, file:`/uploads/${req.file.filename}`})
        classifiedsale.save()
        res.json({
            success:"Your ad has been created"
        })
    }      
    })



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

const jwtSecret = process.env.KEY
const jwtExpirySeconds = 1000;
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
                    algorithm:"HS256", expiresIn:"10s"
                }, (err, token) => {
                    res.json({
                        payload: req.body,
                        token: token,
                        firstname: data[0].firstname,
                        lastname: data[0].lastname
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

app.post('/profile', (req,res,next) => {
    const {token} = req.body
    jwt.verify(token, jwtSecret, (err,decoded)=> {
        if(decoded !== undefined) {
            res.json({
                success:"Access"
            })
            next()
        } else {
            //forbidden
            res.send({error:"Session has expired"})
        }
    })
})


app.listen(4000, ()=> {
    console.log("Runnig")
})