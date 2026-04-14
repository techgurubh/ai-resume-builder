// src/App.jsx
import React, { useState, useRef } from 'react';
import { ResumeProvider, useResume } from './contexts/ResumeContext';
import FormPanel from './components/FormPanel';
import PreviewPanel from './components/PreviewPanel';
import TemplateSelector from './components/TemplateSelector';
import { exportToPDF, handlePrint } from './utils/exportUtils';

function AppContent() {
  const [activeTemplate, setActiveTemplate] = useState('Modern');
  const { resumeData } = useResume();
  const previewRef = useRef(null);

  const onExportPDF = () => {
    if (previewRef.current) {
      exportToPDF(previewRef.current, resumeData.personal.fullName);
    }
  };

  const onPrint = () => {
    if (previewRef.current) {
      handlePrint(previewRef.current, resumeData.personal.fullName);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Left Form Panel */}
      <div className="lg:w-2/5 w-full bg-white border-r border-gray-200 overflow-y-auto shadow-md no-print">
        <FormPanel />
      </div>

      {/* Right Preview Panel */}
      <div className="lg:w-3/5 w-full flex flex-col bg-gray-200 overflow-hidden no-print">
        <TemplateSelector 
          activeTemplate={activeTemplate} 
          onSelectTemplate={setActiveTemplate}
          onExportPDF={onExportPDF}
          onPrint={onPrint}
        />
        <PreviewPanel 
          ref={previewRef}
          activeTemplate={activeTemplate}
          data={resumeData}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;
