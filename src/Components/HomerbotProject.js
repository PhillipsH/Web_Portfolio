import React, { useState } from 'react';
import homerImg from '../Assets/homerbot.png'
import mernImg from '../Assets/mern.jpg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Styles/Project.css';

const HomerbotProject = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
        <ModalHeader toggle={toggle}>HomerBot</ModalHeader>
          <ModalBody className='project-body'>
            <a href='https://innovatebc.ca/news/homer-gets-renters-talking-with-support-of-isi-student-grants/'><img className={'project-pic'} src={homerImg}></img></a>
            <a href='https://innovatebc.ca/news/homer-gets-renters-talking-with-support-of-isi-student-grants/'>https://innovatebc.ca/news/homer-gets-renters-talking-with-support-of-isi-student-grants/</a> <br></br>
            <span className='modal-title'>Problem</span><br></br>
            <p>Choosing the right home is an incredibly important decision everyone makes at least once in their lives and when renters have to make that decision based on websites such as Craigslist
                and Kijiji, you're trusting websites that dont specialize in rentals. We wanted to make a platform where renters could receive more information on things that actually matter when it comes
                to renting homes such as what's close by.</p>
            <span className='modal-title'>My Part in HomerBot</span><br></br>
            <p>I created the webscrapper that would automatically scrape rental websites, taking the information that these websites had and inputing them into a database.
                The webscrapper was built in Python using Scrapy which is a web-crawling framework utilizing asynchronous functions. I also created the Lifestyle and Nearby Feature of Homerbot which used 
                to display what was nearby to the potential house/apartment of the renter. The renter could locate where grocery stores, coffee shops, bars and other locations were
                depending on their lifestyles. 
            </p>
            <span className='modal-title'>Technologies/Skills Used</span><br></br>
            <p>
                The webscrapper was built using Python and Scrapy hosted on a Heroku Server. The Database was also hosted on a Heroku server using PostgreSQL as the database. 
                The nearby and lifestyle feature of Homerbot was built using Node.js, Express and Dialogflow. These features implemented RESTful API's such as Google Maps API's.
                
            </p>
            <span className='modal-title'>Notes</span>
            <p>
                Gaining experience in a start-up was a fun interesting experience, having hands on experience with tasks other the software development. Seeing what goes into creating a company
                and working with incredibly talented co-workers taught me many lessons in business, software development and teamwork.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Website</Button>{' '}
            <Button color="secondary" onClick={toggle}>Github</Button>
          </ModalFooter>

        </Modal>
        <div className="project-box" onClick={toggle}>
            <h2 className='project-title'>HomerBot</h2>
            <img className={'project-pic'} src={homerImg}></img>
        </div>
      </div>
    );
  }
export default HomerbotProject