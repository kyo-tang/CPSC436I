import React from 'react';
import { connect } from 'react-redux';
import { clearAllMessages } from '../actions';

const ClearAll = ({ dispatch }) => {
  return (
    <div>
      <button
        onClick={() => {
          dispatch(clearAllMessages());
        }}
        type="button"
      >
        Clear All
      </button>
    </div>
  );
};

export default connect()(ClearAll);
