// TransactionCard.js
import React from "react";
import "./TransactionCard.css";

function TransactionCard({ transaction, onEdit, onDelete, type }) {
  return (
    <div className="transaction-card">
      <div className="card-header">
        <span className="transaction-amount">{transaction.amount} VND</span>
      </div>
      <div className="transaction-card-details">
        <div>
          <strong>Ngày tạo:</strong> {transaction.created_at}
        </div>
        <div>
          <strong>Ngày:</strong> {transaction.date}
        </div>

        {/* Display source for income */}
        {type === "income" && (
          <div>
            <strong>Thu nhập từ:</strong> {transaction.source}
          </div>
        )}

        {/* Display category and description for expenses */}
        {type === "expense" && (
          <>
            <div>
              <strong>Loại:</strong> {transaction.category}
            </div>
            <div>
              <strong>Mô tả:</strong> {transaction.description}
            </div>
          </>
        )}
      </div>

      <div className="transaction-card-actions">
        <button className="transaction-edit-btn" onClick={() => onEdit(transaction)}>
          Sửa
        </button>
        <button className="transaction-delete-btn" onClick={() => onDelete(transaction.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
}

export default TransactionCard;
