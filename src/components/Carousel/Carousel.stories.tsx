/* eslint-disable */
import  { Carousel } from './Carousel';
import netflixData from "src/models/netflixData.json";
export default {
  title: "Carousel",
};

export const Default = () => <Carousel slideData={netflixData.slides[0]} />;

Default.story = {
  name: 'default',
};
