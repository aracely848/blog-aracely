import React, {Component} from 'react';
import './model-blog.css';
import SubPagination from '../subPagination/SubPagination';
import InformationList from '../information-list/InformationList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showTopic } from '../../actions/index';

class ModelBlog extends Component {
  componentDidMount() {
    this.props.dispatch(showTopic());
  }
  render() {
    const { topics } = this.props;
    const selected = Number(this.props.match.params.id);
    const topic = topics.find(item => item.id === selected);
      return (
        <React.Fragment>
          <div className="modelBlog">
          <div className="contentBlog" id={topic.id}>
              <InformationList title={topic.title} touristDestination={topic.destiny} author={topic.author} date={topic.date} />
              <div>
                <img src={topic.image} alt="It is about a landscape" className="mb-5" />
                <div className="ml-5 mr-5 mb-5">
                  <div className="ml-5 mr-5 mb-4"><h5 className="ml-5 mr-5">{topic.subtitle1}</h5></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph1}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph2}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                </div>
                <div className="part mb-5">
                  <h4 className="ml-5 mr-5">{topic.subtitle2}</h4>
                  <q className="ml-5 mr-5">Caption for quote goes here</q>
                </div>
                <div className="ml-5 mr-5 mb-5">
                  <div className="ml-5 mr-5 mb-4"><h5 className="ml-5 mr-5">{topic.subtitle1}</h5></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                  <div className="ml-5 mr-5 mb-4"><p className="ml-5 mr-5">{topic.paragraph}</p></div>
                  </div>
              </div>
              <hr width="90%" className="mb-5"/>
              <div className="d-flex justify-content-around container-fluid mb-5" >
                <p className="small">{topic.author} {topic.date}</p>
                <p className="small">Poster Under "{topic.destiny}"</p>
              </div>
              <Link to="/"><button type="button" className="btn btn-outline-secondary mb-5 rounded-pill border">SHOW 2 COMMENTS</button></Link>           
        </div>  
        </div>
        <SubPagination />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  topics: state.topics
});

export default connect(mapStateToProps)(ModelBlog);