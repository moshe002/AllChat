import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/signup-page"
import Chat from './pages/chat-page'

function App() {

  /*
    app name suggestions: 
    - LangBridge
    - AllChat
    - Chatslate
  */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signup /> } />
        <Route path="/chat" element={ <Chat /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
