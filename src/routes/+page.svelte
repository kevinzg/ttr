<script>
    import { games } from '$lib/data/games';

    const basicRules = [
        { key: 'players', label: '# of players' },
        { key: 'trains', label: '# of trains' },
        { key: 'initialTrainCards', label: '# initial cards' },
        { key: 'initialTickets', label: '# initial tickets' },
        { key: 'extraTickets', label: '# extra tickets' },
        { key: 'discardedTickets', label: 'Discarded tickets' },
        { key: 'endOfGameBonus', label: 'End of game bonus' },
    ];
</script>

<div class="mx-auto max-w-4xl px-4 pb-8">
    <!-- Game Selection -->
    <div
        class="mb-8 rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-slate-700/30 dark:bg-slate-800/60"
    >
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Select Your Game:
        </h2>
        <div class="flex flex-wrap gap-3">
            {#each games as game (game.id)}
                <a
                    href="#{game.id}"
                    class="rounded-lg border border-gray-200/50 bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-lg dark:border-slate-600/50 dark:bg-slate-800/80 dark:text-gray-200 dark:hover:bg-slate-700/80 dark:hover:text-blue-400"
                >
                    {game.name}
                </a>
            {/each}
        </div>
    </div>

    <!-- Game Tables -->
    {#each games as game (game.id)}
        <section id={game.id} class="mb-12">
            <div
                class="overflow-hidden rounded-xl border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-sm dark:border-slate-600/50 dark:bg-slate-800/80"
            >
                <div class="rounded-t-xl bg-gray-600 px-6 py-4 text-white dark:bg-gray-700">
                    <h2 class="text-2xl font-bold">{game.name}</h2>
                </div>

                <table class="w-full">
                    <tbody>
                        {#each basicRules as rule, index (rule.key)}
                            <tr
                                class="border-b border-gray-100 transition-colors duration-150 hover:bg-gray-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                                class:last:border-b-0={index === basicRules.length - 1 && game.extraRules.length === 0}
                            >
                                <td class="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                                    {rule.label}
                                </td>
                                <td class="px-6 py-4 text-right font-semibold text-blue-600 dark:text-blue-400">
                                    {rule.key === 'players' ? game.rules.players :
                                     rule.key === 'trains' ? game.rules.trains :
                                     rule.key === 'initialTrainCards' ? game.rules.initialTrainCards :
                                     rule.key === 'initialTickets' ? game.rules.initialTickets :
                                     rule.key === 'extraTickets' ? game.rules.extraTickets :
                                     rule.key === 'discardedTickets' ? game.rules.discardedTickets :
                                     rule.key === 'endOfGameBonus' ? game.rules.endOfGameBonus : ''}
                                </td>
                            </tr>
                        {/each}
                        {#each game.extraRules as rule (rule.name)}
                            <tr
                                class="border-b border-gray-100 transition-colors duration-150 last:border-b-0 hover:bg-gray-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                            >
                                <td class="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                                    {rule.name}
                                </td>
                                <td class="px-6 py-4 text-right font-semibold text-blue-600 dark:text-blue-400">
                                    {#if rule.description}
                                        <div class="mb-2">{rule.description}</div>
                                    {/if}
                                    {#if rule.details && rule.details.length > 0}
                                        <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 text-left">
                                            {#each rule.details as detail, idx (idx)}
                                                <li>{detail}</li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            {#if game.rulebook}
                <div class="mt-4 px-2">
                    <!-- svelte-ignore svelte/no-navigation-without-resolve -->
                    <a
                        href={game.rulebook}
                        target="_blank"
                        rel="noopener noreferrer external"
                        data-sveltekit-external
                        class="text-sm text-green-600 transition-colors hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                    >
                        📖 View Rulebook
                    </a>
                </div>
            {/if}

            <div class="mt-4 px-2">
                <a
                    href="#top"
                    class="text-sm text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    ↑ Back to top
                </a>
            </div>
        </section>
    {/each}

    <!-- Footer -->
    <footer
        class="border-t border-gray-200/50 pt-12 text-center text-sm text-gray-500 dark:border-slate-700/50 dark:text-gray-400"
    >
        <p>
            Found any issues? Please report them <a
                href="https://github.com/kevinzg/ttr/issues"
                class="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >here</a
            >.
        </p>
    </footer>
</div>
