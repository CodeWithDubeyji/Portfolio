import food from './food.jpg'
import book from './book.jpg'
export const PROJECTS = [
    {
        title: "Food Ordering Website",
        image: food,
        description:
            "A food ordering website with features like product listing, order cart, and filters based on the type of food",
        technologies: ["React", "Tailwind css", "Redux toolkit"],
    },
    {
        title: "Book store Website",
        image: book,
        description:
            "A fully functional Book store with features like Creating entry of a new book, Editing the books, Get information about the last update and creat time, Delete a book and Get a gist of it on one click using Gemini api",
        technologies: ["React", "NodeJs", "MongoDB", "ExpressJs", "Mongoose", "Tailwind css"],
    }
]