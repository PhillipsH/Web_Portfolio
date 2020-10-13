import React from 'react';
import './Styles/TitleSection.css'
class TitleSection extends React.Component{
    render(){
        return(
            <div className='title-section'>
                <h2 className='title-text'>{this.props.title}</h2>
            </div>
        )
    }
}
export default TitleSection