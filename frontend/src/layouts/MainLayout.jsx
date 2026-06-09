import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <Marquee />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
