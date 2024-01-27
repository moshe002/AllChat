import { ReactElement, useState } from 'react';
import { io } from 'socket.io-client';

import ChatBottomSection from "./chatBottomSection";

function Chat() {

  const [messageBox, setMessageBox] = useState<ReactElement[]>([]);
  const [message, setMessage] = useState<string>('');
  const [chosenLanguage, setChosenLanguage] = useState<string>('en');

  // const socket = io('http://localhost:3001/', {
  //   autoConnect: true,
  // })

  const renderChatBox = () => {
    const addMessageBox = 
      <div 
        key={messageBox.length + 1} 
        className=''>
          <p className='inline-block float-right bg-blue-400 p-3 m-1 text-white text-end rounded-md'>
            {message}
          </p>
      </div>

    setMessageBox(prevMessage => [...prevMessage, addMessageBox]);
    setMessage('');

    //socket.emit("chosen_language", { language: chosenLanguage })
    //console.log(chosenLanguage)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <div className='flex flex-col border-2 border-slate-400 h-[80%] w-[85%] rounded-md shadow-2xl'>
          <div className='flex flex-col h-[90%] p-2 border-2 border-red-400 overflow-y-auto'>
            { messageBox }
          </div>
          <ChatBottomSection 
            message={message} 
            setMessage={setMessage} 
            renderChatBox={renderChatBox}
            setChosenLanguage={setChosenLanguage} />
        </div>
    </div>
  )
}

export default Chat