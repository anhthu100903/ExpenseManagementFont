import React, { useState } from "react";

import IncomeForm from "./IncomeForm/IncomeForm";
import TransactionCard from "../TransactionCard/TransactionCard";
import "./Income.css";

import { FaTimes } from "react-icons/fa";
import Filter from "../Filter/Filter";

function Income() {
  const [incomes, setIncomes] = useState([
    {
      id: 1,
      amount: 10000,
      created_at: "2025-04-03 15:36:41",
      date: "2025-04-03",
      source: "Lương",
      user_id: 1,
    },
    {
      id: 2,
      amount: 5000,
      created_at: "2025-03-25 14:30:22",
      date: "2025-03-25",
      source: "Lương",
      user_id: 1,
    },
    {
      id: 3,
      amount: 2000,
      created_at: "2025-04-05 10:20:10",
      date: "2025-04-05",
      source: "Thưởng",
      user_id: 1,
    },
    {
      id: 4,
      amount: 2000,
      created_at: "2025-04-05 10:20:10",
      date: "2025-04-05",
      source: "Thưởng",
      user_id: 1,
    },
    // Thêm các mục thu nhập khác nếu cần
  ]);

  const [editingIncome, setEditingIncome] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);

  const handleFilter = () => {
    // Lọc danh sách thu nhập dựa trên các tiêu chí đã chọn
    const filteredIncomes = incomes.filter((income) => {
      const incomeDate = new Date(income.date);
      const monthMatch =
        !selectedMonth || incomeDate.getMonth() + 1 === parseInt(selectedMonth);
      const yearMatch =
        !selectedYear || incomeDate.getFullYear() === parseInt(selectedYear);
      const sourceMatch = !selectedSource || income.source === selectedSource;
      return monthMatch && yearMatch && sourceMatch;
    });

    // Tính tổng thu nhập sau khi lọc
    const total = filteredIncomes.reduce(
      (acc, income) => acc + income.amount,
      0
    );
    setTotalIncome(total);

    // Cập nhật lại danh sách thu nhập sau khi lọc
    setIncomes(filteredIncomes);
  };

  const handleResetFilter = () => {
    // Đặt lại các giá trị lọc về mặc định
    setSelectedMonth("");
    setSelectedYear("");
    setSelectedSource("");
    setTotalIncome(incomes.reduce((acc, income) => acc + income.amount, 0));
    // Hiển thị lại toàn bộ danh sách thu nhập
    setIncomes([
      {
        id: 1,
        amount: 10000,
        created_at: "2025-04-03 15:36:41",
        date: "2025-04-03",
        source: "Lương",
        user_id: 1,
      },
      {
        id: 2,
        amount: 5000,
        created_at: "2025-03-25 14:30:22",
        date: "2025-03-25",
        source: "Lương",
        user_id: 1,
      },
      {
        id: 3,
        amount: 2000,
        created_at: "2025-04-05 10:20:10",
        date: "2025-04-05",
        source: "Thưởng",
        user_id: 1,
      },
      {
        id: 4,
        amount: 2000,
        created_at: "2025-04-05 10:20:10",
        date: "2025-04-05",
        source: "Thưởng",
        user_id: 1,
      },
      // Thêm các mục thu nhập khác nếu cần
    ]);
  };

  const handleCreateUpdateIncome = (incomeData) => {
    if (editingIncome) {
      // Update income
      setIncomes(
        incomes.map((income) =>
          income.id === editingIncome.id ? { ...income, ...incomeData } : income
        )
      );
    } else {
      // Create income
      setIncomes([
        ...incomes,
        { ...incomeData, id: incomes.length + 1, user_id: 1 },
      ]);
    }
    setEditingIncome(null); // Reset form after submit
  };

  const handleEditIncome = (income) => {
    setEditingIncome(income);
    setIsModalOpen(true);
  };

  const handleDeleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Mở modal khi nhấn "Thêm 1 thu nhập"
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Đóng modal khi nhấn "Đóng"
  };

  return (
    <div className="container">
      <Filter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedCategory={selectedSource}
        setSelectedCategory={setSelectedSource}
        handleFilter={handleFilter}
        handleResetFilter={handleResetFilter}
        handleOpenModal={handleOpenModal}
        type={"income"}
      />

      {/* Hiển thị tổng thu nhập */}
      <div className="total-income">
        <h3>Tổng thu nhập: {totalIncome} VND</h3>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={handleCloseModal}>
              <FaTimes size={24} />
            </button>
            <IncomeForm
              className="income-form"
              onSubmit={handleCreateUpdateIncome}
              existingData={editingIncome}
            />
          </div>
        </div>
      )}

      <div className="transaction-list">
        {incomes.map((income) => (
          <TransactionCard
            key={income.id}
            transaction={income}
            onEdit={handleEditIncome}
            onDelete={handleDeleteIncome}
            type="income"
          />
        ))}
      </div>
    </div>
  );
}

export default Income;
