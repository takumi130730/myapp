import React from 'react';
import './List.css';

function List() {
  const items = ['item 1', 'item 2', 'item 3'];

  return (
    <div className="listContainer">
      <header className="listHeader">
        <h1 className="headerTitle">一覧画面</h1>
      </header>
      <nav className="listNav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
