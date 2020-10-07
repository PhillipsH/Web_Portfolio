import React from 'react';
import './Styles/ProjectSection.css';
import keebImg from '../Assets/keebie.PNG'
import KeebieProject from './KeebieProject'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HomerbotProject from './HomerbotProject';
import KnowledgeProject from './KnowledgeProject';
import WashroomProject from './WashroomProject';
import DevOpsProject from './DevOpsProject';
import MemoryProject from './MemoryProject';
import CompostProject from './CompostProject';

class ProjectSection extends React.Component{

    render(){
        return(
            <div className="project-board">
                <KeebieProject></KeebieProject>
                <HomerbotProject></HomerbotProject>
                <KnowledgeProject></KnowledgeProject>
                <MemoryProject></MemoryProject>
                <DevOpsProject></DevOpsProject>
                <WashroomProject></WashroomProject>
                <CompostProject></CompostProject>
                {/* <div className="project-box">
                    <h2 className='project-title'>Keebie.io</h2>
                    <img className={'project-pic'} src={keebImg}></img>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>HomerBot</h2>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>KnowledgeBase</h2>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>Find My Washroom</h2>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>Dev-Ops</h2>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>Rotation Matrix</h2>
                </div>
                <div className="project-box" style={{background:"linear-gradient(180deg, rgba(252,218,218,1) 0%, rgba(190,250,255,1)100%)"}}>
                    <h2 className='project-title'>Compost King</h2>
                </div> */}
            </div>
        )
    }
}
export default ProjectSection