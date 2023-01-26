import Table from "./Table";

function SortableTable(props) {
  const { config } = props; //propslardaki config propsunu değişkene atar

  //orjinal veriyi değiştirmemek için updatedConfig oluştururuz
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} IS SORTABLE</th>,
    };
  });

  //...props'un içerisinde de config prop'u vardır ancak daha sonra geçtiğimiz config={updatedConfig} prop'u onun üstüne yazılır
  return <Table {...props} config={updatedConfig}></Table>;
}

export default SortableTable;
