// src/templates/TemplateExecutive.jsx
import React from 'react';

export default function TemplateExecutive({ data }) {
  const { personal, summary, experience, skills, education } = data;
  
  return (
    <div className="bg-white shadow-xl font-playfair text-gray-900 p-8 text-center md:text-left">
      <div className="text-center border-b-2 border-gray-300 pb-4 mb-5">
        <h1 className="text-5xl font-bold tracking-wide">{personal.fullName}</h1>
        <p className="text-xl text-gray-600 mt-2">{personal.jobTitle}</p>
        <div className="flex justify-center gap-4 text-sm mt-3 text-gray-500">
          <span>{personal.email}</span>
          <span>•</span>
          <span>{personal.phone}</span>
          <span>•</span>
          <span>{personal.location}</span>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-md italic leading-relaxed">{summary}</p>
        
        <h2 className="text-2xl font-semibold mt-6 border-l-4 border-gray-800 pl-3">Professional Experience</h2>
        {experience.map(exp => (
          <div key={exp.id} className="mt-5">
            <div className="flex justify-between flex-wrap">
              <span className="text-xl font-bold">{exp.title}</span>
              <span className="text-gray-500 text-sm">{exp.startDate}</span>
            </div>
            <div className="text-gray-700 text-md mb-1">{exp.company}</div>
            <p className="text-gray-600 text-sm">{exp.description}</p>
          </div>
        ))}
        
        <h2 className="text-2xl font-semibold mt-6 border-l-4 border-gray-800 pl-3">Core Skills</h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {skills.map((s, i) => (
            <span key={i} className="bg-gray-100 px-4 py-1 text-sm rounded-full">{s}</span>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mt-6 border-l-4 border-gray-800 pl-3">Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="mt-2">
            <div className="font-bold">{edu.degree}</div>
            <div>{edu.institution}, {edu.year}</div>
            <p className="text-sm">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
