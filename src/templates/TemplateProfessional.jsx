// src/templates/TemplateProfessional.jsx
import React from 'react';

export default function TemplateProfessional({ data }) {
  const { personal, summary, experience, skills, education } = data;
  
  return (
    <div className="bg-white shadow-xl rounded-sm font-merriweather text-gray-800">
      <div className="grid grid-cols-3 gap-0 border-b border-gray-300">
        <div className="col-span-1 bg-gray-100 p-5">
          <h1 className="text-2xl font-bold">{personal.fullName}</h1>
          <p className="text-sm text-gray-700 mt-1">{personal.jobTitle}</p>
        </div>
        <div className="col-span-2 p-5 flex flex-wrap gap-3 text-xs">
          <div><i className="fas fa-envelope"></i> {personal.email}</div>
          <div><i className="fas fa-phone"></i> {personal.phone}</div>
          <div><i className="fas fa-map-marker-alt"></i> {personal.location}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="col-span-1 space-y-5">
          <section>
            <h3 className="font-bold uppercase text-sm border-b">Skills</h3>
            <ul className="mt-2 text-sm space-y-1">
              {skills.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </section>
          <section>
            <h3 className="font-bold uppercase text-sm border-b">Education</h3>
            {education.map(edu => (
              <div key={edu.id} className="mt-2">
                <div className="font-semibold text-sm">{edu.degree}</div>
                <div className="text-xs">{edu.institution}, {edu.year}</div>
              </div>
            ))}
          </section>
        </div>
        <div className="col-span-2 space-y-4">
          <section>
            <h3 className="font-bold uppercase text-sm border-b">Professional Summary</h3>
            <p className="text-sm mt-1">{summary}</p>
          </section>
          <section>
            <h3 className="font-bold uppercase text-sm border-b">Work Experience</h3>
            {experience.map(exp => (
              <div key={exp.id} className="mt-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-sm">{exp.title}</span>
                  <span className="text-xs text-gray-500">{exp.startDate}</span>
                </div>
                <div className="text-sm italic">{exp.company}</div>
                <p className="text-xs mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
