import React from "react"

import { Link } from "gatsby"

import { Box, Container, IconButton, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: "5px solid #F8F9FD",
  },
  container: {
    position: "relative",
  },
  iconButton: {
    backgroundColor: "#E0E2E7",
    color: "white",
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))

const HeroSection = () => {
  const classes = useStyles()

  return (
    <section id="celesto-hero" className={`section ${classes.root}`}>
      <Container className={classes.container} maxWidth="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box color="text.primary" textAlign="center">
            <Typography gutterBottom variant="h1">
              Creating Immersive
              <br />
              <Box component="span" fontWeight={300}>
                Brand Experiences
              </Box>
            </Typography>
            <Typography>
              Make your brand stand out. Celesto has everything you need to
              create an immersive brand experiences. World class web development
              combined with years of experience in SEO and PPC marketing; we
              have the tools to help you build your brand.
            </Typography>
          </Box>
        </Box>
        <Link to="#lender-home-page">
          <IconButton
            className={classes.iconButton}
            color="inherit"
            aria-label="menu"
          >
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Link>
      </Container>
    </section>
  )
}

export default HeroSection
