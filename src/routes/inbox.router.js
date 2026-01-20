import express from 'express'
import { Router } from 'express'

import { userSignUp,
    userLogin
 } from '../controllers/user.controllers.js'


 const router = express.Router()

router.get('/inbox', userSignUp)

export default router;