import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

function ChatPage() {
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
      <Chat />
    </div>
  )
}

export default ChatPage