import { useState } from "react";
import MemesData from "./MemesData";
const Meme = () => {
    const [meme, setmeme] = useState(({
        topText: "",
        BottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }))
    const [allMemeImages, setAllMemeImages] = useState(MemesData)
  
    let url
    function Getmemes() {
        const GetrandomMemes = allMemeImages.data.memes
        const randomArray = Math.floor(Math.random() * GetrandomMemes.length)
        const url = GetrandomMemes[randomArray].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
      
      
    }
   
    return ( 
    
        <main>
            <p>{url }</p>
            <div  className="form">
                <input type="text" className="form-input"placeholder="Top text"/>  
                <input type="text" className="form-input"placeholder="Bottom text" />
               <button className="form-button" onClick={Getmemes}>Generate New meme image</button>
            </div>
            <img src={meme.randomImage}  className="mem-image"/>
            </main>
            
     );
}
 
export default Meme;