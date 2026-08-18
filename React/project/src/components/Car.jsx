import React, { Component } from 'react'

export default class
    extends Component {

        constructor(){
            super()
            this.state={
                carname:"Polo GT"
            }
        }
    update(name){
        this.setState({carname:name})
        
    }
    render() {
        return (
            <div>
                <div className='m-5'>
                    <input onChange={(e)=>this.update(e.target.value)} type="text" placeholder='enter a car name' className='form-control m-5' />
                </div>
                <div className='p-5 bg-warning'>
                    <h3>Car Name:{this.state.carname}</h3>
                </div>
            </div>
        )
    }
}
