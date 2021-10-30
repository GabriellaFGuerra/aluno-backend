import { Router, request, response, Request, Response} from 'express'
 
import { getStudents } from './controller/StudentController';
import { saveStudent } from './controller/StudentController';
import { getStudent } from './controller/StudentController';
import { updateStudent } from './controller/StudentController';
import { deleteStudent } from './controller/StudentController';
import { finishedStudent } from './controller/StudentController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Bem-vindo(a)!' })
})
 
routes.get('/students', getStudents)
routes.post('/students', saveStudent)
routes.get('/students/:id', getStudent)
routes.put('/students/:id', updateStudent)
routes.delete('/students/:id', deleteStudent)
routes.patch('/students/:id', finishedStudent)
 
export default routes
