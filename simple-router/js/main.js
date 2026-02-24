// Theme Management
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Sidebar Management
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Tab Management
function showTab(section, tab) {
    const container = document.getElementById('app-content');
    const codeBlocks = container.querySelectorAll(`[id^="code-${section}-"]`);
    codeBlocks.forEach(el => el.classList.add('hidden'));

    const targetBlock = document.getElementById(`code-${section}-${tab}`);
    if (targetBlock) targetBlock.classList.remove('hidden');

    // Toggle Buttons
    const allTabs = container.querySelectorAll(`[id^="tab-${section}-"]`);
    allTabs.forEach(el => {
        el.classList.remove('text-slate-100', 'border-b', 'border-brand-500', 'pb-0.5');
        el.classList.add('text-slate-400', 'hover:text-slate-100');
    });

    const activeBtn = document.getElementById(`tab-${section}-${tab}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400', 'hover:text-slate-100');
        activeBtn.classList.add('text-slate-100', 'border-b', 'border-brand-500', 'pb-0.5');
    }
}

// Copy Code
function copyCode(button) {
    const pre = button.parentElement.querySelector('code');
    const code = pre.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalContent = button.innerHTML;
        button.innerHTML = '<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        setTimeout(() => {
            button.innerHTML = originalContent;
        }, 2000);
    });
}

// Router
const routes = {
    '/': 'partials/home.html',
    '/claude-code': 'partials/claude-code.html',
    '/opencode': 'partials/opencode.html',
    '/amp': 'partials/amp.html',
    '/kilo': 'partials/kilo.html',

    '/roo-code': 'partials/roo-code.html',
    '/cline': 'partials/cline.html',
    '/zed': 'partials/zed.html'
};

async function handleRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);
    const routePath = path === '' ? '/' : path;
    const partialUrl = routes[routePath] || routes['/'];

    const appContent = document.getElementById('app-content');

    try {
        const response = await fetch(partialUrl);
        if (!response.ok) throw new Error('CORS or 404 error');
        const html = await response.text();
        appContent.innerHTML = html;

        // Update Sidebar
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });

        const activeLink = document.querySelector(`.sidebar-item[href="#${routePath}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Routing Error:', error);
        appContent.innerHTML = `
            <div class="p-8 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 text-center">
                <h2 class="text-xl font-bold text-red-800 dark:text-red-400 mb-2">Lỗi tải nội dung</h2>
                <p class="text-slate-600 dark:text-slate-400 mb-4">Dường như bạn đang mở file trực tiếp từ ổ cứng. Trình duyệt chặn việc tải file vì lý do bảo mật (CORS).</p>
                <div class="text-left bg-white dark:bg-black/20 p-4 rounded-lg font-mono text-sm inline-block">
                    <p class="text-slate-500 mb-2"># Hãy chạy lệnh này trong terminal:</p>
                    <code class="text-blue-600 dark:text-blue-400">npx serve .</code>
                </div>
            </div>`;
    }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
