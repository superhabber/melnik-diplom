import React, { Component } from 'react'
import DatePicker from 'react-date-picker'

export default class Create_Form extends Component {

    state = {
        date: ""
    }

    componentDidMount() {
        var date = new Date(Date.now()); // M-D-YYYY

		var d = date.getDate();
		var m = date.getMonth() + 1;
		var y = date.getFullYear();

        var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
        
        this.setState({
            date: dateString
        })
    }

    render() {
        return (
            <form onChange={this.props.onChange} onSubmit={this.props.onSubmit} className="form form-pet-create mb-60">
                <div id="etap01" style={{ display: "block" }}>
                    <div className="form-group">
                        <div className="msg__warning">
                            Увага! Рекомендуємо перед створенням переконатись, що петиції на таку тему ще не існує
                                    <p>
                                <small>Електронна петиція не може містити заклики до повалення конституційного ладу,
                                порушення територіальної цілісності України, пропаганду війни, насильства,
                                жорстокості, розпалювання міжетнічної, расової, релігійної ворожнечі,
                                заклики до вчинення терористичних актів, посягання на права і свободи людини,
                                права і законні інтереси громадян, а також інформацію, яка містить ненормативну лексику,
                                матеріали та висловлювання, які містять передвиборчу агітацію, рекламу товарів, робіт та послуг,
                    а також конфіденційну інформацію щодо третіх осіб.</small></p>
                        </div>
                    </div>

                    <div className="form-group">
                        <div id="similarItemsCont" style={{ display: "none" }}>
                            <h4>Схожі петиції</h4>
                            <p>Можливо, така петиція вже існує? Підпишіть та допоможіть поширити її.</p>
                            <div id="similarItems"></div>
                        </div>
                    </div>


                    <div className="form-group form-group-text">
                        <div className="name">
                            <h3>Назва петиції</h3>
                            <span>( від 20 до 200 символів )</span>
                        </div>
                        <div className="pet-calend">
                            <span className="icn icn-calendar"></span> Дата петиції: { this.state.date }
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea className="textarea-1" data-alert="Заповніть назву петиції" id="petition_name" maxLength="199" name="petition_name" placeholder="Що потрібно зробити?" rows="2" style={{ height: "60px" }} required></textarea>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="main_image">Фотографія вашої петиції</label>
                        <input type="file" className="form-control" onChange={this.props.onImageChange} required />
                    </div>

                    <div className="form-group form-group-text">
                        <div className="name">
                            <h3>Опис</h3>
                            <span>( чому це важливо? )</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea className="textarea-2 validate-ignore" id="petition_descr" maxLength="9000" name="petition_descr" placeholder="Вкажіть опис петиції" required></textarea>
                    </div>

                    <div className="form-group form-group-text">
                        <div className="name">
                            <h3>Потрібна вам кількість голосів</h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="number" name="max_voice" min="1" defaultValue="1" required />
                    </div>

                    <DatePicker
                        onChange={this.props.onDateChange}
                        value={this.props.date}
                    />


                    <div className="form-group">

                        <input name="nextBtn" type="submit" className="btn btn-orange btn-addpet" id="nextBtn" value="Продовжити" />
                    </div>
                    <div className="form-group">
                        <p id="validationMss"></p>
                    </div>
                </div>

            </form>
        )
    }

}