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
        endOfGameBonus: string; // Longest route (10 points)
        features: string;
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
            endOfGameBonus: 'Longest route (10 points)',
            features: 'Classic base game',
        },
        extraRules: [
            {
                name: 'Route scoring',
                description: 'Points awarded for completing routes',
                table: {
                    headers: ['Route Length', 'Points'],
                    rows: [
                        ['1 train', '1 point'],
                        ['2 trains', '2 points'],
                        ['3 trains', '4 points'],
                        ['4 trains', '7 points'],
                        ['5 trains', '10 points'],
                        ['6 trains', '15 points'],
                    ],
                },
            },
        ],
        rulebook: 'https://ncdn0.daysofwonder.com/tickettoride/en/img/tt_rules_2015_en.pdf',
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
            endOfGameBonus: 'Longest route (10 points)',
            features: 'Train stations, Tunnels, Ferries',
        },
        extraRules: [
            {
                name: 'Train stations',
                description: '3 per player, unused stations worth 4 points each',
                details: [
                    'Can be placed on any city',
                    "Allows you to use opponent's routes from that city for destination tickets",
                    'Cannot be moved once placed',
                ],
            },
            {
                name: 'Tunnels',
                description: 'May cost extra cards',
                details: [
                    'Marked with double lines on the map',
                    'After playing cards, draw 3 additional cards from deck',
                    'For each matching color/locomotive drawn, play 1 additional card',
                    'If you cannot/will not pay, take cards back and lose turn',
                ],
            },
            {
                name: 'Ferries',
                description: 'Require locomotives',
                details: [
                    'Marked with locomotive symbols',
                    'Must play locomotives for marked spaces',
                    'Can use wild cards as locomotives',
                ],
            },
            {
                name: 'Route scoring',
                description: 'Same as USA',
                table: {
                    headers: ['Route Length', 'Points'],
                    rows: [
                        ['1 train', '1 point'],
                        ['2 trains', '2 points'],
                        ['3 trains', '4 points'],
                        ['4 trains', '7 points'],
                        ['5 trains', '10 points'],
                        ['6 trains', '15 points'],
                        ['8 trains', '21 points'],
                    ],
                },
            },
        ],
        rulebook:
            'https://raw.githubusercontent.com/Bergenheiser/ticket_to_ride_europe/main/documents/Ticket%20to%20Ride%20Europe%20-%20Rules.pdf',
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
            endOfGameBonus: 'Longest route (10 points)',
            features: 'Terrain cards',
        },
        extraRules: [
            {
                name: 'Terrain cards',
                description: '1 of each type at start (3 total)',
                details: [
                    'Desert (yellow)',
                    'Jungle (green)',
                    'Mountain (brown)',
                    'Terrain cards are not train cards',
                ],
            },
            {
                name: 'Terrain routes',
                description: 'Special routes requiring terrain cards',
                details: [
                    'Marked with terrain symbols on the map',
                    'Must discard matching terrain card to claim',
                    'Follow normal rules for train cards',
                    'Can only be claimed if you have the terrain card',
                ],
            },
        ],
    },
    {
        id: 'japan',
        name: 'Japan ✅',
        rules: {
            players: '2-5',
            trains: '20',
            initialTrainCards: '4',
            initialTickets: '4, keep 2+',
            extraTickets: '3, keep 1+',
            discardedTickets: 'bottom of the deck',
            endOfGameBonus: 'Bullet Train bonus',
            features: 'Shared bullet train',
        },
        extraRules: [
            {
                name: 'Bullet Train Routes',
                description: 'Shared routes that contribute to a national Bullet Train network.',
                details: [
                    'Bullet Train Routes are special routes that any player may later use to complete Destination Tickets.',
                    'To claim one, play cards of a single color equal to the number of spaces on the route. Locomotives may be used.',
                    'Instead of scoring points, advance your Progression Marker on the Bullet Train Track by the number of cards played.',
                    'Place a white Bullet Train miniature on the route instead of your own Train Cars.',
                    'Once all Bullet Train miniatures are used, any unclaimed Bullet Train Routes become standard gray routes and are claimed normally.',
                    'The Aomori–Hakodate routes are not double routes; they follow normal single-route rules.',
                ],
            },
            {
                name: 'Kyushu Island & Tokyo Subway',
                description: 'Zoomed-in regions of the main Japan map.',
                details: [
                    'Routes in these areas are claimed using the normal rules.',
                    'For Destination Tickets, consider both Tokyo spaces as the same city, and both Kokura spaces as the same city.',
                    'Connections into or out of these regions count as if they connect directly to their corresponding main-board city.',
                ],
            },
            {
                name: 'End of Game Trigger',
                description: '2 or fewer bullet trains left too',
                details: [
                    'In addition to the standard end game trigger, there is an extra condition: there must be 0, 1 or 2 bullet trains left in the supply',
                ],
            },
            {
                name: 'Bullet Train Scoring',
                description:
                    "Get bonus points according to the player's position on the Bullet Train Track.",
                details: [
                    'Players higher on the track receive more points; players lower may lose points.',
                    'In case of a tie, all tied players receive the full points for their position, and the next player scores points as if there was no tie.',
                ],
                table: {
                    headers: ['Rank', 'Points (5/4/3/2 players)'],
                    rows: [
                        ['1st', '+25 / +20 / +15 / +10'],
                        ['2nd', '+15 / +10 / +5 / -10'],
                        ['3rd', '+5 / 0 / -10'],
                        ['4th', '-5 / -10'],
                        ['5th', '-10'],
                        ['0 trains', '-20 / -20 / -20 / -20'],
                    ],
                },
            },
        ],
        rulebook: 'https://www.gokids.com.tw/tsaiss/gokids/rules/TTR_JP_RULEBOOK.pdf',
    },
    {
        id: 'italy',
        name: 'Italy ✅',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '5, keep 3+',
            extraTickets: '4, keep 1+',
            discardedTickets: 'bottom of the deck',
            endOfGameBonus: 'Regions bonus',
            features: 'Ferry cards and regions bonus',
        },
        extraRules: [
            {
                name: 'Ferries',
                description:
                    'Special gray routes with wave symbols that require ferry cards or locomotives.',
                details: [
                    'You may draw 1 ferry card as your entire turn action.',
                    'You may hold a maximum of 2 ferry cards at a time.',
                    'Each wave symbol on a route requires a locomotive or ferry card to claim.',
                    'A single ferry card can cover up to 2 wave symbols.',
                    'You must still play the correct number of colored train cards for the rest of the route.',
                ],
            },
            {
                name: 'Regions Bonus',
                description: 'Earn bonus points for connecting multiple Italian regions.',
                details: [
                    'There are 17 regions total.',
                    'Sardegna, Sicilia, and Puglia each count as 2 regions if all their cities are connected.',
                    'You need at least 5 regions in a single network to score points.',
                    'Each separate network scores independently.',
                ],
                table: {
                    headers: ['Regions Connected', 'Bonus Points'],
                    rows: [
                        ['5 regions', '1 point'],
                        ['6 regions', '2 points'],
                        ['7 regions', '4 points'],
                        ['8 regions', '7 points'],
                        ['9 regions', '11 points'],
                        ['10 regions', '16 points'],
                        ['11 regions', '22 points'],
                        ['12 regions', '29 points'],
                        ['13 regions', '37 points'],
                        ['14 regions', '46 points'],
                        ['15+ regions', '56 points'],
                    ],
                },
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
            endOfGameBonus: 'Longest route (10 points)',
            features: 'Mandala bonuses',
        },
        extraRules: [
            {
                name: 'Mandala Bonus',
                description: 'Bonus points for claiming multiple routes between the same cities',
                details: [
                    'Some city pairs have 2 or 3 parallel routes',
                    'If you claim 2+ routes between the same cities, score bonus points',
                    'Routes must be between exactly the same pair of cities',
                ],
                table: {
                    headers: ['Routes Between Cities', 'Bonus Points'],
                    rows: [
                        ['2 routes', '10 points'],
                        ['3 routes', '20 points'],
                    ],
                },
            },
            {
                name: 'End game trigger',
                description: '2 or fewer trains left',
                details: [
                    'Game ends when any player has 2 or fewer trains',
                    'Shorter game due to fewer starting trains',
                ],
            },
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
            features: 'Tunnels, shorter game',
        },
        extraRules: [
            {
                name: 'Tunnels',
                description: 'Same tunnel rules as Europe',
                details: [
                    'Draw 3 additional cards after claiming',
                    'Pay extra for each matching color/locomotive',
                    'Take back cards if unable/unwilling to pay',
                ],
            },
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
            features: 'Teams',
        },
        extraRules: [
            {
                name: 'Team play',
                description: 'With 4 or 6 players, play in teams of 2',
                details: [
                    '2-3 players: normal rules',
                    '4 players: 2 teams of 2',
                    '6 players: 3 teams of 2',
                    'Teammates sit across from each other',
                    'Teams share victory conditions',
                ],
            },
            {
                name: 'Shared routes and tickets',
                description: "Teammates can use each other's routes for destination tickets",
                details: [
                    'Routes claimed by either teammate count for both',
                    "Destination tickets can be completed using partner's routes",
                    'Each player still claims routes individually',
                ],
            },
            {
                name: 'Mountain passes',
                description: 'Routes requiring locomotives',
                details: [
                    'Marked with locomotive symbols',
                    'Must play locomotives for marked spaces',
                    'Same as ferry rules in Europe',
                ],
            },
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
            features: 'Mountain passes',
        },
        extraRules: [
            {
                name: 'Mountain passes',
                description: 'Routes requiring locomotives',
                details: [
                    'Marked with locomotive symbols on the map',
                    'Must play locomotives for marked spaces',
                    'No team play rules (unlike regular Asia map)',
                ],
            },
        ],
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
            features: 'Track placement',
        },
        extraRules: [
            {
                name: 'Color bonus',
                description: 'Bonus for claiming routes of all 8 colors',
                details: [
                    'Must claim at least one route of each color: red, orange, yellow, green, blue, purple, black, white',
                    'Gray routes do not count toward color bonus',
                    'Locomotives do not count as any specific color',
                ],
                table: {
                    headers: ['Colors Claimed', 'Bonus Points'],
                    rows: [['8 colors', '15 points']],
                },
            },
            {
                name: 'Country connections',
                description: 'Bonus for connecting France to neighboring countries',
                details: [
                    'Must have continuous route from France to each country',
                    'Each connection scores points independently',
                ],
                table: {
                    headers: ['Country Connection', 'Bonus Points'],
                    rows: [
                        ['France to Germany', '10 points'],
                        ['France to Belgium', '8 points'],
                        ['France to Italy', '8 points'],
                        ['France to Spain', '6 points'],
                        ['France to Switzerland', '5 points'],
                    ],
                },
            },
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
            features: 'Home cities and Alvin',
        },
        extraRules: [
            {
                name: 'Alvin the Alien',
                description: 'Moving piece that awards bonus points',
                details: [
                    'Starts in Roswell',
                    'Moves when certain routes are claimed',
                    'Player who moves Alvin scores 3 points',
                    'Routes that move Alvin are marked on the board',
                    'Alvin can visit each city only once',
                ],
            },
            {
                name: 'Home cities',
                description: 'Each player has a starting home city',
                details: [
                    'Randomly assigned at game start',
                    'All destination tickets must connect to your home city',
                    "Cannot complete tickets that don't connect to home",
                    'Network must be continuous from home city',
                ],
            },
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
            features: 'Stock share investments',
        },
        extraRules: [
            {
                name: 'Stock shares',
                description: 'Invest in railroad companies for bonus points',
                details: [
                    'Buy shares instead of drawing train cards',
                    'Each company has limited shares available',
                    'Costs 1 locomotive card to buy 1 share',
                    'Can buy multiple shares of the same company',
                ],
            },
            {
                name: 'Share scoring',
                description: 'Points awarded based on share ownership',
                details: [
                    'Player with most shares in a company gets full points',
                    'Ties split the points equally',
                    'Companies only score if someone claims routes for them',
                ],
                table: {
                    headers: ['Company Routes Claimed', 'Points for Most Shares'],
                    rows: [
                        ['1-2 routes', '5 points'],
                        ['3-4 routes', '10 points'],
                        ['5-6 routes', '15 points'],
                        ['7+ routes', '20 points'],
                    ],
                },
            },
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
            features: 'Technology cards and Concessions',
        },
        extraRules: [
            {
                name: 'Technology cards',
                description: 'Special abilities purchased with locomotives',
                details: [
                    'Available throughout the game',
                    'Cost 1-4 locomotives each',
                    'Provide ongoing benefits or one-time effects',
                    'Limited quantity of each technology',
                    'Examples: draw extra cards, claim routes cheaper, bonus points',
                ],
            },
            {
                name: 'Concessions',
                description: 'Required permits to build in certain regions',
                details: [
                    'Wales, Scotland, Ireland, and France require concessions',
                    'Must own the appropriate concession to claim routes in that region',
                    'Concessions can be bought with technology purchases',
                    'Some destination tickets require multiple concessions',
                ],
            },
        ],
    },
    {
        id: 'iberia',
        name: 'Iberia',
        rules: {
            players: '2-5',
            trains: '35',
            initialTrainCards: '4',
            initialTickets: '6 (draft), keep 4',
            extraTickets: '6 (draft), keep 4',
            discardedTickets: 'bottom of destination deck',
            endOfGameBonus: 'Festival cards scoring',
            features: 'Festival cards, ticket drafting twice',
        },
        extraRules: [
            {
                name: 'Ticket Drafting (twice)',
                description:
                    'Draft destination tickets twice during the game rather than simple draw',
                details: [
                    'At game start, each player drafts 6 destination cards (choose one, pass the rest) until each holds 4. :contentReference[oaicite:6]{index=6}',
                    'Repeat the draft process one more time when the train deck is about to be exhausted (via a “Ticket Draft” card inserted in the deck). :contentReference[oaicite:7]{index=7}',
                ],
            },
            {
                name: 'Festival Cards',
                description:
                    'As you build routes to special “festival” cities, you collect festival cards which score bonus points at end',
                details: [
                    'There are 54 Festival cards shuffled into the train deck. :contentReference[oaicite:8]{index=8}',
                    'When one is drawn (or the face-up pool is refreshed), place it adjacent to the corresponding city on the map. :contentReference[oaicite:9]{index=9}',
                    'If you claim a route that reaches a city which has festival cards, you may take *all* those festival cards currently there. :contentReference[oaicite:10]{index=10}',
                    'At end of game, for each city you collected festival cards in, you score points based on how many of that city’s festival cards you hold (the more, the higher the value). :contentReference[oaicite:11]{index=11}',
                ],
            },
        ],
        rulebook:
            'https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/IBERIA-RULES_EN-1.pdf',
    },
    {
        id: 'south-korea',
        name: 'South Korea',
        rules: {
            players: '2-5',
            trains: '45',
            initialTrainCards: '4',
            initialTickets: '6 (draft), keep 4',
            extraTickets: '3, keep at least 1',
            discardedTickets: 'bottom of destination deck',
            endOfGameBonus: 'Province scoring',
            features: 'Province mat, express train cards',
        },
        extraRules: [
            {
                name: 'Province Mat & Route Claims',
                description:
                    'Claiming a route also lets you place a marker in the province mat zone corresponding to that color',
                details: [
                    'Routes in South Korea are grouped by color (e.g. blue in northeast, yellow in northwest, etc.). :contentReference[oaicite:18]{index=18}',
                    'When claiming a route, you may place one of your trains on a matching colored slot on the province mat in an empty space corresponding to the number of cards played. You may even play extra cards to claim a higher slot. :contentReference[oaicite:19]{index=19}',
                    'If the “official” slot is taken, you may take the next lower open slot. :contentReference[oaicite:20]{index=20}',
                ],
            },
            {
                name: 'Express Train Cards',
                description: 'Special +1, +2, +3 cards that allow extra actions on your turn',
                details: [
                    'Each player receives 3 Express Train cards (marked +1, +2, +3) at game start. :contentReference[oaicite:21]{index=21}',
                    'You may play one Express card on your turn to do one of the following enhanced actions: draw extra train cards, draw extra destination tickets, or boost your province mat placement (i.e. claim a higher value on a route). :contentReference[oaicite:22]{index=22}',
                ],
            },
            {
                name: 'End-of-Game Province Scoring',
                description:
                    'At game end, evaluate each color track on province mat and award bonus points',
                details: [
                    'For each color track on the province mat, sum up the values claimed (i.e. the positions of your markers). :contentReference[oaicite:23]{index=23}',
                    'The player (or players tied) with the highest sum in each color earns a bonus (10 / 6 / 4 / 2 depending on number of players) per color track. :contentReference[oaicite:24]{index=24}',
                ],
            },
        ],
        rulebook:
            'https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/KOREA-RULES_EN.pdf',
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
            endOfGameBonus: 'Goods bonus',
            features: 'Quick gameplay and Goods tokens',
        },
        extraRules: [
            {
                name: 'Game length',
                description: 'Quick 10-15 minute game',
                details: [
                    'Fewer trains make for faster gameplay',
                    'Perfect for quick games between longer sessions',
                    'Simplified rules compared to full maps',
                ],
            },
            {
                name: 'Tram routes',
                description: 'Short routes through Amsterdam',
                details: [
                    'Most routes are 1-2 trains long',
                    'Routes represent tram lines through the city',
                    'Compact map with shorter distances',
                ],
            },
        ],
    },
];
