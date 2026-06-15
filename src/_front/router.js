import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import {
    initializeData,
    initializePlugins,
    initializeIntegrationInstances,
    onPageUnload,
} from '@/_common/helpers/data';
import { convertPathToRouterFormat } from '@/_common/helpers/urlParametersParsing';
import { getRuntimeEnvironment } from '@/helpers/frontEnv.js';
import { useBackAuthStore } from '@/pinia/backAuth.js';

/**
 * @typedef {import('vue-router').Router} Router
 * @typedef {import('vue-router').RouteRecordRaw} RouteRecordRaw
 * @typedef {import('vue-router').RouterOptions} RouterOptions
 * @typedef {import('vue-router').RouterScrollBehavior} RouterScrollBehavior
 */

/**
 * @typedef {Object} Lang
 * @property {string} lang
 * @property {boolean} [default]
 * @property {boolean} [isDefaultPath]
 */

/**
 * @typedef {Object} PageSecurity
 * @property {'authenticated' | string} [accessRule]
 * @property {string[]} [accessRoles]
 * @property {'AND' | 'OR'} [accessRolesCondition]
 */

/**
 * @typedef {Object} Page
 * @property {string} id
 * @property {Record<string, string> & { default: string }} paths
 * @property {string[]} langs
 * @property {PageSecurity} [security]
 * @property {{ userGroup: string }[]} [pageUserGroups]
 */

/**
 * @typedef {Object} DesignInfo
 * @property {string} homePageId
 * @property {Page[]} pages
 * @property {Lang[]} langs
 * @property {unknown} [auth]
 * @property {{ href?: string }} [baseTag]
 */

/** @type {Router} */
let router;
/** @type {RouteRecordRaw[]} */
const routes = [];

/** @type {RouterScrollBehavior} */
const scrollBehavior = to => {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
};

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

window.wwg_designInfo = {"id":"d6032b39-0442-482c-8acc-d05dd3c270b4","homePageId":"f122deb8-bc87-4c5e-85f3-463acbb1e932","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":false},{"lang":"de","default":false,"isDefaultPath":false},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"27e6dea6-36e1-495e-9fee-4fa92427822a","name":"Load data","type":"front","actions":{"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f":{"id":"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f","lang":{"code":"variables['98b58b13-d4ab-48e6-88ff-6f4178569719']","__wwtype":"f","defaultValue":""},"type":"change-lang"}},"trigger":"onload","version":2,"firstAction":"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f","triggerConditions":null}],"back":{"isServerSetup":{"staging":false,"production":false}},"auth":null,"pages":[{"id":"37d6be64-6f65-48a6-ab12-44db9c4a2e00","linkId":"37d6be64-6f65-48a6-ab12-44db9c4a2e00","name":"A propos","folder":null,"paths":{"en":"apropos","default":"apropos"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"4c196327-efa4-4ae8-a81b-f1c2733ab5e9","sectionTitle":"Main Content Section","linkId":"03010b64-bfbe-4b99-9340-cd8f75354411"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"f122deb8-bc87-4c5e-85f3-463acbb1e932","linkId":"f122deb8-bc87-4c5e-85f3-463acbb1e932","name":"Home","folder":null,"paths":{"default":"home"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"8430f93c-9e27-4322-bcbf-72d975e3381b","sectionTitle":"Main Content Section","linkId":"b27aa3fd-aea0-450b-93b8-3bf8d1a2f6a1"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"a1824246-b059-448b-8cf9-2eb8bce474cb","linkId":"a1824246-b059-448b-8cf9-2eb8bce474cb","name":"SwissNote","folder":null,"paths":{"en":"swissnote","default":"swissnote"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"03732e8e-40d8-4d54-89bd-c8c72b2c367e","sectionTitle":"Main Content Section","linkId":"365f0289-4f9c-4c54-bed4-ec1d13378c29"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"3ae17e63-1f79-42f4-871b-09d59da12b95","linkId":"3ae17e63-1f79-42f4-871b-09d59da12b95","name":"Confidentialité","folder":null,"paths":{"en":"confidentialite","default":"confidentialite"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"37769a22-0b52-4b8f-93f0-4420d2e1bc5e","sectionTitle":"Main Content Section","linkId":"99e7bd04-24c0-4f2d-9da0-8bd3e81cb3a1"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"ae60887d-a138-435c-8ded-f78a509e6228","linkId":"ae60887d-a138-435c-8ded-f78a509e6228","name":"Utilisation","folder":null,"paths":{"en":"utilisation","default":"utilisation"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"c672a48c-5fb6-4df9-95cf-c0583315534f","sectionTitle":"Main Content Section","linkId":"6f20c17f-66c5-4b8f-bbb9-59aaef53b09c"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
window.wwg_cacheVersion = 10;
window.wwg_pluginsSettings = pluginsSettings;
window.wwg_disableManifest = false;

/** @type {Lang} */
const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {
    lang: 'en',
    default: true,
};

/**
 * @param {Page} page
 * @param {Lang} lang
 * @param {string} [forcedPath]
 */
const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    path = convertPathToRouterFormat(path);

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            const backAuthStore = useBackAuthStore(wwLib.$pinia);
            if (!wwLib.wwAuth.plugin) {
                if (!backAuthStore.projectAuth && window.wwg_designInfo.auth) {
                    backAuthStore.setProjectAuth(window.wwg_designInfo.auth);
                }
            }

            //Init plugins
            await initializePlugins();

            //Init integration instances
            await initializeIntegrationInstances();

            if (!wwLib.wwAuth.plugin) {
                await backAuthStore.refresh();
                const projectAuth = backAuthStore.projectAuth || {};

                //Check if private page
                if (page.security?.accessRule === 'authenticated') {
                    if (!backAuthStore.isAuthenticated) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            projectAuth.unauthenticatedPageId
                        )}?_source=${to.path}`;
                        return null;
                    } else if (page.security?.accessRoles?.length) {
                        const hasAccess =
                            page.security.accessRolesCondition === 'AND'
                                ? backAuthStore.matchAllRoles(page.security.accessRoles)
                                : backAuthStore.matchAnyRoles(page.security.accessRoles);
                        if (!hasAccess) {
                            window.location.href = `${wwLib.wwPageHelper.getPagePath(
                                projectAuth.unauthorizedPageId
                            )}?_source=${to.path}`;
                            return null;
                        }
                    }
                }
            } else {
                // Deprecated legacy auth plugins, to remove in the future
                if (page.pageUserGroups?.length) {
                    await wwLib.wwAuth.init();

                    // Redirect to not sign in page if not logged
                    if (!wwLib.wwAuth.getIsAuthenticated()) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthenticatedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }

                    //Check roles are required
                    if (
                        page.pageUserGroups.length > 1 &&
                        !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                    ) {
                        window.location.href = `${wwLib.wwPageHelper.getPagePath(
                            wwLib.wwAuth.getUnauthorizedPageId()
                        )}?_source=${to.path}`;

                        return null;
                    }
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        redirect: null,
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

/** @type {RouterOptions} */
let routerOptions;

const isProd = getRuntimeEnvironment() === 'production';

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
