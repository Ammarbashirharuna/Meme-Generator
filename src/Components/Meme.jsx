import { useState } from "react";
import MemesData from "./MemesData";
const Meme = () => {
    const [memeImage, setmemeImage ] = useState("")
    let url
    function Getmemes() {
        const GetrandomMemes = MemesData.data.memes
        const randomArray = Math.floor(Math.random() * GetrandomMemes.length)
        url = GetrandomMemes[randomArray].url
        setmemeImage("GetrandomMemes")
      
    }
    return ( 
    
        <main>
            <p>{url }</p>
            <div  className="form">
                <input type="text" className="form-input"placeholder="Top text"/>  
                <input type="text" className="form-input"placeholder="Bottom text" />
               <button className="form-button" onClick={Getmemes}>Generate New meme image</button>
            </div>
            <img src={memeImage}  />
            </main>
            
     );
}
 
export default Meme;