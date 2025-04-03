import React, { useState } from "react";
import "./IncomeForm.css";

const IncomeForm = ({ onSubmit, existingData }) => {
  const [amount, setAmount] = useState(existingData ? existingData.amount : "");
  const [createdAt, setCreatedAt] = useState(
    existingData ? existingData.created_at : ""
  );
  const [date, setDate] = useState(existingData ? existingData.date : "");
  const [source, setSource] = useState(existingData ? existingData.source : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      amount,
      created_at: createdAt,
      date,
      source,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="income-form">
      <label>
        Số tiền:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <label>
        Ngày tạo:
        <input
          type="datetime-local"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
          required
        />
      </label>
      <label>
        Ngày:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Nguồn:
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </label>
      <button type="submit">Lưu</button>
    </form>
  );
};

export default IncomeForm;
