import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class CommentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: {},
    }
  }



  componentDidMount() {
    console.log("this", this);
    axios.get('http://127.0.0.1:8000/api/v1/comment')
      .then(res => {
        let commentData = res.data.filter((item, index) => {
          if (item.target_post === this.props.articleID) return true;
        });
        this.setState({
          comment: commentData
        });
        console.log('this.state.comment: ', this.state.comment);
      })
  }

  render() {
    console.log('this.state.comment', this.state.comment);
    let list = [];
    let data = this.state.comment;
    for(let i in this.state.comment){
      list.push(data[i].comment);
      list.push(<br />);
    }
    console.log('list', list);
    return (
      <div>
      <Card title=<h1>Comments</h1>>
        {list}
      </Card>
      </div>
    );
  }

}

export default CommentComponent;
