import React from 'react';


function Tabs({ items = [], children }) {
  const [active, setActive] = React.useState(items[0]);

  return (
    <div className="TabsContainer">
      <ul className="Tabs">
        {items.map((item) => (
          <li className={`TabItem ${active === item ? 'TabItem-active' : ''}`} onClick={() => setActive(item)}>
            {item}
          </li>
        ))}
      </ul>
      <div className="TabContent">
        {children({ active })}
      </div>
    </div>
  );
}

export default Tabs;
