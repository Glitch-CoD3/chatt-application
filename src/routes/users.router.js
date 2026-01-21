import express from 'express'
import { Router } from 'express'

import {
    userSignUp,
    userLogin
} from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'


const router = express.Router()

//user signup page and Post
router.get('/signup', (req, res) => {
    res.render('userSignup', {
        title: "login Chatt-Application"
    })
})
router.post('/signup', upload.single("avatar"), userSignUp)



export default router;