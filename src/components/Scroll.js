import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{
      overflowY: 'scroll',
      border: '4px solid #ffffff',
      height: '70vh',
      padding: '4.5vh 0'
    }}>
      {props.children}
    </div >
  );
};

export default Scroll