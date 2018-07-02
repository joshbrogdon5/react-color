import React, { Component } from 'react';

class Square extends Component {
    constructor(){
        super()
        
        this.state = {
            backgroundColor: 'white'
        }
    }

    updateColor(){
        if(this.props.isPainting){
        this.setState({backgroundColor: this.props.selectedColor})
        }
    }

   
 

    render(){
        return(
            <div style={{
                backgroundColor: this.state.backgroundColor,
                border: '1px solid black',
                width: 10,
                height: 10
            }}
            onMouseEnter={() => this.updateColor()}>
                
            </div>
        )
    }

}

export default Square;