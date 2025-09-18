import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Play, 
  Award,
  ChevronRight,
  Heart
} from 'lucide-react';

export function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', count: 89 },
    { id: 'programming', name: 'Programming', count: 23 },
    { id: 'data-science', name: 'Data Science', count: 15 },
    { id: 'design', name: 'Design', count: 12 },
    { id: 'business', name: 'Business', count: 18 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 9 },
    { id: 'cloud', name: 'Cloud Computing', count: 12 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      description: 'Master React hooks, context, and advanced patterns for building scalable applications',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 2847,
      duration: '8 weeks',
      difficulty: 'Advanced',
      category: 'programming',
      price: 199,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      skills: ['React', 'JavaScript', 'Hooks', 'Context API'],
      isPremium: true,
      isNew: false,
      progress: 0
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to ML concepts, algorithms, and practical implementation with Python',
      instructor: 'Prof. Michael Rodriguez',
      rating: 4.7,
      students: 3921,
      duration: '12 weeks',
      difficulty: 'Intermediate',
      category: 'data-science',
      price: 249,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      isPremium: true,
      isNew: true,
      progress: 0
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      description: 'Learn design thinking, user research, and create stunning user interfaces',
      instructor: 'Lisa Thompson',
      rating: 4.9,
      students: 1543,
      duration: '6 weeks',
      difficulty: 'Beginner',
      category: 'design',
      price: 149,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
      isPremium: false,
      isNew: false,
      progress: 45
    },
    {
      id: 4,
      title: 'AWS Cloud Architecture',
      description: 'Design and implement scalable cloud solutions on Amazon Web Services',
      instructor: 'Dr. James Wilson',
      rating: 4.6,
      students: 2156,
      duration: '10 weeks',
      difficulty: 'Advanced',
      category: 'cloud',
      price: 299,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      skills: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
      isPremium: true,
      isNew: false,
      progress: 0
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      description: 'Protect systems and data with modern cybersecurity practices and tools',
      instructor: 'Maria Santos',
      rating: 4.5,
      students: 987,
      duration: '8 weeks',
      difficulty: 'Intermediate',
      category: 'cybersecurity',
      price: 199,
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
      skills: ['Network Security', 'Encryption', 'Penetration Testing', 'Risk Assessment'],
      isPremium: false,
      isNew: true,
      progress: 0
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      description: 'Build comprehensive marketing campaigns across digital channels',
      instructor: 'Alex Johnson',
      rating: 4.4,
      students: 1789,
      duration: '6 weeks',
      difficulty: 'Beginner',
      category: 'business',
      price: 129,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      skills: ['SEO', 'Social Media', 'Analytics', 'Content Marketing'],
      isPremium: false,
      isNew: false,
      progress: 0
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty.toLowerCase() === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const featuredCourses = courses.filter(course => course.rating >= 4.7).slice(0, 3);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'default';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1>Course Catalog</h1>
        <p className="text-muted-foreground">Discover courses to advance your skills and career</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses, skills, or instructors..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category.id} value={category.id}>
                {category.name} ({category.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList>
          <TabsTrigger value="browse">Browse All</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="new">New Courses</TabsTrigger>
          <TabsTrigger value="my-courses">My Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredCourses.length} courses found
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.isNew && (
                    <Badge className="absolute top-2 left-2">New</Badge>
                  )}
                  {course.isPremium && (
                    <Badge variant="secondary" className="absolute top-2 right-2">Premium</Badge>
                  )}
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <div className="text-lg">${course.price}</div>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">{course.instructor}</p>
                      <Badge variant={getDifficultyColor(course.difficulty)} className="mt-1">
                        {course.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {course.progress > 0 ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                      <Button className="flex-1">
                        Enroll Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-4">
          <div className="space-y-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2">Featured</Badge>
                        <h3 className="text-xl mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                      </div>
                      <div className="text-xl">${course.price}</div>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm">By {course.instructor}</p>
                      <div className="flex gap-2">
                        <Button variant="outline">
                          Learn More
                        </Button>
                        <Button>
                          Enroll Now
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(course => course.isNew).map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2">New</Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-lg">${course.price}</div>
                  </div>

                  <Button className="w-full">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-courses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(course => course.progress > 0).map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg">
                      <Play className="h-5 w-5 mr-2" />
                      Continue
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Resources
                    </Button>
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}