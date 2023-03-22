import React from 'react';

const NexArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        borderRadius: '50%',
        padding: "4px", 
      }}
      onClick={onClick}
    />
  );
};

export default NexArrow;
