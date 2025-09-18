import { 
  BookOpen, 
  BarChart3, 
  Brain, 
  Shield, 
  TrendingUp, 
  Library, 
  Network,
  GraduationCap,
  Users,
  Settings,
  UserCog
} from 'lucide-react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from './ui/sidebar';

type ViewType = 'dashboard' | 'recommendations' | 'analytics' | 'compliance' | 'investor' | 'catalog' | 'architecture' | 'admin';

interface MainNavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  isMobile?: boolean;
}

export function MainNavigation({ currentView, onViewChange, isMobile = false }: MainNavigationProps) {
  const learningItems = [
    {
      title: "Student Dashboard",
      icon: GraduationCap,
      view: 'dashboard' as ViewType,
      description: "Progress tracking and overview"
    },
    {
      title: "Course Catalog",
      icon: Library,
      view: 'catalog' as ViewType,
      description: "Browse available courses"
    },
    {
      title: "AI Recommendations",
      icon: Brain,
      view: 'recommendations' as ViewType,
      description: "Personalized course suggestions"
    }
  ];

  const analyticsItems = [
    {
      title: "Engagement Analytics",
      icon: BarChart3,
      view: 'analytics' as ViewType,
      description: "Learning behavior insights"
    },
    {
      title: "Data Architecture",
      icon: Network,
      view: 'architecture' as ViewType,
      description: "Kafka → Delta Lake → AI"
    }
  ];

  const businessItems = [
    {
      title: "Regulatory Compliance",
      icon: Shield,
      view: 'compliance' as ViewType,
      description: "COPPA, FERPA, GDPR, UAE"
    },
    {
      title: "Investor View",
      icon: TrendingUp,
      view: 'investor' as ViewType,
      description: "Market analysis & risks"
    }
  ];

  const adminItems = [
    {
      title: "Admin Portal",
      icon: UserCog,
      view: 'admin' as ViewType,
      description: "UK, USA, Canada, UAE"
    }
  ];

  return (
    <Sidebar className={`${isMobile ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <SidebarHeader className={`border-b border-sidebar-border ${isMobile ? 'px-2 py-3' : 'px-6 py-4'}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" />
          </div>
          {!isMobile && (
            <div>
              <h1 className="text-lg font-semibold">EduCore LMS</h1>
              <p className="text-sm text-muted-foreground">Moodle + Open edX</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {!isMobile && <SidebarGroupLabel>Learning Platform</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {learningItems.map((item) => (
                <SidebarMenuItem key={item.view}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.view)}
                    isActive={currentView === item.view}
                    className={`flex items-center gap-3 px-3 py-2 ${isMobile ? 'justify-center' : ''}`}
                    title={isMobile ? `${item.title} - ${item.description}` : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!isMobile && <SidebarGroupLabel>Analytics & Data</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.view}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.view)}
                    isActive={currentView === item.view}
                    className={`flex items-center gap-3 px-3 py-2 ${isMobile ? 'justify-center' : ''}`}
                    title={isMobile ? `${item.title} - ${item.description}` : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!isMobile && <SidebarGroupLabel>Business & Compliance</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {businessItems.map((item) => (
                <SidebarMenuItem key={item.view}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.view)}
                    isActive={currentView === item.view}
                    className={`flex items-center gap-3 px-3 py-2 ${isMobile ? 'justify-center' : ''}`}
                    title={isMobile ? `${item.title} - ${item.description}` : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!isMobile && <SidebarGroupLabel>Admin</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.view}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.view)}
                    isActive={currentView === item.view}
                    className={`flex items-center gap-3 px-3 py-2 ${isMobile ? 'justify-center' : ''}`}
                    title={isMobile ? `${item.title} - ${item.description}` : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={`border-t border-sidebar-border ${isMobile ? 'px-2 py-3' : 'px-6 py-4'}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
            <Users className="h-4 w-4" />
          </div>
          {!isMobile && (
            <>
              <div className="flex-1">
                <p className="text-sm">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Student Administrator</p>
              </div>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}