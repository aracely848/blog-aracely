import React from "react";
import './note.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Note = ({images, firstParagraph, secondParagraph, link}) => {
  
  return (
   <div className="note">
    <img src={images} alt="It is about a landscape"/>
      <div className="ml-5 mr-5"><p className="ml-5 mr-5">{firstParagraph}</p></div>
    <div className="mb-5 ml-5 mr-5"><p className="ml-5 mr-5">{secondParagraph}</p></div>
      <Link to={link}><button type="button" className="btn btn-outline-secondary mb-5 rounded-pill border">READ MORE</button></Link>                 
    </div>
  )
};

Note.protoTypes = {
  images: PropTypes.string, 
  firstParagraph: PropTypes.string,
  secondParagraph: PropTypes.string,
  link: PropTypes.string
};

export default Note;