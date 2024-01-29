import ChatOptions from "./chatOptions"

type ChatProps = {
  translateText: () => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setChosenLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function ChatBottomSection({ translateText, message, setMessage, setChosenLanguage }: ChatProps) {
  return (
    <div className='flex h-[10%] w-full p-7 gap-10 items-center border-t-2 border-slate-400'>
      <ChatOptions setChosenLanguage={setChosenLanguage} />
      <input
          required
          className='border-2 border-slate-400 p-2 w-[65%] outline-none rounded-md'
          maxLength={500} 
          type="text" 
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
          placeholder="Type your message here..." />
      <button 
          onClick={translateText}
          className='p-3 w-[10%] bg-green-400 text-center text-white font-semibold rounded-md hover:bg-green-500 duration-150' 
          type='button'>
              SEND
      </button>
    </div>
  )
}

export default ChatBottomSection