import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Brain, Clock, Users, Star, TrendingUp, Target, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export function CourseRecommendations() {
  const aiRecommendations = [
    {
      title: 'Advanced TypeScript Patterns',
      description: 'Deep dive into advanced TypeScript features and design patterns',
      instructor: 'Dr. Alex Thompson',
      rating: 4.8,
      students: 2847,
      duration: '8 weeks',
      difficulty: 'Advanced',
      matchScore: 96,
      reasons: ['Builds on your JavaScript expertise', 'High demand skill in your field', 'Matches your learning pace'],
      tags: ['TypeScript', 'Design Patterns', 'Frontend'],
      aiConfidence: 'Very High'
    },
    {
      title: 'Cloud Architecture with AWS',
      description: 'Learn to design and implement scalable cloud solutions',
      instructor: 'Prof. Maria Santos',
      rating: 4.7,
      students: 3921,
      duration: '10 weeks',
      difficulty: 'Intermediate',
      matchScore: 89,
      reasons: ['Complements your backend knowledge', 'Industry trending technology', 'Career advancement potential'],
      tags: ['AWS', 'Cloud Computing', 'DevOps'],
      aiConfidence: 'High'
    },
    {
      title: 'Data Science for Developers',
      description: 'Bridge the gap between development and data science',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 1543,
      duration: '12 weeks',
      difficulty: 'Intermediate',
      matchScore: 82,
      reasons: ['Emerging field opportunity', 'Leverages your programming skills', 'High market demand'],
      tags: ['Python', 'Machine Learning', 'Statistics'],
      aiConfidence: 'Medium'
    },
    {
      title: 'Microservices Architecture',
      description: 'Design and implement distributed systems with microservices',
      instructor: 'Prof. Lisa Chen',
      rating: 4.9,
      students: 2156,
      duration: '6 weeks',
      difficulty: 'Advanced',
      matchScore: 94,
      reasons: ['Perfect for your current skill level', 'High industry demand', 'Builds on Node.js knowledge'],
      tags: ['Microservices', 'Docker', 'System Design'],
      aiConfidence: 'Very High'
    }
  ];

  const learningPattern = [
    { skill: 'Frontend', current: 85, potential: 95 },
    { skill: 'Backend', current: 70, potential: 88 },
    { skill: 'DevOps', current: 45, potential: 75 },
    { skill: 'Data Science', current: 30, potential: 65 },
    { skill: 'Mobile', current: 25, potential: 60 },
    { skill: 'Cloud', current: 40, potential: 80 }
  ];

  const trendingSkills = [
    { name: 'AI/ML Engineering', growth: 125, demand: 95 },
    { name: 'Cloud Architecture', growth: 98, demand: 88 },
    { name: 'Cybersecurity', growth: 87, demand: 92 },
    { name: 'DevOps', growth: 76, demand: 85 },
    { name: 'Data Engineering', growth: 112, demand: 78 }
  ];

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'Very High': return 'bg-green-500';
      case 'High': return 'bg-blue-500';
      case 'Medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>AI Course Recommendations</h1>
        <p className="text-muted-foreground">Personalized learning paths powered by machine learning</p>
      </div>

      {/* AI Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Recommendation Score</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">94%</div>
            <p className="text-xs text-muted-foreground">Based on your learning profile</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Optimal Learning Path</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4</div>
            <p className="text-xs text-muted-foreground">Courses in suggested sequence</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Skill Gap Analysis</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3</div>
            <p className="text-xs text-muted-foreground">Key areas for improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Development Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Development Potential</CardTitle>
            <CardDescription>Current skills vs. projected growth with recommended courses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={learningPattern}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Current" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                <Radar name="Potential" dataKey="potential" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trending Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Trending Skills in Tech</CardTitle>
            <CardDescription>Market demand and growth trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trendingSkills} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 150]} />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="growth" fill="#8884d8" name="Growth %" />
                <Bar dataKey="demand" fill="#82ca9d" name="Demand %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommended Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Recommendations
          </CardTitle>
          <CardDescription>Courses selected based on your learning history, career goals, and market trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {aiRecommendations.map((course, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3>{course.title}</h3>
                      <div className={`w-3 h-3 rounded-full ${getConfidenceColor(course.aiConfidence)}`} 
                           title={`AI Confidence: ${course.aiConfidence}`} />
                    </div>
                    <p className="text-muted-foreground mb-3">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{course.instructor}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      {course.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                      <Badge variant={course.difficulty === 'Advanced' ? 'destructive' : 'default'}>
                        {course.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl mb-1">{course.matchScore}%</div>
                    <div className="text-sm text-muted-foreground mb-3">Match Score</div>
                    <Progress value={course.matchScore} className="w-20 h-2" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm mb-2">Why this course is recommended for you:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.reasons.map((reason, reasonIndex) => (
                      <li key={reasonIndex} className="flex items-start gap-2">
                        <Zap className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    AI Confidence: <span className="font-medium">{course.aiConfidence}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Learn More</Button>
                    <Button size="sm">Enroll Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Path Suggestion */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested Learning Path</CardTitle>
          <CardDescription>Optimal sequence for maximum skill development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
              <div>
                <h4 className="text-sm">Advanced TypeScript Patterns</h4>
                <p className="text-xs text-muted-foreground">Start with your strongest skill area</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm">2</div>
              <div>
                <h4 className="text-sm">Microservices Architecture</h4>
                <p className="text-xs text-muted-foreground">Build on backend knowledge</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm">3</div>
              <div>
                <h4 className="text-sm">Cloud Architecture with AWS</h4>
                <p className="text-xs text-muted-foreground">Expand to cloud technologies</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm">4</div>
              <div>
                <h4 className="text-sm">Data Science for Developers</h4>
                <p className="text-xs text-muted-foreground">Explore new opportunities</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}