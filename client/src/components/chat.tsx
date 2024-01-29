import { ReactElement, useState } from 'react';
import { io } from 'socket.io-client';

import Loading from './loading';
import ChatBottomSection from "./chatBottomSection";

function Chat() {

  const [messageBox, setMessageBox] = useState<ReactElement[]>([]);
  const [message, setMessage] = useState<string>('');
  const [chosenLanguage, setChosenLanguage] = useState<string>('en');
  const [loadingText, setLoadingText] = useState<boolean>(false);

  const socket = io('http://localhost:3001/', {
    autoConnect: true,
  })

  // https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja  
  const translateText = async () => { // FETCHES DATA FROM BACKEND
    setLoadingText(true)

    socket.emit("chosen_language", { language: chosenLanguage, message: message });
    //console.log(chosenLanguage);

    try{
      await fetch(`http://localhost:3001/chat`)
        .then(res => res.json())
        .then((data) => {
          renderChatBox(data.response.translated_text)
          //console.log(data.response.translated_text);
        })
        setLoadingText(false)
    } catch(error) {
      console.error(error);
    }
  };

  const renderChatBox = (text:string) => {   
    const addMessageBox =
        <div 
          key={messageBox.length + 1} 
          className=''>
            <p
              title={message} 
              className='inline-block float-right bg-blue-400 p-3 m-1 text-white text-end rounded-md'>
              {text}
            </p>
        </div>

      setMessageBox(prevMessage => [...prevMessage, addMessageBox]);
      setMessage(''); // resets the input field value
  };

  // socket.on("server_message", (data) => {
  //   console.log("Received message from server:", data);
  // });

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <div className='flex flex-col border-2 border-slate-400 h-[80%] w-[85%] rounded-md shadow-2xl'>
          <div className='flex flex-col h-[90%] p-2 overflow-y-auto'>
            { 
              loadingText ?
              <Loading />
              :
              messageBox 
            }
          </div>
          <ChatBottomSection 
            message={message} 
            setMessage={setMessage} 
            translateText={translateText}
            setChosenLanguage={setChosenLanguage} />
        </div>
    </div>
  )
};

export default Chat