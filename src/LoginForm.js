import React, {Component} from 'react';

class LoginForm extends Component {

    sendAlert() {
        alert("Losing Security");
    }

    render() {
        return(
        <form>
            <h1>Log in to Twit-R</h1>
            <div class="form-group">
                <input type="email" placeholder="Email Address"/>
            </div>  
            <div class="form-group">
                <input type="password" placeholder="Password"/>
            </div>
            <div>
                <input type="checkbox"/>
                <label>Remember Me </label>
                <button onClick={this.sendAlert} type="submit">Log In</button>
            </div>
        </form>
        )
    }
}

export default LoginForm;