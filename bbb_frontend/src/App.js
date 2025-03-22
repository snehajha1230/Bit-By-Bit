import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading"; // Keep this for lazy loading fallback
import MyProfile from "./pages/MyProfile"; // Import MyProfile component
import WorkStatus from "./pages/WorkStatus";
import PaymentStatus from "./pages/PaymentStatus";
import Feedback from "./pages/Feedback";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<MyProfile />} />
          <Route path="/work-status" element={<WorkStatus />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;







