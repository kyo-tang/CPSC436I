import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeMessage } from '../actions';

const Message = ({ id, msg, dispatch }) => {
  return (
    <li key={id} onClick={() => dispatch(removeMessage(id))}>
      {msg}
    </li>
  );
};

Message.propTypes = {
  id: PropTypes.number,
  msg: PropTypes.string.isRequired
};

export default connect()(Message);
