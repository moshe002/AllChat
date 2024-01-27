
function Chat() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <div className='flex flex-col justify-end border-2 h-[80%] w-[85%]'>

            <input
            className=''
            maxLength={500} 
            type="text" 
            placeholder="Type your message here..." />
        </div>
    </div>
  )
}

export default Chat