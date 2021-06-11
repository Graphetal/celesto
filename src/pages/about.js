import React from "react"

import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import GridColorBar from "./../components/GridColorBar"
import Layout from "./../components/layout"
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
  },
  textContent: {},
}))

const AboutPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <video className={classes.video} autoplay="true" muted={true} loop={true}>
        <source type="video/mp4" src={BackgroundVideo} />
      </video>
      <Section>
        <Container>
          <Typography color="textPrimary" component="div">
            <Typography className={classes.title} variant="h2">
              About
              <GridColorBar />
            </Typography>
            <Box clone py={7}>
              <Typography variant="h1">
                Building Top Level Technology
                <br />
                <Box component="span" fontWeight={300}>
                  For Lenders and Brokers
                </Box>
              </Typography>
            </Box>
            <Typography>
              Celesto Technology, Inc. was founded in March of 2002 by a group
              of highly sought-after and experienced internet marketing
              professionals. Today we continue their legacy by merging superb
              business sense with world class design & development from our
              highly skilled team. Each one of us brings years of experience to
              the table for your business or organization to use. Our designers
              are always ahead of the curve when it comes to trends, sometimes
              even setting trends of their own. The development team consists of
              people who are obsessed with what they do; they spend a majority
              of their free time building their skills even more and making sure
              that they are always inline with the most recent tools and
              techniques. Everyone at Celesto has dedicated their lives to
              developing a better brand identity for you, in print and on the
              web.
            </Typography>
          </Typography>
        </Container>
      </Section>
    </Layout>
  )
}

export default AboutPage
