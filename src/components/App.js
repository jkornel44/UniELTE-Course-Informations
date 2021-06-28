import CourseList from "./course-list/CourseList";
import SearchBar from "./search-bar/SearchBar";
import Header from "./header/Header";

import { useState } from 'react';

function App() {

  const [courses, setCourses] = useState('');
  return(
    <div className="overflow-x-auto">  
      <div className="min-w-screen min-h-screen bg-gray-100 flex justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <Header />
          <SearchBar setCourses={setCourses}/>
          <CourseList courses={courses}/>
        </div>
      </div>
    </div>
  );
}

export default App;
