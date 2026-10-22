import type { Course } from "../../types/course";

interface EnrollmentCardProps {
  course: Course;
}

function EnrollmentCard({ course }: EnrollmentCardProps) {
  return (
    <div className="rounded-xl bg-blue-100 px-4 py-3 hover:bg-blue-200">

      <div>
        <p className="text-base font-semibold">
          {course.name}
        </p>

        <p className="text-sm text-gray-600">
          Laoshi: {course.teacher}
        </p>
      </div>

    </div>
  );
}

export default EnrollmentCard;