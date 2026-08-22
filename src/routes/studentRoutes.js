/*
// Task 4 Code (POST)
import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/', studentController.createStudent);

export default router;
*/

/*
// Task 5 Code (GET All and GET by ID)
import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);

export default router;
*/

/*
// Task 6 Code (PUT Update)
import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);

export default router;
*/

// Task 7 Code (DELETE Operation Added)
import express from 'express';
import * as studentController from '../controllers/studentController.js';

const router = express.Router();

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

export default router;