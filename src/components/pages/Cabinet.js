import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'

class Cabinet extends Component{

    componentDidMount(){
        if(cookie.load('user') === undefined) 
            return this.props.history.push('/login')
        console.log(cookie.load('user'))
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default withRouter(Cabinet)