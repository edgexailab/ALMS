import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { 
  Database, 
  Zap, 
  Brain, 
  Server, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Activity,
  Monitor,
  Settings
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function DataArchitecture() {
  const dataFlowMetrics = [
    { time: '00:00', events: 1245, processed: 1198, latency: 23 },
    { time: '04:00', events: 987, processed: 965, latency: 18 },
    { time: '08:00', events: 2156, processed: 2089, latency: 31 },
    { time: '12:00', events: 3421, processed: 3387, latency: 29 },
    { time: '16:00', events: 2987, processed: 2956, latency: 27 },
    { time: '20:00', events: 1876, processed: 1834, latency: 25 }
  ];

  const aiPerformance = [
    { model: 'Course Recommendation', accuracy: 94.2, latency: 45, throughput: 1250 },
    { model: 'Learning Path Optimization', accuracy: 91.7, latency: 78, throughput: 890 },
    { model: 'Engagement Prediction', accuracy: 88.9, latency: 32, throughput: 2100 },
    { model: 'Content Analysis', accuracy: 96.1, latency: 156, throughput: 450 },
    { model: 'Risk Assessment', accuracy: 92.4, latency: 67, throughput: 680 }
  ];

  const systemComponents = [
    {
      name: 'Event Collection Layer',
      description: 'Captures learning events from web, mobile, and third-party integrations',
      status: 'Healthy',
      uptime: 99.97,
      throughput: '12.5K events/sec',
      technologies: ['Kafka Connect', 'REST APIs', 'WebSockets', 'Event Schema Registry']
    },
    {
      name: 'Apache Kafka Cluster',
      description: 'Real-time event streaming and message queuing infrastructure',
      status: 'Healthy', 
      uptime: 99.99,
      throughput: '45K messages/sec',
      technologies: ['Kafka 3.4', 'Zookeeper', 'Schema Registry', 'Kafka Streams']
    },
    {
      name: 'Delta Lake Storage',
      description: 'Versioned data lake with ACID transactions for analytics workloads',
      status: 'Healthy',
      uptime: 99.95,
      throughput: '8.2TB processed/day',
      technologies: ['Delta Lake 2.4', 'Apache Spark', 'Parquet', 'S3 Storage']
    },
    {
      name: 'AI Recommendation Engine',
      description: 'Machine learning models for personalized course recommendations',
      status: 'Warning',
      uptime: 99.82,
      throughput: '2.1K predictions/sec',
      technologies: ['TensorFlow Serving', 'MLflow', 'Feature Store', 'Model Registry']
    },
    {
      name: 'Analytics API Layer',
      description: 'RESTful APIs serving processed insights to frontend applications',
      status: 'Healthy',
      uptime: 99.94,
      throughput: '850 requests/sec',
      technologies: ['FastAPI', 'Redis Cache', 'GraphQL', 'OpenAPI']
    }
  ];

  const dataTypes = [
    {
      category: 'Learning Events',
      examples: [
        'Course enrollments and completions',
        'Video play events and engagement metrics',
        'Quiz attempts and assessment scores',
        'Discussion forum interactions',
        'Assignment submissions and grades'
      ],
      volume: '2.3M events/day',
      retention: '7 years'
    },
    {
      category: 'User Behavior',
      examples: [
        'Page views and navigation patterns',
        'Click-through rates and dwell time',
        'Search queries and filter usage',
        'Mobile vs desktop usage patterns',
        'Peak usage times and session duration'
      ],
      volume: '8.7M events/day',
      retention: '2 years'
    },
    {
      category: 'System Metrics',
      examples: [
        'API response times and error rates',
        'Database query performance',
        'Resource utilization metrics',
        'Cache hit rates and miss patterns',
        'Network latency measurements'
      ],
      volume: '15.2M metrics/day',
      retention: '1 year'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return 'default';
      case 'Warning': return 'secondary';
      case 'Critical': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Healthy': return CheckCircle;
      case 'Warning': return AlertTriangle;
      case 'Critical': return AlertTriangle;
      default: return Activity;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>Data Architecture Overview</h1>
        <p className="text-muted-foreground">Real-time learning analytics pipeline: Course Events → Kafka → Delta Lake → AI Engine</p>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Events Processed</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2.3M</div>
            <p className="text-xs text-muted-foreground">Today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">System Uptime</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">99.95%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">AI Model Accuracy</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">94.2%</div>
            <p className="text-xs text-muted-foreground">Avg across models</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Data Lake Size</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">847TB</div>
            <p className="text-xs text-muted-foreground">+12TB this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="architecture" className="space-y-4">
        <TabsList>
          <TabsTrigger value="architecture">System Architecture</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="data-flow">Data Flow</TabsTrigger>
          <TabsTrigger value="ai-models">AI Models</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="space-y-4">
          {/* Data Flow Diagram */}
          <Card>
            <CardHeader>
              <CardTitle>Data Pipeline Architecture</CardTitle>
              <CardDescription>End-to-end flow from learning events to AI-powered insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 p-6">
                {/* Learning Events */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Activity className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-sm mb-1">Learning Events</h4>
                  <p className="text-xs text-muted-foreground">Web, Mobile, APIs</p>
                </div>

                <ArrowRight className="h-6 w-6 text-muted-foreground" />

                {/* Kafka */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-sm mb-1">Apache Kafka</h4>
                  <p className="text-xs text-muted-foreground">Real-time Streaming</p>
                </div>

                <ArrowRight className="h-6 w-6 text-muted-foreground" />

                {/* Delta Lake */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Database className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="text-sm mb-1">Delta Lake</h4>
                  <p className="text-xs text-muted-foreground">Data Storage</p>
                </div>

                <ArrowRight className="h-6 w-6 text-muted-foreground" />

                {/* AI Engine */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                    <Brain className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="text-sm mb-1">AI Engine</h4>
                  <p className="text-xs text-muted-foreground">ML Recommendations</p>
                </div>

                <ArrowRight className="h-6 w-6 text-muted-foreground" />

                {/* Analytics */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <BarChart3 className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="text-sm mb-1">Analytics API</h4>
                  <p className="text-xs text-muted-foreground">Insights & Reports</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Components */}
          <div className="grid gap-4">
            {systemComponents.map((component, index) => {
              const StatusIcon = getStatusIcon(component.status);
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <StatusIcon className={`h-5 w-5 ${
                          component.status === 'Healthy' ? 'text-green-500' : 
                          component.status === 'Warning' ? 'text-yellow-500' : 
                          'text-red-500'
                        }`} />
                        {component.name}
                        <Badge variant={getStatusColor(component.status)}>
                          {component.status}
                        </Badge>
                      </CardTitle>
                      <div className="text-right text-sm">
                        <div>{component.uptime}% uptime</div>
                        <div className="text-muted-foreground">{component.throughput}</div>
                      </div>
                    </div>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {component.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Data Processing</CardTitle>
                <CardDescription>Events processed and system latency over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataFlowMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="events" stroke="#8884d8" strokeWidth={2} name="Events Received" />
                    <Line type="monotone" dataKey="processed" stroke="#82ca9d" strokeWidth={2} name="Events Processed" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Latency</CardTitle>
                <CardDescription>End-to-end processing latency in milliseconds</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dataFlowMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}ms`, 'Latency']} />
                    <Area type="monotone" dataKey="latency" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <Monitor className="h-4 w-4" />
            <AlertTitle>Performance Status</AlertTitle>
            <AlertDescription>
              All systems operating within normal parameters. Average processing latency is 26ms, 
              well below the 100ms SLA target. Event processing rate is currently at 89% capacity.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="data-flow" className="space-y-4">
          <div className="grid gap-6">
            {dataTypes.map((dataType, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{dataType.category}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Volume: {dataType.volume}</span>
                    <span>Retention: {dataType.retention}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dataType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai-models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Model Performance Dashboard</CardTitle>
              <CardDescription>Machine learning models powering personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiPerformance.map((model, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm">{model.model}</h4>
                      <Badge variant={model.accuracy > 90 ? 'default' : 'secondary'}>
                        {model.accuracy}% Accuracy
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground mb-1">Accuracy</div>
                        <div className="flex items-center gap-2">
                          <Progress value={model.accuracy} className="flex-1" />
                          <span>{model.accuracy}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground mb-1">Latency</div>
                        <div>{model.latency}ms avg</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground mb-1">Throughput</div>
                        <div>{model.throughput.toLocaleString()} predictions/min</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Training Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Data validation and preprocessing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Feature engineering and selection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Model training and hyperparameter tuning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Model evaluation and testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Production deployment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Store</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Student Features:</span>
                    <span className="ml-2">1,247 active features</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Course Features:</span>
                    <span className="ml-2">892 active features</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Behavioral Features:</span>
                    <span className="ml-2">2,156 active features</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Update Frequency:</span>
                    <span className="ml-2">Every 15 minutes</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  Manage Features
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}