import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = ({ onSelect, filterType }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('Sort by : Featured');
  const setShowDropdonw = () => {
    setShowDropdown(true);
  };
  const setDrowpdownValue = (value: string): void => {
    onSelect(value)
    setShowDropdown(false);
    setValue(value);
  };
  return (
    <div className="dropdown-wrapper relative">
      <button className="dropdown-input" onClick={setShowDropdonw}>
        <div className="d-flex-row">
          <p>{value}</p> &nbsp;{' '}
          <IconContext.Provider value={{ size: '25px', className: 'global-class-name' }}>
            <RiArrowDropDownLine />{' '}
          </IconContext.Provider>
        </div>
      </button>
      {showDropdown ? (
        <ul className="absolute">
          {filterType.map((value, i) => (
            <li key={i} onClick={() => setDrowpdownValue(value)}>
              {value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Dropdown;
