import React, { PureComponent } from 'react'
import axios from 'axios'
import PetitionsList from './PetitionsList'
import { withRouter } from 'react-router-dom'

class Search extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            query: props.match.params.query || ""
        }

    }

    componentDidMount = async () => {
        await this.searchByQuery()
    }

    // componentDidUpdate(prevState)  {
    //     if(prevState !== this.state) this.searchByQuery()
    // }

    searchByQuery = async () => {
        await axios.get(`https://yaroslav.decor-if.com.ua/melnik/admin/all_petitions?query=` + this.state.query)
            .then(res => {
                this.setState({
                    petitions: res.data
                })
            })
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            query: e.target.value
        }, () => {
            this.searchByQuery()
            return this.props.history.push('/search/' + this.state.query)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row col-md-12">
                    <div className="col-md-6 offset-md-3 mt-4 mb-4">
                        <input className="form-control mt-2 mb-2" defaultValue={this.state.query} onChange={this.onChange} name="query" placeholder="Search Query" />
                    </div>
                </div>
                <div className="row">
                    {this.state.petitions &&
                        <PetitionsList petitions={this.state.petitions} />
                    }
                </div>
            </div>
        )
    }

}

export default withRouter(Search)