import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

/**
 *
 * props : {columnHeaders : {name,text}[], data[]}
 */
export default function FullTable(props) {
    const tableHeader = props.columnHeaders.map((cell) => (
        <TableCell>{cell.text}</TableCell>
    ));

    const tableBody = props.data.map((row) => (
        <TableRow>
            {props.columnHeaders.map((cell) => (
                <TableCell>{row[cell.name]}</TableCell>
            ))}
        </TableRow>
    ));
    return (
        <Table>
            <TableHead>
                <TableRow>{tableHeader}</TableRow>
            </TableHead>
            <TableBody>{tableBody}</TableBody>
        </Table>
    );
}
