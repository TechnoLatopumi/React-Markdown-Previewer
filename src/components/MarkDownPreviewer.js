import React from "react";
import { marked } from "marked";
import Panel from "./Panel";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../index.css";

const defaultInput = `# Welcome to my React Markdown Previewer!
## This is a subheading!
### This is my Project for Front End Libraries Certification

Testing a line break
here is the second line

Here's an example of a [link](https://github.com/TechnoLatopumi)

This is some _inline_ sample code \`<div>Hello World!</div>\`

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == \"\`\`\`\" && lastLine == \"\`\`\`\") {
    return multiLineCode;
  }
}
\`\`\`

How about some **list items** next:

- List item 1
-- Sub list item
- List item 2

> Look, a block quote!

### Last _but not least_:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export default class MarkDownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    this.setState({ input: defaultInput });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  createMarkup() {
    console.log(marked(this.state.input));
    return { __html: marked(this.state.input, { breaks: true }) };
  }

  render() {
    return (
      <React.Fragment>
        <Panel
          component={
            <textarea
              id="editor"
              value={this.state.input}
              onChange={this.handleChange}
            ></textarea>
          }
          title={"Editor"}
        />
        <Panel
          component={
            <div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />
          }
          title={"Previewer"}
        />
        <footer id="footer">
          <a href="https://github.com/TechnoLatopumi">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          Made by Tegar D Pradana
        </footer>
      </React.Fragment>
    );
  }
}
