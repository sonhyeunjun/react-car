import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      
    }
  }

  _getStudentInfo = async() => {
    const res = await axios.get('/api/getStudentInfo');
    console.log(res);
  }

  componentDidMount() {
    this._getStudentInfo();
  }

  render() {
   
    return(
      <div>
        학생(성적,과목) 데이터 불러오기
      </div>
    );

  }
}

export default App;