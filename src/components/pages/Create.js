import React, { Component } from 'react'
import Create_Form from './helpers/Create_Form'
import axios from 'axios'
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'

 class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            colors: [],
            date: new Date(),
            s_date: undefined
        }
        this.onImageChange = this.onImageChange.bind(this)
    }

    state = {}
    UPLOAD_ENDPOINT = 'http://pider/server/admin/image';
    onSubmit = async (e) => {
        e.preventDefault()

        var date = this.state.date

        this.setState({
            s_date: date.toLocaleDateString("en-US")
        })

        await this.saveProduct(this.state.file);
    }

    onDateChange = (date) => {
        this.setState({
            date
        })
    }

    onImageChange(e) {

        this.setState({ file: e.target.files[0] })

    }

    async saveProduct(file) {

        const formData = new FormData();

        // console.log(this.state)

        formData.append('avatar', file)

        return await axios.post(this.UPLOAD_ENDPOINT, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(async (res) => {
            console.log(res)
            var path = JSON.parse(res.data).path
            await axios.post(`http://pider/server/admin/create_petition`, JSON.stringify({
                petition: this.state,
                user_id: cookie.load('user').id,
                imagePath: path
            }))
                .then(res => {
                    this.props.history.push('/petitions/' + JSON.parse(res.data).id)
                })
        });
    }

    onChange = (e) => {
        if (e.target !== undefined) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    render() {
        return (
            <main className="content">
                <section className="make-petition" id="make-petition">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12">
                                <h2 className="h1 mt-60 mb-40">Створити петицію</h2>
                            </div>
                            <div className="col-12 col-lg-10">
                                <Create_Form
                                    onSubmit={this.onSubmit}
                                    onChange={this.onChange}
                                    onImageChange={this.onImageChange}
                                    date={this.state.date}
                                    onDateChange={this.onDateChange}
                                />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        )
    }

}

export default withRouter(Create)