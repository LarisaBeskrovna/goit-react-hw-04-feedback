import React from 'react';
import { useState } from 'react';

import Statistics from './components/Statistics/Statistics';
import Feedback from './components/Feedback/Feedback';

import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Feedback
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
