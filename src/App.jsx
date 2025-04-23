import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './component/Header/Hearder';  // Đảm bảo đường dẫn đúng
import Home from './component/Home/Home';
import Income from './component/Income/Income';
import Expenses from './component/Expenses/Expenses';
import Group from './component/Group/Group';
import GroupDetail from './component/Group/GroupDetail/GroupDetail';
import Login from "./component/LoginForm/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route cho Login (nằm ngoài layout) */}
        <Route path="/login" element={<Login />} />

        {/* Các route cần có layout với Header */}
        <Route path="/" element={<div className="layout">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/group" element={<Group />} />
              <Route path="/group/:id" element={<GroupDetail />} />
              {/* Mặc định, nếu không có route khớp, hiển thị Home */}
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
