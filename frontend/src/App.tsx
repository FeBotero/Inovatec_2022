import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./components/About/About";
import { Forms } from "./components/Forms";
import { Contact } from "./pages/Contact/Contact";
import { CoursesList } from "./pages/CoursesList";
import { Access } from "./components/Access";
import { HomeStudent } from "./components/HomeStudent";
import { HomeSchool } from "./components/HomeSchool";
import { Room } from "./components/Room";
import { HomeTutor } from "./components/HomeTutor";
import { CertificateAluno, CertificateTutor } from "./components/Certificate";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/about" element={<About />} />
          <Route path="/newaccount" element={<Forms />} />
          <Route path="/access" element={<Access />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<HomeStudent />} />
          <Route path="/school" element={<HomeSchool />} />
          <Route path="/tutor" element={<HomeTutor />} />
          <Route path="/room" element={<Room />} />
          <Route path="/certificateAluno" element={<CertificateAluno />} />
          <Route path="/certificateTutor" element={<CertificateTutor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
