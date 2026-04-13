import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig
} from "./types/config"

import type { FriendLink } from "./types/friend"

export const siteConfig: SiteConfig = {
    title: "雪糕小豪",
    subTitle: "Blog",

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enable: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    },
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    },
    comments: {
        enable: true, // Whether to enable comments
        backendUrl: "https://" // Backend URL for comments
    }
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/logo.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "雪糕小豪",
    description: "永远相信美好的事情即将发生",
    indexPage: "https://xgxh.cc",
    startYear: 2026,
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const friendLinkConfig: FriendLink[] = [
    {
        name: '我的世界服务器',
        avatar: 'https://raw.githubusercontent.com/jinliangyu1234/tu/main/server.png',
        url: 'https://wiki.xgxh.cc',
        description: '我的世界简单服'
    },
    {
        name: '领创工作室',
        avatar: 'https://raw.githubusercontent.com/jinliangyu1234/tu/main/lc.png',
        url: 'https://www.lacs.cc/',
        description: '很棒的工作室'
    }
    // Add more friend links here
]