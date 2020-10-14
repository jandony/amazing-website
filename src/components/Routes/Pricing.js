import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";

// import Material UI components
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function Pricing() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);

  const getPosts = () => {
    fetch(`http://localhost:8888/ReactWP/wp-json/wp/v2/posts?_embed`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setPosts(responseJSON);
        console.log(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPages = () => {
    fetch(`http://localhost:8888/ReactWP/wp-json/wp/v2/pages?_embed`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setPages(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
    getPages();
  });

  return (
    <Animated
      animationIn="fadeIn"
      animationInDelay={1000}
      animationInDuration={1000}
    >
      <section id="pricing">
        <h1>Pricing Page</h1>
        <Container maxWidth="md">
          <h2>Posts:</h2>
          {posts.map((item, i) => (
            <Card elevation={3} style={{ marginBottom: "1rem" }}>
              <CardContent>
                <Grid container direction="row" alignItems="center">
                  <Grid item sm={12} lg={4}>
                    <img
                      key={i}
                      src={item._embedded["wp:featuredmedia"]["0"].source_url}
                      alt="post"
                      height="auto"
                      width="100%"
                    />
                  </Grid>
                  <Grid item sm={12} lg={8} className="pricing-content">
                    <h3 key={i}>{item.title.rendered}</h3>
                    {item.acf.section1 ? (
                      <p>{item.acf.section1.excerpt}</p>
                    ) : (
                      ""
                    )}
                    <Button
                      href={`http://localhost:8888/ReactWP/wp-json/wp/v2/posts/${item.id}/?_embed`}
                      variant="contained"
                      color="secondary"
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
          <h2>Pages:</h2>
          {pages.map((item, i) => (
            <Card elevation={3} style={{ marginBottom: "1rem" }}>
              <CardContent>
                <Grid container direction="row" alignItems="center">
                  <Grid item sm={12} lg={4}>
                    <img
                      key={i}
                      src={item._embedded["wp:featuredmedia"]["0"].source_url}
                      alt="post"
                      height="auto"
                      width="100%"
                    />
                  </Grid>
                  <Grid item sm={12} lg={8} className="pricing-content">
                    <h3 key={i}>{item.title.rendered}</h3>
                    <p>{item.content.rendered}</p>
                    <Button
                      href={`http://localhost:8888/ReactWP/wp-json/wp/v2/pages/${item.id}/?_embed`}
                      variant="contained"
                      color="secondary"
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Container>
      </section>
    </Animated>
  );
}
