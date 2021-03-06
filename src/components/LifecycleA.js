// for MOUNTING
// import React, { Component } from 'react'
// import LifecycleB from './LifecycleB'

// class LifecycleA extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name: 'Kritika'
//         }

//         console.log('LifecycleA Constructor')
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('LifecycleA getDerivedStateFromProps')
//         return null
//     }

//     componentDidMount(){
//         console.log('LifecycleA componentDidMount')
//     }
    
//     render() {
//         console.log('LifecycleA render')
//         return (
//             <div>
//                 <div>
//                     Lifecycle A
//                 </div>
//                 <LifecycleB/>
//             </div>
//         )
//     }
// }

// export default LifecycleA


// for UPDATING

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kritika'
        }

        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(prevProps, prevStates){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevStates){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Bandekar'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>
                    Lifecycle A
                </div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
