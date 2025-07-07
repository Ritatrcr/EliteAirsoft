import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Combos from '../pages/Combos';
import AboutUs from '../pages/AboutUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="combos" element={<Combos />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
