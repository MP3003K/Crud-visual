import { Router } from 'express'

const router = Router();

import * as alumnoCtr from '../controllers/alumno.controller'

router.get('/', alumnoCtr.readAllAlumnos);
router.get('/:id', alumnoCtr.readAlumno);
router.delete('/:id', alumnoCtr.delAlumno);
router.post('/', alumnoCtr.createAlumno);
router.put('/:id', alumnoCtr.updateAlumno);


export default router;