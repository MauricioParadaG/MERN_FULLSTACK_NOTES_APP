import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

export default class CreateNoteComponent extends Component {

    state = {
        users:[],
        userSelected:'',
        title: '',
        content: '',
        date: new Date(),      
        editing: false,
        _id:''
    }

    async componentDidMount(){
        //console.log(this.props.match.params.id);
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.name),
            userSelected: res.data[0].name
        });
        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            //console.log(res.data);
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.user,
                editing:true,
                _id: this.props.match.params.id
            });
        }
    }

    onChangeNote = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onChangeDate = date => {
        this.setState({
           date: date
        });
    }

    onSubmit = async event => {
        event.preventDefault();

        const newNote = {
            user: this.state.userSelected,
            title: this.state.title,
            content: this.state.content,
            date: this.state.date
        };

        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/'+ this.state._id, newNote);
        } else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }

        window.location.href = '/';

       // console.log(res);
        //this.setState({
        //    title: '',
        //    content: '',
        //    date: new Date()
        //});
        //this.getUsers();

    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h3>Create New Note</h3>

                    {/** Select User */}
                    <div className="form-group">
                        <select className="form-control" name="userSelected"
                        onChange={this.onChangeNote}
                        value={this.state.userSelected}
                        required
                        >
                            {
                            this.state.users.map(user => 
                            <option key={user}
                            value={user}
                            >
                              {user}
                            </option>)
                             }
                        </select>
                    </div>
                {/** Form title, content, date */}
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <input type="text"
                                name="title"
                                placeholder="title"
                                className="from-control"onChange={this.onChangeNote}
                                value={this.state.title}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea  type="text"
                                name="content"
                                placeholder="content"
                                className="from-control"onChange={this.onChangeNote}
                                value={this.state.content}
                                required
                            ></textarea>
                        </div>

                        {/** DatePicker */}
                        <div className="form-group">
                            <DatePicker className="form-control"
                            onChange={this.onChangeDate}
                            selected={this.state.date}
                            />
                        </div>

                    {/** Button */}
                        <button type="submit"      className="btn btn-info btn-block">
                         Create
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}
