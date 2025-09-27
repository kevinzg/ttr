export interface Game {
    id: string;
    name: string;
    rules: { key: string; value: string }[];
}

export const games: Game[] = [
    {
        id: 'base',
        name: 'Base TTR (USA)',
        rules: [
            { key: '# of trains', value: '45' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Face-up cards', value: '5' },
            { key: 'Game ends when', value: '≤ 2 trains left' },
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
            { key: 'Face-up cards', value: '5' },
            { key: 'Game ends when', value: '≤ 2 trains left' },
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
            { key: 'Face-up cards', value: '5' },
            { key: 'Game ends when', value: '≤ 2 trains left' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Terrain routes', value: 'Need matching terrain card' },
        ],
    },
];
