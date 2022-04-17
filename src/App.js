import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
    // let [meme, setMeme] = React.useState({
    //     topText: "",
    //     bottomText: "",
    //     imgUrl: "https://i.imgflip.com/cv1y0.jpg"
    // })
    
    // let [memeImage, setMemeImage] = React.useState();




  return (
    <div className="App">
        <Header />
        <Meme />
    </div>
  );
}

export default App;
