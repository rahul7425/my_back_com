import React, { useState } from 'react';

function About() {
  const [state, setState] = useState(false);

  return (
    <div>
      <p>The state is: {state.toString()}</p>
      <button onClick={() => setState(!state)}>Toggle State</button>
    </div>
  );
}

export default About;