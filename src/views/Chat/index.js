import React,{ Component } from 'react'
import { connect } from 'react-redux'

class Chat extends Component{
    render(){
        return (
            <section>
                Hello
            </section>
        )
    }
}

export default connect(
    state => ({
        chat: state.chat
        
    }),
    dispatch => ({

    })
)(Chat)