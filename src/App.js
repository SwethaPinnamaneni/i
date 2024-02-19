import "./App.css";
import { Header } from "./Components/InitialPages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/InitialPages/Footer";
import { Login } from "./Components/InitialPages/Login";
import { Home } from "./Components/InitialPages/Home";
import { TrackApplication } from "./Components/TrackApplicationUsecase/TrackApplication";
import TermInsuranceCalculator from "./Components/PolicyPurchase/TermInsuranceCalculator";
import { RegisterPage } from "./Components/InitialPages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { PremiumPayment } from "./Components/PolicyPurchase/PremiumPayment";
import { AadhaarDetails } from "./Components/PolicyPurchase/AadhaarDetails";
import { Documents } from "./Components/PolicyPurchase/Documents";
import { Payment } from "./Components/PolicyPurchase/Payment";
import { PolicyPlans } from "./Components/Plans/PolicyPlans";
import { PolicyDetails } from "./Components/Plans/PolicyDetails";
import { OTPTimer } from "./Components/PolicyPurchase/OTPTimer";
import { Careers } from "./Components/Careers/Careers";
import { Advisor } from "./Components/Careers/Advisor";
import { Employee } from "./Components/Careers/Employee";
import { PremiumPaymentOptions } from "./Components/PolicyPurchase/PremiumPaymentOptions";
import { Library } from "./Components/Library/Library";
import { AssetAllocation } from "./Components/Library/AssetAllocation";
import BmiCalculator from "./Components/Library/BmiCalculator";
import CustomerServices from "../src/Components/CustomerService/CustomerServices";
import { CustomerReviews } from "./Components/Library/CustomerReviews";
import { LifeInsurance } from "./Components/Library/LifeInsurance";
import { ProtectPolicy } from "./Components/Library/ProtectPolicy";
import { ClaimFAQs } from "./Components/Library/ClaimFAQs";
import { Aboutus } from "./Components/AboutUs/Aboutus";
import { AdminLogin } from "./Components/InitialPages/AdminLogin";
import { Example } from "./Components/Example";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/TrackApplication" element={<TrackApplication />} />
        <Route path="/PremiumPayment" element={<PremiumPayment />} />
        <Route path="/OTPTimer" element={<OTPTimer />} />
        <Route
          path="/TermInsuranceCalculator"
          element={<TermInsuranceCalculator />}
        />
        <Route path="/AadhaarDetails" element={<AadhaarDetails />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/PolicyPlans" element={<PolicyPlans />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/AssetAllocation" element={<AssetAllocation />} />
        <Route path="/PolicyDetails/:policyId" element={<PolicyDetails />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/CustomerServices" element={<CustomerServices />} />
        <Route path="/CustomerReviews" element={<CustomerReviews />} />
        <Route
          path="/PremiumPaymentOptions"
          element={<PremiumPaymentOptions />}
        />
        <Route path="/Advisor" element={<Advisor />} />
        <Route path="/LifeInsurance" element={<LifeInsurance />} />
        <Route path="/ProtectPolicy" element={<ProtectPolicy />} />
        <Route path="/ClaimFAQs" element={<ClaimFAQs />} />
        <Route path="*" element={<Home />} />
      </Routes> */}
      {/* <Footer /> */}
      {/* <AdminLogin /> */}
      <Example />
    </div>
  );
}

export default App;
