import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "./../components/layout"
import GridColorBar from "./../components/GridColorBar"
import Section from "./../components/Section"
import BackgroundVideo from "./../images/background-video.mp4"

const useStyles = makeStyles(theme => ({
  video: {
    position: "fixed",
    left: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -4,
  },
  title: {
    display: "inline-block",
    marginBottom: theme.spacing(10),
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <video className={classes.video} autoplay="true" muted={true} loop={true}>
        <source type="video/mp4" src={BackgroundVideo} />
      </video>
      <Section>
        <Container>
          <Grid container alignItems="center" spacing={10}>
            <Grid item md={6}>
              <Typography color="textPrimary" component="div">
                <Typography className={classes.title} variant="h2">
                  About
                  <GridColorBar />
                </Typography>
                <Typography paragraph>
                  <Box component="span" fontWeight={700}>
                    Address:
                  </Box>
                  <br />
                  13821 Newport Avenue #150
                  <br />
                  Tustin, CA 92780
                  <br />
                </Typography>
                <Link to="/">
                  <Box clone display="inline-block">
                    <Typography paragraph>
                      <Box component="span" color="common.orange">
                        View in Google Maps
                      </Box>
                    </Typography>
                  </Box>
                </Link>
                <Typography paragraph>
                  <Box component="span" fontWeight={700}>
                    Call:
                  </Box>
                  <br />
                  (888) 377-1265
                </Typography>
                <Typography paragraph>
                  <Box component="span" fontWeight={700}>
                    Email:
                  </Box>
                  <br />
                  info@celesto.com
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box display="flex" justifyContent="flex-end" position="relative">
                <StaticImage src="./../images/map.png" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section bgcolor="common.lightGray">
        <Container>
          <Typography color="textPrimary" component="div">
            <Typography className={classes.title} variant="h2">
              Contact Us
              <GridColorBar />
            </Typography>
            <form action="mailto:info@celesto.com" method="post">
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
              />
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email"
                type="email"
              />
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Subject"
              />
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Comments"
                multiline
                rows={5}
              />
              <Box clone mt={2}>
                <Button variant="contained">Send</Button>
              </Box>
            </form>
          </Typography>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage
