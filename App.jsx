import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Chat from './Pages/Chat.tsx';
import VesriansJourney from './Pages/VesriansJourney.jsx';
import Observatory from './Pages/Observatory.jsx';
import { createPageUrl } from './utils';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={createPageUrl("Chat")} element={<Chat />} />
          <Route path={createPageUrl("VesriansJourney")} element={<VesriansJourney />} />
          <Route path={createPageUrl("Observatory")} element={<Observatory />} />
          <Route path="/" element={<Navigate to={createPageUrl("Chat")} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
