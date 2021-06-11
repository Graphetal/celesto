import React from "react"

import { Box, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: "5px solid #F8F9FD",
    minHeight: "100vh",
    /* [theme.breakpoints.up("lg")]: {
      height: "100vh",
    }, */
  },
  container: {
    maxWidth: "1800px",
    position: "relative",
  },
}))

const Section = ({
  id = "",
  children,
  name = "",
  py = 10,
  bgcolor = "transparent",
  pb = 10,
  mb = 0,
}) => {
  const classes = useStyles()

  return (
    <>
      <Box
        id={id}
        name={name}
        className={`section ${classes.root}`}
        bgcolor={bgcolor}
        borderBottom="5px solid #F8F9FD"
        component="section"
        overflow="hidden"
        py={py}
        pb={pb}
        mb={mb}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container className={classes.container}>{children}</Container>
      </Box>
    </>
  )
}

export default Section
