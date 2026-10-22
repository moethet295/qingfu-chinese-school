import { Outlet, } from 'react-router-dom'

function Authlayout() {

  return (
    
      <main className="min-h-screen bg-[url('/image.png')] bg-cover bg-center
            bg-no-repeat flex items-center justify-center">
        <Outlet/>
      </main>
   
  )
}

export default Authlayout
