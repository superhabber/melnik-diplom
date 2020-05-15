import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'

class View extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            subed: false
        }
    }

    componentDidMount = async () => {
        await axios.get(`https://yaroslav.decor-if.com.ua/melnik/admin/petition?id=` + this.state.id)
            .then(async (res) => {
                var petition = res.data, subed

                if (cookie.load('user')) {
                    await axios.get(`https://yaroslav.decor-if.com.ua/melnik/admin/sub_by_user?id=` + cookie.load('user').id + '&model_id=' + petition.id)
                        .then(res => {
                            subed = res.data
                        })
                }

                this.setState({
                    petition: petition,
                    subed: subed
                })

            })
        console.log(this.state.petition.real_voice / this.state.petition.max_voice * 100)
    }

    subPet = async (e) => {
        e.preventDefault()

        await axios.post(`https://yaroslav.decor-if.com.ua/melnik/admin/sub_petition`, JSON.stringify({
            user_id: cookie.load('user').id,
            model_id: this.state.petition.id
        }))
            .then(res => {
                this.setState({
                    subed: true
                })

            })
    }

    render() {
        return (
            <>
                {this.state.petition &&
                    <section className="petition-content pt-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 btn-add-pet-left">
                                    <div className="row">
                                        <a href="https://petition.kyivcity.gov.ua/makepetition/" className="btn-addpet-right ">створити петицію</a>
                                    </div>
                                </div>

                                <div className="col-lg-8" itemType="http://schema.org/Article" itemScope="">
                                    <div className="row">
                                        <div className="col-10 mb-40">
                                            <div className="petition__item">
                                                <div className="petition__slider-item" style={{ display: "block" }}>
                                                    <div className="item">
                                                        <img alt={this.state.petition.title} className="img-responsive" src={"https://yaroslav.decor-if.com.ua/melnik" + this.state.petition.image.src} />
                                                    </div>

                                                </div>
                                                <div className="petition__footer">
                                                    <div className="petition__name" itemProp="name">
                                                        <span className="petition__name--num" data-id="9427">№{this.state.petition.id} </span>
                                                        {this.state.petition.title}
                                                    </div>
                                                    <div className="petition__date-author">
                                                        <span className="pet-calend">
                                                            <div className="small-info">публікація:</div>
                                                            <div itemProp="datePublished" content="2020-02-14" className="info">
                                                                {this.state.petition.end_date}
                                                            </div>
                                                        </span>
                                                        <div className="petition__autohor">
                                                            <div className="small-info">Автор:</div>
                                                            <div itemProp="author" className="info">{this.state.petition.user.username}</div>
                                                        </div>
                                                    </div>
                                                    <div className="petition__box active" style={{ display: "flex" }}>
                                                        <div className="progress__count">
                                                            <div className="progress__min">0</div>
                                                            <div className="progress__max">{this.state.petition.max_voice}</div>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: (this.state.petition.real_voice / this.state.petition.max_voice * 100 + "%"), color: "white" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                                {this.state.petition.real_voice / this.state.petition.max_voice * 100 + "%"}
                                                            </div>
                                                        </div>
                                                        <div className="signature">
                                                            <div className="signature__icn icn-pet-pen"></div>
                                                            <div className="signature__text">
                                                                Зібрано
                                                            <span className="signature__count"> {this.state.petition.real_voice} </span>
                                                            підписів
                                                        </div>
                                                        </div>
                                                        <div className="days-left">
                                                            <div className="days-left__icn icn-pet-time"></div>
                                                            <div className="days-left__count">Днів залишилось: {this.state.petition.remain_days}</div>
                                                            <div className="days-left__text"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="petition__content">
                                                    <p>{this.state.petition.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 pet-sign">
                                    <div className="row">
                                        <div className="col-12">
                                            <div hidden="hidden" style={{ visibility: "hidden" }} className="box_responsible_person">
                                                <h5 className="text-center mt-40">Вiдповiдальна особа</h5>
                                                <ul>

                                                </ul>
                                            </div>
                                            <h5 className="text-center">Підписати петицію</h5>
                                            {this.state.petition.real_voice !== Number(this.state.petition.max_voice) ?
                                                (() => {
                                                    if (cookie.load('user') && this.state.subed === false && this.state.petition.remain_days !== 0) {
                                                        return (
                                                            <input type="button" onClick={this.subPet} className="btn btn-sign " id="confirmSMSBtn" style={{ marginTop: "0" }} value="Підписати" onclick="auBid(4);" />
                                                        )
                                                    } else if (cookie.load('user') && this.state.subed === true) {
                                                        return (
                                                            <h6 className="text-center">Петицію вже підписано</h6>
                                                        )
                                                    } else {
                                                        return (
                                                            <h6 className="text-center"><Link to="/login">Увійдіть, щоб підписати</Link></h6>
                                                        )
                                                    }
                                                })()
                                                :
                                                <>
                                                    <div className="text-center">
                                                        <h6>Петиція закрита</h6>
                                                    </div>
                                                </>
                                            }

                                            <p className="pet-sign__warning">
                                                Підтримуючи дану петицію, я надаю згоду НК НТУ на обробку
                                                моїх персональних даних для ідентифікації користувачів сервісу електронних петицій (відповідно до Закону України
                                                «Про захист персональних даних», Закону України «Про звернення громадян»)
                                            </p>


                                            <h5 className="text-center">
                                                Поширити у соціальних мережах
                                            </h5>

                                            <div className="share-wrap">
                                                <div className="share">
                                                    
                                                    <a className="customShare share__link share-fb" target="_blank" data-type="facebook" href={"https://www.facebook.com/sharer.php?u=" + window.location.href}>
                                                        <span className="icn"></span>
                                                        <span className="share__text">facebook</span>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div style={{ display: "block" }}>
                                        <h5 className="mb-40 mt-60">З цією петицією також підписують</h5>
                                        <div id="voteLinkCont" className="row also-signed">

                                            <div className="col-md-6 col-lg-3">
                                                <div className="also-signed__item mb-60">
                                                    <div className="also-signed__image">
                                                        <a href="https://petition.kyivcity.gov.ua/petition/?pid=9311"><img src="https://petition.kyivcity.gov.ua/uploaded/small/_6600888.jpg" className="img-responsive" /></a>

                                                    </div>
                                                    <div className="also-signed__lead">
                                                        <a href="https://petition.kyivcity.gov.ua/petition/?pid=9311">Встановити пам'ятник видатному  громадському діячу сучасності Коломойському І.В. (бо не важливо під яким пам'ятником зустрічатися).</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9" hidden="hidden" style={{ visibility: "hidden" }}>
                                    <div className="autorized-users-form">
                                        <p>Залишити коментар або питання</p>
                                        <ul>

                                        </ul>
                                        <div className="form-group personal-list">
                                            <form id="petition_author_comment" method="post">
                                                <textarea form="petition_author_comment" className="form-control" rows="5" id="comment" name="comment">
                                                </textarea>
                                                <button form="petition_author_comment" type="submit" className="btn btn-default" name="author_comment" data-button="submit-area">
                                                    Відправити
                            </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                }
            </>
        )
    }

}
export default withRouter(View)