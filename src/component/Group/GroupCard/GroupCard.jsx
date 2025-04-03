import React, {useState, useEffect} from "react";
import "./GroupCard.css"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import icons

function GroupCard({ group }) {
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const colors = [
      "#4caf50", "#f44336", "#ff9800", "#2196f3", "#9c27b0", "#03a9f4", "#8bc34a", "#00bcd4"
    ];

    // Generate a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setBackgroundColor(randomColor);
  }, []);

  return (
    <div className="group-card">
      <div className="group-card-header">
        <div className="group-avatar" style={{backgroundColor}}>
          {group.name[0]}
        </div>
        <h4>{group.name}</h4>
        
        <div>
          {group.active ? (
            <FaCheckCircle color="green" />
          ) : (
            <FaTimesCircle color="red" />
          )}
        </div>
      </div>
      <div className="group-card-body">
        <div>
          <strong>Tạo bởi:</strong> {group.createdBy.fullname}
        </div>
      </div>
      <div className="group-card-footer">
        <span>{group.groupMember.length} Thành viên</span>
      </div>
    </div>
  );
}

export default GroupCard;
