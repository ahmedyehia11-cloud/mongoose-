import {Router} from 'express'
import * as userController from  './controller/user.js'
const router = Router();


router.get("/" , userController.getUserModule)
router.put('/update/:id',userController.update)
router.delete('/delete/:id',userController.deleteUser)

export default  router