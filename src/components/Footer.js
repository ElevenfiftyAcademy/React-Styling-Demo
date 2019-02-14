//MATERIAL UI
import React from 'react';

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <footer value={value} onChange={this.handleChange} showLabels className="classesroot">
        <ul>
          <li className="shoppingCartIcon" label="SHOP">SHOP
          </li>
          <li className="questionAnswerIcon" label="FAQ">FAQ
          </li>
          <li className="contactSupportIcon" label="SUPPORT">SUPPORT
          </li>
          <li className="buildIcon" label="Maintainance">MAINTAINANCE
          </li>
          <li className="permContactCalendarIcon" label="CONTACT">CONTACT
          </li>
        </ul>
      </footer>
    );
  }
}


export default Footer;