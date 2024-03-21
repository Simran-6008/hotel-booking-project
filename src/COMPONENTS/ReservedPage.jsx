import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import "../CSS/reservedPage.css";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ReservedPage = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <Header />
      <div className="headings">
        <Typography variant="h5" sx={{ color: "Green", m: 3 }}>
          You Have Successfully Reserved Rooms
        </Typography>
      </div>
      <div className="table-container">
        <Table
          sx={{ maxWidth: 450, alignSelf: "center" }}
          aria-label="customized table"
        >
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Full Name
              </StyledTableCell>
              <StyledTableCell align="right" component="tr">
                {location.state.firstName} {location.state.lastName}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Phone Number
              </StyledTableCell>
              <StyledTableCell align="right" component="tr">
                {location.state.phoneNumber}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Email Address
              </StyledTableCell>
              <StyledTableCell align="right" component="tr">
                {location.state.email}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Total Room
              </StyledTableCell>
              <StyledTableCell align="right" component="tr">
                {location.state.room}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Reserved Dates
              </StyledTableCell>
              <StyledTableCell align="right" component="tr">
                {location.state.checkin} to {location.state.checkout}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>
      <div className="button-container">
        <div>
          <Typography variant="h5" sx={{ color: "red" }}>
            Thank You!!
          </Typography>
        </div>
        <div>
          <Stack spacing={2} direction="row" sx={{ m: 3 }}>
            <Link to={`/`}>
              <Button variant="contained">Back to Home</Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default ReservedPage;
