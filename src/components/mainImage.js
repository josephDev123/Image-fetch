import React from 'react';
import './imagestyle.css';

const Image = (props)=>{
  
  const img = props.images.map(item =>{
        return  <img key= {item.id} src={item.urls.thumb} alt={item.alt_description} />
});

    return(
        <div className ="image_wrapper">
             {img}
        </div>
    )


}

export default Image;