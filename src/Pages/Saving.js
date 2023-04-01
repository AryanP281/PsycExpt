import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Services/Services";
import { useSelector } from "react-redux";

function Saving()
{
    const navigate = useNavigate();
    const narrativeData = useSelector((state) => state.narrative);
    const picsData = useSelector((state) => state.pics);
    const p1Data = useSelector((state) => state.p1);
    const p2Data = useSelector((state) => state.p2);
    const p3Data = useSelector((state) => state.p3);

    useEffect(() => {
        let data;
        if(sessionStorage.getItem("Tag") === "p")
            data = picsData;
        else
            data = narrativeData;
        saveData(() => {navigate("/end")}, () => {navigate("/")}, data, p1Data, p2Data, p3Data);
    }, []);

    return (<div>
            <Typography variant="h4">Saving responses. Please do not refresh or go back</Typography>
        </div>)
}

export default Saving;