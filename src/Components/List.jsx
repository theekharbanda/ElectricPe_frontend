import { TableBody, TableContainer, TableRow, TableCell,Button } from "@mui/material";
import React from "react";


export default function List(props) {
    const [Book, setBook] = React.useState('');
    const handleClick = (num,cs) => {
        alert(`${cs} Charging station booked at ${num}`);
        setBook(true);
    }
    const startCharge = () => {
        console.log(1);
        fetch("http://localhost:3000/startCharge")
            .then((res) => res.json())
            .then((json) => alert(`${json}`))
            .catch((e)=>console.log(e));
    }
    const endCharge = () => {
        fetch("http://localhost:3000/endCharge")
            .then(res => res.json())
            .then(json => alert(`${json}`))
            .catch(err => console.log(err));
        
    }
    return (
        <>
            <h2>Availaible Time Slots</h2>
            <TableContainer component="Paper">
                <TableBody>
                    {props.rows.map((map) => (
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {map.Name}
                            </TableCell>
                            {map.AvailableSlots.map((num) => (
                                <TableCell align="right">
                                    <Button onClick={()=>handleClick(num,map.Name)}  variant="outlined">{num}</Button>
                                </TableCell>
                            ))};
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
            {(Book)
                ? <div style={{}}>
                    <Button variant="outlined" onClick={()=>startCharge()}>Start Charging</Button>
                    <Button variant="contained" onClick={()=>endCharge()}>End Charging</Button>
                </div>
                : <></>}
        </>
    );
}