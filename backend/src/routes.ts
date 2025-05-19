import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { CreateHaircutController } from './controllers/haircut/CreateHairCutController';
import { ListHaircutController } from './controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
import { CheckSubcriptionController } from './controllers/haircut/CheckSubscriptionController';
import { CountHaitcutController } from './controllers/haircut/CountHaircutController';
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController';
import { NewScheduleController } from './controllers/schedule/NewScheduleController';
import { ListScheduleController } from './controllers/schedule/ListScheduleController';
import { FinishScheduleController } from './controllers/schedule/FinishScheduleController';

const router = Router()

router.post('/users', new CreateUserController().handle );
router.post('/session', new AuthUserController().handle )
router.get('/me', isAuthenticated, new DetailUserController().handle )
router.put('/user', isAuthenticated, new UpdateUserController().handle )

router.post('/haircut', isAuthenticated, new CreateHaircutController().handle )
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle )
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle )
router.get('/haircut/check', isAuthenticated, new CheckSubcriptionController().handle )
router.get('/haircut/count', isAuthenticated, new CountHaitcutController().handle )

router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().handle )
router.post('/schedule', isAuthenticated, new NewScheduleController().handle)
router.get('/schedule', isAuthenticated, new ListScheduleController().handle )
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle)


export { router }