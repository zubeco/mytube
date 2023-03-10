import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err));
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      videos
      <Videos videos={videos} />
    </Box>
  );
}
