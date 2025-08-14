import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Chat from './Pages/Chat.tsx';
import Growth from './Pages/Growth.jsx';
import Exploration from './Pages/Exploration.jsx';
import { createPageUrl } from './utils';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={createPageUrl("Chat")} element={<Chat />} />
          <Route path={createPageUrl("Growth")} element={<Growth />} />
          <Route path={createPageUrl("Exploration")} element={<Exploration />} />
          <Route path="/" element={<Navigate to={createPageUrl("Chat")} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
