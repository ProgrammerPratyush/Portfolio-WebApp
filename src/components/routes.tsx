import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from '@/pages/home';
import { Projects } from '@/pages/projects';
import { Contact } from '@/pages/contact';

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}