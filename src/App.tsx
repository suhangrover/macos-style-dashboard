import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Desktop from './components/desktop/Desktop';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Routes>
            <Route path="/" element={<Desktop />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App;