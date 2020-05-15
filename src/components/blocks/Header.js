import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import cookie from 'react-cookies'

export default class Header extends Component {

    render() {
        return (
            <header id="layout-header">
                <section className="header header-bg">
                    <div className="header_top">
                        <div className="row justify-content-lg-between">
                            <div className="col-10 col-md-7 col-lg-5">
                                <Link to="/" className="logo">
                                    <div className="logo__icn">
                                        <img className="img-responsive" src="/assets/images/pizda.PNG" />
                                    </div>
                                    <div className="logo__text">
                                        <h3>
                                            НКНТУ
                  </h3>
                                        <span className="el-pettxt">
                                            Електронні петиції
                  </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-2 col-md-5 col-lg-5 d-flex flex-wrap align-items-center justify-content-end">
                                <button aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"
                                    className="btn navbar-toggler d-lg-none" data-target="#navbarToggler" data-toggle="collapse" type="button">
                                    <div id="simply-burger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                                <div className="user d-none d-lg-block">

                                    <div className="tool tool--login  js-tool--login">
                                        <Link to="/cabinet" className="tool__link " title="Особистий кабінет киянина">
                                            <img src="https://petition.kyivcity.gov.ua/images/tool__link-new.svg" alt="user-icon"
                                                className="tool__icon" />
                                            <span className="tool__text">Особистий кабінет {cookie.load('user') ? "(" + cookie.load('user').username.split(' ')[0] + ")" : ''}</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarToggler">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">
                                                    <span className="nav-link__icn all-pet"></span>
                                                    <span className="nav-link__text">Петиції</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/create" className="nav-link" >
                                                    <span className="nav-link__icn create-pet"></span>
                                                    <span className="nav-link__text">Створити петицію</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">
                                                    <span className="nav-link__icn about-pet"></span>
                                                    <span className="nav-link__text">Про сервіс</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item nav-item-search">
                                                <Link className="nav-link" to="/search">
                                                    <span className="nav-link__icn search-pet"></span>
                                                    <span className="nav-link__text">Пошук</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        )
    }

}