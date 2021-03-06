import { MdDeleteForever } from "react-icons/md"

const CourseInfo = ({course, onDeleteCourse}) => {
  return (
    <li className="px-3 py-3 flex items-start">
        <button type="button"
          onClick={()=> onDeleteCourse(course.id)}
          className="p-1.5 mr-1.5 mt-1 rounded text-white bg-teal-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><MdDeleteForever /></button>
        <div className="flex-grow"><div className="flex items-center">
            <span className="flex-none font-medium text-2xl text-blue-500">
              {course.courseName}</span>
            <span className="flex-grow text-right">
              {course.courseDate}</span></div>
        <div><b className="font-bold text-blue-500">Instructor:</b>
              {course.instructor}</div>
          <div className="leading-tight">
              {course.courseNotes}</div></div>
    </li>
  )
};

export default CourseInfo;
