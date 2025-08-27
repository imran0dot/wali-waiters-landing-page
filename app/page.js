import { Footer, Navbar } from "../components";
import Home from "./(pages)/(with-nav)/home/page";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="-mt-16">
      <Home />
    </div>
    <Footer />
  </div>
);

export default Page;
