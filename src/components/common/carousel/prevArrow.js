import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, borderRadius: "50%", background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px',boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px' }}
            onClick={onClick}
        />
    );
};

export default PrevArrow;