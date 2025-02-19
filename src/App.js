import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    const [books, setBooks] = useState([]);

    //const handleCreateBook
    const createBoot = (title) => {
        //console.log('Need to add book with:',title);
    };

    return (
        <div>
            <BookCreate onSubmit={createBoot}/>
        </div>
    );
}

export default App;