import type { Course } from "../../types/course"

interface MenuCardProps {
    course: Course
}

function MenuCard({course}: MenuCardProps) {

  return (
    <div className="flex items-center bg-amber-300 p-4 border-b gap-6 ">
        <div className="flex items-center justify-center rounded-full bg-blue-200
         overflow-hidden h-12 w-12 shrink-0 text-blue-600">
            {course.image ? (<img src={course.image} alt={course.name}
                className="w-full h-full rounded-full object-cover"/>) : course.name.charAt(0)
            }
        </div>
        <div>
            <p className="font-semibold">{course.name}</p>
            <p className="text-sm text-gray-500">{course.teacher}</p>
        </div>
    </div>
  )
}

export default MenuCard
