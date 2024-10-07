import Book from "../models/book.model.js";

export const bookController = {
// CREATE: Create New Book
    createBook: async (req, res) => {
        try {
            const newBook = await Book.create(req.body) // creates new album with ID and timestamps
            console.log(newBook);
            return res.status(201).json(newBook)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

 //READ: ALL Books
    getAllBooks: async (req, res) => {
        try {
            const allBooks = await Book.find();
            return res.status(200).json(allBooks)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

 //READ: One Book by ID
    getOneBook: async (req, res) => {
        try {
            const id = req.params.id
            const oneBook = await Book.findById(id)
            return res.status(200).json(oneBook)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

//UPDATE: Update One Book by ID
    updateBook: async (req, res) => {
        try {
            const options = {
                new: true, // This makes mongoose return the updated doc after updating
                runValidators: true, // Runs validations same as create
            }
            const id = req.params.id
            const updatedBook = await Book.findByIdAndUpdate(id, req.body, options)
            return res.status(201).json(updatedBook)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

//DELETE: Delete One Book by ID
    deleteBook: async (req, res) => {
        try {
            const id = req.params.id
            const deletedBook = await Book.findByIdAndDelete(id)
            return res.status(204).send()
        } catch (error) {
            return res.status(500).json(error)
        }
    },
}