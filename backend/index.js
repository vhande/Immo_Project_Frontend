const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const { NumberSchema } = require('yup');

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
    price:Number,
    bedrooms:Number,
    description:String,
    file:String
},  {
    timestamps: {
      createdAt: 'created_at'
    }
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
        const type = req.body.type
        const city = req.body.city
        const price = req.body.price
        const bedrooms = req.body.bedrooms
        const description = req.body.description


        console.log(req.body)

        if (classifiedtype === "rent") {
        const classifiedrent= new ClassifiedRent({classifiedtype, type, city, price, bedrooms, description, file:`/uploads/${req.file.filename}`})
        classifiedrent.save({ timestamps: { createdAt: true}})
        res.json({
            success:"Your ad has been created"
        })
    } else {
        const classifiedsale= new ClassifiedSale({classifiedtype, type, city, price, bedrooms, description, file:`/uploads/${req.file.filename}`})
        classifiedsale.save({ timestamps: { createdAt: true}})
        res.json({
            success:"Your ad has been created"
        })
    }      
    })

    app.get('/classified/:id', (req,res) => {
        const id = req.params.id
        ClassifiedRent.find({"_id":id})
        .then(answer=> {
            if (answer.length !== 0) {
                res.json(answer)
                console.log(answer)
            }
        })

        ClassifiedSale.find({"_id":id})
        .then(answer => {
            if (answer.length !== 0) {
                res.json(answer)
                console.log(answer)
            }      
        })

    })


    app.get('/latest', (req,res)=>{
        ClassifiedSale.find().sort({ _id: -1 }).limit(2)
        .then(answer => {
            res.json(answer)
            console.log(answer)
        })
    })

    app.get('/', (req,res)=> {
        ClassifiedSale.find({})
        .then(answer => {
            res.json(answer)
            console.log(answer)
    
        })

    })




    app.get('/search/:classifiedtype/:type/:city', (req,res) => {

         // to check URL details
         const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
         console.log(url)
       
        const classifiedtype = req.params.classifiedtype
        const type = req.params.type
        const city = req.params.city
        let bedroom = req.query.minBedroomCount
        let minPrice = req.query.minPrice
        let maxPrice = req.query.maxPrice
        const queryValues = Object.values(req.query)

    
       

        console.log(classifiedtype, bedroom, "bedroom", city, minPrice, maxPrice)
        
        // to check if the value of the city is matching with one of the cities below.

        const cities = ["brussels", "antwerp","gent","charleroi", "liège", "bruges", "namur", "leuven", "mons", "mechelen", "aalst", "hasselt"]
        let cityArray =  cities.filter(item => item === city)
        console.log(cityArray, city, "aaaaaaa", cityArray.length) 

        bedroom === 'null' || bedroom.length === 0 ? bedroom = "0" : ""
        minPrice == 'null' || minPrice.length === 0 ? minPrice = 1 : ""
        maxPrice == 'null' || maxPrice.length === 0 ? maxPrice = 1000000 : ""

        
        classifiedtype === "sale" && cityArray.length === 1 ?
            ClassifiedSale.find(
                {type:type,
                city:city,
                bedrooms: {$gte:bedroom},
                price:{$gte: minPrice, $lte:maxPrice}})
            .then(answer => {
                res.json(answer)
                console.log(answer)
                console.log("first")
                console.log(minPrice, maxPrice, bedroom, "aaaa")
            })

        : classifiedtype === "sale" ?
          ClassifiedSale.find(
                {
                type:type})
                .then(answer => {
                res.json(answer)
                console.log(answer)
                console.log("second")
            })
        : classifiedtype === "rent" && cityArray.length === 1 ?
            ClassifiedRent.find(
            {
            type:type,
            bedrooms: {$gte:bedroom},
            price:{$gte: minPrice, $lte:maxPrice}})
            .then(answer => {
            res.json(answer)
            console.log(answer)
            console.log("third")
        })
        :
        ClassifiedRent.find(
            {
            type:type})
            .then(answer => {
            res.json(answer)
            console.log(answer)
            console.log("fourth")
        })
    })
    //     } else if (classifiedtype === "rent" && cities.map(item=> item === city ) && bedroom !== null) {
          
    //         })
    //     }else if (classifiedtype === "sale" && cities.map(item => item !== city)) {
    //             ClassifiedSale.find({type:type})
    //             .then(answer => res.json(answer))
    //     } else if (classifiedtype === "sale" && cities.map(item => item === city)) {
    //          ClassifiedSale.find({type:type, city:city})
    //         .then(answer => res.json(answer))
    //     }

    // })


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