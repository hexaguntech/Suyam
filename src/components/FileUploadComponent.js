import React, { Component } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';
import { Form, Button } from 'react-bootstrap';

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getImageFrom = this.getImageFrom.bind(this);
    this.getBaseFile = this.getBaseFile.bind(this);
    // this.setbaseImg = this.setbaseImg.bind(this);

    this.state = {
      profileImg: '',
      baseImage: '',
    };
  }

  onFileChange(e) { 
    this.setState({ profileImg: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profileImg', this.state.profileImg);
    axios
      .post('http://localhost:8080/api/applicant/upload', formData, {})
      .then((res) => {
        console.log(res);
      });
  }

  getImageFrom() {
    axios.get('http://localhost:8080/api/applicant/get/image').then((data) => {
      this.setState({
        baseImage: data.baseImage,
      });
    });
  }

  setbaseImg(files) {
    this.setState({
      baseImage: files.base64,
    });
  }

  getBaseFile() {
    // create a local readable base64 instance of an image

    let imageObj = {
      name: 'base-image-' + Date.now(),
      profileImg: this.state.baseImage.toString(),
    };

    axios
      .post('http://localhost:8080/api/applicant/upload/image', imageObj)
      .then((data) => {
        if (data.data.success) {
          alert('Image has been successfully uploaded using base64 format');
          this.setDefaultImage('base');
        }
      })
      .catch((err) => {
        alert('Error while uploading image using base64 format');
        this.setDefaultImage('base');
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>

        <div className="process">
          <h4 className="process__heading">Process: Using Base64</h4>
          <p className="process__details">
            Upload image as Base64 directly to MongoDB database
          </p>

          <Button variant="primary" type="submit" onClick={this.getBaseFile}>
            Upload
          </Button>

          <div className="process__upload-btn">
            <FileBase
              type="file"
              multiple={false}
              onDone={this.setbaseImg.bind(this)}
            />
          </div>
          <img
            src={this.state.baseImage}
            alt="upload-image"
            className="process__image"
          />
        </div>
      </div>
    );
  }
}
