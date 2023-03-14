import { Paper, TextField, Typography,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio, Button} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const [initials,setInitials] = useState(undefined);
    const [emailAddr, setEmailAddr] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [gender, setGender] = useState(undefined);
    const [edu, setEdu] = useState(undefined);
    const [occu, setOccu] = useState(undefined);
    const navigate = useNavigate();
    
    return(<div class="background" id="home">
            <Paper elevation={3} style={{width: "90%", height: "90%", padding: "5px", overflow: "auto", display: "flex", flexDirection: "column"}}>
                <Typography variant="h4" style={{textAlign: "center"}}>Demographic Details</Typography>
                <TextField variant="outlined" required 
                placeholder="Please write the initials of your name with birth year e.g. (SP1999)"
                className="form-textfield"
                onChange={(e) => setInitials(e.target.value)}
                />
                <TextField variant="outlined" required 
                placeholder="Please write your email address"
                className="form-textfield"
                onChange={(e) => setEmailAddr(e.target.value)}
                />
                <TextField variant="outlined" required type="number"
                placeholder="Please write your age"
                className="form-textfield" 
                onChange={(e) => setAge(parseInt(e.target.value))}
                />
                <FormControl style={{marginTop: "20px"}}>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="row-radio-buttons-group"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <TextField variant="outlined" required multiline
                placeholder="Please write about your education (the degree you have/are studying for and the field you have/ are studying in)"
                className="form-textfield" 
                onChange={(e) => setEdu(e.target.value)}
                />
                <TextField variant="outlined" required multiline
                placeholder="Please write about your occupation if you are working"
                className="form-textfield" 
                onChange={(e) => setOccu(e.target.value)}
                />
                <Button variant="contained"
                style={{marginTop: "20px", alignSelf: "center"}}
                onClick={(e) => {
                    if(!validateDetails(initials, emailAddr))
                        alert("Incorrect input");
                    else
                    {
                        sessionStorage.setItem("demoDetails", JSON.stringify({initials,emailAddr,age,gender,edu,occu}));
                        sessionStorage.setItem("hop", 1);
                        if(Math.random() < 0.5)
                            navigate("/pics");
                        else
                            navigate("/narrative")
                    }
                }}
                >Submit</Button>
            </Paper>
        </div>)
}

function validateDetails(initials,email) 
{
    return (email.search(/[\w]+['@'][a-zA-z]{2,}['.'][a-z]{2,3}/g) === 0 && initials.search(/[A-Z]{2}\d{4}/g) === 0);
}

export default Home;