import { useState, useEffect } from 'react'

import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

function ChatPage() {

  const [text, setText] = useState<string>('');

  //useEffect(() => { translateText() }, [])
    
  // https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja  
  const translateText = async () => {
    try{
    await fetch(`http://localhost:3001/chat`)
      .then(res => res.json())
      .then(data => console.log(data))
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default ChatPage