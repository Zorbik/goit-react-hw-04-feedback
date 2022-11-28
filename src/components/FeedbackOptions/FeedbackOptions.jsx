import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback, ...props }) {
  return Object.keys(props).map(key => {
    return (
      <Button onClick={onLeaveFeedback} key={key} type="button">
        {firstLetterToUpperCase(key)}
      </Button>
    );
  });
}

function firstLetterToUpperCase(word) {
  const newWord = word;
  return newWord[0].toUpperCase() + newWord.slice(1);
}
