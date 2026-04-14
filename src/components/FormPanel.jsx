// src/components/FormPanel.jsx
import React from 'react';
import { useResume } from '../contexts/ResumeContext';

export default function FormPanel() {
  const { 
    resumeData, 
    updatePersonal, 
    updateSummary, 
    updateSkills,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation
  } = useResume();

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s);
    updateSkills(skillsArray);
  };

  return (
    <div className="p-5">
      <div className="sticky top-0 bg-white pb-2 z-10">
        <h2 className="text-2xl font-bold text-gray-800">
          <i className="fas fa-edit mr-2 text-indigo-500"></i>Resume Editor
        </h2>
        <p className="text-sm text-gray-500">Fill details — live preview updates instantly</p>
      </div>

      <div className="space-y-6 mt-4">
        {/* Personal Info */}
        <section>
          <h3 className="font-semibold text-gray-700 border-l-4 border-indigo-400 pl-2">Personal Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <input type="text" placeholder="Full Name" value={resumeData.personal.fullName} onChange={e => updatePersonal('fullName', e.target.value)} className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <input type="text" placeholder="Job Title" value={resumeData.personal.jobTitle} onChange={e => updatePersonal('jobTitle', e.target.value)} className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <input type="email" placeholder="Email" value={resumeData.personal.email} onChange={e => updatePersonal('email', e.target.value)} className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <input type="tel" placeholder="Phone" value={resumeData.personal.phone} onChange={e => updatePersonal('phone', e.target.value)} className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <input type="text" placeholder="Location" value={resumeData.personal.location} onChange={e => updatePersonal('location', e.target.value)} className="border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
        </section>

        {/* Summary */}
        <section>
          <h3 className="font-semibold text-gray-700 border-l-4 border-indigo-400 pl-2">Professional Summary</h3>
          <textarea rows="3" value={resumeData.summary} onChange={e => updateSummary(e.target.value)} className="border p-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-2" />
        </section>

        {/* Skills */}
        <section>
          <h3 className="font-semibold text-gray-700 border-l-4 border-indigo-400 pl-2">Skills (comma separated)</h3>
          <input type="text" value={resumeData.skills.join(', ')} onChange={handleSkillsChange} placeholder="React, Tailwind, Node.js" className="border p-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-2" />
        </section>

        {/* Experience */}
        <section>
          <div className="flex justify-between items-center border-l-4 border-indigo-400 pl-2">
            <h3 className="font-semibold text-gray-700">Work Experience</h3>
            <button onClick={addExperience} className="text-xs bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition"><i className="fas fa-plus mr-1"></i> Add</button>
          </div>
          <div className="space-y-3 mt-2">
            {resumeData.experience.map((exp, idx) => (
              <div key={exp.id} className="border rounded-lg p-3 bg-gray-50 relative">
                <button onClick={() => removeExperience(idx)} className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-xs"><i className="fas fa-trash-alt"></i></button>
                <input type="text" placeholder="Job Title" value={exp.title} onChange={e => updateExperience(idx, 'title', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <input type="text" placeholder="Company" value={exp.company} onChange={e => updateExperience(idx, 'company', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <input type="text" placeholder="Period (e.g., 2022 - Present)" value={exp.startDate} onChange={e => updateExperience(idx, 'startDate', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <textarea placeholder="Description" value={exp.description} onChange={e => updateExperience(idx, 'description', e.target.value)} className="border p-1.5 w-full text-xs rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" rows="2" />
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex justify-between items-center border-l-4 border-indigo-400 pl-2">
            <h3 className="font-semibold text-gray-700">Education</h3>
            <button onClick={addEducation} className="text-xs bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition"><i className="fas fa-plus mr-1"></i> Add</button>
          </div>
          <div className="space-y-3 mt-2">
            {resumeData.education.map((edu, idx) => (
              <div key={edu.id} className="border rounded-lg p-3 bg-gray-50 relative">
                <button onClick={() => removeEducation(idx)} className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-xs"><i className="fas fa-trash-alt"></i></button>
                <input type="text" placeholder="Degree" value={edu.degree} onChange={e => updateEducation(idx, 'degree', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <input type="text" placeholder="Institution" value={edu.institution} onChange={e => updateEducation(idx, 'institution', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <input type="text" placeholder="Year" value={edu.year} onChange={e => updateEducation(idx, 'year', e.target.value)} className="border p-1.5 w-full mb-2 text-sm rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
                <input type="text" placeholder="Details (optional)" value={edu.details} onChange={e => updateEducation(idx, 'details', e.target.value)} className="border p-1.5 w-full text-xs rounded focus:outline-none focus:ring-1 focus:ring-indigo-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
