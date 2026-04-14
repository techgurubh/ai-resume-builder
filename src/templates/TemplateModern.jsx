// src/templates/TemplateModern.jsx
import React from 'react';

export default function TemplateModern({ data }) {
  const { personal, summary, experience, skills, education } = data;
  
  return (
    <div className="bg-white shadow-xl rounded-none overflow-hidden font-inter text-gray-800">
      <div className="border-b-4 border-indigo-500 p-6 pb-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{personal.fullName}</h1>
        <p className="text-indigo-600 font-medium text-lg mt-1">{personal.jobTitle}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-3">
          <span><i className="fas fa-envelope mr-1"></i> {personal.email}</span>
          <span><i className="fas fa-phone mr-1"></i> {personal.phone}</span>
          <span><i className="fas fa-map-marker-alt mr-1"></i> {personal.location}</span>
        </div>
      </div>
      <div className="p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-5">
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-indigo-500 border-b pb-1">Profile</h2>
            <p className="mt-2 text-sm leading-relaxed">{summary}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-indigo-500 border-b pb-1">Experience</h2>
            {experience.map(exp => (
              <div key={exp.id} className="mt-3">
                <div className="flex justify-between">
                  <span className="font-bold">{exp.title}</span>
                  <span className="text-sm text-gray-500">{exp.startDate}</span>
                </div>
                <div className="text-sm text-indigo-600">{exp.company}</div>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
        <div className="space-y-5">
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-indigo-500 border-b pb-1">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((s, i) => (
                <span key={i} className="bg-indigo-50 text-indigo-800 text-xs px-2 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-indigo-500 border-b pb-1">Education</h2>
            {education.map(edu => (
              <div key={edu.id} className="mt-2">
                <div className="font-semibold">{edu.degree}</div>
                <div className="text-sm">{edu.institution}, {edu.year}</div>
                <p className="text-xs text-gray-600">{edu.details}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
