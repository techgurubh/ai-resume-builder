// src/components/PreviewPanel.jsx
import React, { forwardRef } from 'react';
import TemplateModern from '../templates/TemplateModern';
import TemplateProfessional from '../templates/TemplateProfessional';
import TemplateCreative from '../templates/TemplateCreative';
import TemplateMinimal from '../templates/TemplateMinimal';
import TemplateExecutive from '../templates/TemplateExecutive';

const templates = {
  Modern: TemplateModern,
  Professional: TemplateProfessional,
  Creative: TemplateCreative,
  Minimal: TemplateMinimal,
  Executive: TemplateExecutive
};

const PreviewPanel = forwardRef(({ activeTemplate, data }, ref) => {
  const TemplateComponent = templates[activeTemplate];
  
  return (
    <div className="flex-1 overflow-y-auto p-4 flex justify-center items-start bg-gray-100">
      <div ref={ref} className="w-full max-w-4xl transition-all duration-200 shadow-2xl">
        <TemplateComponent data={data} />
      </div>
    </div>
  );
});

PreviewPanel.displayName = 'PreviewPanel';

export default PreviewPanel;
