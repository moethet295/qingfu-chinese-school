import Topbar from "./Topbar"

function Navbar() {
  return (
    <div className="w-full">
      <div className="text-2xl font-bold w-full mx-auto 
        bg-yellow-400 text-center text-red-600 p-5">
          欢迎来到庆福华文学苑
      </div>
      <Topbar />
    </div>
    
  )
}

export default Navbar
