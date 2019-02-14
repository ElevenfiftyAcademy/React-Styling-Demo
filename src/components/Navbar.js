import React from 'react';

class Sitebar extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <nav>
            <div href="/"  >ORION</div>
            <button onClick={this.toggle} />
            <div isOpen={this.state.isOpen} navbar>
              <nav className="ml-auto" navbar>
                <ul>
                  <li>
                    <a href="/components/" >SHOP</a>
                  </li>
                  <li>
                    <a href="https://github.com/reactstrap/reactstrap"  >FAQ</a>
                  </li>
                  <li>
                    <a href="https://github.com/reactstrap/reactstrap"  >SUPPORT</a>
                  </li>
                  <li>
                    <a href="https://github.com/reactstrap/reactstrap"  >MAINTENANCE</a>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      );
    }
}

export default Sitebar;