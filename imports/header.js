// @flow
// Get React and Head to populate <head />
import React from "react";
import Head from "next/head";

// Import material-ui and all icons.
import {AppBar, Toolbar, Typography as Text, IconButton, Button} from "material-ui";
import GitHubLogo from "../imports/github-logo";

// Type out our props.
type Props = {
  homeButton?: React.createElement
}

// Export our page header.
const Component = (props: Props) => (
  <div>
    <Head>
      <title>{props.homeButton ? "Chess - RSG-Group" : "RSG-Group"}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
    </Head>
    <AppBar position="fixed">
      <Toolbar>
        {props.homeButton ? props.homeButton : ""}
        <Text type="title" color="inherit" style={{width: "200em"}}>RSG-Group</Text>
        <div style={{width: "400em"}}/>
        <Button
          title="Fork me on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RSG-Group/website"
          color="contrast"
          style={{width: "50em"}}
        >Fork Me
        </Button>
        <a href="https://github.com/RSG-Group" title="Our GitHub Page" target="_blank" rel="noopener noreferrer">
          <IconButton color="contrast"><GitHubLogo/></IconButton>
        </a>
      </Toolbar>
    </AppBar>
    <br/> <br/> <br/> <br/>
  </div>
);

Component.defaultProps = {
  homeButton: false
};

export default Component;