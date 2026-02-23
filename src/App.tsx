import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { CaseStudyDetail } from './components/CaseStudyDetail';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
    </Router>
  );
}