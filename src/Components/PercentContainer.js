import React from 'react';
import './Styles/Percent.css'
import PercentageBox from './PercentageBox';

const Example = (props) => {
  return (
    <div id = 'skills'>
      <PercentageBox title={'Web-Dev'} percent={'75'} color={'#ec0101'}></PercentageBox>
      <PercentageBox title={'Python'} percent={'80'} color={'#306998'} color2='FFD43B'></PercentageBox>
      <PercentageBox title={'Javascript / Node.js'} percent={'85'} color={'#03a9f4'}></PercentageBox>
      <PercentageBox title={'C++'} percent={'70'} color={'#1DE3C8'}></PercentageBox>
      <PercentageBox title={'Cloud Computing/ Dev-Ops'} percent={'70'} color={'#F4931D'}></PercentageBox>
    
    </div>
  );
};

export default Example;