import React from "react";
import './sub-pagination.css';

const SubPagination = () => {
  
  return (
    <div className="sub-pagination">
      <button type="button" className="btn btn-lg" >Previous article</button>
      <button type="button" className="btn btn-lg" >Next article</button>  
    </div>
  )
}

export default SubPagination;