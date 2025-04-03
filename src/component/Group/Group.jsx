import React, { useState } from "react";
import GroupCard from "./GroupCard/GroupCard";
import "./Group.css";
import GroupDetail from "./GroupDetails/GroupDetail";
import { FaSearch } from "react-icons/fa";

function Group() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group A",
      active: true,
      created_at: "2025-03-01",
      groupMember: [
        {
          id: 1,
          user: {
            id: 1,
            username: "anhthu",
            email: "anthu@gmail.com",
            fullname: "Anh Thu",
          },
          role: true,
          active: true,
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "tranthuy",
            email: "tranthuy@gmail.com",
            fullname: "Tran Thuy",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 1,
        username: "anhthu",
        email: "anthu@gmail.com",
        fullname: "Anh Thu",
      },
    },
    {
      id: 1,
      name: "Group A",
      active: true,
      created_at: "2025-03-01",
      groupMember: [
        {
          id: 1,
          user: {
            id: 1,
            username: "anhthu",
            email: "anthu@gmail.com",
            fullname: "Anh Thu",
          },
          role: true,
          active: true,
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "tranthuy",
            email: "tranthuy@gmail.com",
            fullname: "Tran Thuy",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 1,
        username: "anhthu",
        email: "anthu@gmail.com",
        fullname: "Anh Thu",
      },
    },
    {
      id: 1,
      name: "Group A",
      active: true,
      created_at: "2025-03-01",
      groupMember: [
        {
          id: 1,
          user: {
            id: 1,
            username: "anhthu",
            email: "anthu@gmail.com",
            fullname: "Anh Thu",
          },
          role: true,
          active: true,
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "tranthuy",
            email: "tranthuy@gmail.com",
            fullname: "Tran Thuy",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 1,
        username: "anhthu",
        email: "anthu@gmail.com",
        fullname: "Anh Thu",
      },
    },
    {
      id: 1,
      name: "Group A",
      active: true,
      created_at: "2025-03-01",
      groupMember: [
        {
          id: 1,
          user: {
            id: 1,
            username: "anhthu",
            email: "anthu@gmail.com",
            fullname: "Anh Thu",
          },
          role: true,
          active: true,
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "tranthuy",
            email: "tranthuy@gmail.com",
            fullname: "Tran Thuy",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 1,
        username: "anhthu",
        email: "anthu@gmail.com",
        fullname: "Anh Thu",
      },
    },
    {
      id: 2,
      name: "Group B",
      active: true,
      created_at: "2025-03-05",
      groupMember: [
        {
          id: 3,
          user: {
            id: 3,
            username: "john",
            email: "john@gmail.com",
            fullname: "John Doe",
          },
          role: true,
          active: true,
        },
        {
          id: 4,
          user: {
            id: 4,
            username: "alice",
            email: "alice@gmail.com",
            fullname: "Alice Johnson",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 3,
        username: "john",
        email: "john@gmail.com",
        fullname: "John Doe",
      },
    },
    {
      id: 3,
      name: "Group C",
      active: true,
      created_at: "2025-03-10",
      groupMember: [
        {
          id: 5,
          user: {
            id: 5,
            username: "bob",
            email: "bob@gmail.com",
            fullname: "Bob Smith",
          },
          role: true,
          active: true,
        },
      ],
      createdBy: {
        id: 5,
        username: "bob",
        email: "bob@gmail.com",
        fullname: "Bob Smith",
      },
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGroupClick = (group) => {
    setSelectedGroup(group); // Redirect or show group details
  };

  return (
    <div className="group-container">
      <div className="search-and-add-group">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm nhóm..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button className="add-group-btn">Tạo nhóm</button>
      </div>

      <div className="group-list">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} onClick={handleGroupClick} />
        ))}
      </div>

      {/* If a group is selected, show the GroupDetail component */}
      {selectedGroup && <GroupDetail group={selectedGroup} />}
    </div>
  );
}

export default Group;
