/* eslint-disable no-dupe-keys */

const customStyles = {
    display: 'block',
    background: 'red',
    height: '40px',
    width: '40px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    border: '2px solid gray',
    background: '#ccc',
    zIndex: '7',
    
};
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return <div className={className} style={{ right: '-10px',...style, ...customStyles }} onClick={onClick}></div>;
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ left: '-10px', ...style, ...customStyles }} onClick={onClick}></div>;
};

export { SampleNextArrow, SamplePrevArrow };
