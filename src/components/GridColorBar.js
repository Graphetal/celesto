import React from "react"

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& *": {
      height: 3,
    },
    "& div:nth-child(1)": {
      backgroundColor: theme.palette.common.blue,
    },
    "& div:nth-child(2)": {
      backgroundColor: theme.palette.common.orange,
    },
    "& div:nth-child(3)": {
      backgroundColor: theme.palette.common.red,
    },
    "& div:nth-child(4)": {
      backgroundColor: theme.palette.common.green,
    },
  },
}))

const GridColorBar = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.gridColorsBlue} item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}

export default GridColorBar
