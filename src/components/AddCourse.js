import {MdCalendarToday} from 'react-icons/md';
import {useState} from 'react';

const AddCourse = ({ onSendCourse, lastId }) => {
  const clearData = {
    instructor: '',
    courseName: '',
    courseDate: '',
    courseTime: '',
    courseNotes: ''
  }
  let [toggleForm, setToggleForm] = useState(false)
  let [formData, setFormData] = useState(clearData)

  function formDataPublish() {
    const courseInfo = {
      id: lastId + 1,
      instructor: formData.instructor,
      courseName: formData.courseName,
      courseDate: formData.courseDate + ' ' + formData.courseTime,
      courseNotes: formData.courseNotes
    }
    onSendCourse(courseInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm)
  }

  return (
    <div>
      <button onClick={() => { setToggleForm(!toggleForm) }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
        <div><MdCalendarToday className="inline-block align-text-top" />  Add Course</div>
      </button>
      {
        toggleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Instructor
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="instructor" id="instructor"
                onChange={(event) => { setFormData({ ...formData, instructor: event.target.value }) }}
                value={formData.instructor}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Course
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="courseName" id="courseName"
                onChange={(event) => { setFormData({ ...formData, courseName: event.target.value }) }}
                value={formData.courseName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="courseDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Course Date
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="date" name="courseDate" id="courseDate"
                onChange={(event) => { setFormData({ ...formData, courseDate: event.target.value }) }}
                value={formData.courseDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="courseTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Course Time
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="time" name="courseTime" id="courseTime"
                onChange={(event) => { setFormData({ ...formData, courseTime: event.target.value }) }}
                value={formData.courseTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="courseNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Course Notes
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="courseNotes" name="courseNotes" rows="3"
                onChange={(event) => { setFormData({ ...formData, courseNotes: event.target.value }) }}
                value={formData.courseNotes}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
            </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AddCourse;
