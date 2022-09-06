import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      
    }
  }

  _getCarInfo = async() => {
    const res = await axios.get('/api/getCarInfo');
    console.log(res);
  }

  componentDidMount() {
    this._getCarInfo();
  }

  render() {
   
    return(
      <div>
        App
      </div>
    );

  }
}

export default App;