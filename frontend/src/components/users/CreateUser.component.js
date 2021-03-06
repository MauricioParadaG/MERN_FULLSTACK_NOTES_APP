import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUserComponent extends Component {

    state ={
        users:[],
        name:'',
        email:'',
        password:''
    }

    componentDidMount(){
        this.getUsers();
        //console.log(this.state.users);
      }

    getUsers = async () => {
      const res = await axios.get('http://localhost:4000/api/users');
      this.setState({users: res.data});
    }

    onChangeName = event => {
       this.setState({
        [event.target.name]: event.target.value
       })        
    }

    onSubmit = async event =>{
        event.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
        //console.log(res);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
        this.getUsers();
    }

    deleteUser = async (id) =>{
        await axios.delete('http://localhost:4000/api/users/'+ id);
        //console.log(id);        
        this.getUsers();
    }   

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <input type="text"
                                name= "name"
                                placeholder="name"
                                className="from-control" onChange={this.onChangeName}
                                value={this.state.name}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                name= "email"
                                placeholder="email" 
                                className="from-control" onChange={this.onChangeName}
                                value={this.state.email}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                name= "password"
                                placeholder="********"
                                className="from-control" onChange={this.onChangeName}
                                value={this.state.password}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Create
                            </button>

                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => <li className="list-group-item list-group-item-action" 
                            key={user._id}
                            onDoubleClick={() => this.deleteUser(user._id)}
                            >

                                {user.name}
                               </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
