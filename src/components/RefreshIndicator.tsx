import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { RefreshCw } from 'lucide-react';

interface RefreshIndicatorProps {
  lastRefresh: number;
  refreshInterval?: number; // in milliseconds
}

export function RefreshIndicator({ lastRefresh, refreshInterval = 300000 }: RefreshIndicatorProps) {
  const [timeUntilRefresh, setTimeUntilRefresh] = useState(refreshInterval);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsRefreshing(true);
    const timeout = setTimeout(() => setIsRefreshing(false), 1000);
    return () => clearTimeout(timeout);
  }, [lastRefresh]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastRefresh;
      const remaining = Math.max(0, refreshInterval - elapsed);
      setTimeUntilRefresh(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastRefresh, refreshInterval]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Badge 
        variant="secondary" 
        className={`flex items-center gap-2 px-3 py-1 transition-all duration-300 ${
          isRefreshing ? 'bg-green-500 text-white' : ''
        }`}
      >
        <RefreshCw 
          className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} 
        />
        <span className="text-xs">
          {isRefreshing ? 'Refreshed' : `Next: ${formatTime(timeUntilRefresh)}`}
        </span>
      </Badge>
    </div>
  );
}