'use client';

import { experience } from '@/utils/items';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Ubuntu');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-14 border-b pb-6 border-gray-700 border-dotted">
        <h1 className="text-4xl font-bold">Experience</h1>
      </div>
      <div className="grid grid-cols-3 text-shade">
        <div>
          <nav className="proggy text-xl">
            <ul className="flex flex-col space-y-4">
              {experience.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => handleTabClick(tab.company)}
                  className={`cursor-pointer hover:bg-shade py-2 ${
                    activeTab === tab.company
                      ? 'text-domain border-domain font-medium'
                      : 'hover:border-domain grayscale'
                  }`}>
                  {tab.company}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-2">
          {experience.map((item) => (
            <div key={item.id}>
              <h2 className="text-bright text-2xl font-medium">{item.jobDescription}</h2>
              <p className="proggy pt-2 text-lg">{item.duration}</p>
              <ul className="list-none pt-3">
                {item.achievements.map((point) => (
                  <li className="flex pb-4">
                    <span className="mt-1.5 w-6 h-2 mr-4 bg-bright"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
