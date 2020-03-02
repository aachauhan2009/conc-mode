import React, { SuspenseList } from 'react';
import { getDogPic } from './api';
import './App.css';

function Picture({ r }) {
  const { src } = r.read();
  return (
    <div className="box">
      <img style={{ height: '100%', width: '100%' }} src={src} alt="Dog" />
    </div>
  );
}

const Loading = () => <div className="box loading" />;
const initialResources = () => new Array(9).fill('').map(() => getDogPic());
function List() {
  const [resources, setResources] = React.useState(initialResources());
  return (
    <div className="container">
      <SuspenseList revealOrder="forwards">
        {resources.map((r) => (
          <React.Suspense fallback={<Loading />}>
            <Picture r={r} />
          </React.Suspense>
        ))}
      </SuspenseList>
      <button type="button" onClick={() => setResources(initialResources())}>Refresh</button>
    </div>
  );
}

export default List;
