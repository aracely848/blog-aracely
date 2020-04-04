import React, { Component } from 'react'; 
import './social-network.css'

class SocialNetworks extends Component { 
  render() { 
    return ( 
      <div className="social-networks "> 
        <div className="circle">365.</div>
        <h5>Blog</h5>
        <h6>|</h6>
        <a href="https://gmail.com"><img src="https://img.icons8.com/material/24/000000/gmail--v1.png" className="size" alt="gmail icon" /></a>
        <a href="https://facebook.com"><img src="https://img.icons8.com/material-sharp/24/000000/facebook-f.png" className="size" alt="facebook icon"/></a>
        <a href="https://twiter.com"><img src="https://img.icons8.com/metro/26/000000/twitter.png" className="size" alt="twitter icon"/></a>
        <a href="https://instagram.com"><img src="https://img.icons8.com/metro/26/000000/instagram-new.png" className="size" alt="instagram icon"/></a>
      </div> 
    ); 
  } 
}  

export default SocialNetworks; 