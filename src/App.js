import React, { PureComponent } from 'react'
import "./App.scss";
import Contact from './components/Contact/Contact';


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addContactHandler = (e) => {
    console.log(e);
    
  };

  render() {
    return (
      <div>
        <Contact addContactHandler={this.addContactHandler} />
      </div>
    )
  }
}

export default App
