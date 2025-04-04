import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import GroupExpensesCard from "../GroupExpenseCard/GroupExpenseCard";
import "./GroupDetail.css";

function GroupDetail() {
  const { id } = useParams();
  const location = useLocation();
  const expenses = [
    {
      id: 1,
      amount: 1500,
      date: "2025-03-01",
      description: "Chi phí ăn trưa tại nhà hàng A",
      group_id: 1,
      paid_by: "anhthu", // user.username who paid
    },
    {
      id: 2,
      amount: 2000,
      date: "2025-03-02",
      description: "Chi phí taxi đi công tác",
      group_id: 1,
      paid_by: "tranthuy", // user.username who paid
    },
    {
      id: 3,
      amount: 3000,
      date: "2025-03-05",
      description: "Mua vé xem phim",
      group_id: 2,
      paid_by: "john", // user.username who paid
    },
    {
      id: 4,
      amount: 500,
      date: "2025-03-06",
      description: "Mua bút và giấy cho văn phòng",
      group_id: 3,
      paid_by: "bob", // user.username who paid
    },
    {
      id: 5,
      amount: 1000,
      date: "2025-03-07",
      description: "Chi phí vé xe buýt đi làm",
      group_id: 1,
      paid_by: "anhthu", // user.username who paid
    },
    {
      id: 6,
      amount: 3500,
      date: "2025-03-08",
      description: "Chi phí tiệc sinh nhật",
      group_id: 2,
      paid_by: "alice", // user.username who paid
    },
    {
      id: 7,
      amount: 1200,
      date: "2025-03-09",
      description: "Chi phí mua đồ dùng văn phòng",
      group_id: 3,
      paid_by: "bob", // user.username who paid
    },
    {
      id: 8,
      amount: 2500,
      date: "2025-03-12",
      description: "Chi phí tổ chức sự kiện",
      group_id: 2,
      paid_by: "john", // user.username who paid
    },
    {
      id: 9,
      amount: 1800,
      date: "2025-03-14",
      description: "Chi phí ăn tối với khách hàng",
      group_id: 1,
      paid_by: "tranthuy", // user.username who paid
    }
  ];
  
  
  const group = location.state?.group;  // Assuming group data passed via state
  
  // Ensure the group and expenses data exists
  if (!group) {
    return <div>Loading group data...</div>;
  }

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open modal
  const handleAddExpense = () => {
    setModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Function to render filtered expenses
  const renderFilteredExpenses = () => {
    const filtered = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const monthMatch = !selectedMonth || expenseDate.getMonth() + 1 === parseInt(selectedMonth);
      const yearMatch = !selectedYear || expenseDate.getFullYear() === parseInt(selectedYear);
      const personMatch = !selectedPerson || expense.paid_by === selectedPerson;
      return monthMatch && yearMatch && personMatch;
    });
    return filtered || [];
  };

  return (
    <div className="group-detail">
      <div className="group-detail-header">
        <h1>{group.name} - Chi Tiêu Nhóm</h1>
        <div className="group-detail-info">
          <span><strong>Trạng thái:</strong> {group.active ? "Hoạt động" : "Không hoạt động"}</span>
          <span><strong>Tạo bởi:</strong> {group.createdBy.fullname}</span>
          <span><strong>Thành viên:</strong> {group.groupMember.length}</span>
        </div>
      </div>

      <div className="group-detail-filters">
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">Chọn tháng</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>Tháng {i + 1}</option>
          ))}
        </select>

        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">Chọn năm</option>
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select value={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)}>
          <option value="">Chọn người chi</option>
          {group.groupMember.map((member) => (
            <option key={member.id} value={member.user.username}>
              {member.user.fullname}
            </option>
          ))}
        </select>
      </div>

      <div className="group-detail-actions">
        <button onClick={() => alert('Xem thành viên')}>Xem Thành Viên</button>
        <button onClick={() => alert('Thêm thành viên')}>Thêm Thành Viên</button>
        <button className="add-expense-btn" onClick={handleAddExpense}>
          <FaPlusCircle /> Thêm Chi Tiêu
        </button>
      </div>

      <div className="group-detail-stats">
        <h4>Thống kê chi tiêu</h4>
        {group.groupMember.map((member) => (
          <div key={member.id}>
            <span>{member.user.fullname}: </span>
            <span>{expenses.filter(exp => exp.paid_by === member.user.username)
                .reduce((acc, curr) => acc + curr.amount, 0)} VND</span>
          </div>
        ))}
      </div>

      <div className="group-detail-expenses">
        <h4>Danh sách chi tiêu</h4>
        {renderFilteredExpenses().map((expense) => (
          <GroupExpensesCard key={expense.id} expense={expense} />
        ))}
      </div>

      {/* Add Modal Component if needed */}
      {/* {modalOpen && <Modal onClose={handleCloseModal} />} */}
    </div>
  );
}

export default GroupDetail;
