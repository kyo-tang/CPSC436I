import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    const { messages, error, loading } = this.props;
    if (error) {
      return <div>Error: {error}</div>;
    }
    if (loading) {
      return <div>Loading....</div>;
    }
    return (
      <ul>
        {messages.map(message => (
          <Message key={message.id} id={message.id} msg={message.data.msg} />
        ))}
      </ul>
    );
  }
}

const mapSateToProps = state => ({
  messages: state.messages.items,
  loading: state.messages.loading,
  error: state.messages.error
});

export default connect(mapSateToProps)(MessageList);
