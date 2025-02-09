import React from 'react';

function List() {
  const items = ['item 1', 'item 2', 'item 3'];

  return (
    <div className="listContainer">
      <h2>一覧画面</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
