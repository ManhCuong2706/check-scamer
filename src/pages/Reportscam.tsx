import { ReportForm } from 'components';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export interface ReportScamProps {}

export function ReportScam(props: ReportScamProps) {
  const form = useForm({
    defaultValues: {
      scamName: '',
      scamPhone: '',
      scamBankID: '',
      scamBankName: '',
      scamPhoto: '',
      scamContent: '',
      authName: '',
      zalo: '',
      agreeContact: null,
      link: '',
      isVictim: null,
      nonVictim: null,
    },
  });
  const handleSubmit = (value: {}) => {
    console.log('Form submit', value);
  };
  return (
    <div>
      <ReportForm onSubmit={handleSubmit} form={form} />
    </div>
  );
}
