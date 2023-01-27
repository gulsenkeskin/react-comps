import { useState } from "react";
import Table from "./Table";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props; //propslardaki config propsunu değişkene atar

  const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);

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
    return <TiArrowUnsorted></TiArrowUnsorted>;
  }

  if (sortOrder === null) {
    return <TiArrowUnsorted></TiArrowUnsorted>;
  } else if (sortOrder === "asc") {
    return <TiArrowSortedUp></TiArrowSortedUp>;
  } else if (sortOrder === "desc") {
    return <TiArrowSortedDown></TiArrowSortedDown>;
  }
}

export default SortableTable;
