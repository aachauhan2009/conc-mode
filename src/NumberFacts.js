import React from 'react';
import { getData } from './api';
import './App.css';

const initialResource = getData();

function Container({ resource }) {
  return (
    <div>
      <Number r={resource} />
    </div>
  );
}

function Number({ r }) {
  const data = r.read();
  return (
    <h1 className="number">
      {JSON.stringify(data)}
    </h1>
  );
}

function NumberFacts() {
  const [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });
  const [resource, setResource] = React.useState(initialResource);
  return (
    <div className="App">
      <div className={`${isPending ? 'loadingBar' : ''} bar`} />
      <React.Suspense fallback={<h1> Loading... </h1>}>
        <Container resource={resource} />
      </React.Suspense>
      <button
        type="button"
        onClick={
          () => startTransition(() => {
            setResource(getData(Math.floor(Math.random() * 100)));
          })
        }
      >
          Random
      </button>

    </div>
  );
}

export default NumberFacts;
