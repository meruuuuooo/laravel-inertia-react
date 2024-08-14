import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
        showSpinner: false,

        // The following is a workaround for a bug in Safari that causes the
        // animation to be extremely choppy
        delay: 250,

        // The following is a workaround for a bug in Chrome where the bar would
        // not re-appear once it's been hidden, so it's always displayed
        includeCSS: false,
        
    },
});
