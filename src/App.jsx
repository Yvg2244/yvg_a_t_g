import Container from "react-bootstrap/esm/Container";
import "./App.css";
import Navbar from "./components/CustomNav";
import HeroSection from "./components/Hero";
import PostButtonSection from "./components/PostButtonSection";
import PostSection from "./components/PostSection";
import smBtn from './assets/smBtn.png'
import { useEffect, useState } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(top > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PostButtonSection isSticky={isSticky} />
      <Container className="post-container">
        <PostSection />
      </Container>
      <div className="sm-btn d-block d-md-none">
        <img src={smBtn} alt="" />
      </div>
    </div>
  );
}

export default App;
