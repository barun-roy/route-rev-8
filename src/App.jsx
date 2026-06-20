/**
 * current build before code splitting
 *dist/index.html                   0.48 kB │ gzip:   0.31 kB
dist/assets/index-3e0b72ce.css   31.27 kB │ gzip:   5.26 kB
dist/assets/index-eb435bc1.js   523.91 kB │ gzip: 152.95 kB
 */

/**
 * After code splitting:
 * dist/index.html                           0.48 kB │ gzip:   0.31 kB
dist/assets/Logo-81b2c976.css             0.03 kB │ gzip:   0.05 kB
dist/assets/Login-b7d792c3.css            0.35 kB │ gzip:   0.22 kB
dist/assets/Product-9f395e2d.css          0.47 kB │ gzip:   0.27 kB
dist/assets/PageNav-4503fc2e.css          0.51 kB │ gzip:   0.28 kB
dist/assets/Homepage-b91bce59.css         0.51 kB │ gzip:   0.30 kB
dist/assets/AppLayout-5905c578.css        1.91 kB │ gzip:   0.70 kB
dist/assets/index-3af6ee81.css           27.60 kB │ gzip:   4.53 kB
dist/assets/Product.module-8d683417.js    0.06 kB │ gzip:   0.07 kB
dist/assets/PageNotFound-14a2e021.js      0.15 kB │ gzip:   0.15 kB
dist/assets/Logo-38ea9d98.js              0.22 kB │ gzip:   0.19 kB
dist/assets/PageNav-1ba5ce1f.js           0.49 kB │ gzip:   0.27 kB
dist/assets/Pricing-cdac76db.js           0.65 kB │ gzip:   0.41 kB
dist/assets/Homepage-399314d1.js          0.67 kB │ gzip:   0.42 kB
dist/assets/Product-55c70238.js           0.86 kB │ gzip:   0.48 kB
dist/assets/Login-739af4b2.js             1.03 kB │ gzip:   0.55 kB
dist/assets/AppLayout-ae2e5361.js       157.00 kB │ gzip:  46.28 kB
dist/assets/index-67e06cda.js           365.30 kB │ gzip: 106.12 kB
 */

import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

// import Homepage from './pages/Homepage';
// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import { Suspense } from 'react';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
