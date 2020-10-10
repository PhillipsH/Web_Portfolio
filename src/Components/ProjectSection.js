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
                <HomerbotProject></HomerbotProject>
                <KeebieProject></KeebieProject>
                <KnowledgeProject></KnowledgeProject>
                <MemoryProject></MemoryProject>
                <DevOpsProject></DevOpsProject>
                <WashroomProject></WashroomProject>
                <CompostProject></CompostProject>
            </div>
        )
    }
}
export default ProjectSection