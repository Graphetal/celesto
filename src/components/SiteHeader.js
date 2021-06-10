import React from "react"
import { Link } from "gatsby"

import { AppBar, Container, Grid, IconButton, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import GridColorBar from "./GridColorBar"
import ModalButton from "./ModalButton"

import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.text.primary,
  },
  toolbar: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1800px",
    width: "100%",
  },
}))

const SiteHeader = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <StaticImage src="./../images/celesto-white.png" />
        </Link>
        <ModalButton />
      </Toolbar>
      <GridColorBar />
    </AppBar>
  )
}

export default SiteHeader
