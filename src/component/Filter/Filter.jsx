import React from "react";

function Filter({
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
  selectedSource,
  setSelectedSource,
  handleFilter,
  handleResetFilter,
  handleOpenModal,
  totalAmount,
  type, // income or expense
}) {
  return (
    <div className="filter">
      <div className="filter-selects">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Chọn tháng</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              Tháng {i + 1}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Chọn năm</option>
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          <option value="">Chọn {type === "income" ? "nguồn" : "loại"}</option>
          {type === "income" ? (
            <>
              <option value="Lương">Lương</option>
              <option value="Thưởng">Thưởng</option>
              <option value="Kinh doanh">Kinh doanh</option>
              <option value="Đầu tư">Đầu tư</option>
              <option value="Trợ cấp">Trợ cấp</option>
              <option value="Bảo hiểm">Bảo hiểm</option>
              <option value="Khác">Khác</option>
            </>
          ) : (
            <>
              <option value="Sinh hoạt">Sinh hoạt</option>
              <option value="Ăn uống">Ăn uống</option>
              <option value="Đi lại">Đi lại</option>
              <option value="Giải trí">Giải trí</option>
              <option value="Mua sắm">Mua sắm</option>
              <option value="Đầu tư">Đầu tư</option>
              <option value="Khác">Khác</option>
            </>
          )}
        </select>
      </div>

      <div className="filter-buttons">
        <button className="filter-btn" onClick={handleFilter}>
          Lọc
        </button>
        <button className="reset-filter-btn" onClick={handleResetFilter}>
          Tất cả
        </button>
        <button className="add-income-btn" onClick={handleOpenModal}>
          Thêm
        </button>
      </div>
    </div>
  );
}

export default Filter;
