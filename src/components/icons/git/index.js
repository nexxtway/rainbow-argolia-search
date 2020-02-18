import React from 'react';
import PropTypes from 'prop-types';

const GitIcon = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="book-summary"
                    transform="translate(-1360.000000, -28.000000)"
                    fill="#061C3F"
                    fillRule="nonzero"
                >
                    <g id="github" transform="translate(1360.000000, 28.000000)">
                        <path
                            d="M15.998,0.0209721116 C7.164,0.0209721116 0,7.35623904 0,16.4049721 C0,23.6423267 4.584,29.782247 10.944,31.9505976 C11.744,32.1015458 12.036,31.5956653 12.036,31.1611793 C12.036,30.7715697 12.022,29.7414502 12.014,28.374757 C7.564,29.3640797 6.624,26.1778486 6.624,26.1778486 C5.898,24.2848765 4.848,23.7810359 4.848,23.7810359 C3.394,22.7651952 4.956,22.7855936 4.956,22.7855936 C6.562,22.9018645 7.406,24.4745817 7.406,24.4745817 C8.834,26.9774661 11.152,26.2553625 12.064,25.8351554 C12.208,24.7764781 12.622,24.0543745 13.08,23.6443665 C9.528,23.2302789 5.792,21.8248287 5.792,15.548239 C5.792,13.7592988 6.416,12.2967331 7.44,11.1503426 C7.274,10.736255 6.726,9.06970518 7.596,6.81568127 C7.596,6.81568127 8.94,6.3750757 11.996,8.49447012 C13.272,8.13137849 14.64,7.94983267 16.002,7.94371315 C17.36,7.95187251 18.73,8.13137849 20.008,8.49650996 C23.062,6.37711554 24.404,6.81772112 24.404,6.81772112 C25.276,9.07378486 24.728,10.7382948 24.564,11.1523825 C25.59,12.2987729 26.208,13.7613386 26.208,15.5502789 C26.208,21.8431873 22.468,23.228239 18.904,23.6341673 C19.478,24.1400478 19.99,25.1395697 19.99,26.6674104 C19.99,28.8581992 19.97,30.6247012 19.97,31.1611793 C19.97,31.599745 20.258,32.1097052 21.07,31.9485578 C27.42,29.7781673 32,23.6402869 32,16.4049721 C32,7.35623904 24.836,0.0209721116 15.998,0.0209721116 Z"
                            id="Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

GitIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
GitIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default GitIcon;
