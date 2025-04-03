import { useState } from 'react';
import './App.css';
import Header from './component/Header/Hearder';  // Đảm bảo đường dẫn đúng
import Home from './component/Home/Home';
import Income from './component/Income/Income';
import Expenses from './component/Expenses/Expenses';
import Group from './component/Group/Group';


function App() {
  // Trạng thái để theo dõi mục được chọn
  const [activeItem, setActiveItem] = useState("home");

  // Hàm render nội dung tương ứng với mục đã chọn
  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "income":
        return <Income />;
      case "expenses":
        return <Expenses />;
      case "group":
        return <Group />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="layout">
      <Header setActiveItem={setActiveItem} activeItem={activeItem} /> {/* Truyền hàm setActiveItem cho Header */}
      <div className="content">
        {renderContent()} {/* Hiển thị nội dung tương ứng */}
      </div>
    </div>
  );
}

export default App;
