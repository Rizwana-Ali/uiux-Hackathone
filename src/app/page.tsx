import Hero from "./components/hero";
import Card from './components/card';
import Product from './components/product';
import Inspiration from './components/inspiration';
import Furnio from './components/furnio';

export default function Home(){
  return(
      <div>
         <Hero/>
         <Card/>
         <Product/>
         <Inspiration/>
         <Furnio/>
      </div>
  )
}
Home();
