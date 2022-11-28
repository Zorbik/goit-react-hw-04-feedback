import { useState } from 'react';
import {
  Box,
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from './components';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    const stateOption = e.target.textContent.toLowerCase();
    switch (stateOption) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback()
    );
    return `${positiveFeedbackPercentage}%`;
  };

  return (
    <Box
      boxShadow="normal"
      mt={6}
      mx="auto"
      width="px"
      p={5}
      borderRadius="normal"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={onClick}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Box>
  );
}

export default App;
