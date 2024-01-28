import { useState, useEffect } from 'react'

import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

function ChatPage() {

  const [text, setText] = useState<string>('');
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [fetchThis, setFetchThis] = useState<boolean>(false);

  useEffect(() => { 
    fetchThis && translateText()
  }, [fetchThis])
    
  // https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja  
  const translateText = async () => { // FETCHES DATA FROM BACKEND
    setLoadingText(true)
    try{
      await fetch(`http://localhost:3001/chat`)
        .then(res => res.json())
        .then((data) => {
          setText(data.response.translated_text);
          console.log(data.response.translated_text);
        })
    } catch(error) {
      console.error(error);
    }
    setFetchThis(false);
    setLoadingText(false)
  }

  /*
    languages:
    english: en
    japanese: ja
    german: de
    korean: ko
  */

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Chat loadingText={loadingText} text={text} fetchThis={fetchThis} setFetchThis={setFetchThis} />
    </div>
  )
}

export default ChatPage