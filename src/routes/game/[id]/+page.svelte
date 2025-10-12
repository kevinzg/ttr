<script>
    import { resolve } from '$app/paths';

    export let data;

    $: game = data.game;

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

<svelte:head>
    <title>TTR {game.name} Cheat Sheet</title>
    <meta name="description" content="Cheat sheet for TTR {game.name}" />
</svelte:head>
<div class="mx-auto max-w-4xl px-4 pb-8">
    <!-- Navigation -->
    <nav class="mb-6">
        <a
            href={resolve('/')}
            class="inline-flex items-center text-sm text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
            ← Back to all games
        </a>
    </nav>

    <!-- Game Card -->
    <div
        class="overflow-hidden rounded-xl border border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-sm dark:border-slate-600/50 dark:bg-slate-800/80"
    >
        <!-- Header -->
        <div
            class="flex items-center justify-between rounded-t-xl bg-gray-600 px-6 py-4 text-white dark:bg-gray-700"
        >
            <h1 class="text-3xl font-bold">{game.name}</h1>
            {#if game.rulebook}
                <a
                    href={game.rulebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-md bg-white/20 px-3 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/30"
                >
                    📖 Rulebook
                </a>
            {/if}
        </div>

        <!-- Rules Table -->
        <table class="w-full">
            <tbody>
                {#each basicRules as rule, index (rule.key)}
                    <tr
                        class="border-b border-gray-100 transition-colors duration-150 hover:bg-gray-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                        class:last:border-b-0={index === basicRules.length - 1 &&
                            game.extraRules.length === 0}
                    >
                        <td class="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                            {rule.label}
                        </td>
                        <td
                            class="px-6 py-4 text-right font-semibold text-blue-600 dark:text-blue-400"
                        >
                            {game.rules[rule.key]}
                        </td>
                    </tr>
                {/each}
                {#each game.extraRules as rule, idx (idx)}
                    <tr
                        class="border-b border-gray-100 transition-colors duration-150 last:border-b-0 hover:bg-gray-200/50 dark:border-slate-700 dark:hover:bg-slate-700/50"
                    >
                        <td class="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                            {rule.name}
                        </td>
                        <td
                            class="px-6 py-4 text-right font-semibold text-blue-600 dark:text-blue-400"
                        >
                            <div class="text-right">
                                {rule.description}
                                {#if (rule.details && rule.details.length > 0) || rule.table}
                                    <details class="mt-2">
                                        <summary
                                            class="cursor-pointer text-xs text-gray-500 select-none hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            Show details
                                        </summary>
                                        <div class="mt-2 text-left">
                                            {#if rule.details && rule.details.length > 0}
                                                <ul
                                                    class="mb-2 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    {#each rule.details as detail, idx (idx)}
                                                        <li>{detail}</li>
                                                    {/each}
                                                </ul>
                                            {/if}
                                            {#if rule.table}
                                                <div class="flex justify-center">
                                                    <table
                                                        class="overflow-hidden rounded border border-gray-300 bg-gray-50 text-xs dark:border-gray-600 dark:bg-gray-700"
                                                    >
                                                        {#if rule.table.headers}
                                                            <thead>
                                                                <tr
                                                                    class="bg-gray-200 dark:bg-gray-600"
                                                                >
                                                                    {#each rule.table.headers as header, idx (idx)}
                                                                        <th
                                                                            class="border-r border-gray-300 px-2 py-1 font-medium text-gray-800 last:border-r-0 dark:border-gray-500 dark:text-gray-200"
                                                                        >
                                                                            {header}
                                                                        </th>
                                                                    {/each}
                                                                </tr>
                                                            </thead>
                                                        {/if}
                                                        <tbody>
                                                            {#each rule.table.rows as row, rowIdx (rowIdx)}
                                                                <tr
                                                                    class="border-t border-gray-300 dark:border-gray-600"
                                                                >
                                                                    {#each row as cell, cellIdx (cellIdx)}
                                                                        <td
                                                                            class="border-r border-gray-300 px-2 py-1 text-gray-700 last:border-r-0 dark:border-gray-500 dark:text-gray-300"
                                                                        >
                                                                            {cell}
                                                                        </td>
                                                                    {/each}
                                                                </tr>
                                                            {/each}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            {/if}
                                        </div>
                                    </details>
                                {/if}
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
