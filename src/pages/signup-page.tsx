import { useNavigate } from "react-router-dom"

function Signup() {

  const nav = useNavigate();

  return (
    <div className="flex flex-col justify-evenly items-center bg-blue-500 h-screen">
        <div className="text-center">    
            <h1 className="text-4xl text-white font-bold tracking-wide">AllChat</h1>
            <p className="italic font-semibold text-white text-sm">"Communcation is key to a better world."</p>
        </div>
        <button
          onClick={() => { nav('/chat') }}
          className="p-3 bg-white text-blue-600 rounded-md font-semibold" 
          type="button">
              Signup with Google
        </button>
    </div>
  )
}

export default Signup