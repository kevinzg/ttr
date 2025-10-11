export type Game = {
    id: string;
    name: string;
    rules: {
        players: string; // 2-5
        trains: string; // 45
        initialTrainCards: string; // 4
        initialTickets: string; // 3, keep 2+
        extraTickets: string; // 3, keep 1+
        discardedTickets: string; // under the deck, or in the box
        endOfGameBonus: string; // Longest route: 10 points
    };
    extraRules: Array<{
        name: string;
        description?: string;
        details?: Array<string>; // appear as bullet points
        table?: {
            headers?: Array<string>;
            rows: Array<Array<string>>;
        };
    }>;
    rulebook?: string; // URL to the rulebook
};

export const games: Game[] = [
    {
        id: 'usa',
        name: 'USA',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '3, keep 2+',
            extraTickets: '3, keep 1+',
            discardedTickets: 'bottom of the deck',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [],
    },
    {
        id: 'europe',
        name: 'Europe',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '1 long + 3 regular, keep 2+',
            extraTickets: '3, keep 1+',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            {
                name: 'Train stations',
                description: '3 per player, unused stations worth 4 points each',
            },
            { name: 'Tunnels', description: 'May cost extra cards' },
            { name: 'Ferries', description: 'Require locomotives' },
        ],
    },
    {
        id: 'africa',
        name: 'Africa',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '3, keep 2+',
            extraTickets: '3, keep 1+',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Terrain cards', description: '1 of each (3 total)' },
            { name: 'Terrain routes', description: 'Need matching terrain card' },
        ],
    },
    {
        id: 'japan',
        name: 'Japan',
        rules: {
            players: '2-5',
            trains: '20',
            initialTrainCards: '4',
            initialTickets: '3, keep 2+',
            extraTickets: '3, keep 1+',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Bullet train', description: 'Shared routes; contribute to gain points' },
            { name: 'End game trigger', description: '2 or fewer trains left' },
        ],
    },
    {
        id: 'italy',
        name: 'Italy',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '5, keep 3+',
            extraTickets: '4, keep 1+',
            discardedTickets: 'under the deck',
            endOfGameBonus: 'bonus points for connected regions',
        },
        extraRules: [
            {
                name: 'Ferry cards',
                description: 'Ferry cards can be used in gray spaces with a wave symbol.',
                details: [
                    'You can draw 1 ferry card as your turn action.',
                    'You cannot have more than 2.',
                ]
            },
            {
                name: 'Ferry routes',
                description: 'Gray routes are ferry routes',
                details: [
                    'Spaces with a wave symbol require a locomotive or ferry card.',
                    'One ferry card can be used for up to 2 spaces.',
                ],
            },
            {
                name: 'Regions bonus',
                description: 'Players can score points based on the number of regions they have connected.',
                details: [
                    'There are 17 regions.',
                    'Players count the numbers of regions they have connected and score points based on this formula from 5 up to 15 regions: ((x - 4) * (x - 5)) / 2 + 1.',
                    'Distinct networks are scored separately.',
                    'Sardegna, Sicilia and Puglia count as 2 regions instead of one if all their cities are part of the same network.',
                ],
                table: {
                    headers: ['Regions Connected', 'Bonus Points'],
                    rows: [
                        ['5 regions', '1 point'],
                        ['6 regions', '3 points'],
                        ['7 regions', '6 points'],
                        ['8 regions', '10 points'],
                        ['9 regions', '15 points']
                    ]
                }
            },
        ],
        rulebook:
            'https://cdn.1j1ju.com/medias/10/df/07-ticket-to-ride-map-collection-volume-7-italy-rulebook.pdf',
    },
    {
        id: 'india',
        name: 'India',
        rules: {
            players: '2-4',
            trains: '20',
            initialTrainCards: '4',
            initialTickets: '3, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Mandala Bonus', description: 'Points for 2+ routes between cities' },
            { name: 'End game trigger', description: '2 or fewer trains left' },
        ],
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        rules: {
            players: '2-3',
            trains: '40',
            initialTrainCards: '5',
            initialTickets: '5, keep 3',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Country connection bonus', description: 'Points for connecting countries' },
            { name: 'Tunnels', description: 'May cost extra cards' },
        ],
    },
    {
        id: 'asia',
        name: 'Asia',
        rules: {
            players: '2-6',
            trains: '40',
            initialTrainCards: '4',
            initialTickets: '4, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points per team member',
        },
        extraRules: [
            { name: 'Team play', description: '4 or 6 players in teams of 2' },
            { name: 'Shared routes', description: 'Teammates share routes and tickets' },
            { name: 'Mountain passes', description: 'Require locomotives' },
        ],
    },
    {
        id: 'legendary-asia',
        name: 'Legendary Asia',
        rules: {
            players: '2-5',
            trains: '40',
            initialTrainCards: '4',
            initialTickets: '4, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [{ name: 'Mountain passes', description: 'Require locomotives' }],
    },
    {
        id: 'france',
        name: 'France',
        rules: {
            players: '2-5',
            trains: '35',
            initialTrainCards: '4',
            initialTickets: '5, keep 3',
            extraTickets: '4, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Color bonus', description: 'Points for using all colors' },
            { name: 'Country connection', description: 'Bonus for connecting countries' },
        ],
    },
    {
        id: 'old-west',
        name: 'Old West',
        rules: {
            players: '2-6',
            trains: '35',
            initialTrainCards: '4',
            initialTickets: '3, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Alvin the Alien', description: 'Moving piece for bonus points' },
            { name: 'Home cities', description: 'Build must connect to your starting city' },
        ],
    },
    {
        id: 'pennsylvania',
        name: 'Pennsylvania',
        rules: {
            players: '2-5',
            trains: '65',
            initialTrainCards: '4',
            initialTickets: '3, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Stock shares', description: 'Buy shares in railroad companies' },
            { name: 'Share bonus', description: 'Points for most shares per company' },
        ],
    },
    {
        id: 'united-kingdom',
        name: 'United Kingdom',
        rules: {
            players: '2-4',
            trains: '35',
            initialTrainCards: '4',
            initialTickets: '5, keep 3',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'Longest route: 10 points',
        },
        extraRules: [
            { name: 'Technology cards', description: 'Buy with locomotives to unlock abilities' },
            { name: 'Concessions', description: 'Required to build in specific regions' },
        ],
    },
    {
        id: 'amsterdam',
        name: 'Amsterdam',
        rules: {
            players: '2-4',
            trains: '16',
            initialTrainCards: '4',
            initialTickets: '3, keep 2',
            extraTickets: '3, keep 1',
            discardedTickets: 'in the box',
            endOfGameBonus: 'N/A',
        },
        extraRules: [
            { name: 'Game length', description: '10-15 minutes' },
            { name: 'Routes', description: 'Tram lines through Amsterdam' },
            { name: 'Goods bonus', description: 'Collect tokens for completed routes' },
        ],
    },
];
