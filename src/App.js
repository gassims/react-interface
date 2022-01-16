import {useState, useEffect, useCallback} from 'react';
import { MdAllInclusive } from "react-icons/md";
import Search from './components/Search';
import AddCourse from './components/AddCourse';
import CourseInfo from './components/CourseInfo';




function App() {
  let [courseList, setCourseList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("courseName");
  let [orderBy, setOrderBy] = useState("asc");  

  const filterCourses = courseList.filter(
    item => {
      return(
        item.courseName.toLowerCase().includes(query.toLowerCase()) ||
        item.instructor.toLowerCase().includes(query.toLowerCase()) ||
        item.courseNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b)=>{
    let order= (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

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
      <Search query={query} onQueryChange={myQuery => setQuery(myQuery)} />
      <ul className='divide-y divide-gray-300'>
        {filterCourses.map((course)=>(
          <CourseInfo key={course.id}
          course={course}
          onDeleteCourse={courseId => setCourseList(courseList.filter(course=>course.id !== courseId))} />
          ))}
      </ul>
    </div>
  );
  }


export default App;
