import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Hc from '../../Helpers/HoloChain'

import './ChatList.scss'

class ChatList extends React.Component {
    update(){
        Hc({
            functionName: 'get_all_channels',
            callback: channels=>{
                this.props.setChannels(channels.Ok)
            }
        })
    }
    componentDidMount(){
        this.update()
    }
    addChannel = e => {
        Hc({
            functionName: 'create_channel',
            params: {
                entry: {
                    title: prompt('select channel title'),
                    description: ''
                }
            },
            callback: _ => {
                this.update()
            }
        })
    }
    render = () => (
        <section id='chat-list'>
            <h3>Channels:</h3>
            <button onClick={this.addChannel}>Add Channel</button>
            {this.props.channels.map((c,i)=>(
                <Link key={i} to={'/chat/'+c.address}>
                    {c.entry.title}
                </Link>
                ))
            }
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChannels: data => dispatch({data,type:'SET_CHANNEL_LIST'})
    }
}
const mapStateToProps = ({channels}) => {
    return {
        channels
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatList)