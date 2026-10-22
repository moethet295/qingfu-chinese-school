import type { Course } from "../../types/course";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {

  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-4 shadow-md hover:shadow-yellow-300 mt-8">

      {/* Image + Course Name */}
      <div>
        <img
          src={course.image}
          alt={course.name}
          className="h-44 w-full rounded-xl object-contain"
        />
      </div>

      <h2 className="mt-2 text-lg text-center font-semibold">{course.name}</h2>


      {/* Course Information */}
      <div className="mt-1 rounded-xl border border-gray-300 p-3">

        <p className="text-sm">
          <span className="font-semibold">Teacher:</span>{" "}
          {course.teacher}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Schedule:</span>{" "}
          {course.schedule}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Capacity:</span>{" "}
          {course.capacity}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Enrolled:</span>{" "}
          {course.enrolledStudents}
        </p>

      </div>
     
      <button className="rounded-xl bg-blue-500 text-white hover:bg-blue-700
        cursor-pointer w-full mt-2 py-2" onClick={()=> navigate(`/courses/${course.name}`)}
        type="button">
        Request to Join
      </button>
     
    </div>
  );
}

export default CourseCard;