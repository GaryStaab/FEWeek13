import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className = 'container border border-3 border-dark bg-primary' style={{height: '500px'}}>
                <div className = "">
                    <div className="row">
                        <h3 className = "col-12 d-flex justify-content-center">Log In</h3>
                    </div>
                    <form>
                    <div className="row">
                            <div className = "col-sm-6">
                                <label>
                                    User Name:
                                    <input type="text" name="userName" />
                                </label>
                            </div>
                            <div className = "col-sm-6">
                                <label>
                                    Password:
                                    <input type="password" name="password" />
                                </label>
                            </div>
                    </div>
                    <div className="row">
                        <p></p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="row d-flex justify-content-center">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}