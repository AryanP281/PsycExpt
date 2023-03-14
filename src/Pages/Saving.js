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

    useEffect(() => {
        saveData(() => {navigate("/end")}, () => {navigate("/")}, narrativeData, picsData);
    }, []);

    return (<div>
            <Typography variant="h4">Saving responses. Please do not refresh or go back</Typography>
        </div>)
}

export default Saving;