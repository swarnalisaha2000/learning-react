import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments :'',
             select : 'react'
        }
    }
    
    UsernameChange = event => {
        this.setState({
            username : event.target.value
        })
    }

    CommentsChange = event => {
        this.setState({
            comments : event.target.value
        })
    }

    SelectChange = event => {
        this.setState({
            select : event.target.value
        })
    }
    handleSubmit = event => {
        alert(` ${this.state.username} ${this.state.comments} ${this.state.select}`)
        event.preventDefault()
    }
    render() {
        const { username, comments, select} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                   
              
            <div>
               <label>Username</label>
               <input type='text' value={username} onChange={this.UsernameChange} />
            </div>
            <div>
                <label for="comments">Comments</label>
                <textarea value={comments} onChange={this.CommentsChange}></textarea>
            </div>
            <div>
                <label for="select" >Select options</label>
                <select value={select} onChange={this.SelectChange}>
                <option value="react" >React</option>
                <option value="vue" >vue</option>
                <option value="angular" >angular</option>
                </select>
                
            </div>
            <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
