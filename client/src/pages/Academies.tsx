import React from 'react';
import { ApFeatures } from '@/components/ApFeatures/ApFeatures'; // reviewed
import { Apheader } from '@/components/Apheader/Apheader'; // reviewed
import { AcademyGrid } from '@/components/ApSearch/AcademyGrid'; // reviewed

const Academies = () => (
  <div>
    <Apheader />
    <ApFeatures />
    {/* <SportsSelection/> */}
    <AcademyGrid />
  </div>
);

export default Academies;
