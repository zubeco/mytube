import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItem: "center" }}>
        <Typography
          sx={{ color: "#65F4AC", fontWeight: 700, fontSize: "25px" }}
        >
          My Tube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}
