import React, { Component } from 'react';

class Question extends Component{
    constructor(props){
        super(props)
        this.state ={
            show: false
        }
    }
    handleClick(e){
        this.setState({ show: !this.state.props})
    }
    render(){
        const item = this.props.item
        const show = this.props.item
        var list
        if(show){
            list = (
                <div>
                <List question_id={item.id}/>
                <button onClick={(e)=>this.handleClick(e)}>Hide answers</button>
                </div>
            )
        }else{
            list = (
                <button onClick={(e)=>this.handleClick(e)}>Show answers</button>
            )
        }
        return(
            <div>
                <h4>{item.question}</h4>
                <h6>{item.author}</h6>
                {list}
            </div>
        );
    }
}

export default Question;