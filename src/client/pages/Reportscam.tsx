import { ReportForm } from 'client/components';
import { ScamForm } from 'Models';
import * as React from 'react';

export interface ReportScamProps {}

export function ReportScam(props: ReportScamProps) {
  const handleReportSubmit = (value: ScamForm) => {
    console.log('Form submit', value);
  };
  return (
    <div>
      <ReportForm onFormSubmit={handleReportSubmit} />
    </div>
  );
}
