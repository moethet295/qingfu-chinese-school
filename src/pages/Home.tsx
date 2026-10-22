import { useState } from "react";
import CourseCard from "../components/course/CourseCard";
import courses from "../data/course";
import SearchBar from "../components/SearchBar"

function Home() {

  const [search, setSearch] = useState("");

  const handleSearch = courses.filter((course)=>
    course.name.toLowerCase().replaceAll("-","").replaceAll(" ","").
    includes(search.toLowerCase().replaceAll("-","").replaceAll(" ",""))
  )

  return (
  <div className="min-h-screen w-full bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-6">
    
    <SearchBar search={search} setSearch={setSearch} />

    <div className="grid grid-cols-5 gap-5">

      {handleSearch.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>

  </div>
</div>
  );
}

export default Home;