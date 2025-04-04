import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Header from './component/Header/Hearder';  // Đảm bảo đường dẫn đúng
import Home from './component/Home/Home';
import Income from './component/Income/Income';
import Expenses from './component/Expenses/Expenses';
import Group from './component/Group/Group';
import GroupDetail from './component/Group/GroupDetail/GroupDetail';


function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <div className="content">
        <Routes>
            {/* Các route điều hướng tới các trang khác */}
            <Route path="/home" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/group" element={<Group />} />
            <Route path="/group/:id" element={<GroupDetail/>}/>
            
            {/* Mặc định, nếu không có route khớp, hiển thị Home */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
