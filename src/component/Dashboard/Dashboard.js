import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
           house:[]
        }
    }


componentDidMount(){
    axios.get('/api/houses').then(info=>{
        this.setState({house:info.data})
    })}
    deleteList(id){
        axios.delete('/api/house/:id').then(result=>{
            let {house}=this.state
            let i = house.findIndex(element=>element.id===house.id)
            house.splice(i,1)
        })
    }
    render(){
        const newHouse=this.state.house.map((list,i)=>(
            <h1 key={i}><House list={list} /></h1>
        ))
       
        return(
            <div>
               <Link to='/wizard'> <button > Add New Property</button></Link>
               {newHouse}
            </div>
        )
    }
}

export default Dashboard