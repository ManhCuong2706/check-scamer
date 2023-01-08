import { Question } from 'client/components/Questions';
import { Scamlist } from 'client/components/ScamList';
import { ScamDetailContext } from 'client/contexts/ScamDetailContext';
import { scammerList } from 'Models';
import { useContext } from 'react';

export interface HomeProps {}

export function Home(props: HomeProps) {
  let scamerCount = 42;
  const { scamData } = useContext(ScamDetailContext);
  const length = scamData.length;
  console.log(scamData);
  return (
    <div>
      {length > 0 && <Scamlist ScList={scamData} scamerCount={scamerCount} />}
      {length === 0 && <Scamlist ScList={scammerList} scamerCount={scamerCount} />}
      <Question />
    </div>
  );
}
