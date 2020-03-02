import React from 'react';

function App(props) {
  const currentTime = Date.now();
  const [state, setState1] = React.useState({ count: currentTime });
  const setState = (newState) => setState1({ ...state, ...newState });
  React.useEffect(() => {
    console.log(props);
    setState({ name: 'test' });
  }, []);
  return (
    <h2>
      <span>Time: </span>
      <span>{`${new Date(state.count).toTimeString()}`}</span>
    </h2>
  );
}

export default App;
