import React from 'react';
import { Users, Briefcase, FileSearch, Building2, Mail, GraduationCap, FileText, LineChart, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Jobs from './components/jobs';

function App() {
  return (
    <div className="py-20 min-h-screen bg-transparent">
      {/* <Navbar />
      <Hero />
      <Services />
      <About /> */}
    <Jobs/>
    {/* <Contact /> */}
    
    </div>
  );
}

export default App;