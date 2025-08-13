import { Outlet, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/PortfolioPage';
import Investigaciones from './pages/Investigaciones';
import Publicadas from './pages/Publicadas';
import NotFound from './pages/NotFound';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'investigaciones', element: <Investigaciones /> },
      { path: 'publicadas', element: <Publicadas /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

export default function App() {
  return useRoutes(routes);
}
