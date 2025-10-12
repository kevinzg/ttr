<script>
    import '../app.css';
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TTR Cheat Sheet</title>
    <meta name="description" content="Quick reference guide for TTR board game rules" />
</svelte:head>

<header
    id="top"
    class="mx-4 mt-4 mb-6 rounded-2xl border border-white/20 bg-white/80 shadow-xl backdrop-blur-md dark:border-slate-700/30 dark:bg-slate-800/60"
>
    <div class="mx-auto max-w-6xl px-6 py-4">
        <a
            href={resolve("/")}
            data-sveltekit-preload-data="hover"
            class="inline-block hover:scale-105 transition-transform"
        >
            <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">TTR Cheat Sheet</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Quick reference guide
            </p>
        </a>
    </div>
</header>

<slot />
