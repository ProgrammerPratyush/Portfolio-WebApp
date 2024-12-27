import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}