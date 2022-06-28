// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import AppRouter from './router/AppRouter';

// Components
import TranslateContainer from './components/containers/TranslateContainer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TranslateContainer>
    <React.StrictMode>
      <AppRouter/>
    </React.StrictMode>
  </TranslateContainer>
)
