// src/templates/TemplateCreative.jsx
import React from 'react';

export default function TemplateCreative({ data }) {
  const { personal, summary, experience, skills, education } = data;
  
  return (
    <div className="bg-white shadow-xl font-space flex flex-col md:flex-row">
      <div className="bg-amber-800 text-white p-6 w-full md:w-1/3">
        <h1 className="text-3xl font-bold break-words">{personal.fullName}</h1>
        <p className="text-amber-200 text-sm mt-1">{personal.jobTitle}</p>
        <hr className="my-4 border-amber-600" />
        <div className="space-y-2 text-sm">
          <div><i className="fas fa-envelope mr-2"></i> {personal.email}</div>
          <div><i className="fas fa-phone mr-2"></i> {personal.phone}</div>
          <div><i className="fas fa-location-dot mr-2"></i> {personal.location}</div>
        </div>
        <hr className="my-4 border-amber-600" />
        <h3 className="font-bold text-lg">EXPERTISE</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((s, i) => (
            <span key={i} className="bg-amber-700 px-2 py-0.5 text-xs rounded-full">{s}</span>
          ))}
        </div>
        <hr className="my-4 border-amber-600" />
        <h3 className="font-bold">EDUCATION</h3>
        {education.map(edu => (
          <div key={edu.id} className="mt-2 text-sm">
            <div className="font-semibold">{edu.degree}</div>
            <div>{edu.institution}, {edu.year}</div>
          </div>
        ))}
      </div>
      <div className="p-6 w-full md:w-2/3">
        <h2 className="text-xl font-bold border-l-4 border-amber-800 pl-3">About Me</h2>
        <p className="mt-2 text-sm">{summary}</p>
        <h2 className="text-xl font-bold border-l-4 border-amber-800 pl-3 mt-5">Experience</h2>
        {experience.map(exp => (
          <div key={exp.id} className="mt-3">
            <div className="flex justify-between">
              <span className="font-bold">{exp.title}</span>
              <span className="text-xs text-gray-500">{exp.startDate}</span>
            </div>
            <div className="text-amber-700 text-sm">{exp.company}</div>
            <p className="text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
