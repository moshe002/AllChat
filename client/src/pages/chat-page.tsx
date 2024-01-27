import { useState, useEffect } from 'react'

function Chat() {

  const [text, setText] = useState<string>('');

  useEffect(() => { translateText() }, [])
    
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
    <div>
      <div>
        <input type="text" placeholder="Type your message here..." />
      </div>
    </div>
  )
}

export default Chat