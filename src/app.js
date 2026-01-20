//import external 
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'


//internal import
import { errorHandler, notFoundHandler } from './middlewares/common/errorHandler.js'

const app =  express()



//request parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set up view Engine
app.set('view engine', 'ejs');

//static file 
app.use(express.static(path.resolve("public")));

//cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET))


//setup routes
app.get('/', (req, res)=>{
    res.render('home');
})


//404 not found error
app.use( notFoundHandler );


//common error handler
app.use( errorHandler )



export { app }


//when use react
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))