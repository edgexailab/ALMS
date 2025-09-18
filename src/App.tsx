import { useState, useEffect } from 'react';
import { Sidebar } from './components/ui/sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { StudentDashboard } from './components/StudentDashboard';
import { CourseRecommendations } from './components/CourseRecommendations';
import { EngagementAnalytics } from './components/EngagementAnalytics';
import { RegulatoryCompliance } from './components/RegulatoryCompliance';
import { InvestorView } from './components/InvestorView';
import { CourseCatalog } from './components/CourseCatalog';
import { DataArchitecture } from './components/DataArchitecture';
import { AdminPortal } from './components/AdminPortal';
import { MainNavigation } from './components/MainNavigation';
import { RefreshIndicator } from './components/RefreshIndicator';
import { LazyWrapper } from './components/LazyWrapper';

type ViewType = 'dashboard' | 'recommendations' | 'analytics' | 'compliance' | 'investor' | 'catalog' | 'architecture' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isMobile, setIsMobile] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  // Responsive breakpoint detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('orientationchange', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, []);

  // Auto-refresh functionality (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(Date.now());
      // Trigger a subtle refresh of dynamic content
      if (window.location.hash) {
        window.location.hash = '';
        window.location.hash = currentView;
      }
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [currentView]);

  // Add viewport meta tag programmatically
  useEffect(() => {
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute(
      'content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.5, user-scalable=yes, viewport-fit=cover'
    );

    // Add other meta tags for better mobile experience
    const metaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' }
    ];

    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }, []);

  const renderCurrentView = () => {
    const viewKey = `${currentView}-${lastRefresh}`;
    const component = (() => {
      switch (currentView) {
        case 'dashboard':
          return <StudentDashboard key={viewKey} />;
        case 'recommendations':
          return <CourseRecommendations key={viewKey} />;
        case 'analytics':
          return <EngagementAnalytics key={viewKey} />;
        case 'compliance':
          return <RegulatoryCompliance key={viewKey} />;
        case 'investor':
          return <InvestorView key={viewKey} />;
        case 'catalog':
          return <CourseCatalog key={viewKey} />;
        case 'architecture':
          return <DataArchitecture key={viewKey} />;
        case 'admin':
          return <AdminPortal key={viewKey} />;
        default:
          return <StudentDashboard key={viewKey} />;
      }
    })();

    return (
      <LazyWrapper key={currentView} delay={isMobile ? 200 : 100}>
        {component}
      </LazyWrapper>
    );
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <MainNavigation 
          currentView={currentView} 
          onViewChange={setCurrentView}
          isMobile={isMobile}
        />
        <main className="flex-1 overflow-auto min-h-0 w-full">
          <div className={`
            container max-w-full min-h-full
            ${isMobile ? 'px-4 py-4' : 'px-6 py-6'}
            ${isMobile ? 'max-w-full' : 'max-w-screen-2xl'}
          `}>
            <div className="w-full">
              {renderCurrentView()}
            </div>
          </div>
        </main>
        <RefreshIndicator lastRefresh={lastRefresh} />
      </div>
    </SidebarProvider>
  );
}