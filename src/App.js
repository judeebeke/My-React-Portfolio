import { Fragment, useState, useEffect } from "react";
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
  // const dispatch = useDispatch()
  // const cartItems = useSelector((state) => state.product);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <ScaleLoader color="#0678E3" size={100} />
        </div>
      ) : (
        <Fragment>
          <DesktopNav />
          <MobileNav />
          <Layout>
            <Hero />
            <About />
            <Facts />
            <Resume />
            <PastProjects />
          </Layout>
        </Fragment>
      )}
    </>
  );
}

export default App;
