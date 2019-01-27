import React from 'react';
import '../styles/addpost.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import Alert from './Alert';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      fields: [{
        // category: '',
        title: '',
        description: '',
        src: '',
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
      ],
      error: '',
      file: null,
    };
  }

  imageChange = (event) => {
    this.setState({
      file: event.target.files[0],
      src: URL.createObjectURL(event.target.files[0]),
    });
  };

  textChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  categoryChange = (event) => {
    console.log(event.target.value);

    this.setState({
      category: event.target.value,
    });
  };

  handleAddPost = (event) => {
    event.preventDefault();

    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    if (this.validate()) {
      this.setState({
        error: '',
      });

      const formData = new FormData();
      console.log(this.state);
      
      formData.append('image', this.state.file);
      formData.append('category', this.state.fields.category);
      formData.append('title', this.state.fields.title);
      formData.append('description', this.state.fields.description);

      axios.post(
        'http://127.0.0.1:3000/posts',
        formData,
        {
          headers: {
            Authorization: TokenManager.getToken(),
            'Content-Type': 'multipart/form-data',
          },
        }
      )
        .then(() => this.setState({
          isSuccess: true,
          alertMessage: 'Post added.',
        }))
        .catch(() => {
          this.setState({
            alertMessage: 'Post not added. Please try again later.',
            isError: true,
          });
        });
    } else {
      this.setState({
        error: 'The form is invalid',
      });
    }
  };

  validate() {
    return this.state.fields.description.length > 0;
  }

  render() {
    if (this.props.isLoggedIn === true) {
      return (
        <div className="add-post">
            <div className="alert alert.success">
            {
                this.state.isSuccess &&
                <Alert message={this.state.alertMessage} success />
                }
            {
                this.state.isError &&
                <Alert message={this.state.alertMessage} />
                }
            </div>
            {this.state.error &&
                <div className="error-message">{this.state.error}</div>
            }
            <form onSubmit={this.handleAddPost}>
                <div>
                    <select name="categories" value={this.state.category} onChange={this.categoryChange} >
                        <option value="food">Food</option>
                        <option value="music">Music</option>
                        <option value="tech">Tech</option>
                        <option value="misc">Misc.</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.fields.title}
                        onChange={this.textChange}
                    />
                </div>
                <div>
                    <label htmlFor="src" className="input-image">
                    <i className="fas fa-cloud" /> Choose Image
                    </label>
                    <input name="src" type="file" onChange={this.imageChange} id="src" />
                </div>
                <img className="image-preview" src={this.state.src} />
                <textarea
                    name="description"
                    type="text"
                    className="description"
                    placeholder="Description"
                    value={this.state.fields.description}
                    onChange={this.textChange}
                />
                <button className="add-button" type="submit">Post</button>
            </form>
        </div>
      );
    }
    return (
        <div className="infoBar">Please <Link className="boldText" to="/login">Login</Link> to add content</div>
    );
  }
}

export default AddPost;
