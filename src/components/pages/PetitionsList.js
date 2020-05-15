import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class PetitionsList extends PureComponent {

    render() {
        return (
            this.props.petitions.map((item, key) =>
                <div className="col-md-4 col-xl-4 petition__item_wrap" key={key}>
                    <div className="petition__item">
                        <div className="sliders">
                            <Link to={"/petitions/" + item.id}>
                                <img className="img-responsive"
                                    src={"http://pider/server" + item.image.src} />
                            </Link>
                        </div>

                        <div className="petition__footer">

                            <div className="petition__name-wrap">
                                <Link className="petition__name petition__name-link" to={"/petitions/" + item.id}>
                                    <span>№{item.id} </span>
                                    <span>{item.title}</span>
                                </Link>
                            </div>

                            <div className="petition__box active" style={{ display: "flex" }}>
                                <div className="progress__count">
                                    <div className="progress__min">0</div>
                                    <div className="progress__max">{item.max_voice}</div>
                                </div>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="progress-bar"
                                        role="progressbar"
                                        style={{ width: (item.real_voice / item.max_voice * 100 + "%") }}>0%
                                            </div>
                                </div>
                                <div className="signature">
                                    <div className="signature__icn icn-pet-pen"></div>
                                    <div className="signature__text">
                                        Зібрано підписiв:
                                                <span className="signature__count">{item.real_voice}</span>
                                    </div>

                                </div>
                                <div className="days-left">
                                    <div className="days-left__icn icn-pet-time"></div>
                                    <div className="days-left__count">88</div>
                                    <div className="days-left__text">днів</div>
                                </div>
                            </div>


                            <div className="status active" style={{ display: "none" }}>
                                <div className="status__result-text">
                                    <div className="status__icn icn-done"></div>
                                    <div className="status__text">Зібрано
                                            <span>10000+</span> підписів
                                        </div>
                                </div>
                                <div className="status__type type">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            )
        )
    }
}