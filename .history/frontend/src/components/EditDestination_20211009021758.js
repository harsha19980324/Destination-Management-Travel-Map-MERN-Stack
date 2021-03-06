import React, { Component } from 'react';
import axios from 'axios';

export default class EditDestination extends Component {

    constructor(props){
        super(props);

        this.state={
            title:"",
            description:"",
            description1:"",
            url:"",
            url1:"",
            image1:"", 

            titleError:'',
            descriptionError:'',
            description1Error:'',
            urlError:'',
            url1Error:'',
            image1Error:'' 
        };
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.validation();

        const id = this.props.match.params.id;
        const{title,description,description1,url,url1,image1} = this.state;

        const data ={
            title:title,
            description:description,
            description1:description1,
            url:url,
            url1:url1,
            image1:image1            
        }

        console.log(data)

        axios.put(`http://localhost:8800/destination/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Destination Updated successfully")
                this.setState({
                    title:"",
                    description:"",
                    description1:"",
                    url:"",
                    url1:"",
                    image1:""
                });
                
            }
        });

    }
    

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8800/destination/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    title:res.data.destination.title,
                    description:res.data.destination.description,
                    description1:res.data.destination.description1,
                    url:res.data.destination.url,
                    url1:res.data.destination.url1,
                    image1:res.data.destination.image1,
                    
                });

                console.log(this.state.post);
            }
        });
    }

    onChangeImage1=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:8800/destination/upload", data, { 
            }).then(res => { 
                this.setState({image1:res.data.filename})
            })
        })
    }

    


    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Destination</h1>

                    <form className="form-group" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Title</label>
                            <input type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter title"
                            value={this.state.title}
                            onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter Description"
                            value={this.state.description}
                            onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description1</label>
                            <input type="text"
                            className="form-control"
                            name="description1"
                            placeholder="Enter Description1"
                            value={this.state.description1}
                            onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Destination URL</label>
                            <input type="text"
                            className="form-control"
                            name="url"
                            placeholder="Enter URL"
                            value={this.state.url}
                            onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Video URL</label>
                            <input type="text"
                            className="form-control"
                            name="url1"
                            placeholder="Enter URL"
                            value={this.state.url1}
                            onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Image</label>
                                <input type="file"
                                className="form-control"
                                name="image1"                                
                                onChange={this.onChangeImage1} />
                            </div>
                        

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="fa fa-pencil-square-o"></i>
                            &nbsp; Update Destination Details
                        </button>

                    </form>
            </div>
        )
    }
}

