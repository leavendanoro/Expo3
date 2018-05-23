import React, { Component } from 'react';
import axios from 'axios';

class MiniForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: "",
            body: ""
        }
        this.handleCange = this.handleCange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleCange(event){
        const target = event.target
        const value = target.value
        const name = target.id
        
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const question_id = this.props.question_id
        url = ''
        if(question_id){
            url = 'htt´://question-api.herokuapp.com/questions/'+question_id+'/answers'
            axios.post(url, {
                author: {this.state.author},
                answer: {this.state.body}
            }).then((res) =>{
                res.json()
            }).catch((error)=>{
                console.log(error)
            })
        }else{
            url
        }
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="author"> Author: </label>
            <input id="author" type="text" onChange={this.handleCange}/>
            <label htmlFor="body"></label>
            <input id="body" type="text" onChange={this.handleCange}/>
            <input type="submit" value="Submit"/>
        </form>
    );
  }
}

export default MiniForm;
