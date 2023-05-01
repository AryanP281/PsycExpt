import { Typography, TextField, Paper, Button,RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAns } from '../Redux/P1Slice';

function Part1Questionnaire()
{
    const ans = useSelector((state) => state.p1)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(ans)
    
    const opts = "1= Disagree Strongly;\n2 = Disagree a little;\n3 = Neither agree nor disagree;\n4 = Agree a little;\n5 = Agree strongly;".split('\n');
    const mcqs = [{q:"1. Is original, comes up with new ideas "},{q:"2. Is curious about many different things."},{q:"3. Is ingenious, a deep thinker "},{q:"4. Has an active imagination "},{q:"5. Is inventive"},{q:"6. Values artistic, aesthetic experiences"},{q:"7. Prefers work that is routine"},{q:"8. Likes to reflect, play with ideas"},{q:"9. Has few artistic interests"},{q:"10. Is sophisticated in art, music, or literature"}];

    return (<div className="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}} className="question-box">
                <Typography variant="h6">Please answer the following questions regarding yourself. There is no right or wrong answer. Please answer the questions as accurately as possible. </Typography>
                <Typography variant="h6">Here are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please indicate the extent to which you agree or disagree with the following statements such that- </Typography>
                {opts.map((opt,id) => <Typography variant="h6" key={id}>{opt}</Typography>)}
                <Typography variant='h5' style={{marginTop: "20px", textDecoration: "underline"}}>I see myself as someone who</Typography>
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

export default Part1Questionnaire;