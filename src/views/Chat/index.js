import React,{ Component } from 'react'
import { connect } from 'react-redux'
import plane from '../../icons/Chat-paper-plane.png'

import './Chat.scss'

const Prompt = ({onSend, onChange, refer}) => (
    <div id='prompt'>
        <input onKeyUp={onChange} ref={refer} />
        <button onClick={onSend}>
            <img src={plane} alt="Send message"/>
        </button>
    </div>
)

class Chat extends Component{
    inputRef = React.createRef()
    chatRef = React.createRef()
    state = {
        text: '',
        texts: []
    }
    send = e => {
        if (!this.state.text) {
            return
        }
        this.setState({
            texts:[ ...this.state.texts, {
                content: this.state.text,
                author: this.props.user.address
            }],
            text:''
        })
        this.inputRef.current.value = ''
        setTimeout(() => {
            console.log('object :', this.chatRef.current);
            this.chatRef.current.scroll(0,this.chatRef.current.scrollHeight)
        }, 0);
    }
    changeText = e => {
        if ( e.keyCode === 13 ) {
            this.send(e)
        }else{
            this.setState({text: e.target.value})
        }
    }
    render(){
        return (
            <section id='chat'>
                <div id='messages' ref={this.chatRef}>
                    {this.state.texts.map((t,i)=>(
                        <div key={i}>
                            {t.content}
                        </div>
                        ))
                    }
                </div>
                <Prompt refer={this.inputRef} onSend={this.send} onChange={this.changeText} />
            </section>
        )
    }
}

export default connect(
    ({chat,user}) => ({
        chat,
        user
    }),
    dispatch => ({

    })
)(Chat)