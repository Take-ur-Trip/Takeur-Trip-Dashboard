import React, { useEffect } from 'react'
import "./home.scss";
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Card } from '../../components/Card/Card';
import axios from 'axios';
import { GlobalWrapper } from '../../components/GlobalWrapper/GlobalWrapper';

// dev purposes
import LogoDevIcon from '@mui/icons-material/LogoDev';


export const Home = () => {

  useEffect(() => {
    axios.get('http://localhost:8080/test/').then((res, rej) => {
      console.log(res);
    })
  }, [])

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
