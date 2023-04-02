import { Typography, TextField, Paper, Button,RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAns } from '../Redux/P2Slice';

function Part2Questionnaire()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const opts = "1= Always True;\n2 = Usually True;\n3 = Usually False;\n4 = Always False;".split('\n');
    const mcqs = [{q:"1. I enjoy doing work that requires the use of words."},{q:"2. There are some special times in my life that I like to relive by mentally picturing just how everything looked"},{q:"3. I can never seem to find the right word when I need"},{q:"4. I do a lot of reading "},{q:"5. When I am trying to learn something new, I’d rather watch a demonstration than read how to do it"},{q:"6. I think I often use words in the wrong way "},{q:"7. I enjoy learning new words"},{q:"8. I like to picture how I could fix up my apartment or room if I could buy anything I wanted"},{q:"9. I often make written notes to myself "},{q:"10. I like to daydream "},{q:"11. I generally prefer to use a diagram rather than a written set of instructions "},{q:"12. I like to doodle "},{q:"13. I find it helps to think in terms of mental pictures when doing many things"},{q:"14. After I meet someone for the first time, I can usually remember what they look like but not much about them."},{q:"15. I like to think of synonyms for words"},{q:"16. When I have forgotten something, I frequently try to form a mental picture to remember it"},{q:"17. I like learning new words"},{q:"18. I prefer to read instructions about how to do something rather than have someone show me "},{q:"19. I prefer activities that don’t require a lot of reading "},{q:"20. I seldom daydream"},{q:"21. I spend very little time attempting to increase my vocabulary "},{q:"22. My thinking often consists of mental pictures or images "}];

    return (<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}} className="question-box">
                <Typography variant="h6">The aim of this exercise is to determine the style or manner in which you perform different tasks. Your answers in the statements should reflect the manner in which you engage in each of the tasks mentioned. There is no right or wrong answer. We only ask that you provide honest and accurate answers. Please answer by selecting one of the four possible responses. For example, if the statement is “I seldom read books and this is your typical behavior, (even though you might read say one book a year ), you would circle “always true” response. </Typography>
                {opts.map((opt,id) => <Typography variant="h6" key={id}>{opt}</Typography>)}
                {mcqs.map((m,id) => <Mcq id={id} question={m.q} dispatch={dispatch} />)}
                <Button variant="contained" style={{marginTop: "20px", alignSelf: "center"}}
                onClick={(e) => {navigate("/p3")}}
                >Submit</Button>
            </Paper>
        </div>)
}

function Mcq({id, question, dispatch}) 
{
    const getOpts = () => {
        const opts = [];
        for(let i = 1; i <= 4; ++i)
        {
            opts.push(<FormControlLabel key={i} value={i} control={<Radio />} label={i} />);
        }

        return opts;
    };
    
    return(<div style={{marginTop: "10px"}}>
            <Typography variant="body1">{question}</Typography>
            <RadioGroup onChange={(e) => {dispatch(setAns({id,val:parseInt(e.target.value)}))}}>
                {getOpts()}
            </RadioGroup>
        </div>)
}

export default Part2Questionnaire;