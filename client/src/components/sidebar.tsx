
import LogoutBtn from "./logoutBtn"

function Sidebar() {
  return (
    <div className='flex flex-col justify-between text-center p-3 h-screen w-[30%] bg-blue-500'>
        <h1 className='text-white text-3xl font-semibold'>AllChat</h1>
        <div className='flex flex-col'>
            <img src="" alt="profile_pic" />
            <h1 className='text-white text-2xl'>[username]</h1>
        </div>
        <LogoutBtn />
    </div>
  )
}

export default Sidebar