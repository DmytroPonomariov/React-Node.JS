import React from 'react';
import './App.css';
import First from './First';

export default function App() {
  const categories = [
    'Animals', 'Anime', 'Anti-Malware', 'Art Design', 'Books',
    'Business', 'Calendar', 'Cloud Storage', 'File Sharing', 'Animals',
    'Continuous Integration', 'Cryptocurrency'
  ];
  const lowerCaseCategories = categories.map(category => category.toLowerCase());
  return (
    <div>
      Some data: <First items={lowerCaseCategories} />
    </div>
  );
}

