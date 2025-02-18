import express from 'express';
import { getAdminData } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/profile', getAdminData);

export default router;
