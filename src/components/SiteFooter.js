import React from "react"

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "1800px",
  },
  socialIconsButton: {
    marginRight: "1rem",
    color: "white",
    border: "1px solid white",
    "&:last-child": {
      marginRight: 0,
    },
  },
}))

const SiteFooter = () => {
  const classes = useStyles()
  return (
    <Box bgcolor="text.primary" py={5}>
      <Container className={classes.container}>
        <Grid container alignItems="flex-end">
          <Grid item xs={6}>
            <StaticImage src="./../images/celesto-white.png" />
            <Box mt={5} color="common.white">
              <Typography variant="body2">
                Celesto Technologies, Inc.
                <br />
                5334 E. Chapman Ave
                <br />
                Orange CA 92869
                <br />
                (888) 377-1265
              </Typography>
            </Box>
          </Grid>
          <Box
            clone
            color="white"
            display="flex"
            justifyContent="space-between"
            height="100%"
            flexDirection="column"
            alignItems="flex-end"
          >
            <Grid item xs={6}>
              {/* <Box display="flex" alignItems="center" flexGrow={5}>
                <IconButton className={classes.socialIconsButton}>
                  <FacebookIcon />
                </IconButton>
                <IconButton className={classes.socialIconsButton}>
                  <InstagramIcon />
                </IconButton>
                <IconButton className={classes.socialIconsButton}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton className={classes.socialIconsButton}>
                  <TwitterIcon />
                </IconButton>
              </Box> */}
              <Typography variant="body2">
                Copyright © 2021. Celesto Technologies Inc. | Terms of Use
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default SiteFooter
