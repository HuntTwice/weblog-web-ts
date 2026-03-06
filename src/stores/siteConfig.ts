import { defineStore } from 'pinia'
import { SiteConfig } from '/@/stores/interface'

export const useSiteConfig = defineStore('siteConfig', {
    state: (): SiteConfig => {
        return {
            apiUrl: '',
            cdnUrl: '',
            cdnUrlParams: '',
            headNav: [],
            initialize: false,
            recordNumber: '',
            siteName: '',
            upload: { mode: 'local' },
            userInitialize: false,
            version: '',
        }
    },
})
