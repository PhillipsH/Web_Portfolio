import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './TechnologyBoard.css'
import MediaFile from './MediaFile';

const Example = (props) => {
  return (
    <div id = 'tech-container'>
      <MediaFile title={'C++'} percent={'70'} color={'#1DE3C8'}></MediaFile>
      <MediaFile title={'Python'} percent={'80'} color={'#306998'} color2='FFD43B'></MediaFile>
      <MediaFile title={'Javascript / Node.js'} percent={'85'} color={'#03a9f4'}></MediaFile>
      <MediaFile title={'Web-Dev'} percent={'85'} color={'#ec0101'}></MediaFile>
      <MediaFile title={'Cloud Computing/ Dev-Ops'} percent={'70'} color={'#F4931D'}></MediaFile>
    
    </div>
  );
};

export default Example;