import { Paper, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setQ1, setQ2, setQ3, setMcqVal } from "../Redux/PicsSlice";

function PicQuestions()
{
    const picsAns = useSelector((state) => state.pics);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(picsAns)
    console.log(picsAns.mcqs)
    
    const opts = "1= Strongly Disagree;\n2 = Moderately Disagree;\n3 = Somewhat Disagree;\n4 = Neutral;\n5 = Somewhat Agree;\n6= Moderately Agree;\n7 = Strongly Agree".split('\n');
    const mcqs = [{q: "1.   I sensed things momentarily slow down." },{q: "2.   I noticed time slowing." },{q: "3.   I felt my sense of time change." },{q: "4.   I experienced the passage of time differently." },{q: "5.   I had the sense that a moment lasted longer than usual." },{q: "6.   I felt that my sense of self was diminished." },{q: "7.   I felt my sense of self shrink." },{q: "8.   I experienced a reduced sense of self." },{q: "9.   I felt my sense of self become somehow smaller." },{q: "10.   I felt small compared to everything else." },{q: "11.   I had the sense of being connected to everything." },{q: "12.   I felt a sense of communion with all living things." },{q: "13.   I experienced a sense of oneness with all things." },{q: "14.   I felt closely connected to humanity." },{q: "15.   I had a sense of complete connectedness." },{q: "16.   I felt that I was in the presence of something grand." },{q: "17.   I experienced something greater than myself." },{q: "18.   I felt in the presence of greatness." },{q: "19.   I perceived something that was much larger than me." },{q: "20.   I perceived vastness." },{q: "21.   I felt my jaw drop." },{q: "22.   I had goosebumps." },{q: "23.   I gasped." },{q: "24.   I had chills." },{q: "25.   I felt my eyes widen." },{q: "26.   I felt challenged to mentally process what I was experiencing." },{q: "27.   I found it hard to comprehend the experience in full." },{q: "28.   I felt challenged to understand the experience." },{q: "29.   I struggled to take in all that I was experiencing at once." },{q: "30.   I tried to understand the magnitude of what I was experiencing." }];

    return (<div className="background" id="home">
        <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}}>
            <Typography variant="h6">Please answer the following questions based on the narrative</Typography>
            
            <Typography variant="body2" style={{marginTop: "10px"}}>What are the photos about? </Typography>
            <TextField variant="outlined" required id="nq1" multiline
            className="form-textfield" 
            onChange={(e) => dispatch(setQ1(e.target.value))}
            />
            
            <Typography variant="body2" style={{marginTop: "10px"}}>Have you seen these photos before?</Typography>
            <TextField variant="outlined" required id="nq2" multiline
            className="form-textfield" 
            onChange={(e) => dispatch(setQ2(e.target.value))}
            />

            <Typography variant="h6" style={{marginTop: "10px"}}>{"Please indicate the extent to which you felt the following while reading the narrative.  While reading the narrative I felt…"}</Typography>
            {opts.map((opt,id) => <Typography variant="h6" key={id}>{opt}</Typography>)}

            {mcqs.map((m,id) => <Mcq id={id} question={m.q} dispatch={dispatch} />)}

            <Button variant="contained" style={{marginTop: "20px", alignSelf: "center"}}
            onClick={(e) => {
                if(sessionStorage.getItem("hop") === '1')
                {
                    sessionStorage.setItem("hop", 2);
                    navigate("/narrative");
                }
                else
                    navigate("/save")
            }}
            >Submit</Button>
        </Paper>
    </div>)
}

function Mcq({id, question, dispatch}) 
{
    const getOpts = () => {
        const opts = [];
        for(let i = 1; i <= 7; ++i)
        {
            opts.push(<FormControlLabel key={i} value={i} control={<Radio />} label={i} />);
        }

        return opts;
    };
    
    return(<div style={{marginTop: "10px"}}>
            <Typography variant="body1">{question}</Typography>
            <RadioGroup onChange={(e) => dispatch(setMcqVal({id,val:parseInt(e.target.value)}))}>
                {getOpts()}
            </RadioGroup>
        </div>)
}

export default PicQuestions;