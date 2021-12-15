import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Pictures = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(20);
    
    useEffect(() => {
        if (playOnce) {
        axios
         .get('https://picsum.photos/v2/list?page=2&limit=100')
         .then((res) => {
             setData(res.data);
             setPlayOnce(false);
         });
        }

        const sortedPicture = () => {
            const pictureObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = pictureObj.sort((a,b) => {
                return b.width - a.width;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }
        sortedPicture();
    }, [data, rangeValue, playOnce]);
    
    return (
        <div className="pictures">
            <div className="sort-container">
                <input type="range" min="1" max="100" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                <p>{rangeValue}</p>
            </div>
            <ul className="pictures-list">
                {sortedData.map((picture) => (
                    <Card picture={picture} key={picture.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Pictures;