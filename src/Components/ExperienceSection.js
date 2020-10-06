import React, { Component } from 'react';
import './Styles/Section.css'

class Section extends React.Component{
    constructor(props){
        super(props)
        let container = (
        <div className='timeline-content' style={{borderColor: this.props.color}}>
            <span className='experience-title' style={{color: this.props.color}}>2019-2020<br></br></span>
            <span className='experience-title' style={{color: this.props.color}}>BCIT (CST-Cloud Computing)</span>
        </div>
         )

        if(this.props.side){
            this.leftContent = container;
        }else{
            this.rightContent = container;
        }
        
    }
    render(){
        return(
            <div className='timeline-container'>
                <div className='left-container'>
                    {this.leftContent}
                </div>
                <div className='mid-container'>
                    <div className='makePurple'>
                        <div className='dot' style={{background:this.props.color}}></div>
                    </div>
                        <div className='left-mid'></div>
                            <span class="middleLine"></span>
                        <div className='right-mid'></div>
                </div>
                <div className='right-container'>
                    {this.rightContent}
                </div>
            </div>
        )
    }
}
export default Section