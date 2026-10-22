import { Video, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import courses from "../../data/course";
import { useState } from "react";
import MemberDrawer from "../member/MemberDrawer";

function CourseHead() {
  const { courseName } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const course = courses.find(
    (course) => course.name === String(courseName)
  );


  return (
    <> 
    <div className="relative w-full border-b border-gray-300 bg-gray-400 px-8 py-4 shadow-sm">

      {/* Members - Left */}
      <button
        type="button"
        onClick={()=>setIsOpen(true)}
        className="
          absolute left-8 top-1/2 -translate-y-1/2
          flex cursor-pointer items-center gap-2
          rounded-lg bg-white
          px-4 py-2
          text-gray-800
          hover:bg-gray-200
        "
      >
        <Users className="h-5 w-5" />
        <span>Members</span>
      </button>


      {/* Course Info - Center */}
      <div className="text-center">
        <p className="text-xl font-bold text-gray-900">
          {course?.name}
        </p>

        <p className="text-sm text-gray-700">
          Laoshi: {course?.teacher}
        </p>
      </div>


      {/* Video Call - Right */}
      <Link
        to={`/courses/${course?.name}/video-call`}
        className="
          absolute right-8 top-1/2 -translate-y-1/2
          flex items-center gap-2
          rounded-lg bg-blue-500
          px-4 py-2
          text-white
          hover:bg-blue-600
        ">
        <Video className="h-5 w-5" />
        <span>Video Call</span>
      </Link>

    </div>

    <MemberDrawer 
      isOpen={isOpen}
      onClose={()=>setIsOpen(false)}
      courseName={course?.name ?? ""}/>
    </>
  );
}

export default CourseHead;