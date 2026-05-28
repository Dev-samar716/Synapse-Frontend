import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContentProvider from './context/features/chat/ContentProvider.tsx'
import UserPromptProvider from './context/features/chat/UserPromptProvider.tsx'
import ResponseLoadingProvider from './context/features/chat/ResponseLoadingProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContentProvider>
      <UserPromptProvider>
        <ResponseLoadingProvider>
           <App />
        </ResponseLoadingProvider>
      </UserPromptProvider>
    </ContentProvider> 
  </StrictMode>,
)
