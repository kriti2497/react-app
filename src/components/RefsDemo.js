import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.callBRef = null;
        this.setCallBRef = (element) => {
            this.callBRef = element;
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus();
        // console.log(this.inputRef);

        // when React unmounts callBRef will be null
        // when React is mounted, it will be some value
        if(this.callBRef){
            this.callBRef.focus()
        }
    }

    clickHandler = () => {
        //alert(this.inputRef.current.value)
        alert(this.callBRef.value)

    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCallBRef} />

                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
