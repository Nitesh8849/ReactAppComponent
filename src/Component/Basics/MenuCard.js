import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    // this menuData is going to access through looping(map method in an array)
    // whole card-container will be paste in the map method and use again React.Fragment in inside return of map method.
    // always pass key when you are using map method

    

    return (
        <>
<section className="main-card--container">
        {menuData.map((currElem,index) => {

    // currElem is repeating again & again so we use object destructuring.

    const {id, name, image, category, description} = currElem;


            return (
                <>
                
                    <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle" style={{ color: 'red' }}>{name}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description-subtle">
                                    {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="images" className="card-media"/>
                            <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
              
                </>
            );
        })}

</section>
        </>
    );
};

export default MenuCard;