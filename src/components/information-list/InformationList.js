import React  from 'react'; 
import './information-list.css'
import PropTypes from 'prop-types';

const InformationList = ({ title, touristDestination, author, date }) => {
  return (
    <div>
      <h1 className="text-center mb-4 ml-5 mr-5">{title}
      </h1>    
    <div className="information-list">
      <p>{touristDestination} </p>
      <p className="point"></p>
      <p>{author}</p>
      <p className="point"></p>
      <p>{date}</p>
    </div>
    </div>
  );
}; 

InformationList.propTypes = {
  title: PropTypes.string,
  touristDestination: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string
}; 

export default InformationList;