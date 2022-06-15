import './App.css';

import react, { Suspense, lazy } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Loading from './components/Loading.tsx';




const Home = lazy(() => import('./pages/Home/index.tsx'));
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}