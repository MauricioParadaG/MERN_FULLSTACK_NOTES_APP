import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUserComponent extends Component {

    state ={
        users:[],
        name:'',
        email:'',
        password:''
    }

    onChangeName = event => {
       this.setState({
        [event.target.name]: event.target.value
       })        
    }

    async componentDidMount(){
      const res = await axios.get('http://localhost:4000/api/users');
      this.setState({users: res.data});
      console.log(this.state.users);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form>

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

                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => <li className="list-group-item list-group-item-action" 
                            key={user._id}>
                                {user.name}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
