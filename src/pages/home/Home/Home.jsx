import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../../../components/Home/HowItWorks'
import { OurServices } from '../../../components/Home/OurServices'
import { Brands } from '../Brands/Brands'
import { Reviews } from '../Reviews/Reviews'


const data = fetch('reviews.json').then(res => res.json()).then(data => data).catch(err => console.log(err));


export const Home = () => {


  return (
    <div>
        <Banner></Banner>
        <HowItWorks> </HowItWorks>
        <OurServices> </OurServices>
        <Brands></Brands>
        <Reviews reviews={data}></Reviews>
    </div>
  )
}
