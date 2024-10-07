import { Router } from 'express';
import { bookController } from "../controllers/book.controller.js";

const router = Router();

router.route('/book')
    .post(bookController.createBook)
    .get(bookController.getAllBooks)

router.route('/book/:id')
    .get(bookController.getOneBook)
    .delete(bookController.deleteBook)
    .put(bookController.updateBook)

export default router;