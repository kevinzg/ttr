export interface Game {
    id: string;
    name: string;
    rules: { key: string; value: string }[];
    rulebook?: string;
}

export const games: Game[] = [
    {
        id: 'usa',
        name: 'USA',
        rules: [
            { key: '# of players', value: '2-5' },
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
            { key: '# of players', value: '2-5' },
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
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '45' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# terrain cards', value: '1 of each (3 total)' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Terrain routes', value: 'Need matching terrain card' },
        ],
    },
    {
        id: 'japan',
        name: 'Japan',
        rules: [
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '20' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Bullet train', value: 'Shared routes; contribute to gain points' },
            { key: 'End game trigger', value: '2 or fewer trains left' }
        ],
    },
    {
        id: 'italy',
        name: 'Italy',
        rules: [
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '45' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '5, keep 3+' },
            { key: '# extra tickets', value: '4, keep 1+' },
            { key: 'Discarded tickets', value: 'under the deck' },
            { key: 'End of game bonus', value: 'bonus points for connected regions' },
            { key: 'Ferry cards', value: 'You can draw 1 ferry card as your turn action. You cannot have more than 2.' },
            { key: 'Ferry routes', value: 'Spaces with a wave symbol require a locomotive or ferry card. One ferry card can be used for up to 2 spaces.' },
        ],
        rulebook: 'https://cdn.1j1ju.com/medias/10/df/07-ticket-to-ride-map-collection-volume-7-italy-rulebook.pdf'
    },
    {
        id: 'india',
        name: 'India',
        rules: [
            { key: '# of players', value: '2-4' },
            { key: '# of trains', value: '20' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Mandala Bonus', value: 'Points for 2+ routes between cities' },
            { key: 'End game trigger', value: '2 or fewer trains left' },
        ],
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        rules: [
            { key: '# of players', value: '2-3' },
            { key: '# of trains', value: '40' },
            { key: '# initial cards', value: '5' },
            { key: '# initial tickets', value: '5, keep 3' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Country connection bonus', value: 'Points for connecting countries' },
            { key: 'Tunnels', value: 'May cost extra cards' },
        ],
    },
    {
        id: 'asia',
        name: 'Asia',
        rules: [
            { key: '# of players', value: '2-6' },
            { key: '# of trains', value: '40' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '4, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Team play', value: '4 or 6 players in teams of 2' },
            { key: 'Shared routes', value: 'Teammates share routes and tickets' },
            { key: 'Longest route bonus', value: '10 points per team member' },
            { key: 'Mountain passes', value: 'Require locomotives' },
        ],
    },
    {
        id: 'legendary-asia',
        name: 'Legendary Asia',
        rules: [
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '40' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '4, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Mountain passes', value: 'Require locomotives' },
        ],
    },
    {
        id: 'france',
        name: 'France',
        rules: [
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '35' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '5, keep 3' },
            { key: '# extra tickets', value: '4, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Color bonus', value: 'Points for using all colors' },
            { key: 'Country connection', value: 'Bonus for connecting countries' },
        ],
    },
    {
        id: 'old-west',
        name: 'Old West',
        rules: [
            { key: '# of players', value: '2-6' },
            { key: '# of trains', value: '35' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Alvin the Alien', value: 'Moving piece for bonus points' },
            { key: 'Home cities', value: 'Build must connect to your starting city' }
        ],
    },
    {
        id: 'pennsylvania',
        name: 'Pennsylvania',
        rules: [
            { key: '# of players', value: '2-5' },
            { key: '# of trains', value: '65' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Stock shares', value: 'Buy shares in railroad companies' },
            { key: 'Share bonus', value: 'Points for most shares per company' },
        ],
    },
    {
        id: 'united-kingdom',
        name: 'United Kingdom',
        rules: [
            { key: '# of players', value: '2-4' },
            { key: '# of trains', value: '35' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '5, keep 3' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Longest route bonus', value: '10 points' },
            { key: 'Technology cards', value: 'Buy with locomotives to unlock abilities' },
            { key: 'Concessions', value: 'Required to build in specific regions' }
        ],
    },
    {
        id: 'amsterdam',
        name: 'Amsterdam',
        rules: [
            { key: '# of players', value: '2-4' },
            { key: '# of trains', value: '16' },
            { key: '# initial cards', value: '4' },
            { key: '# initial tickets', value: '3, keep 2' },
            { key: '# extra tickets', value: '3, keep 1' },
            { key: 'Game length', value: '10-15 minutes' },
            { key: 'Routes', value: 'Tram lines through Amsterdam' },
            { key: 'Goods bonus', value: 'Collect tokens for completed routes' }
        ],
    },
];
