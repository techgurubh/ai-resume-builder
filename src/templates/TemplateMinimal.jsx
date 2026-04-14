// src/templates/TemplateMinimal.jsx
import React from 'react';

export default function TemplateMinimal({ data }) {
  const { personal, summary, experience, skills, education } = data;
  
  return (
    <div className="bg-white shadow-none border border-gray-200 font-inter text-black p-6">
      <h1 className="text-3xl font-light tracking-wide">{personal.fullName}</h1>
      <p className="text-gray-600 text-sm mt-1">{personal.jobTitle}</p>
      <div className="flex flex-wrap text-xs gap-3 my-3 text-gray-500 border-b border-gray-200 pb-3">
        {personal.email} | {personal.phone} | {personal.location}
      </div>
      <p className="text-sm leading-relaxed my-3">{summary}</p>
      
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider">Experience</h2>
        {experience.map(exp => (
          <div key={exp.id} className="mt-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{exp.title}, {exp.company}</span>
              <span className="text-gray-500 text-xs">{exp.startDate}</span>
            </div>
            <p className="text-xs mt-0.5">{exp.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-1">
          {skills.map((s, i) => (
            <span key={i} className="text-xs text-gray-700 border-r pr-2 last:border-0">{s}</span>
          ))}
        </div>
      </div>
      
      <div className="mt-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider">Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="text-xs mt-1">
            {edu.degree} - {edu.institution} ({edu.year})
          </div>
        ))}
      </div>
    </div>
  );
}
