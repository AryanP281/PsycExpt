import { Paper } from "@mui/material";
import img1 from "../img1.jpg"
import img2 from "../img2.png"
import img3 from "../img3.png"
import img4 from "../img4.jpg"
import img5 from "../img5.jpg"
import img6 from "../img6.jpg"
import img7 from "../img7.png"
import img8 from "../img8.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let intervalId;

function Pics()
{
    const navigate = useNavigate();
    
    const displayOrder = [img1,img2,img3,img4,img5,img6,img7,img8];
    shuffleArray(displayOrder)
    let i = 0;

    const [currImage,setCurrImage] = useState(displayOrder[i]);

    useEffect(() => {
        intervalId = setInterval(() => {
            i++;
            if(i < displayOrder.length)
                setCurrImage(displayOrder[i]);
            else
            {
                clearInterval(intervalId);
                setTimeout(() => navigate("/pics/q"), 1000*30);
            }
        }, 1000*30);
    }, [])
    

    return(<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "90%", padding: "5px", overflow: "fixed"}} >
                <img src={currImage} width="100%" height="100%"/>
            </Paper>
        </div>)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default Pics;