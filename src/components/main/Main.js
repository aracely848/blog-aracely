import React from "react";
import './main.css';
import InformationList from '../information-list/InformationList';
import Note from '../note/Note';

const Main = () => {
  let getlorem = require('getlorem');
const myArray = [{
  title: "The complete guide to explore Prague, in winter",
  destiny: "Destination Europe",
  author: "Added by John Wiliams Doe",
  date:  "January 01, 2018",
  image: "https://blog.urbanadventures.com/wp-content/uploads/2016/12/prague_winter.jpg",
  paragraph1: getlorem.paragraphs(0),
  paragraph2: getlorem.paragraphs(0),
  link: "https://www.followmeaway.com/prague-in-winter/" 
},
{
  title: "New Zealand: Places you must visit before you due",
  destiny: "Must Visit",
  author: "Added by John Wiliams Doe",
  date:  "December 29, 2017",
  image: "https://yeux.com.mx/ColumnaUniversitaria/wp-content/uploads/2016/05/Hobbit-House-New-Zealand.jpg",
  paragraph1: getlorem.paragraphs(0),
  paragraph2: getlorem.paragraphs(0),
  link: "https://www.lavanguardia.com/ocio/viajes/20190208/46263749434/blog-viajar-nueva-zelanda-consejos-xabier-villanueva.html" 
},
{
  title: "Switzerland: The land of dreams",
  destiny: "Must Visit",
  author: "Added by John Wiliams Doe",
  date:  "December 29, 2017",
  image: "https://s27363.pcdn.co/wp-content/uploads/2018/08/Kapellbrucke.jpg.optimal.jpg",
  paragraph1: getlorem.paragraphs(0),
  paragraph2: getlorem.paragraphs(0),
  link: "https://traveltriangle.com/blog/switzerland/l" 
},
{
  title: "Top 10 restaurants you must visit in Paris",
  destiny: "Must Visit",
  author: "Added by John Wiliams Doe",
  date:  "December 29, 2017",
  image: "https://media.timeout.com/images/105431993/image.jpg",
  paragraph1: getlorem.paragraphs(0),
  paragraph2: getlorem.paragraphs(0),
  link: "https://www.discoverwalks.com/blog/10-amazing-restaurants-in-paris-in-2019/" 
},
{
  title: "Dubai: 5 experiences that you can't miss",
  destiny: "Must Visit",
  author: "Added by Aracely Marentes Becerra",
  date:  "December 31, 2019",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrLjuXD-Pk5OCHmq9A_nngRoGI4WiI6Cu010Ji3qLfTDCM28sg&usqp=CAU",
  paragraph1: getlorem.paragraphs(0),
  paragraph2: getlorem.paragraphs(0),
  link: "https://www.makemytrip.com/blog/things-to-do-in-abu-dhabi" 
}]
  return (
    <div className="main">
      {myArray.map(topic =>{
      return  (
        <div>
          < InformationList title={topic.title}touristDestination={topic.destiny} author={topic.author} date={topic.date} /> 
          < Note images={topic.image} firstParagraph={topic.paragraph1} secondParagraph={topic.paragraph2} link={topic.link}/> 
        </div>
      )     
    })}         
    </div>
  )
}

export default Main;