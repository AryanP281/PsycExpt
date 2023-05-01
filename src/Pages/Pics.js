import { Paper, Typography } from "@mui/material";
import img1 from "../img1.png"
import img2 from "../img2.png"
import img3 from "../img3.png"
import img4 from "../img4.jpg"
import img5 from "../img5.jpg"
import img6 from "../img6.jpg"
import img7 from "../img7.jpg"
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
    const [showIns, setShowIns] = useState(true);

    useEffect(() => {
        if(showIns)
            setTimeout(() => setShowIns(false), 10*1000); //10*1000
        else
        {
            intervalId = setInterval(() => {
                i++;
                if(i < displayOrder.length)
                    setCurrImage(displayOrder[i]);
                else
                {
                    clearInterval(intervalId);
                    setTimeout(() => navigate("/pics/q"), 1000*30); //1000*30
                }
            }, 1000*30); //1000*30
        }
    }, [showIns])
    

    return(<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "90%", padding: "5px", overflow: "fixed"}} >
                {showIns && <Typography variant="h5">A series of photos would be presented to you one after the other. Please look at the photos carefully.  The next photo would be presented after a specified amount of time on its own</Typography>}
                {!showIns && <img src={currImage} width="100%" height="100%"/>}
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