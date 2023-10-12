import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

/**
 * props : {columnHeaders : {name,text}[], data[]}
 */
export default function FullTable(props) {
    const tableHeader = props.columnHeaders.map((cell, i) => (
        <TableCell key={`hc_${i}`}>{cell.text}</TableCell>
    ));

    const isEmpty = !props.data.length;
    const emptyTableBody = (
        <TableRow>
            <TableCell align="center" colSpan={props.columnHeaders.length}>
                데이터가 없습니다.
            </TableCell>
        </TableRow>
    );

    const tableBody = props.data.map((row, i) => (
        <TableRow key={`r_${i}`}>
            {props.columnHeaders.map((cell, j) => (
                <TableCell key={`r_${i}_c_${j}`}>{row[cell.name]}</TableCell>
            ))}
        </TableRow>
    ));
    return (
        <Table>
            <TableHead>
                <TableRow>{tableHeader}</TableRow>
            </TableHead>
            <TableBody>{isEmpty ? emptyTableBody : tableBody}</TableBody>
        </Table>
    );
}
