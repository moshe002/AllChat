import { useState, useEffect } from 'react'

function Chat() {

  const [text, setText] = useState<string>('');

  //useEffect(() => { translateText() }, [])
    
  // https://655.mtis.workers.dev/translate?text=Hello,%20How%20are%20you?&source_lang=en&target_lang=ja
  const translateText = async () => {
    
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