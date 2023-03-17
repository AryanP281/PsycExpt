import { Typography, TextField, Paper, Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAns } from '../Redux/P3Slice';

function Part3Questionnaire()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getQuestions = () => {
        const q = ["What do you think was the experiment about? ", "Have you participated in such experiments before?", "What did you think/feel after reading the narrative?", "What did you think/feel after seeing the photos?", "How do the photos and the narrative compare with each other?","What do you think was the hypothesis of the experiment?","Is there any reason for you to think that your responses to any part of the experiment may be invalid?"];
        const el = [];

        for(let i = 0; i < q.length; ++i)
        {
            el.push(<QAns question={q[i]} id={i} dispatch={dispatch} />);
        }

        return el;
    };

    return (<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}} className="question-box">
                {getQuestions()}
                <Button variant="contained" style={{marginTop: "20px", alignSelf: "center"}}
                onClick={(e) => {navigate("/save")}}
                >Submit</Button>
            </Paper>
        </div>)
}

function QAns({question,id,dispatch}) 
{
    return (<div style={{marginTop: "20px"}}>
            <Typography variant="body2" style={{marginBottom: "5px"}}>{question}</Typography>
            <TextField variant="outlined" required multiline
                className="form-textfield"
            onChange={(e) => dispatch(setAns({id,val:e.target.value}))}
            />
        </div>)
}

export default Part3Questionnaire;