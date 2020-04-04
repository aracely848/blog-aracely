import React from 'react'; 
import './name-list.css'
import PropTypes from 'prop-types';

const NameList = ({ names }) => {
  return (
    <div className="name-list">
        {names.map((name, i) => {
        return <div key={i}>{name}</div>
        })}
    </div>
  );
}; 

NameList.propTypes = { 
  Title: PropTypes.arrayOf(PropTypes.string)
}; 

export default NameList;