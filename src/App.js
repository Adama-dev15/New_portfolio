import AboutView from "./composant/AboutView/AboutView";
import ContactView from "./composant/ContactView/ContactView";
import NewHeaderView from "./composant/NewHeaderView/NewHeaderView";
import PortfolioView from "./composant/PortfolioView/PortfolioView";
import ResumeView from "./composant/ResumeView/ResumeView";
import ServicesView from "./composant/ServicesView/ServicesView";

//Template Main CSS File
import "./assets/css/style.css";

//Vendor CSS Files
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

function App() {
  return (
    <div>
      <NewHeaderView />
      <AboutView />
      <ResumeView />
      <ServicesView />
      <PortfolioView />
      <ContactView />
    </div>
  );
}

export default App;
