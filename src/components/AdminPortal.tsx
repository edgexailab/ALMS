import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  BarChart3, 
  DollarSign, 
  MapPin, 
  Shield, 
  FileText, 
  Calendar, 
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Building,
  Globe,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  UserCheck,
  School,
  Building2,
  Banknote,
  FileBarChart,
  Key,
  Database,
  Wifi,
  Monitor
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

type Region = 'UK' | 'USA' | 'Canada' | 'UAE';
type InstitutionType = 'school' | 'college' | 'university';

export function AdminPortal() {
  const [selectedRegion, setSelectedRegion] = useState<Region>('USA');
  const [institutionType, setInstitutionType] = useState<InstitutionType>('university');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for different regions
  const institutionData = {
    UK: {
      name: 'Oxford College of Technology',
      type: 'College',
      students: 8500,
      staff: 425,
      campuses: 3,
      compliance: ['GDPR', 'Ofsted', 'QAA', 'Data Protection Act'],
      currency: 'GBP',
      regulations: 'UK Education Standards'
    },
    USA: {
      name: 'Stanford Learning Institute',
      type: 'University',
      students: 15000,
      staff: 850,
      campuses: 2,
      compliance: ['FERPA', 'ADA', 'Title IX', 'COPPA'],
      currency: 'USD',
      regulations: 'Federal Education Standards'
    },
    Canada: {
      name: 'Toronto Institute of Excellence',
      type: 'University',
      students: 12000,
      staff: 680,
      campuses: 4,
      compliance: ['PIPEDA', 'AODA', 'Indigenous Rights', 'Provincial Standards'],
      currency: 'CAD',
      regulations: 'Canadian Education Standards'
    },
    UAE: {
      name: 'Emirates University of Innovation',
      type: 'University',
      students: 9500,
      staff: 520,
      campuses: 2,
      compliance: ['UAE Data Protection', 'MOE Standards', 'Knowledge Authority', 'Vision 2071'],
      currency: 'AED',
      regulations: 'UAE Ministry of Education'
    }
  };

  const enrollmentData = [
    { month: 'Jan', students: 8500, applications: 1200 },
    { month: 'Feb', students: 8650, applications: 1350 },
    { month: 'Mar', students: 8800, applications: 1100 },
    { month: 'Apr', students: 9200, applications: 1800 },
    { month: 'May', students: 9500, applications: 2200 },
    { month: 'Jun', students: 9800, applications: 1900 },
  ];

  const performanceData = [
    { name: 'Excellent', value: 35, fill: '#22c55e' },
    { name: 'Good', value: 40, fill: '#3b82f6' },
    { name: 'Satisfactory', value: 20, fill: '#f59e0b' },
    { name: 'Needs Improvement', value: 5, fill: '#ef4444' },
  ];

  const currentInst = institutionData[selectedRegion];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Institution Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/api/placeholder/64/64" />
                <AvatarFallback>
                  <Building className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{currentInst.name}</CardTitle>
                <CardDescription className="text-lg">
                  {currentInst.type} • {selectedRegion} • {currentInst.regulations}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50">
                <CheckCircle className="h-3 w-3 mr-1" />
                Accredited
              </Badge>
              <Badge variant="secondary">
                <Globe className="h-3 w-3 mr-1" />
                {selectedRegion}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{currentInst.students.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground text-green-600">+12% from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Faculty & Staff</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{currentInst.staff}</div>
            <p className="text-xs text-muted-foreground">Student:Staff ratio 20:1</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Campus Locations</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{currentInst.campuses}</div>
            <p className="text-xs text-muted-foreground">Across {selectedRegion}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Compliance Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-green-600">100%</div>
            <p className="text-xs text-muted-foreground">{currentInst.compliance.length} standards met</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
            <CardDescription>Student enrollment and applications over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} name="Students" />
                <Line type="monotone" dataKey="applications" stroke="#22c55e" strokeWidth={2} name="Applications" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
            <CardDescription>Overall student performance distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest administrative actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Bell className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm">New compliance report submitted to {currentInst.regulations}</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <Badge variant="outline">Compliance</Badge>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Users className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm">250 new student applications processed</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
              <Badge variant="outline">Admissions</Badge>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <DollarSign className="h-5 w-5 text-orange-600" />
              <div className="flex-1">
                <p className="text-sm">Financial aid disbursements completed for this semester</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
              <Badge variant="outline">Finance</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">User Management</h2>
          <p className="text-muted-foreground">Manage students, faculty, and staff across all campuses</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import Users
          </Button>
          <Button>
            <Users className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{currentInst.students.toLocaleString()}</div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Active</span>
                <span className="text-green-600">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Faculty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{Math.floor(currentInst.staff * 0.7)}</div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Full-time</span>
                <span className="text-blue-600">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl">{Math.floor(currentInst.staff * 0.3)}</div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm">
                <span>Administrative</span>
                <span className="text-purple-600">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Tools */}
      <Card>
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
          <CardDescription>Search and manage all users in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <Input placeholder="Search users by name, email, or ID..." className="max-w-sm" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="students">Students</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', role: 'Student', email: 'sarah.j@edu.example', status: 'Active', id: 'STU-2024-001' },
              { name: 'Dr. Michael Chen', role: 'Faculty', email: 'michael.chen@edu.example', status: 'Active', id: 'FAC-2024-015' },
              { name: 'Emma Rodriguez', role: 'Staff', email: 'emma.r@edu.example', status: 'Active', id: 'STF-2024-008' },
              { name: 'James Wilson', role: 'Student', email: 'james.w@edu.example', status: 'Inactive', id: 'STU-2024-002' },
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{user.role}</Badge>
                  <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">Regulatory Compliance</h2>
          <p className="text-muted-foreground">Monitor compliance with {selectedRegion} educational standards</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Compliance Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentInst.compliance.map((standard, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Shield className="h-4 w-4" />
                {standard}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600">Compliant</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Last audit: {new Date().toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Region-specific Compliance Details */}
      <Card>
        <CardHeader>
          <CardTitle>Region-Specific Requirements</CardTitle>
          <CardDescription>Compliance requirements for {selectedRegion}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedRegion === 'UK' && (
              <>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">GDPR Compliance</h4>
                  <p className="text-xs text-muted-foreground mt-1">Data protection and privacy regulations</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">All requirements met</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">Ofsted Standards</h4>
                  <p className="text-xs text-muted-foreground mt-1">Educational inspection framework</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Outstanding rating maintained</span>
                  </div>
                </div>
              </>
            )}

            {selectedRegion === 'USA' && (
              <>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">FERPA Compliance</h4>
                  <p className="text-xs text-muted-foreground mt-1">Family Educational Rights and Privacy Act</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Student records protected</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">ADA Compliance</h4>
                  <p className="text-xs text-muted-foreground mt-1">Americans with Disabilities Act</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Accessibility standards met</span>
                  </div>
                </div>
              </>
            )}

            {selectedRegion === 'Canada' && (
              <>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">PIPEDA Compliance</h4>
                  <p className="text-xs text-muted-foreground mt-1">Personal Information Protection and Electronic Documents Act</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Privacy requirements satisfied</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">Indigenous Rights</h4>
                  <p className="text-xs text-muted-foreground mt-1">Truth and Reconciliation commitments</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Cultural programs active</span>
                  </div>
                </div>
              </>
            )}

            {selectedRegion === 'UAE' && (
              <>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">MOE Standards</h4>
                  <p className="text-xs text-muted-foreground mt-1">Ministry of Education requirements</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">National curriculum aligned</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm">Vision 2071 Alignment</h4>
                  <p className="text-xs text-muted-foreground mt-1">UAE Centennial 2071 goals</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Innovation programs implemented</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">Analytics & Reporting</h2>
          <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button>
            <FileBarChart className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Graduation Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">94.5%</div>
            <p className="text-xs text-green-600">+2.3% from last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Student Satisfaction</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4.7/5</div>
            <p className="text-xs text-blue-600">Above regional average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Employment Rate</CardTitle>
            <Banknote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">92%</div>
            <p className="text-xs text-green-600">Within 6 months</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Research Output</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1,247</div>
            <p className="text-xs text-muted-foreground">Publications this year</p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Performance</CardTitle>
          <CardDescription>Revenue and expenditure analysis in {currentInst.currency}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { category: 'Tuition', revenue: 45000000, expenses: 0 },
              { category: 'Research Grants', revenue: 15000000, expenses: 0 },
              { category: 'Operations', revenue: 0, expenses: 25000000 },
              { category: 'Faculty', revenue: 0, expenses: 20000000 },
              { category: 'Infrastructure', revenue: 0, expenses: 8000000 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => [`${currentInst.currency} ${(value / 1000000).toFixed(1)}M`, '']} />
              <Bar dataKey="revenue" fill="#22c55e" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl">System Settings</h2>
          <p className="text-muted-foreground">Configure system-wide settings and integrations</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Advanced Settings
        </Button>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle>General Configuration</CardTitle>
          <CardDescription>Basic system settings and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">System Language</h4>
              <p className="text-xs text-muted-foreground">Default language for the system</p>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">Time Zone</h4>
              <p className="text-xs text-muted-foreground">System default time zone</p>
            </div>
            <Select defaultValue={selectedRegion === 'UK' ? 'gmt' : selectedRegion === 'USA' ? 'est' : selectedRegion === 'Canada' ? 'est' : 'gst'}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="est">EST</SelectItem>
                <SelectItem value="pst">PST</SelectItem>
                <SelectItem value="gst">GST</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">Currency</h4>
              <p className="text-xs text-muted-foreground">Default currency for financial operations</p>
            </div>
            <Select defaultValue={currentInst.currency.toLowerCase()}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="cad">CAD</SelectItem>
                <SelectItem value="aed">AED</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security & Privacy</CardTitle>
          <CardDescription>Configure security policies and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">Two-Factor Authentication</h4>
              <p className="text-xs text-muted-foreground">Require 2FA for all admin accounts</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">Session Timeout</h4>
              <p className="text-xs text-muted-foreground">Automatic logout after inactivity</p>
            </div>
            <Select defaultValue="30">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm">Data Encryption</h4>
              <p className="text-xs text-muted-foreground">Encrypt sensitive data at rest</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Integration Settings */}
      <Card>
        <CardHeader>
          <CardTitle>System Integrations</CardTitle>
          <CardDescription>Manage third-party integrations and APIs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: 'Student Information System', status: 'Connected', icon: Database },
            { name: 'Learning Management System', status: 'Connected', icon: Monitor },
            { name: 'Financial Management', status: 'Connected', icon: DollarSign },
            { name: 'Communication Platform', status: 'Disconnected', icon: Mail },
            { name: 'Video Conferencing', status: 'Connected', icon: Wifi },
          ].map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <integration.icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm">{integration.name}</p>
                  <p className="text-xs text-muted-foreground">API Integration</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={integration.status === 'Connected' ? 'default' : 'secondary'}>
                  {integration.status}
                </Badge>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Region and Institution Type Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1>Admin Portal</h1>
          <p className="text-muted-foreground">Comprehensive administration for educational institutions</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedRegion} onValueChange={(value: Region) => setSelectedRegion(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="USA">🇺🇸 United States</SelectItem>
              <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
              <SelectItem value="UAE">🇦🇪 UAE</SelectItem>
            </SelectContent>
          </Select>
          <Select value={institutionType} onValueChange={(value: InstitutionType) => setInstitutionType(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school">School</SelectItem>
              <SelectItem value="college">College</SelectItem>
              <SelectItem value="university">University</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          {renderOverview()}
        </TabsContent>

        <TabsContent value="users">
          {renderUserManagement()}
        </TabsContent>

        <TabsContent value="compliance">
          {renderCompliance()}
        </TabsContent>

        <TabsContent value="analytics">
          {renderAnalytics()}
        </TabsContent>

        <TabsContent value="settings">
          {renderSystemSettings()}
        </TabsContent>
      </Tabs>
    </div>
  );
}