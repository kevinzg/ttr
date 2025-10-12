<script>
    import '../app.css';
    import { resolve } from '$app/paths';
</script>

<header
    class="mx-4 mt-4 mb-6 rounded-2xl border border-white/20 bg-white/80 shadow-xl backdrop-blur-md dark:border-slate-700/30 dark:bg-slate-800/60"
>
    <div class="mx-auto max-w-6xl px-6 py-4">
        <a href={resolve('/')} class="inline-block transition-transform hover:scale-105">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">TTR Cheat Sheet</h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Quick reference guide</p>
        </a>
    </div>
</header>

<slot />

<!-- Footer -->
<footer
    class="border-t border-gray-200/50 py-6 text-center text-sm text-gray-500 dark:border-slate-700/50 dark:text-gray-400"
>
    <p>
        Found any issues? Please report them <a
            href="https://github.com/kevinzg/ttr/issues"
            class="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >here</a
        >.
    </p>
</footer>
