import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Clock, 
  Globe, 
  Lock, 
  Eye,
  UserCheck,
  Database,
  Download,
  Trash2
} from 'lucide-react';

export function RegulatoryCompliance() {
  const complianceFrameworks = [
    {
      name: 'COPPA',
      region: 'United States',
      description: 'Children\'s Online Privacy Protection Act',
      compliance: 94,
      status: 'Compliant',
      lastAudit: '2024-01-15',
      requirements: [
        'Parental consent for under-13 users',
        'Limited data collection from minors',
        'Safe Harbor provisions implementation',
        'Regular privacy policy updates'
      ],
      risks: ['Medium'],
      actions: ['Update privacy notices', 'Implement age verification']
    },
    {
      name: 'FERPA',
      region: 'United States',
      description: 'Family Educational Rights and Privacy Act',
      compliance: 87,
      status: 'Needs Attention',
      lastAudit: '2024-01-10',
      requirements: [
        'Educational record access controls',
        'Directory information policies',
        'Consent for record disclosure',
        'Annual notification requirements'
      ],
      risks: ['High'],
      actions: ['Strengthen access controls', 'Update consent mechanisms', 'Audit educational records']
    },
    {
      name: 'GDPR',
      region: 'European Union',
      description: 'General Data Protection Regulation',
      compliance: 91,
      status: 'Compliant',
      lastAudit: '2024-01-20',
      requirements: [
        'Data subject rights implementation',
        'Lawful basis for processing',
        'Data protection impact assessments',
        'Breach notification procedures'
      ],
      risks: ['Low'],
      actions: ['Regular DPIA reviews', 'Staff training updates']
    },
    {
      name: 'UAE Education Data Privacy',
      region: 'United Arab Emirates',
      description: 'UAE Federal Data Protection Law for Education',
      compliance: 76,
      status: 'In Progress',
      lastAudit: '2024-01-05',
      requirements: [
        'Local data residency requirements',
        'Student data protection protocols',
        'Cross-border transfer restrictions',
        'Educational authority reporting'
      ],
      risks: ['High'],
      actions: ['Implement data localization', 'Update transfer agreements', 'Enhance reporting systems']
    }
  ];

  const dataProcessingActivities = [
    {
      activity: 'Student Registration',
      dataTypes: ['Personal Info', 'Educational Records'],
      purpose: 'Account Creation & Course Access',
      legalBasis: 'Contract',
      retention: '7 years post-graduation',
      processors: ['Internal Systems', 'Authentication Service']
    },
    {
      activity: 'Learning Analytics',
      dataTypes: ['Usage Data', 'Performance Metrics'],
      purpose: 'Educational Improvement',
      legalBasis: 'Legitimate Interest',
      retention: '3 years',
      processors: ['Analytics Platform', 'AI Recommendation Engine']
    },
    {
      activity: 'Communication',
      dataTypes: ['Contact Info', 'Communication History'],
      purpose: 'Student Support',
      legalBasis: 'Contract',
      retention: '2 years post-completion',
      processors: ['Email Service', 'Support Platform']
    }
  ];

  const privacyRights = [
    {
      right: 'Right to Access',
      requests: 23,
      avgResponseTime: '2.3 days',
      status: 'Compliant'
    },
    {
      right: 'Right to Rectification',
      requests: 8,
      avgResponseTime: '1.8 days',
      status: 'Compliant'
    },
    {
      right: 'Right to Erasure',
      requests: 5,
      avgResponseTime: '4.2 days',
      status: 'Needs Improvement'
    },
    {
      right: 'Right to Portability',
      requests: 12,
      avgResponseTime: '3.1 days',
      status: 'Compliant'
    }
  ];

  const securityMeasures = [
    {
      category: 'Technical Safeguards',
      measures: [
        'End-to-end encryption',
        'Access control systems',
        'Regular security audits',
        'Automated monitoring'
      ],
      implementation: 95
    },
    {
      category: 'Administrative Safeguards',
      measures: [
        'Staff training programs',
        'Privacy policies',
        'Incident response procedures',
        'Data governance framework'
      ],
      implementation: 88
    },
    {
      category: 'Physical Safeguards',
      measures: [
        'Secure data centers',
        'Access logging',
        'Environmental controls',
        'Equipment disposal protocols'
      ],
      implementation: 92
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'default';
      case 'Needs Attention': return 'secondary';
      case 'In Progress': return 'secondary';
      case 'Non-Compliant': return 'destructive';
      default: return 'secondary';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>Regulatory Compliance Dashboard</h1>
        <p className="text-muted-foreground">Educational data privacy and compliance monitoring across multiple jurisdictions</p>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Overall Compliance</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">87%</div>
            <p className="text-xs text-muted-foreground">Across all frameworks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Frameworks</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4</div>
            <p className="text-xs text-muted-foreground">COPPA, FERPA, GDPR, UAE</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Data Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">48</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2.8d</div>
            <p className="text-xs text-muted-foreground">Within SLA</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="frameworks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="frameworks">Compliance Frameworks</TabsTrigger>
          <TabsTrigger value="processing">Data Processing</TabsTrigger>
          <TabsTrigger value="rights">Privacy Rights</TabsTrigger>
          <TabsTrigger value="security">Security Measures</TabsTrigger>
        </TabsList>

        <TabsContent value="frameworks" className="space-y-4">
          <div className="grid gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {framework.name}
                        <Badge variant={getStatusColor(framework.status)}>
                          {framework.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        {framework.description} • {framework.region}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl">{framework.compliance}%</div>
                      <div className="text-xs text-muted-foreground">Compliance Score</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm mb-3">Key Requirements</h4>
                      <ul className="space-y-2">
                        {framework.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm mb-3">Risk Assessment</h4>
                      <div className="space-y-2">
                        {framework.risks.map((risk, riskIndex) => (
                          <Badge key={riskIndex} variant={getRiskColor(risk)}>
                            {risk} Risk
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4">
                        <div className="text-xs text-muted-foreground mb-1">
                          Last Audit: {framework.lastAudit}
                        </div>
                        <Progress value={framework.compliance} className="h-2" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Required Actions</h4>
                      <ul className="space-y-2">
                        {framework.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="mt-4">
                        View Action Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="processing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Processing Activities</CardTitle>
              <CardDescription>Record of processing activities as required by GDPR Article 30</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataProcessingActivities.map((activity, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm mb-2">{activity.activity}</h4>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Data Types:</div>
                          <div className="flex flex-wrap gap-1">
                            {activity.dataTypes.map((type, typeIndex) => (
                              <Badge key={typeIndex} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Purpose:</span>
                            <div>{activity.purpose}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Legal Basis:</span>
                            <div>{activity.legalBasis}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Retention:</span>
                            <div>{activity.retention}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Processors:</div>
                        <div className="space-y-1">
                          {activity.processors.map((processor, procIndex) => (
                            <div key={procIndex} className="text-sm">{processor}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Subject Rights Management</CardTitle>
              <CardDescription>Tracking and response times for privacy rights requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {privacyRights.map((right, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm">{right.right}</h4>
                      <Badge variant={right.status === 'Compliant' ? 'default' : 'secondary'}>
                        {right.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Requests:</span>
                        <span className="ml-2">{right.requests}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Avg Response:</span>
                        <span className="ml-2">{right.avgResponseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Data Export Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-2">12</div>
                <p className="text-sm text-muted-foreground">Processed this month</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Process New Request
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Data Deletion Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-2">5</div>
                <p className="text-sm text-muted-foreground">Processed this month</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Process New Request
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4" />
                  Consent Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Active consent rate</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Manage Consents
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <div className="grid gap-4">
            {securityMeasures.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.category}
                    <Badge variant="default">{category.implementation}% Implemented</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2">
                        {category.measures.map((measure, measureIndex) => (
                          <li key={measureIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Implementation Progress</div>
                      <Progress value={category.implementation} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Security Compliance Status</AlertTitle>
            <AlertDescription>
              All critical security measures are in place and regularly audited. Next security assessment scheduled for March 2024.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}