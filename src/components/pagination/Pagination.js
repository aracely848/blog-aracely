import React from "react";
import './pagination.css';

const Pagination = () => {
  
  return (
    <div className="pagination">
      <button type="button" className="btn btn-lg" >Previous</button>
      <button type="button" className="btn btn-lg" >Next</button>  
    </div>
  )
}

export default Pagination;