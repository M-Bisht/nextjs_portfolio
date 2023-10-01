import BgColorCircle from "../global/comps/BgColorCircle";
import ContactForm from "./comps/ContactForm";
import ContactInfo from "./comps/ContactInfo";
import "./style.css";

const page = () => {
  return (
    <div className="contactPage">
      <div className="formWrapper">
        <ContactForm />
        <ContactInfo />
      </div>
      <BgColorCircle />
    </div>
  );
};

export default page;
