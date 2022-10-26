const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const { MdFastRewind } = require('react-icons/md');

require('dotenv').config();


const app = express();
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static('./uploads'))

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

const Classified = mongoose.model('classifieds', classifiedSchema) 

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

    const uploader = multer({ 
        storage,
        fileFilter:(req,file,callback)=>{
            let arr = ['image/jpeg','image/jpg','image/png','image/gif']
            let extensions = "/jpg|jpeg|png|gif/"
            let isValidImg = arr.filter(img=>img===file.mimetype)
            console.log(extensions.match(file.originalname.split(".")[1]),"testttt")
            console.log(isValidImg.length>0)
            if(isValidImg.length>0 && extensions.match(file.originalname.split(".")[1])!==null){
                callback(null,true)
            }else{
                callback(new Error("Not allowed!!!"))
            }
        }
     })

     app.post('/ad',uploader.single('document'),(req, res) => {
    console.log(req.file.filename)
        response.json({
            msg: 'ok'
        })
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