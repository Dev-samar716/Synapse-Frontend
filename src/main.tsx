import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContentProvider from './context/features/chat/ContentProvider.tsx'
import UserPromptProvider from './context/features/chat/UserPromptProvider.tsx'
import ResponseLoadingProvider from './context/features/chat/ResponseLoadingProvider.tsx'
import AuthProvider from './context/features/auth/AuthProvider.tsx'
import { TokenVerificationLoadingProvider } from './context/features/auth/TokenVerificationLoadingProvider.tsx'
import PendingSignupProvider from './context/features/auth/PendingSignUpProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenVerificationLoadingProvider>
    <AuthProvider>
        <ContentProvider>
      <UserPromptProvider>
        <ResponseLoadingProvider>
          <PendingSignupProvider>
            <App />
          </PendingSignupProvider>
        </ResponseLoadingProvider>
      </UserPromptProvider>
    </ContentProvider> 
    </AuthProvider>
    </TokenVerificationLoadingProvider>
  </StrictMode>,
)
