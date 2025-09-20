
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';

interface MainLayOutProps {
  children: React.ReactNode;
}

const MainLayout:React.FC<MainLayOutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='bg-[#ede8d0]'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout