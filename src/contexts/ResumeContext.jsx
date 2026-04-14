// src/contexts/ResumeContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const ResumeContext = createContext();

const initialState = {
  personal: {
    fullName: "Alexandra Chen",
    jobTitle: "Senior Frontend Developer",
    email: "alex.chen@example.com",
    phone: "+1 (555) 789-1234",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexchen",
    website: "alexchen.dev"
  },
  summary: "Results-driven Frontend Developer with 7+ years of experience building responsive, user-centric web applications. Passionate about React, modern UI/UX, and scalable design systems. Proven track record of improving performance by 40% and leading cross-functional teams.",
  experience: [
    { id: 1, title: "Lead Frontend Engineer", company: "TechFlow Solutions", startDate: "2022 - Present", endDate: "", description: "Architected component library used across 10+ products, reduced bundle size by 30%. Mentored 4 junior developers and led agile ceremonies." },
    { id: 2, title: "React Developer", company: "CreativeLabs", startDate: "2019 - 2022", endDate: "", description: "Rebuilt legacy dashboard with React + Tailwind, increased user engagement by 25%. Implemented real-time data visualization." }
  ],
  skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "GraphQL", "Jest", "Figma"],
  education: [
    { id: 1, degree: "B.Sc. in Computer Science", institution: "University of Washington", year: "2018", details: "Graduated with honors, focus on HCI." }
  ]
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case 'UPDATE_SUMMARY':
      return { ...state, summary: action.payload };
    case 'UPDATE_SKILLS':
      return { ...state, skills: action.payload };
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, { id: Date.now(), title: "", company: "", startDate: "", endDate: "", description: "" }] };
    case 'UPDATE_EXPERIENCE':
      const updatedExp = [...state.experience];
      updatedExp[action.index] = { ...updatedExp[action.index], ...action.payload };
      return { ...state, experience: updatedExp };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter((_, i) => i !== action.index) };
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, { id: Date.now(), degree: "", institution: "", year: "", details: "" }] };
    case 'UPDATE_EDUCATION':
      const updatedEdu = [...state.education];
      updatedEdu[action.index] = { ...updatedEdu[action.index], ...action.payload };
      return { ...state, education: updatedEdu };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter((_, i) => i !== action.index) };
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);
  
  const updatePersonal = (field, value) => dispatch({ type: 'UPDATE_PERSONAL', payload: { [field]: value } });
  const updateSummary = (value) => dispatch({ type: 'UPDATE_SUMMARY', payload: value });
  const updateSkills = (skillsArray) => dispatch({ type: 'UPDATE_SKILLS', payload: skillsArray });
  const addExperience = () => dispatch({ type: 'ADD_EXPERIENCE' });
  const updateExperience = (index, field, value) => dispatch({ type: 'UPDATE_EXPERIENCE', index, payload: { [field]: value } });
  const removeExperience = (index) => dispatch({ type: 'REMOVE_EXPERIENCE', index });
  const addEducation = () => dispatch({ type: 'ADD_EDUCATION' });
  const updateEducation = (index, field, value) => dispatch({ type: 'UPDATE_EDUCATION', index, payload: { [field]: value } });
  const removeEducation = (index) => dispatch({ type: 'REMOVE_EDUCATION', index });

  const value = {
    resumeData: state,
    updatePersonal,
    updateSummary,
    updateSkills,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
