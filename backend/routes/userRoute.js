import express from 'express'
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verify, verifyOTP } from '../controllers/userController.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { validateUser } from '../validators/userValidate.js'

const router = express.Router()

router.post('/register', validateUser ,registerUser)
router.post('/verify-mail', verify)
router.post('/login', loginUser)
router.post('/logout', isAuthenticated, logoutUser)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp/:email', verifyOTP)
router.post('/change-password/:email', changePassword)

export default router