import React from 'react'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state).then( () => this.props.history.push('/chirps'))
    }

    render(){
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    <label htmlFor=""> Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                    <label htmlFor=""> Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <label htmlFor=""> Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>SignUp</button>
                </form>

            </div>
        )
    }
}