import {useState, useEffect, useCallback} from 'react';
import { MdAllInclusive } from "react-icons/md";
import Search from './components/Search';
import AddCourse from './components/AddCourse';
import CourseInfo from './components/CourseInfo';

function App() {
  let [courseList, setCourseList] = useState([]);

  const fetchData = useCallback(()=>{
    fetch('./data.json',)
      .then(response => response.json())
      .then(data=>{
        setCourseList(data)
      });
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])


  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <MdAllInclusive className="inline-block text-teal-500"/>Dog, Butterfly<MdAllInclusive className="inline-block text-teal-500"/></h1>
      <AddCourse />
      <Search />
      <ul className='divide-y divide-gray-300'>
        {courseList.map((course)=>(<h1><CourseInfo key={course.id} name={course} />...</h1>))}
      </ul>
    </div>
  );
  }


export default App;
