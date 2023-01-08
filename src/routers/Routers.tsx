import { Admin } from 'admin/layout/Admin';
import {
  About,
  Contact,
  Home,
  ReportScam,
  ScamDetail,
  TermsAndService,
} from 'client/pages';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

export interface RouterProps {}

export function Routers(props: RouterProps) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/report' element={<ReportScam />} />
      <Route path='/terms' element={<TermsAndService />} />
      <Route path='/detail/:id' element={<ScamDetail />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}
