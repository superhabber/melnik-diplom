import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer_top">
                    <a className="main-logo">
                        <div className="icon"></div>
                        <div className="main-logo__text">
                            <span>ncntu.com.ua</span>
                            <span className="light">НКНТУ</span>
                        </div>
                    </a>
                </div>
                <div className="hr"></div>
                <div className="hr"></div>
                <div className="footer_content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <nav className="nav">
                                    <Link className="nav__link" to="/">Петиції</Link>
                                    <Link className="nav__link" to="/create">Створити петицію</Link>
                                    <Link className="nav__link" to="/search">Пошук петиції</Link>
                                    <Link className="nav__link" to="/about">Про сервіс</Link>
                                </nav>
                            </div>
                            <div className="col-lg-5">
                                <h3 className="main_headline">Служба підтримки користувачів сервісу</h3>
                                <nav className="nav-info">
                                    <ul className="nav-info__list">
                                        <li className="nav-info__item">
                                            <span>телефон:
                    <a href="tel:0443668014">(066) 745-12-23</a>
                                            </span>
                                        </li>
                                        <li className="nav-info__item">
                                            <span>електронна пошта:
                    <a href="mailto:ncntu@ukr.net">ncntu@ukr.net</a>
                                            </span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 logo-wrap">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text">
                                            © Мельник Андрій
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </footer>
        )
    }

}