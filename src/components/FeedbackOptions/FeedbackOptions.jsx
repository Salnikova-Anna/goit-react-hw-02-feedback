import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.optionButton}
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
