// components/Tabs.js

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const TabsList = ({ children, className }) => (
  <Tabs.List className={`flex ${className}`}>
    {children}
  </Tabs.List>
);

const TabsTrigger = ({ value, children, className }) => (
  <Tabs.Trigger value={value} className={`flex-1 p-2 text-center cursor-pointer ${className}`}>
    {children}
  </Tabs.Trigger>
);

const TabsContent = ({ value, children }) => (
  <Tabs.Content value={value} className="p-4">
    {children}
  </Tabs.Content>
);

export { TabsList, TabsTrigger, TabsContent };
