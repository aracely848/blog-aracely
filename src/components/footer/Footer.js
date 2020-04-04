import React from "react";
import './footer.css';

const Footer = () => {
  
  return (
    <div className="footerBig">
      <div className="footer">
      <button type="button" className="btn btn-lg">Previous</button>
      <button type="button" className="btn btn-lg">Next</button>
      </div>
      <div className="footerGeneral">
        <div className="figure">365</div>
        <h3 className="mb-5"><strong>project</strong></h3>
        <p>Freebie Designed By <strong>Kishore</strong> for <strong>Project365.Design</strong></p>
      </div>    
    </div>
  )
}

export default Footer;