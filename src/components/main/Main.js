import React, { Component } from "react";
import './main.css';
import InformationList from '../information-list/InformationList';
import Note from '../note/Note';
import Pagination from '../pagination/Pagination';
import api from '../topics.json';

class Main extends Component {   
 render() {
  
  return (
    <React.Fragment>
      <div className="main">
        {api.topics.map((topic, id) => (
          <div key={id}>
            < InformationList title={topic.title}touristDestination={topic.destiny} author={topic.author} date={topic.date} /> 
            < Note images={topic.image} firstParagraph={topic.paragraph1} secondParagraph={topic.paragraph2} link={`/${topic.id}`} />
          </div>
        ))}      
      </div>
      <Pagination /> 
    </React.Fragment>    
  )
 }
 
}

export default Main;
