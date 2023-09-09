import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonList}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={css.optionButton}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
