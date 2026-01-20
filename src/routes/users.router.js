import express from 'express'
import { Router } from 'express'

import { userSignUp,
    userLogin
 } from '../controllers/user.controllers.js'


 const router = express.Router()

router.get('/signup', userSignUp)
router.get('/login', userLogin)


export default router;