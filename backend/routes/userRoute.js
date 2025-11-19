import express from 'express'
import { loginUser, logoutUser, registerUser, verify } from '../controllers/userController.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/verify-mail', verify)
router.post('/login', loginUser)
router.post('/logout', isAuthenticated, logoutUser)

export default router