import { connect } from '@holochain/hc-web-client'

const Hc = ({ functionName , params = {} , callback = _ => {} }) => {
    let promise = connect({url: "ws://35.239.195.221:8888"})
    promise.then(({callZome, close}) => {
        callZome('test-instance', 'messaging' , functionName )( params ).then((result) => {
            result = JSON.parse(result)
            console.log(`HC CALL: ${functionName}, received `, result)
            callback(result)
            close()
        })
    })
}

export default Hc