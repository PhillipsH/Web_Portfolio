import React from 'react';
import './Styles/ProjectSection.css';
import keebImg from '../Assets/keebie.PNG'
import KeebieProject from './Projects/KeebieProject'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HomerbotProject from './Projects/HomerbotProject';
import KnowledgeProject from './Projects/KnowledgeProject';
import WashroomProject from './Projects/WashroomProject';
import DevOpsProject from './Projects/DevOpsProject';
import MemoryProject from './Projects/MemoryProject';
import CompostProject from './Projects/CompostProject';

class ProjectSection extends React.Component{

    render(){
        return(
            <div id='works' className="project-board">
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