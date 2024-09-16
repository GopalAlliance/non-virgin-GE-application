import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Application from "./Components/Application/Application";

function App() {
  const getFirstDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    var firstYear = parseInt(year);
    var nextMonth = ("0" + (today.getMonth() + 2)).slice(-2);
    if (nextMonth === "13") {
        nextMonth = "01";
        firstYear = firstYear + 1;
    }
    var followingMonth = ("0" + (today.getMonth() + 3)).slice(-2);
    if (followingMonth === "13") {
        followingMonth = "01";
    } else if (followingMonth === "14") {
        followingMonth = "02";
    }
    return `${firstYear}-${nextMonth}-01`;
  }

  const [formData, setFormData] = useState({
    contact_f_name: "",
    contact_l_name: "",
    companyName: '',
    companyAddress: '',
    contactTitle: '',
    companyTel: '',
    companyEmail: '',
    companyPostal: '',
    companyProvince: 'ON',
    effectiveDate: getFirstDate(),
    payorName: '',
    institutionNum: '',
    transitNum: '',
    accountNum: '',
    termsOptIn: false,
    assumptionsOptIn: false,
    padOptIn: false,
    language: 'en',
    preferred_language: 'en'
  });

  return (
    <div className="group-enroll-interim-sales-funnel-container">
      <Header formData={formData} setFormData={setFormData}/>
      <div className="group-enroll-interim-sales-funnel-content">
        <Application formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  );
}

export default App;