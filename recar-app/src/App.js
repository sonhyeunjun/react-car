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
        이 실습시간에 만들어보기
      </div>
    );

  }
}

export default App;