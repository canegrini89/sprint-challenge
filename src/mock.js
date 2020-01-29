const choices = [
  {
    id: 1,
    question: 'what is dog´s favorite food?',
    options: ['meat', 'vegetables', 'fruits'],
    correctAns: 'meat'
  },
  {
    id: 2,
    question: 'what is the national sport of Australia?',
    options: ['futbol', 'cricket', 'tennis'],
    correctAns: 'cricket'
  },
  {
    id: 3,
    question: 'which one of this are not an chemical element?',
    options: ['sodium', 'gold', 'water'],
    correctAns: 'water'
  }
];

export const getChoices = () => {
  return choices;
};
