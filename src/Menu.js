import React from 'react';

const Menu = (props) => {

    return(
      <ul className="menu">
          {props.menuCategories.map(function(menuCategory, index) {
              return (
                  <li key={index}>
                      <a className={((menuCategory.active) ? 'active' : '')}>{menuCategory.name}</a>
                      <ul className="submenu">
                          {menuCategory.products.map(function(menuItem, innerIndex) {
                              return (
                                  <li key={innerIndex} onClick={() => props.callback(index, innerIndex)}>
                                    <a className={((menuItem.active) ? 'active' : '')}>{menuItem.name}</a>
                                  </li>
                              );
                          })}
                      </ul>
                  </li>

              );
          })}
      </ul>
    );
};

export default Menu;