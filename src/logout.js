import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'

export default class logout extends Component {
    //  history = useHistory();
    componentWillMount(){
        sessionStorage.removeItem('login')
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
