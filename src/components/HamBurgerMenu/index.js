import React from 'react';

import './index.scss'

export default () => (
    <div className="test-mobile">
        <label>
            <input type='checkbox'/>
            <span className='menu'>
                <span className='hamburger'></span>
            </span>
            <ul style={{listStyleType: "none"}}>
                <li>
                    <a href='/about/'>About</a>
                </li>
            </ul>
        </label>
    </div>
)