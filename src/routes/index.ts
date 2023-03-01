/**
 * Internal dependencies
 */
// import HomePage from '../pages/HomePage';
import RepeaterTemplates from '../pages/RepeaterTemplates';
// import JobsPage from '../pages/jobs/JobsPage';
// import CreateJob from '../pages/jobs/CreateJob';
// import EditJob from '../pages/jobs/EditJob';
import Settings from '../pages/settings/Settings';
import ShortcodeBuilder from '../pages/shortcode-builder/ShortcodeBuilder';
// import ShortcodeBuilder from '../pages/ShortcodeBuilder';

const routes = [
    {
        path: '/',
        // element: HomePage,
        element: ShortcodeBuilder,
    },
    // {
    //     path: '/settings',
    //     element: Settings,
    // },
    // {
    //     path: '/repeater-templates',
    //     element: RepeaterTemplates,
    // },
    {
        path: '/shortcode-builder',
        element: ShortcodeBuilder,
    },
    // {
    //     path: '/jobs',
    //     element: JobsPage,
    // },
    // {
    //     path: '/jobs/new',
    //     element: CreateJob,
    // },
    // {
    //     path: '/jobs/edit/:id',
    //     element: EditJob,
    // },
];

export default routes;
