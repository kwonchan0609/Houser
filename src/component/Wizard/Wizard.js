import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        }
        this.addList=this.addList.bind(this)
    }
    updateName(val){
        this.setState({name:val})
    }
    updateAddress(val){
        this.setState({address:val})
    }
    updateCity(val){
        this.setState({city:val})
    }
    updateState(val){
        this.setState({state:val})
    }
    updateZipcode(val){
        this.setState({zipcode:val})
    }
    addList(){
        axios.post('/api/house').then(result=>{
            this.setState({
                name:result.data.name,
                address:result.data.address,
                city:result.data.city,
                state:result.data.state,
                zipcode:result.data.zipcode
            })
           
        })
    }
    render(){
        return(
            <div>
                 <Link to= '/'><button>Cancel</button></Link>
                <input onChange={(e)=>this.updateName(e.target.value)}></input>
                <input onChange={(e)=>this.updateAddress(e.target.value)}></input>
                <input onChange={(e)=>this.updateCity(e.target.value)}></input>
                <input onChange={(e)=>this.updateState(e.target.value)}></input>
                <input onChange={(e)=>this.updateZipcode(e.target.value)}></input>
                <button onClick={this.addList}> Complete</button>

            </div>
        )
    }
}

export default Wizard