import { ReactElement, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import Loading from './loading';
import ChatBottomSection from "./chatBottomSection";

function Chat() {

  const [messageBox, setMessageBox] = useState<ReactElement[]>([]);
  const [message, setMessage] = useState<string>('');
  const [chosenLanguage, setChosenLanguage] = useState<string>('en');
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [characterLength, setCharacterLength] = useState<number>(0);
  const [messageReply, setMessageReply] = useState<string>('');

  const socket = io('http://localhost:3001/', {
    autoConnect: true,
  })

  const receviedMessageUI = (
    <div key={messageBox.length + 1} >
      <p
        title={message} 
        className='inline-block float-left bg-green-400 p-3 m-1 text-white text-end rounded-md'>
        {messageReply}
      </p>
    </div>
  )

  useEffect(() => { 
    socket.on("received_message", (data:string) => {
      console.log(data);
      setMessageReply(data);
      setMessageBox(prevMessage => [...prevMessage, receviedMessageUI]);
    })

    return () => {
      socket.off("received_message");
    };
  }, [socket])

  // https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja  
  const translateText = async () => { // FETCHES DATA FROM BACKEND
    if(message === '' || message === " ") console.error('empty field')
    setLoadingText(true)

    // sends data to the server (language and message)
    socket.emit("chosen_language", { language: chosenLanguage, message: message });

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
    const messageToSend = (
        <div key={messageBox.length + 1} >
          <p
            title={message} 
            className='inline-block float-right bg-blue-400 p-3 m-1 text-white text-end rounded-md'>
            {text}
          </p>
        </div>
      )

      setMessageBox(prevMessage => [...prevMessage, messageToSend]);
      setMessage(''); // resets the input field value
      setCharacterLength(0);
      socket.emit("translated_message", { translatedMessage: text });
  };

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
            {
              messageReply ? receviedMessageUI : null
            }
          </div>
          <ChatBottomSection 
            characterLength={characterLength}
            setCharacterLength={setCharacterLength}
            message={message} 
            setMessage={setMessage} 
            translateText={translateText}
            setChosenLanguage={setChosenLanguage} />
        </div>
    </div>
  )
};

export default Chat