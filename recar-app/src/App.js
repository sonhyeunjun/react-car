import React, { Component } from 'react';
import axios from 'axios';
import Student from './components/Student.js';
import SearchForm from './components/SearchForm.js';

let global_render; // 전역


class App extends Component {
  constructor(props) {
    console.log('gd');
    super(props);
    this.state = {
      renderCall: 0,
      // 학생 리스트
      StudentList: []

    }
  }
  //state 객체는 내부에서 변화하는 값을 저장하는 하나의 공간
  // 외부로 데이터를 전달해주기 위한(외부로부터 데이터를 전달받기 위한) props
  //this.state는 클래스 컴포넌트 내부에서 변화하는 값을 담은 객체로 반드시 constructor에서 선언해주어야 한다. 
  _getStudentInfo = async () => {
    const res = await axios.get('/api/getStudentInfo');
    console.log(res);

    //
    const student_data = res.data.student;
    console.log("학생 수 ", student_data.length);

    var StudentObj = null;

    for (var i = 0; i < student_data.length; i++) {
      StudentObj = new Object();
      StudentObj.id = student_data[i].id;
      StudentObj.name = student_data[i].name;
      StudentObj.score = student_data[i].score;
      StudentObj.hwname = student_data[i].hwname;
      this.setState({ StudentList: this.state.StudentList.concat(StudentObj) });
      StudentObj = null;

      //this.state내부의 값을 변경할 때에는 반드시 this.setState를 사용해야 한다. 
      //직접적으로 this.state의 값을 변경해선 안된다.
    }
  }

  //외부 API 호출이 필요
  componentDidMount() {
    this._getStudentInfo();
  }


  nameSearch = (name) => {
    alert("사람 찾기");
    alert(name);
    const { StudentList } = this.state;
    const StudentFiltered = StudentList.filter((data) => {
      return data.name === name;
    });
    console.log(StudentFiltered);
    global_render = StudentFiltered.map((data, i) =>

      <Student key={data.id} id={data.id} name={data.name} score={data.score}
        hwname={data.hwname}>
      </Student>)

    console.log(global_render);

    this.setState({ renderCall: this.state.renderCall++ });
  }
  allSearch = () => {
    alert("전제 찾기");
    const { StudentList } = this.state;
    global_render = StudentList.map((data, i) =>

      <Student key={data.id} id={data.id} name={data.name} score={data.score}
        hwname={data.hwname}>
      </Student>)
    console.log(global_render);

    this.setState({ renderCall: this.state.renderCall++ });
  }

  render() {



    return (
      <div>

       
        <SearchForm
          nameSearch={this.nameSearch}
          allSearch={this.allSearch}>

        </SearchForm>
        {global_render}
      </div>
    );

  }
}

export default App;