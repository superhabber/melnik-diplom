import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login_errors: undefined,
            register_errors: undefined
        }
    }

    onSubmitLogin = async (e, email_ = null, pass = null) => {
        e.preventDefault()
        var email = e.target ? e.target.email.value : email_,
            pass = e.target ? e.target.pass.value : pass
        if (email_ && pass) {

            const user = {
                email: email,
                password: pass,
                login_errors: undefined
            }

            axios.post(`https://yaroslav.decor-if.com.ua/melnik/user/login`, JSON.stringify({
                email: user.email,
                password: user.password
            }))
                .then(res => {
                    var data = JSON.parse(res.data)
                    if (data.errors) {
                        this.setState({ login_errors: data.errors })
                    } else if (data.usertoken) {
                        cookie.save('usertoken', data.usertoken, { path: '/' })
                        this.props.setUserToken(data.usertoken)

                        axios.post(`https://yaroslav.decor-if.com.ua/melnik/user/data`, JSON.stringify({
                            token: cookie.load('usertoken')
                        }))
                            .then(res => {
                                cookie.save('user', res.data[0], { path: '/' })
                                return this.props.history.push('/cabinet')
                            })
                    }
                })
        } else {
            this.setState({ errors: "Some of inputs are empty" })
        }
    }

    onSubmitRegister = async (e) => {
        e.preventDefault()

        await axios.post(`https://yaroslav.decor-if.com.ua/melnik/user/register`, JSON.stringify({
            username: e.target.reg_name.value + ' ' + e.target.reg_pr.value,
            email: e.target.email.value,
            password: e.target.pass.value
        }))
            .then(res => {
                var data = JSON.parse(res.data)
                if (data.errors) {
                    this.setState({ register_errors: data.errors })
                } else {
                    this.onSubmitLogin(e, data.user.email, data.user.password);

                    this.setState({ register_errors: undefined })
                }
            })
    }

    render() {

        const login_errors = (
            <div>
                <div className="alert alert-danger" role="alert">
                    {this.state.login_errors}
                </div>
            </div>
        )

        const register_errors = (
            <div>
                <div className="alert alert-danger" role="alert">
                    {this.state.register_errors}
                </div>
            </div>
        )

        return (
            <div className="LoginComponent container">
                <div className="row">
                    <div className="col-6 mt-2 mb-2 pt-1 pb-1">

                        <form onSubmit={this.onSubmitLogin}>
                            <div className="text-center">
                                <h2>Авторизація</h2>
                            </div>
                            {this.state.login_errors !== undefined ? login_errors : ''}
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email адреса</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Введіть email адресу" />
                                <small id="emailHelp" className="form-text text-muted">Ми ні кому не передаємо вашу особисту поштову адресу.</small>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="pass" placeholder="Пароль" />
                            </div>

                            <button type="submit" className="btn btn-primary">Авторизуватись</button>
                        </form>

                    </div>
                    <div className="col-6 mt-2 mb-4 pt-1 pb-1">
                        <form onSubmit={this.onSubmitRegister}>
                            <div className="text-center">
                                <h2>Реєстрація</h2>
                            </div>
                            {this.state.register_errors !== undefined ? register_errors : ''}

                            <div className="form-group">
                                <label for="reg_name">Ім'я</label>
                                <input type="text" className="form-control" id="reg_name" name="reg_name" aria-describedby="emailHelp" placeholder="Введіть ім'я" />
                            </div>

                            <div className="form-group">
                                <label for="reg_pr">Прізвище</label>
                                <input type="text" className="form-control" id="reg_pr" name="reg_pr" aria-describedby="emailHelp" placeholder="Введіть прізвище" />
                            </div>


                            <div className="form-group">
                                <label for="exampleInputEmail1">Email адреса</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Введіть email адресу" />
                                <small id="emailHelp" className="form-text text-muted">Ми ні кому не передаємо вашу особисту поштову адресу.</small>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="pass" placeholder="Пароль" />
                            </div>

                            <button type="submit" className="btn btn-primary">Зареєструватись</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)