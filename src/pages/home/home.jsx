import "./home.scss";
import React, { useEffect } from 'react'
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import GlobalWrapper from '../../components/GlobalWrapper/GlobalWrapper';
// dev purposes
import LogoDevIcon from '@mui/icons-material/LogoDev';


export const Home = () => {

  return (
    <GlobalWrapper>
      <div className="cardsContainer">
        <Card cardName="Users" cardValue="720" cardLink="See all users" cardChart={5} cardIcon={<LogoDevIcon className="cardIcon"/>}/>
        <Card cardName="Users" cardValue="720" cardLink="See all users" cardChart={5} cardIcon={<LogoDevIcon className="cardIcon"/>}/>
        <Card cardName="Users" cardValue="720" cardLink="See all users" cardChart={5} cardIcon={<LogoDevIcon className="cardIcon"/>}/>
        <Card cardName="Users" cardValue="720" cardLink="See all users" cardChart={5} cardIcon={<LogoDevIcon className="cardIcon"/>}/>
      </div>
    </GlobalWrapper>
  )
}