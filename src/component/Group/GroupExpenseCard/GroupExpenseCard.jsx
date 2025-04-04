import React from "react";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import "./GroupExpenseCard.css"

function GroupExpensesCard({ expense }) {
  const { amount, category, date, paid_by, description } = expense;

  return (
    <div className="group-expenses-card">
      <div className="group-expenses-card-header">
        <div className="expense-amount">
          <span>{amount} VND</span>
        </div>
        <div className="expense-category">
          <span>{category}</span>
        </div>
      </div>

      <div className="group-expenses-card-body">
        <div className="expense-description">
          <strong>Mô tả:</strong> {description}
        </div>
        <div className="expense-details">
          <div className="expense-payer">
            <FaUserAlt /> <span>{paid_by}</span>
          </div>
          <div className="expense-date">
            <FaCalendarAlt /> <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="group-expenses-card-footer">
        <button className="view-details-btn">Xem chi tiết</button>
      </div>
    </div>
  );
}

export default GroupExpensesCard;
