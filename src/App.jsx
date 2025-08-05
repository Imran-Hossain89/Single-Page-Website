import "./App.css";
import "./components/navbar/Navbar.css";
import "./components/dashboard/Dashboard.css";
import "./components/development/Development.css";
import "./components/inspiration/Inspiration.css";
import "./components/targetPage/TargetPage.css";
import "./components/contact/Contact.css";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Development from "./components/development/Development";
import Inspiration from "./components/inspiration/Inspiration";
import TargetPage from "./components/targetPage/TargetPage";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Development />
      <Inspiration />
      <TargetPage />
      <Contact />
    </div>
  );
}

export default App;
