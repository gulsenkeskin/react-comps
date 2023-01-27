import { useState } from "react";

function setSortColumn(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy("asc");
      setSortBy(label);
      return;
    }
    setSortOrder(() => {
      if (sortOrder == null) {
        return "asc";
      } else if (sortOrder === "asc") {
        return "desc";
      } else if (sortOrder === "desc") {
        return null;
      }
    });

    setSortBy((currentSortOrder) => {
      if (currentSortOrder == null || sortOrder === "asc") {
        return label;
      } else if (currentSortOrder === "desc") {
        return null;
      }
    });

    // if (sortOrder == null) {
    //   setSortOrder("asc");
    //   setSortBy(label);
    // } else if (sortOrder === "asc") {
    //   setSortOrder("desc");
    //   setSortBy(label);
    // } else if (sortOrder === "desc") {
    //   setSortOrder(null);
    //   setSortBy(null);
    // }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    handleClick,
  };
}

export default setSortColumn;
