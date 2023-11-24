import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
          sx={{
        //   marginTop:'20.5rem',
          padding: '2rem',
          borderTop:'0.063rem solid #404040',  
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="#fff" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
