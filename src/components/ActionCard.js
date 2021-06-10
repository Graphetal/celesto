import React from "react"

import { Box, Button, Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
}))

const ActionCard = () => {
  const classes = useStyles()

  return (
    <Card classes={{ root: classes.card }}>
      <Typography component="div">
        <Typography color="textPrimary" gutterBottom variant="h4">
          Purchase
        </Typography>
        <Box color="text.secondary" component="p" my={3}>
          At this point, you want to live or invest in a potential property. You
          worked hard to save up, clean your credit, and progress at work. Have
          a place of your own which you call home.
        </Box>
        <Button color="primary" size="small" variant="contained">
          Learn more
        </Button>
      </Typography>
    </Card>
  )
}

export default ActionCard
