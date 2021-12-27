import { nanoid } from 'nanoid';

const AGE_SELECTION = [
    {
        id: nanoid(),
        text: '< 18',
        value: 'LESS THAN 18',
    },
    {
        id: nanoid(),
        text: '19-24',
        value: 'BETWEEN 19 & 24',
    },
    {
        id: nanoid(),
        text: '25-34',
        value: 'BETWEEN 25 & 34',
    },
    {
        id: nanoid(),
        text: '35-49',
        value: 'BETWEEN 35 & 49',
    },
    {
        id: nanoid(),
        text: '50-64',
        value: 'BETWEEN 50 & 64',
    },
    {
        id: nanoid(),
        text: '65 >',
        value: 'GREATER THAN 65',
    },
];

export default AGE_SELECTION;
