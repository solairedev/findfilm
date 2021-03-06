import React from "react";
import PropTypes from "prop-types";

import "./Dropdown.sass";

export const Dropdown = ({ label, options, selectedValue, callback }) => {
  const onChangeSelect = (e) => {
    callback(e.target.value);
  };
  return (
    <label className="dropdown-wrap">
      <p className="dropdown-wrap__label">{label}</p>
      <select
        onChange={onChangeSelect}
        className="dropdown"
        value={selectedValue}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
