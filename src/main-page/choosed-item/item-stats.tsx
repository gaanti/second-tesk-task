import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { activePokemonSelector } from '../../app/slices/pokemon';


export default function ItemStats() {
  const pokemon = useSelector(activePokemonSelector);
  const rows: any[] = [];
  pokemon.stats.forEach((statItem: any) => {
    interface statInterface {
      base_stat: number;
      name: string;
    }

    const stat: statInterface = {
      base_stat: statItem.base_stat,
      name: statItem.stat.name,
    };
    rows.push(stat);
  });
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 350 }} aria-label='simple table'>
        <TableHead>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.base_stat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}