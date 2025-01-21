import React from 'react';

const Resume = () => {
  return (
    <div className="bg-white p-8 font-sans max-w-2xl mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="rounded-full bg-blue-500 w-12 h-12 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">SUHAIL UDDIN</h1>
          <p className="text-gray-600">FRESHER</p>
        </div>
      </div>

      {/* Profile */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">PROFILE</h2>
        <p className="text-gray-700">Seeking an opportunity with an organization where I can utilize my skills and enhance learning in the field of work. Capable of mastering new technologies and work in any environment.</p>
      </div>

      {/* Skills */}
      <div className="mb-6 grid grid-cols-2 gap-4"> {/* Use grid for two columns */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
          <SkillBar skill="Customer relationship management" percentage={80} />
          <SkillBar skill="Communication" percentage={70} />
          <SkillBar skill="Teamwork" percentage={90} />
          <SkillBar skill="MS Word" percentage={95} />
          <SkillBar skill="MS Excel" percentage={85} />
          <SkillBar skill="Tally ERP9" percentage={75} />
        </div>
         {/* Languages */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Languages</h2>
          <p className="text-gray-700">English</p>
          <p className="text-gray-700">Hindi</p>
          <p className="text-gray-700">Urdu</p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
        <EducationItem title="Bachelor of Commerce" dates="2022-2025" institution="Agra College, Agra" />
        <EducationItem title="12th" dates="2021-22" institution="Gyaan Bharti Public School, Agra" />
        <EducationItem title="10th" dates="2019-20" institution="Gyaan Bharti Public School, Agra" />
      </div>

      {/* Courses */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Courses</h2>
        <p className="text-gray-700">Computer Application and Business Accounting, NIELIT</p>
        <p className="text-gray-700">Social media and Digital Marketing</p>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-gray-600 flex justify-between">
        <p>Agra, India</p>
        <p>suhailmirza12303@gmail.com</p>
        <p>7505742205</p>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-2">
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{skill}</span>
      <span className="text-gray-700">{percentage}%</span>
    </div>
    <div className="bg-gray-200 rounded-full h-2">
      <div className="bg-blue-500 rounded-full h-2" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const EducationItem = ({ title, dates, institution }) => (
  <div className="mb-2">
    <h3 className="font-medium text-gray-800">{title}</h3>
    <p className="text-gray-600">{dates}</p>
    <p className="text-gray-600">{institution}</p>
  </div>
);

export default Resume;