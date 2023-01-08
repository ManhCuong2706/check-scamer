import { Detail } from 'client/components/Detail';
import { initScam, Scamer, scammerList } from 'Models';
import { useParams } from 'react-router-dom';

export interface ScamDetailProps {}

export function ScamDetail(props: ScamDetailProps) {
  let { id } = useParams();
  const scamData: Scamer = scammerList.find((item) => item.id === id) ?? initScam;

  return (
    <div>
      <Detail scamData={scamData} />
    </div>
  );
}
