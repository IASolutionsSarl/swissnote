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

window.wwg_designInfo = {"id":"d6032b39-0442-482c-8acc-d05dd3c270b4","homePageId":"f122deb8-bc87-4c5e-85f3-463acbb1e932","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true,"isDefaultPath":false},{"lang":"de","default":false,"isDefaultPath":false},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"27e6dea6-36e1-495e-9fee-4fa92427822a","name":"Load data","type":"front","actions":{"0124c949-550a-48ae-a56e-4416f8e0ed3f":{"id":"0124c949-550a-48ae-a56e-4416f8e0ed3f","next":"5f57fee7-3917-4cb5-9ad2-10915d9bee75","type":"update-variable","varId":"1611594c-7e7c-48b5-8401-e6bd3cdc0d20","varValue":{"code":"collections['31776aad-577b-40b7-ab34-eabe1ed13ad1']?.['data']?.[0]","__wwtype":"f"}},"0fc347ef-838b-4bc2-b8ee-239586d056ae":{"id":"0fc347ef-838b-4bc2-b8ee-239586d056ae","next":"22f2a564-ae8b-482a-b9f4-7921de0c2986","type":"update-variable","varId":"b6cccf2e-8701-4d97-8200-3c71ae123bbc","varValue":{"code":"context.workflow?.['5a91069d-8e14-4a9a-b5d7-c22bdd864c6b']?.result","__wwtype":"f"}},"191be7a7-24bb-426b-bdd3-7a3c45669bcc":{"id":"191be7a7-24bb-426b-bdd3-7a3c45669bcc","type":"update-variable","varId":"b9dc557a-f21d-406d-81b0-a361fd9bd80b","disabled":true,"varValue":{"code":"context.workflow?.['ad6b57ee-eb9a-451c-902a-cc9c2ceffe14']?.result","__wwtype":"f"}},"19f7c84c-8b93-4952-aa54-6b6a107f62fb":{"id":"19f7c84c-8b93-4952-aa54-6b6a107f62fb","next":"0124c949-550a-48ae-a56e-4416f8e0ed3f","type":"fetch-collection","collectionId":"31776aad-577b-40b7-ab34-eabe1ed13ad1"},"216950bf-5a1d-43ad-97c3-ad53958d39a6":{"id":"216950bf-5a1d-43ad-97c3-ad53958d39a6","next":"6e24eaf1-67b6-49fa-b177-ef0ea312c2b1","type":"update-variable","varId":"49a13bf7-a88c-484f-b3c5-49fb2af3db00","varValue":{"code":"variables['765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce'] ?.[0]?.['langue']","__wwtype":"f","defaultValue":""}},"22f2a564-ae8b-482a-b9f4-7921de0c2986":{"id":"22f2a564-ae8b-482a-b9f4-7921de0c2986","args":{"0":"m","1":"o","2":"d","3":"i","4":"f","5":"i","6":"e","7":"r","8":"s","params":[{"key":"limite","value":"50"}],"functionName":"get_transactions_org"},"next":"88564513-dfd0-433a-9e07-cc4de4f8dda0","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"2f5b8afb-8201-4914-8b97-5d225cfc93b2":{"id":"2f5b8afb-8201-4914-8b97-5d225cfc93b2","args":{"params":[],"functionName":"get_notifs"},"type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"3d333fa1-1c86-4256-9f76-d16ed809b662":{"id":"3d333fa1-1c86-4256-9f76-d16ed809b662","code":"const parts = window.location.hostname.split('.');\r\nreturn parts.length >= 3 ? parts[0] : null;","next":"d66e60e1-3cf4-40c1-b059-53b30ee22ff1","type":"custom-js"},"3df8f520-ac3e-463e-8733-6f5073ee7ce3":{"id":"3df8f520-ac3e-463e-8733-6f5073ee7ce3","next":"813be779-fd28-4efb-bd3c-5210400b8767","type":"fetch-collection","collectionId":"d6983386-72ac-4e58-b234-704dbbfdc34b"},"40ce33a5-f328-46a9-84e7-cd03a8043d24":{"id":"40ce33a5-f328-46a9-84e7-cd03a8043d24","next":"4f062b0f-0d04-499a-888f-85daa944a140","type":"update-variable","varId":"8ac4cdba-ed78-4987-aa46-6076c74206cf","varValue":{"code":"variables[/* monProfil */'765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce']?.[0]?.profil_ia?.poste ?? \"\"","__wwtype":"js","defaultValue":""}},"4249a844-6f33-45bb-87ee-723f7fcd05c7":{"id":"4249a844-6f33-45bb-87ee-723f7fcd05c7","next":"19f7c84c-8b93-4952-aa54-6b6a107f62fb","type":"update-variable","varId":"6d8b9961-d742-4e9a-821c-361167449a1b","varValue":{"code":"context.workflow?.['4b5a81ce-0212-4801-92b3-aa97f65db393']?.result","__wwtype":"f"}},"426c6518-c826-4392-8fa8-8ea886f205b5":{"id":"426c6518-c826-4392-8fa8-8ea886f205b5","next":"e84d2bff-f941-46d0-ba47-71d89e602619","type":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa-signOut"},"4b5a81ce-0212-4801-92b3-aa97f65db393":{"id":"4b5a81ce-0212-4801-92b3-aa97f65db393","args":{"functionName":"get_mes_favoris"},"next":"4249a844-6f33-45bb-87ee-723f7fcd05c7","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f":{"id":"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f","lang":{"code":"variables['98b58b13-d4ab-48e6-88ff-6f4178569719']","__wwtype":"f","defaultValue":""},"next":"9c1951da-649a-4f5c-80b7-38bdbf55ab67","type":"change-lang"},"4d68d3ce-0739-4a80-91f4-633accc8efb5":{"id":"4d68d3ce-0739-4a80-91f4-633accc8efb5","next":"70453d5c-1a71-46e4-8c88-8f033ed91e2e","type":"update-variable","varId":"725f44c6-8313-41f9-aeb8-d85a6f0ee149","varValue":{"code":"context.workflow?.['58f59abd-721b-42a2-b76c-309f80f41926']?.result","__wwtype":"f"}},"4f062b0f-0d04-499a-888f-85daa944a140":{"id":"4f062b0f-0d04-499a-888f-85daa944a140","next":"a5634df3-1c92-4e34-869d-3a5078108d2c","type":"update-variable","varId":"49c4a5b3-7e3e-4ba9-bfe0-af2457137623","varValue":{"code":"variables[/* monProfil */'765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce']?.[0]?.profil_ia?.secteur ?? \"\"","__wwtype":"js","defaultValue":""}},"4f8536d6-7026-4cb6-8d77-4d818d2e8de4":{"id":"4f8536d6-7026-4cb6-8d77-4d818d2e8de4","next":"3df8f520-ac3e-463e-8733-6f5073ee7ce3","type":"update-variable","varId":"320cdb48-a7c6-4df4-aac9-46335efc0843","disabled":false,"varValue":true},"58f59abd-721b-42a2-b76c-309f80f41926":{"id":"58f59abd-721b-42a2-b76c-309f80f41926","args":{"functionName":"get_conso_users_org"},"next":"4d68d3ce-0739-4a80-91f4-633accc8efb5","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"5a91069d-8e14-4a9a-b5d7-c22bdd864c6b":{"id":"5a91069d-8e14-4a9a-b5d7-c22bdd864c6b","args":{"functionName":"get_wallet_org"},"next":"0fc347ef-838b-4bc2-b8ee-239586d056ae","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"5bd51fba-4c72-4db7-97a0-82ed7019971e":{"id":"5bd51fba-4c72-4db7-97a0-82ed7019971e","next":"4b5a81ce-0212-4801-92b3-aa97f65db393","type":"update-variable","varId":"147853a2-8376-437a-99f9-9c2ffbbbfd4c","varValue":{"code":"context.workflow?.['2f5b8afb-8201-4914-8b97-5d225cfc93b2']?.result","__wwtype":"f"}},"5f57fee7-3917-4cb5-9ad2-10915d9bee75":{"id":"5f57fee7-3917-4cb5-9ad2-10915d9bee75","args":{"functionName":"get_mon_profil"},"next":"fb7e8520-613e-4fa3-ad95-e3476851272f","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"6e24eaf1-67b6-49fa-b177-ef0ea312c2b1":{"id":"6e24eaf1-67b6-49fa-b177-ef0ea312c2b1","next":"40ce33a5-f328-46a9-84e7-cd03a8043d24","type":"update-variable","varId":"58387196-3b42-4f09-aa5d-84b3e92cbfd9","varValue":{"code":"variables['765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce'] ?.[0]?.dark_mode","__wwtype":"f","defaultValue":true}},"70453d5c-1a71-46e4-8c88-8f033ed91e2e":{"id":"70453d5c-1a71-46e4-8c88-8f033ed91e2e","args":{"functionName":"get_dashboard_overview"},"next":"b18232e8-11ee-4600-b52f-ef3d61540219","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"79ba0c10-9fca-400e-8a28-11a3ebb77071":{"id":"79ba0c10-9fca-400e-8a28-11a3ebb77071","next":"fb0b0e5d-10e8-45c0-9ee5-02b9a63c311f","type":"update-variable","varId":"3ab1569b-098f-4af4-a6fd-883f035b5745","varValue":{"code":"variables['765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce']?.[0] ?.profil_ia?.instructions_libres ?? \"\"","__wwtype":"f","defaultValue":""}},"813be779-fd28-4efb-bd3c-5210400b8767":{"id":"813be779-fd28-4efb-bd3c-5210400b8767","next":"ad6b57ee-eb9a-451c-902a-cc9c2ceffe14","type":"update-variable","varId":"b9dc557a-f21d-406d-81b0-a361fd9bd80b","varValue":{"code":"collections['d6983386-72ac-4e58-b234-704dbbfdc34b']?.['data']","__wwtype":"f"}},"88564513-dfd0-433a-9e07-cc4de4f8dda0":{"id":"88564513-dfd0-433a-9e07-cc4de4f8dda0","next":"58f59abd-721b-42a2-b76c-309f80f41926","type":"update-variable","varId":"e249d242-035f-4152-9041-8b2f49f45717","varValue":{"code":"context.workflow?.['22f2a564-ae8b-482a-b9f4-7921de0c2986']?.result","__wwtype":"f"}},"8b8dab76-75be-4450-b20c-271e45f8beea":{"id":"8b8dab76-75be-4450-b20c-271e45f8beea","next":"5bd51fba-4c72-4db7-97a0-82ed7019971e","type":"trycatch","branches":[{"id":"2f5b8afb-8201-4914-8b97-5d225cfc93b2","value":"try"},{"value":"catch"}]},"9256dd2f-41fe-4602-abed-9ccae99a339d":{"id":"9256dd2f-41fe-4602-abed-9ccae99a339d","next":"3d333fa1-1c86-4256-9f76-d16ed809b662","type":"update-variable","varId":"725f44c6-8313-41f9-aeb8-d85a6f0ee149","varValue":{"code":"context.workflow?.['9d768c63-b4f4-4c73-91b7-985d40e6c21b']?.result","__wwtype":"f"}},"9478ddbf-8027-45f9-a7a9-8239a7f286bd":{"id":"9478ddbf-8027-45f9-a7a9-8239a7f286bd","args":{"functionName":"get_users_org"},"next":"b48fc1a9-a664-489f-9fec-d99eb46649cd","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"9c1951da-649a-4f5c-80b7-38bdbf55ab67":{"id":"9c1951da-649a-4f5c-80b7-38bdbf55ab67","next":"b122f16d-33c8-47f1-80ce-2508bd4ea0ee","type":"update-variable","varId":"320cdb48-a7c6-4df4-aac9-46335efc0843","varValue":false},"9d768c63-b4f4-4c73-91b7-985d40e6c21b":{"id":"9d768c63-b4f4-4c73-91b7-985d40e6c21b","args":{"functionName":"get_conso_users_org"},"next":"9256dd2f-41fe-4602-abed-9ccae99a339d","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"a5634df3-1c92-4e34-869d-3a5078108d2c":{"id":"a5634df3-1c92-4e34-869d-3a5078108d2c","next":"79ba0c10-9fca-400e-8a28-11a3ebb77071","type":"update-variable","varId":"37455942-1646-4dea-aed4-02b4897287f2","varValue":{"code":"variables[/* monProfil */'765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce']?.[0]?.profil_ia?.ton ?? \"formel\"","__wwtype":"js","defaultValue":""}},"ad6b57ee-eb9a-451c-902a-cc9c2ceffe14":{"id":"ad6b57ee-eb9a-451c-902a-cc9c2ceffe14","args":{"params":[{"key":"p_org_id","value":{"code":"variables['855f134a-8e4e-4960-83cf-b6cbcecd2558']?.[0] ?.id","__wwtype":"f","defaultValue":""}}],"functionName":"get_mon_menu"},"next":"191be7a7-24bb-426b-bdd3-7a3c45669bcc","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction","disabled":true},"b122f16d-33c8-47f1-80ce-2508bd4ea0ee":{"id":"b122f16d-33c8-47f1-80ce-2508bd4ea0ee","args":{"functionName":"get_mon_org"},"next":"f6c41eab-d922-4ea3-9883-ae8fb1296b1a","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-callPostgresFunction"},"b18232e8-11ee-4600-b52f-ef3d61540219":{"id":"b18232e8-11ee-4600-b52f-ef3d61540219","next":"9478ddbf-8027-45f9-a7a9-8239a7f286bd","type":"update-variable","varId":"41fe9d1d-38d0-4ba7-8b8e-beceba1e2fca","varValue":{"code":"context.workflow?.['70453d5c-1a71-46e4-8c88-8f033ed91e2e']?.result","__wwtype":"f"}},"b48fc1a9-a664-489f-9fec-d99eb46649cd":{"id":"b48fc1a9-a664-489f-9fec-d99eb46649cd","next":"9d768c63-b4f4-4c73-91b7-985d40e6c21b","type":"update-variable","varId":"ff021630-34be-4d11-aacf-0bcd2ef7caf7","varValue":{"code":"context.workflow?.['9478ddbf-8027-45f9-a7a9-8239a7f286bd']?.result","__wwtype":"f"}},"d66e60e1-3cf4-40c1-b059-53b30ee22ff1":{"id":"d66e60e1-3cf4-40c1-b059-53b30ee22ff1","next":"f6ffdbab-282c-49fe-99d2-3aee8bef3664","type":"update-variable","varId":"b21036b0-6e73-4bc9-9479-64b2bdac078d","varValue":{"code":"context.workflow?.['3d333fa1-1c86-4256-9f76-d16ed809b662']?.result","__wwtype":"f","defaultValue":""}},"dbc20493-0fee-4e3a-b57c-ef0be6801fa0":{"id":"dbc20493-0fee-4e3a-b57c-ef0be6801fa0","next":"4d18ebd2-e8af-47d9-8fa8-d2ac21c8bc4f","type":"change-theme","theme":{"code":"variables['58387196-3b42-4f09-aa5d-84b3e92cbfd9']","__wwtype":"f","defaultValue":""}},"e84d2bff-f941-46d0-ba47-71d89e602619":{"id":"e84d2bff-f941-46d0-ba47-71d89e602619","args":{"mode":"page","navigateMode":"internal"},"mode":"page","type":"change-page","pageId":"9fcecc86-a5fe-4e83-96de-60560ff50a98","navigateMode":"internal"},"ec9b72d3-e797-424e-96e4-163fe9e51d49":{"id":"ec9b72d3-e797-424e-96e4-163fe9e51d49","next":"8b8dab76-75be-4450-b20c-271e45f8beea","type":"update-variable","varId":"5f784605-4739-4572-8f92-1066b1174f98","varValue":{"code":"variables['855f134a-8e4e-4960-83cf-b6cbcecd2558'] ?.[0]?.provider","__wwtype":"f","defaultValue":""}},"f6c41eab-d922-4ea3-9883-ae8fb1296b1a":{"id":"f6c41eab-d922-4ea3-9883-ae8fb1296b1a","next":"ec9b72d3-e797-424e-96e4-163fe9e51d49","type":"update-variable","varId":"855f134a-8e4e-4960-83cf-b6cbcecd2558","varValue":{"code":"context.workflow?.['b122f16d-33c8-47f1-80ce-2508bd4ea0ee']?.result","__wwtype":"f"}},"f6ffdbab-282c-49fe-99d2-3aee8bef3664":{"id":"f6ffdbab-282c-49fe-99d2-3aee8bef3664","type":"if","value":{"code":"variables['b21036b0-6e73-4bc9-9479-64b2bdac078d'] != \"\" && variables['b21036b0-6e73-4bc9-9479-64b2bdac078d'].includes(\"weweb.io\") == false && variables['b21036b0-6e73-4bc9-9479-64b2bdac078d'] != variables['855f134a-8e4e-4960-83cf-b6cbcecd2558']?.[0]?.sous_domaine","__wwtype":"js","defaultValue":true},"branches":[{"id":"426c6518-c826-4392-8fa8-8ea886f205b5","value":true},{"id":"4f8536d6-7026-4cb6-8d77-4d818d2e8de4","value":false}],"disabled":false},"fb0b0e5d-10e8-45c0-9ee5-02b9a63c311f":{"id":"fb0b0e5d-10e8-45c0-9ee5-02b9a63c311f","next":"5a91069d-8e14-4a9a-b5d7-c22bdd864c6b","type":"update-variable","varId":"4a8f2dcf-2714-4eb1-9a1d-0c78b797d1a3","varValue":{"code":"variables[/* monProfil */'765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce']?.[0]?.profil_ia?.actif ?? true","__wwtype":"js","defaultValue":true}},"fb7e8520-613e-4fa3-ad95-e3476851272f":{"id":"fb7e8520-613e-4fa3-ad95-e3476851272f","next":"216950bf-5a1d-43ad-97c3-ad53958d39a6","type":"update-variable","varId":"765eaf8c-eb1a-4e6f-8dd7-1bbe7cbe52ce","varValue":{"code":"context.workflow?.['5f57fee7-3917-4cb5-9ad2-10915d9bee75']?.result","__wwtype":"f"}}},"trigger":"onload","version":2,"firstAction":"dbc20493-0fee-4e3a-b57c-ef0be6801fa0","triggerConditions":null}],"back":{"isServerSetup":{"staging":false,"production":false}},"auth":null,"pages":[{"id":"37d6be64-6f65-48a6-ab12-44db9c4a2e00","linkId":"37d6be64-6f65-48a6-ab12-44db9c4a2e00","name":"A propos","folder":null,"paths":{"en":"apropos","default":"apropos"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"4c196327-efa4-4ae8-a81b-f1c2733ab5e9","sectionTitle":"Main Content Section","linkId":"03010b64-bfbe-4b99-9340-cd8f75354411"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[{}],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"f122deb8-bc87-4c5e-85f3-463acbb1e932","linkId":"f122deb8-bc87-4c5e-85f3-463acbb1e932","name":"Home","folder":null,"paths":{"default":"home"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"8430f93c-9e27-4322-bcbf-72d975e3381b","sectionTitle":"Main Content Section","linkId":"b27aa3fd-aea0-450b-93b8-3bf8d1a2f6a1"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[{}],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"a1824246-b059-448b-8cf9-2eb8bce474cb","linkId":"a1824246-b059-448b-8cf9-2eb8bce474cb","name":"SwissNote","folder":null,"paths":{"en":"swissnote","default":"swissnote"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"03732e8e-40d8-4d54-89bd-c8c72b2c367e","sectionTitle":"Main Content Section","linkId":"365f0289-4f9c-4c54-bed4-ec1d13378c29"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"3ae17e63-1f79-42f4-871b-09d59da12b95","linkId":"3ae17e63-1f79-42f4-871b-09d59da12b95","name":"Confidentialité","folder":null,"paths":{"en":"confidentialite","default":"confidentialite"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"37769a22-0b52-4b8f-93f0-4420d2e1bc5e","sectionTitle":"Main Content Section","linkId":"99e7bd04-24c0-4f2d-9da0-8bd3e81cb3a1"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[{}],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}},{"id":"ae60887d-a138-435c-8ded-f78a509e6228","linkId":"ae60887d-a138-435c-8ded-f78a509e6228","name":"Utilisation","folder":null,"paths":{"en":"utilisation","default":"utilisation"},"langs":["en","de","fr"],"cmsDataSetPath":null,"sections":[{"uid":"cac88c5b-b33f-455c-b172-5b27c7ed57d9","sectionTitle":"Sidebar Section","linkId":"76a02917-4777-4254-8762-17f990a100d6"},{"uid":"0e9b83d1-d659-4c48-9e1c-5208eb02e7cb","sectionTitle":"Mobile Header Section","linkId":"d9a0a9e0-c668-4197-8c7b-d77fbfcc6032"},{"uid":"c672a48c-5fb6-4df9-95cf-c0583315534f","sectionTitle":"Main Content Section","linkId":"6f20c17f-66c5-4b8f-bbb9-59aaef53b09c"},{"uid":"0dae655a-97ab-48b5-82bb-3d122b76e147","sectionTitle":"Footer Section","linkId":"c946f401-8877-4f1f-9c82-cf97543a7f4d"}],"pageUserGroups":[{}],"title":{"en":"","fr":""},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"","security":{}}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
window.wwg_cacheVersion = 2;
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
