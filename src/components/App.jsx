import { Component } from 'react';
// import Feedback from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevValue, stateValue) => {
      return prevValue + stateValue;
    }, 0);
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = (good * 100) / total;
    if (!positivePercentage) {
      return 0;
    } else {
      return Math.round(positivePercentage);
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      this.state.good,
      total
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
