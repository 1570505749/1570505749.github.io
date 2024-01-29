import { defineUserConfig } from 'vuepress'

export default defineUserConfig({

    // set site base to default value
    base: '/',

    // site-level locales config
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'FANG',
            description: '不要温和地走进那个良夜',
        },
    },
})