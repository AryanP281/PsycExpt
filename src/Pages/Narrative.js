import { Paper, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setQ1, setQ2, setQ3, setMcqVal } from "../Redux/NarrativeSlice";

const passage = "Consider again that dot. That's here. That's home. That's us. On it everyone you love, (2) everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Our posturings, our imagined self-importance, and the delusion that we have some privileged position in the Universe are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves. The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand. It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another and to preserve and cherish the pale blue dot, the only home we've ever known.";

function Narrative()
{
    const narrativeAns = useSelector((state) => state.narrative);
    const [showQs, setShowQs] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowQs(true), 4 * 60 * 1000); //4 * 60 * 1000
    }, []);
    
    return(<div className="background" id="home">
        <Paper elevation={3} style={{width: "90%", height: "100%", padding: "10px", overflow: "auto"}}>
            {!showQs && <Typography variant="body1">{passage}</Typography>}
            {showQs && <Questionnaire />}
        </Paper>
    </div>)
}

function Questionnaire()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const opts = "1= Strongly Disagree;\n2 = Moderately Disagree;\n3 = Somewhat Disagree;\n4 = Neutral;\n5 = Somewhat Agree;\n6= Moderately Agree;\n7 = Strongly Agree".split('\n');
    const mcqs = [
        {q:"1.    I sensed things momentarily slow down." },  {q:"2.    I noticed time slowing." },  {q:"3.    I felt my sense of time change." },  {q:"4.    I experienced the passage of time differently." },  {q:"5.    I had the sense that a moment lasted longer than usual." },  {q:"6.    I felt that my sense of self was diminished." },  {q:"7.    I felt my sense of self shrink." },  {q:"8.    I experienced a reduced sense of self." },  {q:"9.    I felt my sense of self become somehow smaller." },  {q:"10.   I felt small compared to everything else." },  {q:"11.   I had the sense of being connected to everything." },  {q:"12.   I felt a sense of communion with all living things." },  {q:"13.   I experienced a sense of oneness with all things." },  {q:"14.   I felt closely connected to humanity." },  {q:"15.   I had a sense of complete connectedness." },  {q:"16.   I felt that I was in the presence of something grand." },  {q:"17.   I experienced something greater than myself." },  {q:"18.   I felt in the presence of greatness." },  {q:"19.   I perceived something that was much larger than me." },  {q:"20.   I perceived vastness." },  {q:"21.   I felt my jaw drop." },  {q:"22.   I had goosebumps." },  {q:"23.   I gasped." },  {q:"24.   I had chills." },  {q:"25.   I felt my eyes widen." },  {q:"26.   I felt challenged to mentally process what I was experiencing." },  {q:"27.   I found it hard to comprehend the experience in full." },  {q:"28.   I felt challenged to understand the experience." },  {q:"29.   I struggled to take in all that I was experiencing at once." },  {q:"30.   I tried to understand the magnitude of what I was experiencing." },
    ];
    
    return(<div className="questionnaire">
        <Typography variant="h6">Please answer the following questions based on the narrative</Typography>
        
        <Typography variant="body2" style={{marginTop: "10px"}}>What is the narrative about? </Typography>
        <TextField variant="outlined" required id="nq1" multiline
        className="form-textfield"
        onChange={(e) => dispatch(setQ1(e.target.value))}
        />
        
        <Typography variant="body2" style={{marginTop: "10px"}}>Have you read this narrative before?</Typography>
        <TextField variant="outlined" required id="nq2" multiline
        className="form-textfield" 
        onChange={(e) => dispatch(setQ2(e.target.value))}
        />

        <Typography variant="body2" style={{marginTop: "10px"}}>What did you like most about the narrative?</Typography>
        <TextField variant="outlined" required id="nq2" multiline
        className="form-textfield" 
        onChange={(e) => dispatch(setQ3(e.target.value))}
        />

        <Typography variant="h6" style={{marginTop: "10px"}}>{"Please indicate the extent to which you felt the following while reading the narrative.  While reading the narrative I felt…"}</Typography>
        {opts.map((opt,id) => <Typography variant="h6" key={id}>{opt}</Typography>)}

        {mcqs.map((m,id) => <Mcq id={id} question={m.q} dispatch={dispatch} />)}

        <Button variant="contained" style={{marginTop: "20px", alignSelf: "center"}}
            onClick={(e) => {
                navigate("/p1")
            }}
        >Submit</Button>
    </div>
    )
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

export default Narrative;