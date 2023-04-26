export const ENDPOINTS = {
    ARTICLES: '/articles',
    TAGS: '/tags',
    USERS: {
        LOGIN: '/users/login',
        REGISTRATION: '/users',
        UPDATE: '/users',
    },
}

export const setQueryParams = function (params: {}) {
    const paramsArray = Object.entries(params);
    const searchParams = new URLSearchParams();
    paramsArray.forEach(pair => searchParams.append(pair[0], '' + pair[1]))
    return '?' + searchParams.toString();
}
