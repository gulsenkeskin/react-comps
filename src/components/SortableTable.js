import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props; //propslardaki config propsunu değişkene atar

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

  //orjinal veriyi değiştirmemek için updatedConfig oluştururuz
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //...props'un içerisinde de config prop'u vardır ancak daha sonra geçtiğimiz config={updatedConfig} prop'u onun üstüne yazılır
  return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  } else if (sortOrder === "asc") {
    <div>
      <GoArrowSmallUp></GoArrowSmallUp>
    </div>;
  } else if (sortOrder === "desc") {
    <div>
      <GoArrowSmallDown></GoArrowSmallDown>
    </div>;
  }
}

export default SortableTable;
