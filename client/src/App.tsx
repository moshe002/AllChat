import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from "./pages/signup-page"
import ChatPage from './pages/chat-page'

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
        <Route path="/" element={ <SignupPage /> } />
        <Route path="/chat" element={ <ChatPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
