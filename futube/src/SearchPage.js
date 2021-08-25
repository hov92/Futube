import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdhW7zyrOGRDaLlwsziIyy2LJ8KgfWrlSoSgsxd4Fw5Yw2NvnvJqljqcqmIARBDjTBqc7rFo&usqp=CAc"
                channel="React"
                verified
                subs="875K"
                noOfVideos={437}
                description="Display of some React and Material UI techniques"
            />

            <hr />

            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
                        <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
                        <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />
            <VideoRow
                timestamp="50 seconds ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7q1woWfJf6oCf-0CgIPTV74uub0_rUkcFQ&usqp=CAU"
                channel="ReactChannel"
                title="Youtube video"
                verified
                subs="1.9M"
                views="3.4M"
                description=""
            />


        </div>
    )
}

export default SearchPage
