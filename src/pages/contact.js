import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Box, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "./../components/layout"
import GridColorBar from "./../components/GridColorBar"
import Section from "./../components/Section"

const useStyles = makeStyles(theme => ({
  title: {
    display: "inline-block",
    marginBottom: theme.spacing(10),
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Section>
        <Container>
          <Grid container alignItems="center" justify="center" spacing={10}>
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
                  <Typography paragraph>
                    <Box component="span" color="common.orange">
                      View in Google Maps
                    </Box>
                  </Typography>
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
          </Typography>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage
