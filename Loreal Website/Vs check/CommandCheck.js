import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sustainabilityProgress = [
  { year: 2005, co2Reduction: 0, waterReduction: 0, wasteReduction: 0 },
  { year: 2010, co2Reduction: 29.8, waterReduction: 19.5, wasteReduction: 24.2 },
  { year: 2015, co2Reduction: 56.0, waterReduction: 45.0, wasteReduction: 31.0 },
  { year: 2020, co2Reduction: 81.0, waterReduction: 51.0, wasteReduction: 37.0 },
  { year: 2025, co2Reduction: 100, waterReduction: 60, wasteReduction: 50 },
];

const futureTargets = [
  { category: 'Carbon Neutral Sites', current: 72, target: 100 },
  { category: 'Recycled Packaging', current: 21, target: 100 },
  { category: 'Bio-based Ingredients', current: 60, target: 95 },
  { category: 'Biodegradable Formulas', current: 80, target: 95 },
];

const socialImpact = [
  { year: 2018, beneficiaries: 56842 },
  { year: 2019, beneficiaries: 90635 },
  { year: 2020, beneficiaries: 100905 },
  { year: 2021, beneficiaries: 125000 },
  { year: 2022, beneficiaries: 130000 },
];

const LOrealESGWebsite = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">L'Oréal ESG Report</h1>
        <p className="text-xl text-gray-600">Committed to Beauty, Sustainability, and Responsibility</p>
      </header>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Executive Summary</TabsTrigger>
          <TabsTrigger value="environmental">Environmental</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>L'Oréal: Global leader in beauty and cosmetics</li>
                <li>Committed to sustainability and responsible business practices</li>
                <li>Significant progress in ESG initiatives</li>
                <li>Key achievements:
                  <ul className="list-circle pl-5 mt-2">
                    <li>100% renewable electricity in all L'Oréal sites</li>
                    <li>96% of new or renovated products with improved environmental profile</li>
                    <li>100,000+ job opportunities for people from underprivileged communities</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="environmental">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Initiatives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Climate and Carbon Neutrality</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 100% carbon-neutral sites by 2025</li>
                  <li>Progress: 100 carbon-neutral sites achieved in 2022</li>
                  <li>67% reduction in CO2 emissions since 2005</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Packaging</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 100% of plastic packaging recycled or bio-based by 2030</li>
                  <li>Progress: 21% of plastic packaging is recycled or bio-based</li>
                  <li>Launch of paper-based cosmetic tubes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Water Stewardship</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 60% reduction in water consumption per finished product by 2020 (vs. 2005)</li>
                  <li>Achievement: 51% reduction achieved</li>
                  <li>Implementation of dry factories concept</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Progress Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sustainabilityProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="co2Reduction" name="CO2 Reduction %" stroke="#8884d8" />
                    <Line type="monotone" dataKey="waterReduction" name="Water Reduction %" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="wasteReduction" name="Waste Reduction %" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2025 Sustainability Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={futureTargets}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" name="Current %" fill="#8884d8" />
                    <Bar dataKey="target" name="Target %" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Diversity and Inclusion</h3>
                <ul className="list-disc pl-5">
                  <li>32% of executive positions held by women</li>
                  <li>Worldwide Diversity Lab to promote inclusive beauty</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Employee Well-being</h3>
                <ul className="list-disc pl-5">
                  <li>L'Oréal Share & Care program</li>
                  <li>Providing essential health coverage and social protection for all employees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                <ul className="list-disc pl-5">
                  <li>"Beauty for a Better Life" program: Provided free beauty training to 18,000+ people in difficult situations</li>
                  <li>COVID-19 Response:
                    <ul className="list-circle pl-5 mt-2">
                      <li>Produced and donated millions of units of hand sanitizer</li>
                      <li>Support for healthcare workers and small businesses</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Social Impact: Beneficiaries of L'Oréal Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={socialImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="beneficiaries" name="Number of Beneficiaries" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="governance">
          {/* Add governance content here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LOrealESGWebsite;
