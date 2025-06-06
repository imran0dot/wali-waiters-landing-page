import { Footer, Navbar } from '../components';
import Home from './(pages)/(with-nav)/home/page';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Home />
    <Footer />
  </div>
);

export default Page;
