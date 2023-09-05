import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleClickNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleClickBad = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => {
    const positiveFeedback = (good * 100) / total;
    if (!positiveFeedback) {
      return 0;
    } else {
      return Math.round(positiveFeedback);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedback = this.countPositiveFeedbackPercentage(good, total);

    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button onClick={this.handleClickGood}>Good</button>
          </li>
          <li>
            <button onClick={this.handleClickNeutral}>Neutral</button>
          </li>
          <li>
            <button onClick={this.handleClickBad}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>{`Good: ${good}`}</li>
          <li>{`Neutral: ${neutral}`}</li>
          <li>{`Bad: ${bad}`}</li>
          <li>{`Total: ${total}`}</li>
          <li>{`Positive feedback: ${positiveFeedback}%`}</li>
        </ul>
      </>
    );
  }
}

export default Feedback;
