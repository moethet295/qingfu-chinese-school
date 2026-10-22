import { Outlet } from "react-router-dom";
import CourseHead from "../components/course/CourseHead";

function Courselayout() {
  return (
    <div className="flex flex-col h-screen">
      <CourseHead />

      <main className="flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}

export default Courselayout;