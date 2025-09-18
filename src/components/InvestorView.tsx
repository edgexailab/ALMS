import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  PieChart as PieChartIcon,
  Target,
  Zap,
  Building,
  Briefcase
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export function InvestorView() {
  const marketData = [
    { year: '2020', market: 89.5, growth: 8.2 },
    { year: '2021', market: 105.8, growth: 18.2 },
    { year: '2022', market: 123.4, growth: 16.6 },
    { year: '2023', market: 142.1, growth: 15.1 },
    { year: '2024E', market: 165.3, growth: 16.3 },
    { year: '2025E', market: 194.7, growth: 17.8 },
    { year: '2026E', market: 230.9, growth: 18.6 }
  ];

  const revenueProjections = [
    { quarter: 'Q1 2024', oss: 2.3, saas: 8.7, total: 11.0 },
    { quarter: 'Q2 2024', oss: 2.8, saas: 10.2, total: 13.0 },
    { quarter: 'Q3 2024', oss: 3.1, saas: 12.1, total: 15.2 },
    { quarter: 'Q4 2024', oss: 3.5, saas: 14.8, total: 18.3 },
    { quarter: 'Q1 2025', oss: 4.2, saas: 17.9, total: 22.1 },
    { quarter: 'Q2 2025', oss: 4.8, saas: 21.7, total: 26.5 }
  ];

  const marketSegments = [
    { name: 'Higher Education', value: 35, growth: 12.4 },
    { name: 'K-12 Education', value: 28, growth: 15.8 },
    { name: 'Corporate Training', value: 22, growth: 18.3 },
    { name: 'Professional Development', value: 15, growth: 21.7 }
  ];

  const competitiveAnalysis = [
    {
      company: 'EduCore (Our Platform)',
      model: 'Hybrid OSS/SaaS',
      marketShare: 3.2,
      revenue: 45.2,
      growth: 89.3,
      valuation: 'TBD',
      strengths: ['Regulatory compliance', 'AI recommendations', 'Open source flexibility'],
      risks: ['Market penetration', 'Brand recognition']
    },
    {
      company: 'Blackboard',
      model: 'SaaS',
      marketShare: 18.5,
      revenue: 725.8,
      growth: 8.2,
      valuation: '$3.1B',
      strengths: ['Market leader', 'Enterprise contracts', 'Brand recognition'],
      risks: ['Legacy platform', 'Competition']
    },
    {
      company: 'Canvas by Instructure',
      model: 'SaaS',
      marketShare: 31.2,
      revenue: 347.1,
      growth: 15.7,
      valuation: '$4.8B',
      strengths: ['User experience', 'Modern platform', 'Growth rate'],
      risks: ['Pricing pressure', 'Feature complexity']
    },
    {
      company: 'Moodle',
      model: 'Open Source',
      marketShare: 22.8,
      revenue: 89.3,
      growth: 5.1,
      valuation: 'N/A',
      strengths: ['Open source community', 'Customization', 'Low cost'],
      risks: ['Support model', 'Commercial competition']
    }
  ];

  const businessMetrics = [
    { metric: 'Customer Acquisition Cost (CAC)', value: '$1,247', trend: 'down', change: '-12%' },
    { metric: 'Lifetime Value (LTV)', value: '$8,934', trend: 'up', change: '+23%' },
    { metric: 'LTV/CAC Ratio', value: '7.2x', trend: 'up', change: '+18%' },
    { metric: 'Monthly Recurring Revenue (MRR)', value: '$127K', trend: 'up', change: '+34%' },
    { metric: 'Churn Rate', value: '3.2%', trend: 'down', change: '-8%' },
    { metric: 'Net Revenue Retention', value: '118%', trend: 'up', change: '+5%' }
  ];

  const riskFactors = [
    {
      category: 'Market Risk',
      level: 'Medium',
      factors: [
        'Established competitors with significant market share',
        'Economic downturns affecting education budgets',
        'Shift in learning modalities post-pandemic'
      ]
    },
    {
      category: 'Technology Risk',
      level: 'Low',
      levelColor: 'default',
      factors: [
        'Rapid changes in educational technology',
        'AI/ML model accuracy and bias concerns',
        'Data privacy and security requirements'
      ]
    },
    {
      category: 'Regulatory Risk',
      level: 'High',
      factors: [
        'Evolving data privacy regulations (GDPR, COPPA, FERPA)',
        'Educational standards and compliance requirements',
        'Cross-border data transfer restrictions'
      ]
    },
    {
      category: 'Business Model Risk',
      level: 'Medium',
      factors: [
        'OSS vs SaaS revenue model balance',
        'Customer concentration in education sector',
        'Scaling challenges and operational complexity'
      ]
    }
  ];

  const getGrowthTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : trend === 'down' ? TrendingUp : BarChart3;
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>Investor Risk & Market Analysis</h1>
        <p className="text-muted-foreground">EdTech market opportunity and business model assessment</p>
      </div>

      {/* Key Investment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">TAM (2024)</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$165.3B</div>
            <p className="text-xs text-muted-foreground">+16.3% YoY growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Projected ARR</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$22.1M</div>
            <p className="text-xs text-muted-foreground">By Q1 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Market Share</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3.2%</div>
            <p className="text-xs text-muted-foreground">Addressable market</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">89%</div>
            <p className="text-xs text-muted-foreground">YoY revenue growth</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="market" className="space-y-4">
        <TabsList>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
          <TabsTrigger value="business">Business Model</TabsTrigger>
          <TabsTrigger value="competitive">Competitive Landscape</TabsTrigger>
          <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="market" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>EdTech Market Size & Growth</CardTitle>
                <CardDescription>Total Addressable Market (TAM) projections</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'market' ? `$${value}B` : `${value}%`,
                      name === 'market' ? 'Market Size' : 'Growth Rate'
                    ]} />
                    <Area type="monotone" dataKey="market" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="growth" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Segments</CardTitle>
                <CardDescription>Breakdown by education sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketSegments.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{segment.name}</span>
                          <span>{segment.value}%</span>
                        </div>
                        <Progress value={segment.value} className="h-2" />
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-sm text-green-600">+{segment.growth}%</div>
                        <div className="text-xs text-muted-foreground">Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <TrendingUp className="h-4 w-4" />
            <AlertTitle>Market Opportunity</AlertTitle>
            <AlertDescription>
              The global EdTech market is experiencing accelerated growth, driven by digital transformation in education, 
              AI integration, and increasing demand for personalized learning experiences. Our hybrid OSS/SaaS model 
              positions us to capture both cost-conscious institutions and premium enterprise clients.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Model Comparison</CardTitle>
                <CardDescription>OSS vs SaaS revenue projections</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueProjections}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}M`, '']} />
                    <Area type="monotone" dataKey="oss" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    <Area type="monotone" dataKey="saas" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Business Metrics</CardTitle>
                <CardDescription>Current performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessMetrics.map((metric, index) => {
                    const IconComponent = getGrowthTrendIcon(metric.trend);
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm">{metric.metric}</h4>
                          <div className="text-2xl">{metric.value}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <IconComponent className={`h-4 w-4 ${
                            metric.trend === 'up' ? 'text-green-500' : 
                            metric.trend === 'down' ? 'text-red-500' : 
                            'text-muted-foreground'
                          }`} />
                          <span className={`text-sm ${
                            metric.trend === 'up' ? 'text-green-500' : 
                            metric.trend === 'down' ? 'text-red-500' : 
                            'text-muted-foreground'
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>OSS Strategy Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Lower barrier to adoption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Community-driven development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Institutional trust and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Customization capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SaaS Strategy Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Predictable recurring revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Faster time-to-value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Managed infrastructure and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Premium AI features and analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape Analysis</CardTitle>
              <CardDescription>Key players in the LMS market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {competitiveAnalysis.map((company, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div>
                        <h4 className="text-sm mb-2">{company.company}</h4>
                        <Badge variant={company.company.includes('EduCore') ? 'default' : 'secondary'}>
                          {company.model}
                        </Badge>
                        <div className="mt-2 space-y-1 text-sm">
                          <div>Market Share: {company.marketShare}%</div>
                          <div>Revenue: ${company.revenue}M</div>
                          <div>Growth: {company.growth}%</div>
                          <div>Valuation: {company.valuation}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-2">STRENGTHS</h5>
                        <ul className="space-y-1">
                          {company.strengths.map((strength, strengthIndex) => (
                            <li key={strengthIndex} className="text-xs flex items-start gap-1">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xs text-muted-foreground mb-2">RISKS</h5>
                        <ul className="space-y-1">
                          {company.risks.map((risk, riskIndex) => (
                            <li key={riskIndex} className="text-xs flex items-start gap-1">
                              <AlertTriangle className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="text-center">
                          <div className="text-lg">{company.marketShare}%</div>
                          <div className="text-xs text-muted-foreground">Market Share</div>
                          <Progress value={company.marketShare} className="mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="space-y-4">
          <div className="grid gap-4">
            {riskFactors.map((risk, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {risk.category}
                    <Badge variant={getRiskColor(risk.level)}>
                      {risk.level} Risk
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {risk.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert>
            <Briefcase className="h-4 w-4" />
            <AlertTitle>Investment Recommendation</AlertTitle>
            <AlertDescription>
              Despite inherent risks in the EdTech sector, our hybrid OSS/SaaS model, strong regulatory compliance focus, 
              and AI-driven differentiation position us well for capturing market share. The growing demand for personalized 
              learning and data privacy compliance creates significant opportunities for our platform.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Mitigation Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm mb-3">Market Risks</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Diversify across multiple education sectors</li>
                    <li>• Build strong channel partnerships</li>
                    <li>• Develop freemium adoption funnel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-3">Technology Risks</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Continuous AI model training and validation</li>
                    <li>• Privacy-by-design architecture</li>
                    <li>• Regular security audits and certifications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-3">Regulatory Risks</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Proactive compliance monitoring</li>
                    <li>• Legal advisory partnerships</li>
                    <li>• Automated compliance reporting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-3">Business Model Risks</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Balanced OSS/SaaS revenue mix</li>
                    <li>• Customer diversification strategy</li>
                    <li>• Scalable cloud infrastructure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}