import { Typography, TextField, Paper, Button, FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from '@mui/material';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAns } from '../Redux/P3Slice';

function Part3Questionnaire()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getQuestions = () => {
        const q = ["What do you think was the experiment about? ", "Have you participated in such experiments before?", "What did you think/feel about what was presented to you?", "Is there any reason for you to think that your responses to any part of the experiment may be invalid?","Do you have a major in astronomy or are involved in fields related to it e.g. astrophysics, meteorology etc. If yes, specify which one(s) and how long you have been involved in this field.", "Do you have any regrets about this choice? Why?/Why not?"];
        const q2 = [{q: "If you have regrets, which field would you have preferred/would you choose now? (you can choose multiple options, but not all)", opts: ['Creative writing ', 'Music ', 'Architecture  ', 'Politics ', 'Finance', 'Computers ', 'Law', 'Not Applicable']},
                    {q: "Currently, how often do you read books/watch shows on astronomy?", opts: ['(a) At Least once a month', '(b) At Least once in six months', '(c) At Least once a year', '(d) Not at all']},
                    {q: "On a scale of 1-7, with 1 being low and 7 high, rate your knowledge about astronomy.", opts:['1', '2', '3', '4', '5', '6', '7']}]

        const el = [];

        for(let i = 0; i < q.length; ++i)
        {
            el.push(<QAns question={q[i]} id={i} dispatch={dispatch} />);
        }
        for(let i = 0; i < q2.length; ++i)
        {
            el.push(<Mcq question={q2[i].q} id={q.length+i} opts={q2[i].opts} dispatch={dispatch} />);
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

function Mcq({question,id,opts,dispatch})
{
    return(<div style={{marginTop: "20px"}}>
            <FormControl>
                <FormLabel>{question}</FormLabel>
                    <RadioGroup
                        row
                        name="row-radio-buttons-group"
                        onChange={(e) => dispatch(setAns({id,val:e.target.value}))}
                    >
                        {opts.map((val) => <FormControlLabel value={val} control={<Radio />} label={val} />)}
                    </RadioGroup>
            </FormControl>
        </div>)
}

export default Part3Questionnaire;