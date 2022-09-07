import React, { Component } from "react";


class SearchForm extends Component{
    constructor(props){
        console.log("찾기");
        super(props);
        this.state={
            name:'',
        }
    }
    // 조건 검색
    nameSearch=()=>{
        const {name} = this.state;
        this.props.nameSearch(name);
    }
    // 전체 찾기
    allSearch=()=>{
        this.props.allSearch();
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        <div>
                            <select>
                                <option value="name">이름</option>
                            </select>
                        </div>
                    </div>
                    <div id="input-form">
                        <input type="text" placeholder="입력" onChange={this.handleChange} name = "name"></input>
                        <button onClick={this.nameSearch}>조건검색</button>
                        <button onClick={this.allSearch}>모두 조회</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchForm;