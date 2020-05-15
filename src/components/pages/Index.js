import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PetitionsList from './PetitionsList'

export default class Index extends Component {

    state = {
        petitions: []
    }

    componentDidMount = async () => {
        await axios.get(`http://pider/server/admin/all_petitions`)
            .then(res => {
                this.setState({
                    petitions: res.data
                })
            })
    }

    render() {
        return (
            <section className="petitions-list">
                <div className="container">

                    <div className="row" id="page__petition__item">
                        {this.state.petitions &&
                            <PetitionsList petitions={this.state.petitions} />
                        }


                    </div>
                </div>

            </section >
        )
    }

}

// /div>
//   </div>
//   </div >
//             <div className="row text-center">
//                 <div className="col-12 text-center">
//                     <button className="btn btn-search-pet-list text-center " id="more-pet-list" onclick="return loadPetitionsListMore();"
//                         style='display:block' type="submit">Ще
//                         петиції
//       </button>
//                 </div>
//             </div>
//   </div >