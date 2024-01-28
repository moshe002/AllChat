import { ReactElement, useState } from 'react';
import { io } from 'socket.io-client';

import ChatBottomSection from "./chatBottomSection";

type FetchProps = {
  setFetchThis: React.Dispatch<React.SetStateAction<boolean>>;
  fetchThis: boolean;
  text: string;
  loadingText: boolean;
};

function Chat({ setFetchThis, fetchThis, text, loadingText }: FetchProps) {

  const [messageBox, setMessageBox] = useState<ReactElement[]>([]);
  const [message, setMessage] = useState<string>('');
  const [chosenLanguage, setChosenLanguage] = useState<string>('en');

  const socket = io('http://localhost:3001/', {
    autoConnect: true,
  })

  //console.log('Socket connected:', socket.connected);

  const renderChatBox = () => {
    setFetchThis(true);

    const addMessageBox =
      <div 
        key={messageBox.length + 1} 
        className=''>
          <p className='inline-block float-right bg-blue-400 p-3 m-1 text-white text-end rounded-md'>
            {text}
          </p>
      </div>

    setMessageBox(prevMessage => [...prevMessage, addMessageBox]);
    setMessage(''); // resets the input field value

    socket.emit("chosen_language", { language: chosenLanguage, message: message })
    //console.log(chosenLanguage)
  };

  socket.on("server_message", (data) => {
    console.log("Received message from server:", data);
  });

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <div className='flex flex-col border-2 border-slate-400 h-[80%] w-[85%] rounded-md shadow-2xl'>
          <div className='flex flex-col h-[90%] p-2 overflow-y-auto'>
            { 
              loadingText ?
              <h1>loading</h1>
              :
              messageBox 
            }
          </div>
          <ChatBottomSection 
            message={message} 
            setMessage={setMessage} 
            renderChatBox={renderChatBox}
            setChosenLanguage={setChosenLanguage} />
        </div>
    </div>
  )
};

export default Chat