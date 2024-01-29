import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className='flex items-center justify-center h-full'>
        <h1 className='text-4xl text-blue-500 animate-spin'>
            <AiOutlineLoading3Quarters />
        </h1>
    </div>
  )
}

export default Loading