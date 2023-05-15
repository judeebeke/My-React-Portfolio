import { Fragment, useState } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Layout/desktop/Hero";
import { ScaleLoader } from "react-spinners";

// import {useDispatch, useSelector } from "react-redux";
import DesktopNav from "./components/navigation/DesktopNav";
import About from "./components/Layout/About";
import Facts from "./components/Layout/Facts";
import Resume from "./components/Layout/Resume";
import PastProjects from "./components/Layout/PastProjects";
import MobileNav from "./components/navigation/MobileNav";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <ScaleLoader color="#0678E3" size={100} />
        </div>
      ) : (
        <section onLoad={handleLoading}>
          <DesktopNav />
          <MobileNav />
          <Layout>
            <Hero />
            <About />
            <Facts />
            <Resume />
            <PastProjects />
          </Layout>
        </section>
      )}
    </>
  );
}

export default App;
