import React, { Component } from "react";

//React에서 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 
//construcotr()를 사용 
//React의 Component의 생성자는 해당 Component가 마운트 되기 전 호출
//React.Component를 상속한 컴포넌트의 생성자를 구현할 때는 super(props)를 선언 
//이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 생기기 때문

class Student extends Component {
    constructor(props) {
        console.log('학생')
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            score: this.props.score,
            hwname: this.props.hwname,
        }
    }

    render() {
        const { id, name, score, hwname } = this.state;

        return (
            <div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{score}</div>
                <div>{hwname}</div>
            </div>
        );
    }
}

export default Student;