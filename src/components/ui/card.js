// components/Card.js

import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => (
  <div className="bg-purple-600 text-white p-4">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
