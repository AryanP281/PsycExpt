import { Typography,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Start()
{
    const navigate = useNavigate();

    return (<div style={{padding: "10%"}}>
            <Typography variant="body1"> Welcome! This is a simple experiment on emotion. I am interested in understanding how you respond to stimuli. Before beginning the experiment ensure that you are seated in a room with minimal distractions. Please use your laptop or PC for this experiment, since certain aspects would be better depicted on these devices. Please do not answer calls or perform any other tasks during the experiment since this can affect your responses. The experiment has to be completed in one sitting. <br/><br/>

            During the experiment you would be presented with some stimuli on which you would have to answer certain questions. Please answer as honestly and as accurately as possible. This would be followed by a few questions which would help me understand you as a person. Please note that there are no right or wrong answers to any questions, so please answer what best applies to you. <br/><br/>
            
            In case you experience any distress during the process, please feel free to leave the experiment halfway. Your well-being is important. For any doubts or questions please contact the experimenter- Saniya - at 7710035657.  <br/><br/>
            </Typography>

            <Button variant="contained" onClick={(e) => navigate("/demo")}>Continue</Button>
        </div>)
}

export default Start;