import React from 'react';
/* import List from './List';
import NumberFacts from './NumberFacts';
import Tabs from './Tabs'; */
import AppHook from './components/index';

function App() {
  return (
    <div className="App">
      {/* <Tabs items={['useTransition', 'SuspenseList']}>
        {({ active }) => (active !== 'useTransition' ? <List /> : <NumberFacts />)}
      </Tabs> */}
      <AppHook />
    </div>
  );
}

export default App;
