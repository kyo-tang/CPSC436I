import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

const AddMessage = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addMessage(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect()(AddMessage);
