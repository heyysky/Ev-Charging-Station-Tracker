
import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AppState, User } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    view: 'landing',
    user: null
  });

  const handleContinue = () => {
    setState(prev => ({ ...prev, view: 'login' }));
  };

  const handleLogin = (username: string) => {
    setState({
      view: 'dashboard',
      user: { username, isLoggedIn: true }
    });
  };

  const handleLogout = () => {
    setState({
      view: 'landing',
      user: null
    });
  };

  return (
    <div className="w-full h-full min-h-screen bg-slate-950">
      {state.view === 'landing' && <Landing onContinue={handleContinue} />}
      {state.view === 'login' && <Login onLogin={handleLogin} />}
      {state.view === 'dashboard' && state.user && (
        <Dashboard 
          user={state.user} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
};

export default App;
