import { nanoid } from 'nanoid';

const STATUS_SELECTION = [
    {
        id: nanoid(),
        text: "I'm married",
        value: 'MARRIED',
    },
    {
        id: nanoid(),
        text: "I'm currently insured",
        value: 'INSURED',
    },
    {
        id: nanoid(),
        text: 'I own multiple vehicles',
        value: 'MULTIPLE VEHICLES',
    },
    {
        id: nanoid(),
        text: 'I own a home',
        value: 'HOME',
    },
];

export default STATUS_SELECTION;
