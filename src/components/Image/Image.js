/* eslint-disable jsx-a11y/alt-text */
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import images from '../../assets/images';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return <img src={fallback || src} className={className} {...props} ref={ref} onError={handleError} />;
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.node,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
