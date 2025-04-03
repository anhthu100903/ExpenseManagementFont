import React from "react";
import "./GroupDetail.css"; // Styles for GroupDetail component

function GroupDetail({ group }) {
  return (
    <div className="group-detail">
      <h2>Group Details</h2>
      <p>Name: {group.name}</p>
      <p>ID: {group.id}</p>
      <p>Created: {group.created_at}</p>
      {/* Add more details if necessary */}
    </div>
  );
}

export default GroupDetail;
