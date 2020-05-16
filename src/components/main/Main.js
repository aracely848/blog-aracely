import React, { Component } from "react";
import './main.css';
import InformationList from '../information-list/InformationList';
import Note from '../note/Note';
import Pagination from '../pagination/Pagination';
import { connect } from 'react-redux';
import { getAllTopics } from '../../actions/index';

class Main extends Component { 
  componentDidMount() {
    this.props.dispatch(getAllTopics());
  }
 render() {
  
  const { topics } = this.props;
  
  return (
    <React.Fragment>
      <div className="main">
        {topics.map((topic) => (
          <div key={topic.id}>
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

const mapStateToProps = state => ({
  topics: state.topics
});

export default connect(mapStateToProps)(Main);