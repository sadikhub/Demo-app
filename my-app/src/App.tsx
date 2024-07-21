import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMouseEnter = (subMenu: string) => {
    setActiveSubMenu(subMenu);
  };

  return (
    <div className="app">
      <div className="menu-bar">
        {['MenuItem1', 'MenuItem2', 'MenuItem3', 'MenuItem4', 'MenuItem5'].map(menuItem => (
          <div
            key={menuItem}
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(menuItem)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">{menuItem}</button>
            {activeMenu === menuItem && (
              <div className="dropdown-content">
                <div
                  className="sub-menu-item"
                  onMouseEnter={() => handleSubMouseEnter('SubMenuItem1')}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  Sub Menu Item 1
                  {activeSubMenu === 'SubMenuItem1' && (
                    <div className="sub-dropdown-content">
                      <div className="section">
                        <h2>My Career and Benefits</h2>
                        <ul>
                          <li>HRweb</li>
                          <li>Benefits</li>
                          <li>Learning Portal</li>
                          <li>Internal Jobs</li>
                          <li>Company Store</li>
                          <li>Give</li>
                        </ul>
                      </div>
                      <div className="section">
                        <h2>Travel and Expense</h2>
                        <ul>
                          <li>Travel</li>
                          <li>Expenses</li>
                          <li>Payments</li>
                          <li>US Immigration Travel</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="sub-menu-item">Sub Menu Item 2</div>
                <div className="sub-menu-item">Sub Menu Item 3</div>
              </div>
            )}
          </div>
        ))}
        <div className="menu-item">...</div>
      </div>
    </div>
  );
};

export default App;
