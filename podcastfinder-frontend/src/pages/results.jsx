import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import { Space, Card, Carousel, Button, } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
const Results = () => {
    const location = useLocation();
    const {appleData, spotifyData} = location.state;
    const shorterAppleData = appleData.slice(1,11);
    const restOfAppleData = appleData.slice(11,20);
    let spotifyItems = spotifyData['shows']['items'];
    spotifyItems = Object.keys(spotifyItems).map(function(k) { return spotifyItems[k] });
    console.log(spotifyItems);

    const renderMoreApple = () => {
        console.log('Clicked!');
    }

    const contentStyle = {
        margin: 0,
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundColor: '#fff'
    };

    const carouselStyle = {
        height:'500px',
    }

    return(
        <div className="container">
            <div className="apple-data-container">
                <h1>Apple Podcasts results:</h1>
                <Carousel style={carouselStyle} autoplay={true} autoplaySpeed={3000} infinite={true}>
                    {appleData.map((item) => (
                        <div style={contentStyle}>
                            <h3 style={{color:'#fff'}}>{item.collectionName}</h3>
                            <img src={item.artworkUrl600} style={{margin: "auto", height:'300px'}}/>
                            <p style={{color:'#fff'}}>Produced by: {item.artistName}</p>
                            <b><p style={{color:'#fff'}}>View Podcast episodes <a href={item.collectionViewUrl} target="about_blank" style={{color:'lightpink'}}>here</a></p></b>
                        </div>
                    ))}
                </Carousel>

            </div>
            <div className="spotify-data-container">
                <h1>Spotify Podcast Results</h1>
                <Carousel style={carouselStyle} autoplay={true} autoplaySpeed={3000} infinite={true}>
                    {
                        spotifyItems.map((item) =>(
                            <div style={contentStyle}>
                                <h3 style={{color:'#fff'}}>{item.name}</h3>
                                <img src={item.images[0].url} style={{margin: "auto", height:"300px"}}/>
                                <p style={{color:'#fff'}}>Produced by: {item.publisher}</p>
                                <b><p style={{color:'#fff',}}>View Podcast episodes <a href={item.external_urls.spotify} target="about_blank" style={{color:'lightpink'}}>here</a></p></b>
                            </div>
                        ))
                    }
                </Carousel>
                {/*<Space direction="vertical" size={16}>*/}
                {/*    {spotifyItems.map((item) => {*/}
                {/*        <p>{item.name}</p>*/}
                {/*    })}*/}
                {/*</Space>*/}
            </div>
        </div>
    )
}

export default Results;