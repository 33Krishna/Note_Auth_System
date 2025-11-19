import express from 'express'
import { loginUser, registerUser, verify } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/verify-mail', verify)
router.post('/login', loginUser)

export default router