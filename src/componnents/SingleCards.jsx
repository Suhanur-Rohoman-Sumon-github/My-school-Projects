import React from 'react';

const SingleCards = ({ corse,setData }) => {
        const {description,header,picture,id} = corse;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full h-64" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{header}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button onClick={()=>setData(id)} className="btn btn-primary w-full">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCards;