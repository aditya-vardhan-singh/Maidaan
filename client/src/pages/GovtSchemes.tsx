import React from 'react';
import { GpBanner } from '@/components/GpBanner/GpBanner'; // reviewed
import { GpFaq } from '@/components/GpFaq/GpFaq'; // reviewed
import { GpHeader } from '@/components/GpHeader/GpHeader'; // reviewed
import { GpSchemes } from '@/components/GpSchemesection/Gpschemes'; // replace mockdata with data fetch from database, reviewed
import { Gpvoice } from '@/components/Gpvoice/Gpvoice'; // reviewed

const GovtSchemes: React.FC = () => (
  <>
    <GpHeader />
    <GpBanner />
    <Gpvoice />
    <GpSchemes />
    <GpFaq />
  </>
);

export default GovtSchemes;
