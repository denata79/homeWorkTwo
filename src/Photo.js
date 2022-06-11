import { useState } from "react";
import { dataTwo } from "./dataTwo";
import './App.css'

function Photo() {

    const [photo, setPhoto] = useState(0);
    const {image} = dataTwo[photo]

    const nextArrow = () => {
        setPhoto((photo => {
            photo++;
            if (photo > dataTwo.length-1 ) {
                photo=0;
            }
            return photo;
        }))
    }

    const backArrow = () => {
        setPhoto((photo) =>{
            photo--; 
            if (photo < 0) {
                return dataTwo.length-1;
            }
            return photo
        })
    } 
    return (
        <div className="center bord">
            <div>
               <h2>Красота балтики</h2> 
            </div>
            <div  className="partTwo">
                <button className="btn" onClick={backArrow}>◅</button>
            <img src={image} width='auto' height='300px'/>
                <button className="btn" onClick= {nextArrow}>▻</button>
            </div>
        </div>
    )
}

export default Photo;