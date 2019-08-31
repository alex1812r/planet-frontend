import React,{ Component } from 'react'
import { connect } from 'react-redux'
import plane from '../../icons/Chat-paper-plane.png'
import Hc from '../../Helpers/HoloChain'

import './Chat.scss'

const Prompt = ({onSend, onChange, refer, disabled}) => (
    <div id='prompt'>
        <input onKeyUp={onChange} ref={refer} disabled={disabled} />
        <button onClick={onSend} disabled={disabled} >
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
    componentDidMount(){
        if (this.props.id) {
            this.updateChat()
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (!this.props.id) {
            return
        }
        if ( prevProps.id !== this.props.id ) {
            this.updateChat()
        }
    }
    updateChat = () => {
        Hc({
            functionName: 'get_messages_from_channel',
            params: { channel: this.props.id },
            callback: data => {
                if (data.Err) {
                    console.log('HC Error: ', data.Err)
                } else {
                    this.setState({
                        texts: data.Ok
                    })
                }
            }
        })
    }
    send = e => {
        if (!this.state.text) {
            return
        }
        const text = this.state.text
        this.setState({
            texts:[ ...this.state.texts, {
                entry: {
                    content: text,
                    author: this.props.user.address
                }
            }],
            text:''
        })
        this.inputRef.current.value = ''
        setTimeout(() => {
            this.chatRef.current.scroll(0,this.chatRef.current.scrollHeight)
        }, 0);
        Hc({
            functionName: 'send_message',
            params: { entry: { content: text }, channel_address: this.props.id },
            callback: () => {
                this.updateChat()
            }
        })
    }
    changeText = e => {
        if ( e.keyCode === 13 ) {
            this.send(e)
        }else{
            this.setState({text: e.target.value})
        }
    }
    render(){
        const messages = this.state.texts
        let currentChannel = this.props.id && this.props.channels.length > 0 && this.props.channels.filter(c=>c.address===this.props.id)[0]
        return (
            <section id='chat'>
                <h2>{currentChannel && currentChannel.entry.title}</h2>
                <div id='messages' ref={this.chatRef}>
                    {
                        this.props.id ?
                            messages.length?
                                messages.map((t,i)=>(
                                    <div key={i}>
                                        {t.entry.content}
                                    </div>
                                    ))
                            :
                                <section>Say hello!</section>
                        :
                            <section>Select a chat to start</section>
                    }
                </div>
                <Prompt disabled={!this.props.id} refer={this.inputRef} onSend={this.send} onChange={this.changeText} />
            </section>
        )
    }
}

export default connect(
    ({chat, user, channels}) => ({
        chat,
        user,
        channels
    }),
    dispatch => ({

    })
)(Chat)