export interface Game {
    id: string;
    name: string;
    rules: { key: string; value: string }[];
}

export const games: Game[] = [
    {
        id: 'usa',
        name: 'USA',
        rules: [
            { key: '# of trains', value: '45' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
        ],
    },
    {
        id: 'europe',
        name: 'Europe',
        rules: [
            { key: '# of trains', value: '45' },
            { key: '# train stations', value: '3' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '1 long + 3 regular, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Unused stations', value: '4 points each' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Tunnels', value: 'May cost extra cards' },
            { key: 'Ferries', value: 'Require locomotives' },
        ],
    },
    {
        id: 'africa',
        name: 'Africa',
        rules: [
            { key: '# of trains', value: '45' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# terrain cards', value: '1 of each (3 total)' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Terrain routes', value: 'Need matching terrain card' },
        ],
    },
];
