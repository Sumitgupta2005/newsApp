import React from 'react'

const Footer = ({ loadMore }) => {
    return (
        <div>
            <div className="footer">
                <button className='footer-btn' onClick={loadMore}>
                    Load More
                </button>
            </div>

        </div>
    )
}

export default Footer;
