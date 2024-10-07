import { model, Schema } from 'mongoose';

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Book title is required!"],
            minlength: [2, "Book title must be at least 2 characters long."],
            maxlength: [255, "Book title cannot be more than 255 characters long."]
        },
        author: {
            type: String,
            required: [true, "Book author is required!"],
            minlength: [2, "Author's name must be at least 2 characters long."],
            maxlength: [255, "Author's cannot be more than 255 characters long."]
        },
        yearPublished: {
            type: Number,
            required: [true, "Year Book was published is required!"],
            max: [2025, "Book cannot be published in the future!"]
        },
        totalPages: {
            type: Number,
            required: [true, "Total number of pages is required!"],
            min: [1, "Book must have at least one page!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);

export default Book;
