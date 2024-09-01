import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

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

const groupDevelopment = [
  { year: 1909, event: "Creation of Société Française de Teintures Inoffensives pour Cheveux" },
  { year: 1929, event: "Imédia, first quick oxidation hair color" },
  { year: 1935, event: "Ambre solaire, first sun protection oil with filtering agent" },
  { year: 1954, event: "Cosmétique Active Department is created" },
  { year: 1957, event: "Acquisition of Monsavon" },
  { year: 1963, event: "L'Oréal enters the Paris stock market" },
  { year: 1965, event: "Acquisition of Laboratoires Garnier" },
  { year: 1973, event: "Biotherm joins L'Oréal" },
  { year: 2000, event: "Acquisition of Matrix and Kiehl's Since 1851" },
  { year: 2006, event: "The Body Shop joins L'Oréal" },
  { year: 2018, event: "Acquisition of ModiFace" },
];

const StylishHeading = ({ children, className }) => (
  <h2 className={`text-3xl font-bold mb-6 text-purple-700 border-b-2 border-purple-500 pb-2 ${className}`}>
    {children}
  </h2>
);

const ModernTable = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-purple-600 text-white">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="py-3 px-4 text-left">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-purple-50" : "bg-white"}>
            {Object.values(row).map((value, cellIndex) => (
              <td key={cellIndex} className="py-3 px-4">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LOrealESGStylishWebsite = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-purple-800">L'Oréal ESG Report</h1>
        <p className="text-xl text-purple-600">Committed to Beauty, Sustainability, and Responsibility</p>
      </header>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-purple-100 rounded-xl p-1">
          <TabsTrigger value="summary" className="data-[state=active]:bg-white rounded-lg transition-all">Executive Summary</TabsTrigger>
          <TabsTrigger value="environmental" className="data-[state=active]:bg-white rounded-lg transition-all">Environmental</TabsTrigger>
          <TabsTrigger value="social" className="data-[state=active]:bg-white rounded-lg transition-all">Social</TabsTrigger>
          <TabsTrigger value="governance" className="data-[state=active]:bg-white rounded-lg transition-all">Governance</TabsTrigger>
          <TabsTrigger value="brsr" className="data-[state=active]:bg-white rounded-lg transition-all">BRSR</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
          <Card className="bg-white shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle><StylishHeading>Executive Summary</StylishHeading></CardTitle>
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
          <Card className="bg-white shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle><StylishHeading>Environmental Initiatives</StylishHeading></CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Climate and Carbon Neutrality</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 100% carbon-neutral sites by 2025</li>
                  <li>Progress: 100 carbon-neutral sites achieved in 2022</li>
                  <li>67% reduction in CO2 emissions since 2005</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Sustainable Packaging</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 100% of plastic packaging recycled or bio-based by 2030</li>
                  <li>Progress: 21% of plastic packaging is recycled or bio-based</li>
                  <li>Launch of paper-based cosmetic tubes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Water Stewardship</h3>
                <ul className="list-disc pl-5">
                  <li>Goal: 60% reduction in water consumption per finished product by 2020 (vs. 2005)</li>
                  <li>Achievement: 51% reduction achieved</li>
                  <li>Implementation of dry factories concept</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="bg-white shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle><StylishHeading className="text-2xl">Sustainability Progress Over Time</StylishHeading></CardTitle>
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
            <Card className="bg-white shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle><StylishHeading className="text-2xl">Future Sustainability Targets</StylishHeading></CardTitle>
              </CardHeader>
              <CardContent>
                <ModernTable data={futureTargets} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social">
          <Card className="bg-white shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle><StylishHeading>Social Responsibility</StylishHeading></CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Diversity and Inclusion</h3>
                <p className="text-gray-700">Our commitment to diversity and inclusion includes:</p>
                <ul className="list-disc pl-5">
                  <li>50% of senior management positions held by women</li>
                  <li>Support for LGBTQ+ rights and initiatives</li>
                  <li>Partnerships with organizations promoting gender equality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Community Engagement</h3>
                <p className="text-gray-700">We support local communities through:</p>
                <ul className="list-disc pl-5">
                  <li>Educational programs and scholarships</li>
                  <li>Volunteering opportunities for employees</li>
                  <li>Charitable donations and fundraising</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Employee Well-being</h3>
                <p className="text-gray-700">Our employee well-being initiatives include:</p>
                <ul className="list-disc pl-5">
                  <li>Comprehensive health and wellness programs</li>
                  <li>Flexible work arrangements and remote work options</li>
                  <li>Regular training and development opportunities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Card className="bg-white shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle><StylishHeading className="text-2xl">Social Impact Over Time</StylishHeading></CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={socialImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="beneficiaries" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="governance">
          <Card className="bg-white shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle><StylishHeading>Governance Practices</StylishHeading></CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Board Composition</h3>
                <p className="text-gray-700">Our board is composed of:</p>
                <ul className="list-disc pl-5">
                  <li>12 members with diverse backgrounds</li>
                  <li>40% women representation</li>
                  <li>Independent directors ensuring unbiased decision-making</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Ethical Practices</h3>
                <p className="text-gray-700">We uphold high ethical standards by:</p>
                <ul className="list-disc pl-5">
                  <li>Implementing a strict code of ethics</li>
                  <li>Conducting regular audits and compliance checks</li>
                  <li>Promoting transparency and accountability in all operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Responsible Sourcing</h3>
                <p className="text-gray-700">Our sourcing practices include:</p>
                <ul className="list-disc pl-5">
                  <li>Prioritizing suppliers with strong sustainability practices</li>
                  <li>Ensuring fair trade and ethical labor conditions</li>
                  <li>Minimizing environmental impact through sustainable sourcing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Card className="bg-white shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle><StylishHeading className="text-2xl">Governance Timeline</StylishHeading></CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {groupDevelopment.map((item, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot />
                        {index < groupDevelopment.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <p className="text-gray-700">{item.year}: {item.event}</p>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="brsr">
          <Card className="bg-white shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle><StylishHeading>BRSR Reporting</StylishHeading></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Business Responsibility and Sustainability Report (BRSR)</h3>
                <p className="text-gray-700">The BRSR provides an overview of L'Oréal's commitment to sustainable business practices, including:</p>
                <ul className="list-disc pl-5">
                  <li>Detailed environmental impact assessments</li>
                  <li>Social responsibility and community engagement initiatives</li>
                  <li>Governance practices and ethical compliance</li>
                </ul>
                <p className="text-gray-700">This report helps stakeholders understand our progress and goals, and ensures transparency in our sustainability efforts.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LOrealESGStylishWebsite;
