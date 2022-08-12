export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── App.vue
│  ├── assets
│  │  ├── css
│  │  │  ├── base.css
│  │  │  ├── index.css
│  │  │  └── variable.less
│  │  └── img
│  │    ├── login-bg.svg
│  │    └── logo.svg
│  ├── base-ui
│  │  ├── breadcrumb
│  │  │  ├── index.js
│  │  │  ├── src
│  │  │  │  └── breadcrumb.vue
│  │  │  └── types
│  │  │    └── index.js
│  │  ├── card
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── card.vue
│  │  ├── code
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── code.vue
│  │  ├── count-up
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── countup.vue
│  │  ├── descriptions
│  │  │  ├── index.js
│  │  │  ├── src
│  │  │  │  └── descriptions.vue
│  │  │  └── types
│  │  │    └── types.js
│  │  ├── echarts
│  │  │  ├── data
│  │  │  │  └── china.json
│  │  │  ├── hooks
│  │  │  │  └── useEcharts.js
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── base-echart.vue
│  │  ├── form
│  │  │  ├── index.js
│  │  │  ├── src
│  │  │  │  └── form.vue
│  │  │  └── types
│  │  │    └── index.js
│  │  ├── table
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── table.vue
│  │  └── text-link
│  │    ├── index.js
│  │    └── src
│  │      └── textlink.vue
│  ├── components
│  │  ├── nav-header
│  │  │  ├── hooks
│  │  │  │  └── useMenuIconHook.js
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    ├── nav-header.vue
│  │  │    └── nav-info.vue
│  │  ├── nav-menu
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── nav-menu.vue
│  │  ├── page-charts
│  │  │  ├── index.js
│  │  │  ├── src
│  │  │  │  ├── bar-echart.vue
│  │  │  │  ├── line-echart.vue
│  │  │  │  ├── map-echart.vue
│  │  │  │  ├── pie-echart.vue
│  │  │  │  └── rose-echart.vue
│  │  │  ├── types
│  │  │  │  └── idex.js
│  │  │  └── utils
│  │  │    ├── convert-data.js
│  │  │    └── coordinate-data.js
│  │  ├── page-content
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── page-content.vue
│  │  ├── page-modal
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── page-modal.vue
│  │  ├── page-search
│  │  │  ├── index.js
│  │  │  └── src
│  │  │    └── page-search.vue
│  │  └── statistical-panel
│  │    ├── index.js
│  │    └── src
│  │      └── statistical-panel.vue
│  ├── global
│  │  ├── index.js
│  │  ├── register-element.js
│  │  └── register-properties.js
│  ├── hooks
│  │  ├── useEcharts.js
│  │  ├── usePageModal.js
│  │  ├── usePageSearch.js
│  │  └── usePermission.js
│  ├── main.js
│  ├── router
│  │  ├── index.js
│  │  ├── login
│  │  │  └── login.js
│  │  ├── main
│  │  │  ├── analysis
│  │  │  │  ├── dashboard
│  │  │  │  │  └── dashboard.js
│  │  │  │  └── overview
│  │  │  │    └── overview.js
│  │  │  ├── main.js
│  │  │  ├── product
│  │  │  │  ├── category
│  │  │  │  │  └── category.js
│  │  │  │  └── goods
│  │  │  │    └── goods.js
│  │  │  ├── story
│  │  │  │  ├── chat
│  │  │  │  │  └── chat.js
│  │  │  │  └── list
│  │  │  │    └── list.js
│  │  │  └── system
│  │  │    ├── department
│  │  │    │  └── department.js
│  │  │    ├── menu
│  │  │    │  └── menu.js
│  │  │    ├── role
│  │  │    │  └── role.js
│  │  │    └── user
│  │  │      └── user.js
│  │  └── not-found
│  │    └── not-found.js
│  ├── service
│  │  ├── index.js
│  │  ├── login
│  │  │  ├── login.js
│  │  │  └── types.js
│  │  ├── main
│  │  │  ├── analysis
│  │  │  │  └── analysis.js
│  │  │  ├── product
│  │  │  └── system
│  │  │    └── system.js
│  │  └── request
│  │    ├── config.js
│  │    ├── request.js
│  │    └── type.js
│  ├── shims-vue.d.js
│  ├── store
│  │  ├── index.js
│  │  ├── login
│  │  │  ├── login.js
│  │  │  └── types.js
│  │  ├── main
│  │  │  ├── analysi
│  │  │  │  ├── analysis.js
│  │  │  │  └── types.js
│  │  │  ├── product
│  │  │  └── system
│  │  │    ├── system.js
│  │  │    └── types.js
│  │  └── types.js
│  ├── utils
│  │  ├── cache.js
│  │  ├── date-formt.js
│  │  └── map-menu.js
│  └── views
│    ├── login
│    │  ├── cpns
│    │  │  ├── login-account.vue
│    │  │  ├── login-account2.vue
│    │  │  ├── login-panel.vue
│    │  │  └── login-phone.vue
│    │  ├── logi.vue
│    │  └── types
│    │    └── index.js
│    ├── main
│    │  ├── analysis
│    │  │  ├── dashboard
│    │  │  │  └── dashboard.vue
│    │  │  └── overview
│    │  │    ├── config
│    │  │    │  ├── dependencies.js
│    │  │    │  ├── dev-dependencies.js
│    │  │    │  ├── index.js
│    │  │    │  ├── project-dir.js
│    │  │    │  └── technology-stacks.js
│    │  │    └── overview.vue
│    │  ├── main.vue
│    │  ├── product
│    │  │  ├── category
│    │  │  │  ├── category.vue
│    │  │  │  └── config
│    │  │  │    ├── content.config.js
│    │  │  │    └── search.config.js
│    │  │  └── goods
│    │  │    ├── config
│    │  │    │  ├── content.config.js
│    │  │    │  └── search.config.js
│    │  │    └── goods.vue
│    │  ├── story
│    │  │  ├── chat
│    │  │  │  └── chat.vue
│    │  │  └── list
│    │  │    ├── config
│    │  │    │  └── content.config.js
│    │  │    └── list.vue
│    │  └── system
│    │    ├── department
│    │    │  ├── config
│    │    │  │  ├── content.config.js
│    │    │  │  ├── modal.config.js
│    │    │  │  └── search.config.js
│    │    │  └── department.vue
│    │    ├── menu
│    │    │  ├── config
│    │    │  │  └── content.config.js
│    │    │  └── menu.vue
│    │    ├── role
│    │    │  ├── config
│    │    │  │  ├── content.config.js
│    │    │  │  ├── modal.config.js
│    │    │  │  └── search.config.js
│    │    │  └── role.vue
│    │    └── user
│    │      ├── config
│    │      │  ├── content.config.js
│    │      │  ├── modal.config.js
│    │      │  └── search.config.js
│    │      └── user.vue
│    └── not-found
│      └── not-found.vue
├── tsconfig.json
├── types
│  └── vuex.d.js
└── vue.config.js

`
