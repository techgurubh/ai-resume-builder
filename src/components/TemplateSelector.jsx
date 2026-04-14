// src/components/TemplateSelector.jsx
import React from 'react';

const templates = ['Modern', 'Professional', 'Creative', 'Minimal', 'Executive'];

export default function TemplateSelector({ activeTemplate, onSelectTemplate, onExportPDF, onPrint }) {
  return (
    <div className="bg-white shadow p-3 flex flex-wrap items-center justify-between border-b gap-2 sticky top-0 z-10">
      <div className="flex flex-wrap gap-2">
        <span className="font-semibold text-gray-700">🎨 Templates:</span>
        {templates.map(style => (
          <button
            key={style}
            onClick={() => onSelectTemplate(style)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              activeTemplate === style 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {style}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button 
          onClick={onExportPDF} 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1 transition shadow"
        >
          <i className="fas fa-download"></i> PDF (A4)
        </button>
        <button 
          onClick={onPrint} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm flex items-center gap-1 transition shadow"
        >
          <i className="fas fa-print"></i> Print
        </button>
      </div>
    </div>
  );
}
