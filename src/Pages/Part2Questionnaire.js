import { Typography, TextField, Paper, Button,RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAns } from '../Redux/P2Slice';

function Part2Questionnaire()
{
    const ans = useSelector((state) => state.p1)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(ans)
    
    const opts = "1= Always True;\n2 = Usually True;\n3 = Usually False;\n4 = Always False;".split('\n');
    const mcqs = [{q:"1. Is talkative "},{q:"2. Tends to find fault with others"},{q:"3. Does a thorough job "},{q:"4. Is depressed, blue "},{q:"5. Is original, comes up with new ideas "},{q:"6. Is reserved "},{q:"7. Is helpful and unselfish with others "},{q:"8. Can be somewhat careless "},{q:"9. Is relaxed, and handles stress well"},{q:"10. Is curious about many different things."},{q:"11. Is full of energy."},{q:"12. Starts quarrels with others"},{q:"13. Is a reliable worker "},{q:"14. Can be tense "},{q:"15. Is ingenious, a deep thinker "},{q:"16. Generates a lot of enthusiasm "},{q:"17. Has a forgiving nature"},{q:"18. Tends to be disorganized "},{q:"19. Worries a lot "},{q:"20. Has an active imagination "},{q:"21. Tends to be quiet "},{q:"22. Is generally trusting "},{q:"23. Tends to be lazy"},{q:"24. Is emotionally stable, not easily upset"},{q:"25. Is inventive"},{q:"26. Has an assertive personality"},{q:"27. Can be cold and aloof"},{q:"28. Perseveres until the task is finished"},{q:"29. Can be moody"},{q:"30. Values artistic, aesthetic experiences"},{q:"31. Is sometimes shy, inhibited"},{q:"32. Is considerate and kind to almost everyone"},{q:"33. Does things efficiently"},{q:"34. Remains calm in tense situations"},{q:"35. Prefers work that is routine"},{q:"36. Is outgoing, sociable"},{q:"37. Is sometimes rude to others"},{q:"38. Makes plans and follows through with them"},{q:"39. Gets nervous easily"},{q:"40. Likes to reflect, play with ideas"},{q:"41. Has few artistic interests"},{q:"42. Likes to cooperate with others"},{q:"43. Is easily distracted"},{q:"44. Is sophisticated in art, music, or literature"}];

    return (<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}} className="question-box">
                <Typography variant="h6">Please answer the following questions regarding yourself. There is no right or wrong answer. Please answer the questions as accurately as possible. </Typography>
                <Typography variant="h6">Here are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please indicate the extent to which you agree or disagree with the following statements such that- </Typography>
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
        for(let i = 1; i <= 5; ++i)
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