import { useContext } from 'react';
import {
  Home,
  Login,
  Register,
  Profile,
} from './pages';

import {
  LeftBar,
  NavBar,
  RightBar
} from './components';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom';

import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import './style.scss'

const App = () => {

  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  };

  const ProptectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    };

    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProptectedRoute>
          <Layout />
        </ProptectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
