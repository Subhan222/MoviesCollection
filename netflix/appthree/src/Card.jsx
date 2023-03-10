import React from 'react';
import Cardcss from './Card.css';
import Image from './Image';

function Card(props)
{

    

    return( 
    
    <div className="card_container">
        <div className="card">
        <Image
            ims = {props.ims}

        />
       
        <div className="card_info">
            <span className="card_category">{props.cat}</span>
            <h3 className="card_title">{props.nam}</h3>
            <a href={props.lin} target="_blank" rel="noreferrer">
                <button>Watch Now</button>
            </a>

        </div>
    </div>
</div>);



}
export default Card;