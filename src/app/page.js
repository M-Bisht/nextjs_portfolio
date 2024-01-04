import BgColorCircle from "./global/comps/BgColorCircle";
import Fname from "./home/comps/Fname";
import Lname from "./home/comps/Lname";
import "./home/style.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>
        <Fname /> {/* Defined Both Gsap in Fname */}
        <a  href="https://mixupbytes.com"><Lname /></a>
      </h1>
      <BgColorCircle />
    </div>
  );
};

export default HomePage;
