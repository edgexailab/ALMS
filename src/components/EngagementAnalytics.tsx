import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  ScatterChart,
  Scatter
} from 'recharts';
import { Activity, Clock, Users, TrendingUp, AlertTriangle, CheckCircle, Eye, MousePointer } from 'lucide-react';

export function EngagementAnalytics() {
  const dailyEngagement = [
    { date: '2024-01-01', activeUsers: 1245, avgSessionTime: 28, completionRate: 73 },
    { date: '2024-01-02', activeUsers: 1189, avgSessionTime: 32, completionRate: 76 },
    { date: '2024-01-03', activeUsers: 1356, avgSessionTime: 25, completionRate: 71 },
    { date: '2024-01-04', activeUsers: 1423, avgSessionTime: 35, completionRate: 79 },
    { date: '2024-01-05', activeUsers: 1287, avgSessionTime: 29, completionRate: 74 },
    { date: '2024-01-06', activeUsers: 1156, avgSessionTime: 31, completionRate: 77 },
    { date: '2024-01-07', activeUsers: 1398, avgSessionTime: 27, completionRate: 72 }
  ];

  const courseEngagement = [
    { course: 'JavaScript Fundamentals', engagement: 87, atRisk: 12, completed: 145 },
    { course: 'React Development', engagement: 92, atRisk: 8, completed: 203 },
    { course: 'Node.js Backend', engagement: 76, atRisk: 18, completed: 89 },
    { course: 'Database Design', engagement: 83, atRisk: 15, completed: 167 },
    { course: 'Machine Learning', engagement: 69, atRisk: 25, completed: 67 }
  ];

  const learningPatterns = [
    { hour: '6:00', weekday: 15, weekend: 8 },
    { hour: '8:00', weekday: 45, weekend: 12 },
    { hour: '10:00', weekday: 78, weekend: 35 },
    { hour: '12:00', weekday: 65, weekend: 42 },
    { hour: '14:00', weekday: 89, weekend: 56 },
    { hour: '16:00', weekday: 92, weekend: 67 },
    { hour: '18:00', weekday: 134, weekend: 89 },
    { hour: '20:00', weekday: 156, weekend: 145 },
    { hour: '22:00', weekday: 89, weekend: 167 }
  ];

  const retentionData = [
    { week: 'Week 1', cohortA: 100, cohortB: 100, cohortC: 100 },
    { week: 'Week 2', cohortA: 87, cohortB: 92, cohortC: 89 },
    { week: 'Week 4', cohortA: 73, cohortB: 81, cohortC: 76 },
    { week: 'Week 8', cohortA: 62, cohortB: 74, cohortC: 68 },
    { week: 'Week 12', cohortA: 54, cohortB: 67, cohortC: 61 }
  ];

  const deviceUsage = [
    { name: 'Desktop', value: 45, color: '#8884d8' },
    { name: 'Mobile', value: 35, color: '#82ca9d' },
    { name: 'Tablet', value: 20, color: '#ffc658' }
  ];

  const performanceMetrics = [
    { name: 'Quiz Scores', avgScore: 85, sessions: 2847 },
    { name: 'Assignment Completion', avgScore: 78, sessions: 1923 },
    { name: 'Video Engagement', avgScore: 92, sessions: 4156 },
    { name: 'Discussion Participation', avgScore: 67, sessions: 1245 }
  ];

  const atRiskStudents = [
    { name: 'Alex Johnson', lastActive: '3 days ago', completionRate: 45, riskScore: 78 },
    { name: 'Maria Garcia', lastActive: '5 days ago', completionRate: 38, riskScore: 82 },
    { name: 'David Chen', lastActive: '2 days ago', completionRate: 52, riskScore: 71 },
    { name: 'Sarah Williams', lastActive: '7 days ago', completionRate: 34, riskScore: 89 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>Engagement Analytics</h1>
        <p className="text-muted-foreground">Real-time insights into student learning behavior and platform usage</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Daily Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1,398</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg Session Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">31min</div>
            <p className="text-xs text-muted-foreground">+5min from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">77%</div>
            <p className="text-xs text-muted-foreground">+3% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">At-Risk Students</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">43</div>
            <p className="text-xs text-muted-foreground">Needs intervention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="engagement" className="space-y-4">
        <TabsList>
          <TabsTrigger value="engagement">Engagement Trends</TabsTrigger>
          <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
          <TabsTrigger value="behavior">Learning Behavior</TabsTrigger>
          <TabsTrigger value="retention">Retention Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Engagement Metrics</CardTitle>
                <CardDescription>Active users and session quality over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dailyEngagement}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <Area type="monotone" dataKey="activeUsers" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Engagement Scores</CardTitle>
                <CardDescription>Engagement levels across different courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={courseEngagement} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="course" type="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="engagement" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Device Usage Distribution</CardTitle>
              <CardDescription>How students access the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={deviceUsage}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {deviceUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {deviceUsage.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: device.color }} />
                        <span>{device.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={device.value} className="w-20" />
                        <span className="text-sm">{device.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics Overview</CardTitle>
                <CardDescription>Average scores across different assessment types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={performanceMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sessions" name="Sessions" />
                    <YAxis dataKey="avgScore" name="Average Score" domain={[0, 100]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="avgScore" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>At-Risk Students</CardTitle>
                <CardDescription>Students requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {atRiskStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="text-sm">{student.name}</h4>
                        <p className="text-xs text-muted-foreground">{student.lastActive}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs">Risk Score:</span>
                          <Badge variant={student.riskScore > 80 ? 'destructive' : 'secondary'}>
                            {student.riskScore}%
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {student.completionRate}% completed
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Patterns by Time</CardTitle>
              <CardDescription>When students are most active during the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={learningPatterns}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="weekday" stroke="#8884d8" strokeWidth={2} name="Weekdays" />
                  <Line type="monotone" dataKey="weekend" stroke="#82ca9d" strokeWidth={2} name="Weekends" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retention" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Retention Cohorts</CardTitle>
              <CardDescription>Retention rates across different student cohorts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Retention Rate']} />
                  <Line type="monotone" dataKey="cohortA" stroke="#8884d8" strokeWidth={2} name="Cohort A (Jan 2024)" />
                  <Line type="monotone" dataKey="cohortB" stroke="#82ca9d" strokeWidth={2} name="Cohort B (Feb 2024)" />
                  <Line type="monotone" dataKey="cohortC" stroke="#ffc658" strokeWidth={2} name="Cohort C (Mar 2024)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}