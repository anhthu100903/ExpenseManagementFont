import React, { useState } from "react";
import Filter from "../Filter/Filter"; // Import Filter component
import { FaTimes } from "react-icons/fa";
import TransactionCard from "../TransactionCard/TransactionCard";
import "./Expenses.css";

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 1500, category: "Ăn uống", created_at: "2025-03-01 10:15:00", date: "2025-03-01", description: "Chi phí ăn trưa tại nhà hàng A" },
    { id: 2, amount: 2000, category: "Đi lại", created_at: "2025-04-02 12:20:30", date: "2025-04-02", description: "Chi phí taxi đi công tác" },
    { id: 3, amount: 3000, category: "Giải trí", created_at: "2025-04-03 17:10:00", date: "2025-04-03", description: "Mua vé xem phim" },
    { id: 4, amount: 500, category: "Văn phòng phẩm", created_at: "2025-04-04 14:30:00", date: "2025-04-04", description: "Mua bút và giấy cho văn phòng" },
    { id: 5, amount: 1000, category: "Đi lại", created_at: "2025-04-05 08:45:00", date: "2025-04-05", description: "Chi phí vé xe buýt đi làm" },
    { id: 6, amount: 3500, category: "Giải trí", created_at: "2025-04-06 20:00:00", date: "2025-04-06", description: "Chi phí tiệc sinh nhật" },
  ]);
  
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm lọc chi tiêu
const handleFilter = () => {
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const monthMatch =
      !selectedMonth || expenseDate.getMonth() + 1 === parseInt(selectedMonth);
    const yearMatch =
      !selectedYear || expenseDate.getFullYear() === parseInt(selectedYear);
    const categoryMatch = !selectedCategory || expense.category === selectedCategory;
    
    // Log các giá trị để kiểm tra
    console.log('Expense category:', expense.category);
    console.log('Selected Category:', selectedCategory);
    return monthMatch && yearMatch && categoryMatch;
  });

  const total = filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  setTotalExpenses(total);
  setExpenses(filteredExpenses);  // Cập nhật lại danh sách sau khi lọc
};

  // Hàm reset lọc
  const handleResetFilter = () => {
    setSelectedMonth("");
    setSelectedYear("");
    setSelectedCategory("");
    setTotalExpenses(expenses.reduce((acc, expense) => acc + expense.amount, 0));
    setExpenses([
      { id: 1, amount: 1500, category: "Ăn uống", created_at: "2025-03-01 10:15:00", date: "2025-03-01", description: "Chi phí ăn trưa tại nhà hàng A" },
      { id: 2, amount: 2000, category: "Đi lại", created_at: "2025-04-02 12:20:30", date: "2025-04-02", description: "Chi phí taxi đi công tác" },
      { id: 3, amount: 3000, category: "Giải trí", created_at: "2025-04-03 17:10:00", date: "2025-04-03", description: "Mua vé xem phim" },
      { id: 4, amount: 500, category: "Văn phòng phẩm", created_at: "2025-04-04 14:30:00", date: "2025-04-04", description: "Mua bút và giấy cho văn phòng" },
      { id: 5, amount: 1000, category: "Đi lại", created_at: "2025-04-05 08:45:00", date: "2025-04-05", description: "Chi phí vé xe buýt đi làm" },
      { id: 6, amount: 3500, category: "Giải trí", created_at: "2025-04-06 20:00:00", date: "2025-04-06", description: "Chi phí tiệc sinh nhật" },
    ]);
  };

  // Hàm mở modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditExpense = () => {

  }

  const handleDeleteExpense = () => {

  }

  return (
    <div className="container">
      <Filter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleFilter={handleFilter}
        handleResetFilter={handleResetFilter}
        handleOpenModal={handleOpenModal}
        type={"expenses"}
      />

      {/* Hiển thị tổng chi tiêu */}
      <div className="total-expenses">
        <h3>Tổng chi tiêu: {totalExpenses} VND</h3>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={handleCloseModal}>
              <FaTimes size={24} />
            </button>
            {/* <ExpenseForm onSubmit={handleCreateUpdateExpense} /> */}
          </div>
        </div>
      )}

      <div className="transaction-list">
        {expenses.map((expense) => (
          <TransactionCard
            key={expense.id}
            transaction={expense}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
            type="expense"
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
