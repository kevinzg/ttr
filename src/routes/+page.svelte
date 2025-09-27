<script>
    import { games } from '$lib/data/games';
</script>

<div class="mx-auto max-w-2xl p-4">
    <!-- Game Selection -->
    <div class="mb-6">
        <h2 id="game-selection" class="mb-3 text-lg font-semibold">Select Game:</h2>
        <div class="flex flex-wrap gap-2">
            {#each games as game (game.id)}
                <a
                    href="#{game.id}"
                    class="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                >
                    {game.name}
                </a>
            {/each}
        </div>
    </div>

    <!-- Game Tables -->
    {#each games as game (game.id)}
        <section id={game.id} class="mb-8">
            <h2 class="mb-4 text-xl font-bold">{game.name}</h2>

            <div class="overflow-hidden rounded-lg border bg-white">
                <table class="w-full">
                    <tbody>
                        {#each game.rules as rule (rule.key)}
                            <tr class="border-b last:border-b-0">
                                <td class="px-4 py-3 font-medium">{rule.key}</td>
                                <td class="px-4 py-3 text-right">{rule.value}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <div class="mt-4">
                <a href="#game-selection" class="text-sm text-blue-500">↑ Back to top</a>
            </div>
        </section>
    {/each}
</div>
