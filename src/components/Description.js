import React from 'react'
import './css/description.css';

function Description() {
    return (
        <div className="description_container">
            <div className="product_image">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/2838ca0b-d645-4e81-b8d2-c653dbb6f72a1624120057030-1.jpg" alt="" /> 

            </div>
            <div className="product_detail">
                <p className="title">Sample name</p>
                <p className="company">Sample Comapany</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellendus officiis nostrum suscip</p>
                
              <span>
              Price: <p className="price">$50</p>
                </span>
            </div>
            
        </div>
    )
}

export default Description
