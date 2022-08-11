import React from "react";

const data = new Array(10).fill().map((a, idx) => ({ idx }));

function List() {
  const [list, setList] = React.useState(data);

  return (
    <div>
      {list.map((item) => (
        <Item
          data={item}
          onEdit={(idx) => {
            setList((prev) => {
              // return [
              //   ...prev.slice(0, itemValue),
              //   { ...prev[itemValue], value: 10000 },
              //   ...prev.slice(itemValue + 1),
              // ];
              // return prev.map((p) =>
              //   p.value === itemValue ? { ...p, price: 10000 } : p
              // );
              const cur = [...prev];
              cur[idx] = { ...cur[idx], value: 10000 };
              return cur;
            });
          }}
          key={item.idx}
        />
      ))}
    </div>
  );
}

function Item({ data, onEdit }) {
  return (
    <p key={data.idx} onClick={() => onEdit(data.idx)}>
      {JSON.stringify(data)}
    </p>
  );
}

export default List;
