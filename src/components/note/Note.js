import React from "react";
import './note.css';
import PropTypes from "prop-types";

const Note = ({images, firstParagraph, secondParagraph, link}) => {
  return (
   <div className="note">
    <img src={images} alt="It is about a landscape"/>
      <div className="ml-5 mr-5"><p className="ml-5 mr-5">{firstParagraph}</p></div>
    <div className="mb-5 ml-5 mr-5"><p className="ml-5 mr-5">{secondParagraph}</p></div>
      <a href={link}><button type="button" className="btn btn-outline-secondary mb-5">READ MORE</button></a>                  
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