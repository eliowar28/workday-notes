import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
class HtmlComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const html = this.props.body;
    return ReactHtmlParser(html) 
  }
}

export default HtmlComponent;