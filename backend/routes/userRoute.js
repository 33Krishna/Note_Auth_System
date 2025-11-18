import express from 'express'
import { registerUser, verify } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/verify-mail', verify)

export default router