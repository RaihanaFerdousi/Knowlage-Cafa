import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks); 
  }

const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time; // This should work correctly if time is a number
    setReadingTime(newReadingTime);
    console.log("Updated Reading Time:", newReadingTime); // Check the output in the console
};


  return (
      <>
        <Header></Header>
        <div className=' md:flex max-w-6xl mx-auto'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks readingTime={readingTime}  bookmarks={bookmarks}></Bookmarks>
        </div>
      </>
  );
}

export default App
