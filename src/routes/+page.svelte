<script>
    import { resolve } from '$app/paths';
    import { games } from '$lib/data/games';
</script>

<svelte:head>
    <title>TTR Cheat Sheet</title>
    <meta name="description" content="Quick reference for all TTR game variants and expansions" />
</svelte:head>

<div class="mx-auto max-w-6xl px-4 pb-8">
    <!-- Header -->
    <div class="my-8 text-center">
        <h2 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">Maps</h2>
    </div>

    <!-- Games Grid -->
    <div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each games as game (game.id)}
            <a
                href={resolve('/game/[id]', { id: game.id })}
                class="group block rounded-xl border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-xl dark:border-slate-600/50 dark:bg-slate-800/80"
            >
                <div class="p-4">
                    <!-- Game Name -->
                    <h3
                        class="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400"
                    >
                        {game.name}
                    </h3>

                    <!-- Key Stats -->
                    <div class="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div class="flex justify-between">
                            <span>Trains:</span>
                            <span class="font-medium">{game.rules.trains}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Initial Tickets:</span>
                            <span class="font-medium">{game.rules.initialTickets}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Extra Tickets:</span>
                            <span class="font-medium">{game.rules.extraTickets}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Bonus score:</span>
                            <span class="font-medium">{game.rules.endOfGameBonus}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Features:</span>
                            <span class="font-medium">{game.rules.features}</span>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-slate-700"
                    >
                        <span
                            class="text-xs text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400"
                        >
                            View rules →
                        </span>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
