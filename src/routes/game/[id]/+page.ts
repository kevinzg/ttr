import { error } from '@sveltejs/kit';
import { games } from '$lib/data/games.js';

export function load({ params }) {
    const game = games.find((g) => g.id === params.id);

    if (!game) {
        throw error(404, 'Game not found');
    }

    return {
        game,
        gameId: params.id,
    };
}
