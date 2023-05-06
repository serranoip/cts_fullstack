import "../Table/table.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, voltage, current, status, temperature) {
    return { name, voltage, current, status, temperature };
}

const rows = [
    createData('OBC', 5, 3, "Operational", 45),
    createData('GPS', 5, 3, "Operational", 45),
    createData('Boom', 3.3, 3, "Operational", -5),
    createData('Communications', 5, 4.5, "Operational", 30),
    createData('MPI', 12, 6, "Operational", 50),
    createData('Camera', 5, 1, "Failed", -70),
];

const TableSummary = () => {
  return (

        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="table-cell"> Components </TableCell>
                    <TableCell className="table-cell" align="center">Voltage ( V )</TableCell>
                    <TableCell className="table-cell" align="center">Current ( A )</TableCell>
                    <TableCell className="table-cell" align="center">Status</TableCell>
                    <TableCell className="table-cell" align="center">Temperature ( degC )</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell className="table-cell" component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell className="table-cell" align="center">{row.voltage}</TableCell>
                    <TableCell className="table-cell" align="center">{row.current}</TableCell>
                    <TableCell className="table-cell" align="center">
                        <span className={`status ${row.status}`}> {row.status} </span>
                    </TableCell>
                    <TableCell className="table-cell" align="center">{row.temperature}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

  )
}

export default TableSummary