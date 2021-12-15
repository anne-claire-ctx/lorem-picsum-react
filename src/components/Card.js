import React from 'react';

const Card = (props) => {
    const { picture } = props;
    
    return (
        <li className="card">
            <img src={"https://picsum.photos/id/" + picture.id + "/250/180"} alt="random" />
            <div className="data-container">
                <ul>
                    <li>Photographe : {picture.author}</li>
                    <li><a href={picture.download_url} target="_blank">Voir l'image</a></li>
                </ul>
            </div>
        </li>
    );
};

export default Card;