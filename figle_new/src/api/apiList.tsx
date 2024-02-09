const apiVersion = 'v1';

export const api = {
    user: {
        id: `/fconline/${apiVersion}/id`,
        info: `/fconline/${apiVersion}/user/basic`,
        maxDivision: `/fconline/${apiVersion}/user/maxdivision`,
        match: `/fconline/${apiVersion}/user/match`,
        trade: `/fconline/${apiVersion}/user/trade`
    },
    match: {
        all: `/fconline/${apiVersion}/match`,
        detail: `/fconline/${apiVersion}/match-detail`
    },
    ranker: {
        top: `/fconline/${apiVersion}/ranker-stats`
    },
    meta: {
        matchType: `/static/fconline/meta/matchtype.json`,
        spid: `/static/fconline/meta/spid.json`,
        seasonId: `/static/fconline/meta/seasonid.json`,
        sppositionId: `/static/fconline/meta/spposition.json`,
        division: `/static/fconline/meta/division.json`,
        divisionVolta: `/static/fconline/meta/division-volta.json`,
    }
}