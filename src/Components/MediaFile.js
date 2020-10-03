import React from 'react';
import './MediaFile.css';

class MediaFile extends React.Component{
    constructor(props){
        super(props);
        this.offset = 440 - (440 * this.props.percent) / 100;
        console.log(this.offset)
    }
    render(){
        return(
            <div class = "box">
                <div class = "percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"style={{stroke:this.props.color2}}></circle>
                        <circle cx="70" cy="70" r="70" style={{stroke:this.props.color, strokeDashoffset:this.offset}}></circle>
                    </svg>
                    <div class="number">
                        <h2>{this.props.percent}<span>%</span></h2>
                    </div>
                    <h2 class="text">{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
export default MediaFile