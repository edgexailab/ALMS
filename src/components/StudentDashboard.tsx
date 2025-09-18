import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CalendarDays, Clock, BookOpen, Award, TrendingUp, Target, Users, MessageSquare, Bell, Star, GraduationCap, User, Heart, Shield, Gamepad2, DollarSign, Briefcase, FileText, FlaskConical, BarChart3, Globe } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadialBarChart, RadialBar } from 'recharts';

type EducationLevel = 'k12' | 'undergraduate' | 'university';

export function StudentDashboard() {
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('undergraduate');
  const [selectedStudent, setSelectedStudent] = useState('sarah-student');

  // Common data structures
  const progressData = [
    { week: 'Week 1', hours: 8, completion: 95, assignments: 3 },
    { week: 'Week 2', hours: 12, completion: 87, assignments: 5 },
    { week: 'Week 3', hours: 15, completion: 92, assignments: 4 },
    { week: 'Week 4', hours: 10, completion: 78, assignments: 6 },
    { week: 'Week 5', hours: 18, completion: 96, assignments: 2 },
  ];

  // K-12 specific data
  const k12Data = {
    subjects: [
      { name: 'Mathematics', grade: 'A-', progress: 88, teacher: 'Ms. Johnson', nextAssignment: 'Algebra Quiz', dueDate: '2024-01-15' },
      { name: 'English Language Arts', grade: 'A', progress: 92, teacher: 'Mr. Davis', nextAssignment: 'Essay Draft', dueDate: '2024-01-18' },
      { name: 'Science', grade: 'B+', progress: 85, teacher: 'Dr. Martinez', nextAssignment: 'Lab Report', dueDate: '2024-01-20' },
      { name: 'Social Studies', grade: 'A', progress: 90, teacher: 'Mrs. Wilson', nextAssignment: 'History Project', dueDate: '2024-01-22' },
    ],
    behavior: { points: 95, streakDays: 12, recentIncidents: 0 },
    attendance: { present: 18, absent: 1, late: 0, percentage: 95 },
    readingLevel: 'Grade 8.5',
    parentMessages: 3,
    rewards: ['Math Star', 'Perfect Attendance Week', 'Helping Hand']
  };

  // Undergraduate data
  const undergraduateData = {
    courses: [
      { 
        code: 'CS301', 
        name: 'Advanced React Patterns', 
        instructor: 'Dr. Emily Chen', 
        credits: 3,
        progress: 75, 
        grade: 'A-',
        nextDeadline: '2024-01-15', 
        status: 'In Progress', 
        difficulty: 'Advanced' 
      },
      { 
        code: 'ML201', 
        name: 'Machine Learning Basics', 
        instructor: 'Prof. Michael Rodriguez', 
        credits: 4,
        progress: 45, 
        grade: 'B+',
        nextDeadline: '2024-01-20', 
        status: 'In Progress', 
        difficulty: 'Intermediate' 
      },
      { 
        code: 'DSA401', 
        name: 'Data Structures & Algorithms', 
        instructor: 'Dr. Sarah Kim', 
        credits: 3,
        progress: 90, 
        grade: 'A',
        nextDeadline: '2024-01-12', 
        status: 'Nearly Complete', 
        difficulty: 'Advanced' 
      }
    ],
    gpa: { current: 3.67, semester: 3.8, cumulative: 3.65 },
    credits: { completed: 87, remaining: 33, enrolled: 10 },
    degreeProgress: 72,
    studyGroups: 4,
    internships: ['Software Engineering Intern', 'Research Assistant'],
    financialAid: { scholarship: 15000, loans: 8500, workStudy: 2000 }
  };

  // University/Graduate data
  const universityData = {
    program: 'PhD Computer Science',
    advisor: 'Dr. Alexandra Thompson',
    researchArea: 'Artificial Intelligence & Machine Learning',
    dissertation: {
      title: 'Advanced Neural Network Architectures for Natural Language Processing',
      progress: 45,
      chapters: { completed: 2, total: 6 },
      defense: '2025-05-15'
    },
    publications: [
      { title: 'Deep Learning Approaches to NLP', status: 'Published', journal: 'AI Research Quarterly' },
      { title: 'Transformer Models Analysis', status: 'Under Review', journal: 'Machine Learning Today' },
      { title: 'Future of AI Ethics', status: 'In Progress', journal: 'Tech Ethics Review' }
    ],
    conferences: [
      { name: 'International AI Conference 2024', role: 'Presenter', date: '2024-03-15' },
      { name: 'Machine Learning Summit', role: 'Attendee', date: '2024-04-20' }
    ],
    grants: { applied: 3, awarded: 1, total: 45000 },
    teaching: { courses: 2, hours: 10, evaluations: 4.8 }
  };

  const getWelcomeMessage = () => {
    switch (educationLevel) {
      case 'k12':
        return { name: 'Alex', message: "Let's make today amazing!" };
      case 'undergraduate':
        return { name: 'Sarah', message: "Ready to tackle your goals?" };
      case 'university':
        return { name: 'Dr. Johnson', message: "Your research journey continues!" };
      default:
        return { name: 'Student', message: "Welcome to your dashboard!" };
    }
  };

  const renderK12Dashboard = () => (
    <div className="space-y-6">
      {/* K-12 Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Overall Grade</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">A-</div>
            <p className="text-xs text-muted-foreground text-green-600">+0.3 from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Attendance</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{k12Data.attendance.percentage}%</div>
            <p className="text-xs text-muted-foreground">{k12Data.attendance.present} days present</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Behavior Points</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{k12Data.behavior.points}</div>
            <p className="text-xs text-muted-foreground">{k12Data.behavior.streakDays} day streak!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Reading Level</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{k12Data.readingLevel}</div>
            <p className="text-xs text-muted-foreground">Above grade level!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Subject Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
            <CardDescription>Your performance across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {k12Data.subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{subject.name}</span>
                    <Badge variant="outline">{subject.grade}</Badge>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{subject.teacher}</span>
                    <span>{subject.progress}% complete</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>Don't forget these important dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {k12Data.subjects.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm">{subject.nextAssignment}</p>
                    <p className="text-xs text-muted-foreground">{subject.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Due</p>
                    <p className="text-sm">{subject.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Parent Communication and Rewards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Parent Messages
            </CardTitle>
            <CardDescription>Messages from your teachers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="text-sm">Great work on your math assignment!</p>
                <p className="text-xs text-muted-foreground">Ms. Johnson • 2 hours ago</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm">Please review the science lab safety rules</p>
                <p className="text-xs text-muted-foreground">Dr. Martinez • 1 day ago</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                View All Messages ({k12Data.parentMessages})
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Rewards & Achievements
            </CardTitle>
            <CardDescription>Your awesome accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {k12Data.rewards.map((reward, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{reward}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              <Gamepad2 className="h-4 w-4 mr-2" />
              View Reward Store
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUndergraduateDashboard = () => (
    <div className="space-y-6">
      {/* Undergraduate Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Current GPA</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{undergraduateData.gpa.current}</div>
            <p className="text-xs text-muted-foreground">+0.15 from last semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Credits Completed</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{undergraduateData.credits.completed}</div>
            <p className="text-xs text-muted-foreground">{undergraduateData.credits.remaining} remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Degree Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{undergraduateData.degreeProgress}%</div>
            <p className="text-xs text-muted-foreground">On track for graduation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Study Groups</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{undergraduateData.studyGroups}</div>
            <p className="text-xs text-muted-foreground">Active collaborations</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="career">Career</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Courses</CardTitle>
              <CardDescription>Your active course enrollments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {undergraduateData.courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{course.code}</Badge>
                        <h4>{course.name}</h4>
                        <Badge variant={course.grade.startsWith('A') ? 'default' : course.grade.startsWith('B') ? 'secondary' : 'destructive'}>
                          {course.grade}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{course.instructor} • {course.credits} credits</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          <span>Due {course.nextDeadline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
                <CardDescription>Your academic performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Current Semester</span>
                    <span className="text-2xl">{undergraduateData.gpa.semester}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cumulative</span>
                    <span className="text-2xl">{undergraduateData.gpa.cumulative}</span>
                  </div>
                  <div className="pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Degree Completion</span>
                      <span>{undergraduateData.degreeProgress}%</span>
                    </div>
                    <Progress value={undergraduateData.degreeProgress} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Credit Distribution</CardTitle>
                <CardDescription>Your academic credit breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Completed', value: undergraduateData.credits.completed, fill: '#22c55e' },
                        { name: 'Enrolled', value: undergraduateData.credits.enrolled, fill: '#3b82f6' },
                        { name: 'Remaining', value: undergraduateData.credits.remaining, fill: '#e5e7eb' }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="career" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Career Opportunities
                </CardTitle>
                <CardDescription>Internships and job opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {undergraduateData.internships.map((internship, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <p className="text-sm">{internship}</p>
                      <p className="text-xs text-muted-foreground">Application in progress</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Browse More Opportunities
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Study Groups & Networking
                </CardTitle>
                <CardDescription>Connect with peers and mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm">CS301 Study Group</p>
                    <p className="text-xs text-muted-foreground">5 members • Next: Wed 3PM</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm">ML Research Group</p>
                    <p className="text-xs text-muted-foreground">8 members • Next: Fri 2PM</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Join Study Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Financial Aid Overview
              </CardTitle>
              <CardDescription>Your financial assistance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl text-green-600">${undergraduateData.financialAid.scholarship.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Scholarships</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl text-blue-600">${undergraduateData.financialAid.workStudy.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Work Study</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl text-orange-600">${undergraduateData.financialAid.loans.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Student Loans</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <DollarSign className="h-4 w-4 mr-2" />
                Manage Financial Aid
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderUniversityDashboard = () => (
    <div className="space-y-6">
      {/* University Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Research Progress</CardTitle>
            <FlaskConical className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{universityData.dissertation.progress}%</div>
            <p className="text-xs text-muted-foreground">Dissertation completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Publications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{universityData.publications.filter(p => p.status === 'Published').length}</div>
            <p className="text-xs text-muted-foreground">{universityData.publications.filter(p => p.status === 'Under Review').length} under review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Teaching Rating</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{universityData.teaching.evaluations}</div>
            <p className="text-xs text-muted-foreground">Student evaluations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Grant Funding</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">${universityData.grants.total.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Active grants</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="research" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="teaching">Teaching</TabsTrigger>
          <TabsTrigger value="conferences">Conferences</TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="space-y-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Dissertation Progress</CardTitle>
                <CardDescription>{universityData.dissertation.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Progress</span>
                    <span className="text-lg">{universityData.dissertation.progress}%</span>
                  </div>
                  <Progress value={universityData.dissertation.progress} className="h-3" />
                  
                  <div className="flex justify-between items-center">
                    <span>Chapters Completed</span>
                    <span>{universityData.dissertation.chapters.completed}/{universityData.dissertation.chapters.total}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Defense Scheduled</span>
                    <span>{universityData.dissertation.defense}</span>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> {universityData.advisor}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Research Area:</strong> {universityData.researchArea}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Milestones</CardTitle>
                <CardDescription>Key achievements and upcoming goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm">Literature Review Completed</p>
                      <p className="text-xs text-muted-foreground">Chapter 1 & 2 approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm">Data Collection Phase</p>
                      <p className="text-xs text-muted-foreground">In progress - 70% complete</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm">Statistical Analysis</p>
                      <p className="text-xs text-muted-foreground">Scheduled for next month</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm">Final Draft Review</p>
                      <p className="text-xs text-muted-foreground">Q2 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Publications Portfolio</CardTitle>
              <CardDescription>Your research contributions and submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {universityData.publications.map((pub, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm">{pub.title}</h4>
                      <Badge variant={
                        pub.status === 'Published' ? 'default' : 
                        pub.status === 'Under Review' ? 'secondary' : 
                        'outline'
                      }>
                        {pub.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{pub.journal}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Submit New Publication
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teaching" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Load</CardTitle>
                <CardDescription>Current semester responsibilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Courses Teaching</span>
                    <span className="text-2xl">{universityData.teaching.courses}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekly Hours</span>
                    <span className="text-2xl">{universityData.teaching.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Student Evaluation</span>
                    <span className="text-2xl">{universityData.teaching.evaluations}/5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Teaching Performance</CardTitle>
                <CardDescription>Student feedback and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <RadialBarChart data={[{ name: 'Rating', value: universityData.teaching.evaluations * 20 }]}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#22c55e" />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="text-center mt-4">
                  <p className="text-2xl">{universityData.teaching.evaluations}/5.0</p>
                  <p className="text-sm text-muted-foreground">Average Student Rating</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Conference Participation
              </CardTitle>
              <CardDescription>Academic conferences and presentations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {universityData.conferences.map((conf, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm">{conf.name}</h4>
                      <Badge variant={conf.role === 'Presenter' ? 'default' : 'secondary'}>
                        {conf.role}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{conf.date}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Submit Conference Proposal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const welcome = getWelcomeMessage();

  return (
    <div className="space-y-6">
      {/* Header with Education Level Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h1>Welcome back, {welcome.name}!</h1>
          <p className="text-muted-foreground">{welcome.message}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Select value={educationLevel} onValueChange={(value: EducationLevel) => setEducationLevel(value)}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="k12">K-12 School</SelectItem>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="university">University/Graduate</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Render appropriate dashboard based on education level */}
      {educationLevel === 'k12' && renderK12Dashboard()}
      {educationLevel === 'undergraduate' && renderUndergraduateDashboard()}
      {educationLevel === 'university' && renderUniversityDashboard()}

      {/* Common Learning Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Learning Activity</CardTitle>
          <CardDescription>Your engagement and completion trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#8884d8" strokeWidth={2} name="Study Hours" />
              <Line type="monotone" dataKey="completion" stroke="#82ca9d" strokeWidth={2} name="Completion %" />
              {educationLevel === 'k12' && (
                <Line type="monotone" dataKey="assignments" stroke="#ffc658" strokeWidth={2} name="Assignments" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}