import { Footer, Navbar } from '../components';
import Download from '../components/Dawonload';
import { About, Explore, GetStarted, Hero, WhatsNew } from '../sections';
import ClientReview from '../sections/ClientReview';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <ClientReview />
      <div className="gradient-03 z-0" />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="relative">
        <Download />
        <div className="gradient-03 z-0" />
      </div>
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Page;
