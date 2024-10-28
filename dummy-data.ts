import {Bet} from "./ProfileScreen";
import dayjs, {Dayjs} from "dayjs";
import {PastBet} from "./components/PastBet";

export const pastdummyData: PastBet[] = [
    {
        id: 1,
        home: "PHI",
        away: "WAS",
        odds: 800,
        expiration: dayjs('2023-10-01'),
        paymentInfo: ["Bank A", "Bank B", "2023-10-04UTZ03:00"],
        position: 50,
        payoff: 400
    }, {
        id: 2,
        home: "TB",
        away: "DET",
        moneyLine: -2.5,
        odds: -150,
        expiration: dayjs('2024-01-01'),
        paymentInfo: ["Bank A", "Bank B", "2024-01-04UTZ03:00"],
        position: 50,
        payoff: 75
    }]


export const outstandingDummyBets: Bet[] = [
    {
        id: 3,
        home: "NY",
        away: "WAS",
        odds: 600,
        expiration: dayjs('2024-10-01'),
        position: 100,
        payoff: 600
    }, {
        id: 4,
        home: "SFO",
        away: "CAR",
        moneyLine: -11.0,
        odds: +120,
        expiration: dayjs('2024-11-17'),
        position: 100,
        payoff: 120
    }]


export type exampleGameType = {
    id: number,
    home: string,
    away: string,
    startTime: Dayjs,
    odds: odd[],
    status: boolean,
}

export type odd = {
    pointsSpread: number
    overUnder: number
    homeMoneyLine: number
    awayMoneyLine: number
    sportsbookUrl: string
    sportsBook: string
}
export const mockNFLDataWeek8: exampleGameType[] = [
    {
        "id": null,
        "home": "PIT",
        "away": "NYG",
        "odds": [
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -386,
                "awayMoneyLine": 314,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568623",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 322,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-york-giants-@-pittsburgh-steelers-33691832",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -397,
                "awayMoneyLine": 314,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832190",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -397,
                "awayMoneyLine": 314,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832190",
                "sportsBook": "Betrivers"
            },
        ],
        "startTime": dayjs("2024-10-28T20:15:00"),
        "status": false
    },
    {
        "id": null,
        "home": "SF",
        "away": "DAL",
        "odds": [],
        "startTime": dayjs("2024-10-27T20:20:00"),
        "status": true
    },
    {
        "id": null,
        "home": "CIN",
        "away": "PHI",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "DEN",
        "away": "CAR",
        "odds": [],
        "startTime": dayjs("2024-10-27T16:25:00"),
        "status": true
    },
    {
        "id": null,
        "home": "LV",
        "away": "KC",
        "odds": [],
        "startTime": dayjs("2024-10-27T16:25:00"),
        "status": true
    },
    {
        "id": null,
        "home": "LAC",
        "away": "NO",
        "odds": [],
        "startTime": dayjs("2024-10-27T16:05:00"),
        "status": true
    },
    {
        "id": null,
        "home": "SEA",
        "away": "BUF",
        "odds": [],
        "startTime": dayjs("2024-10-27T16:05:00"),
        "status": true
    },
    {
        "id": null,
        "home": "CLE",
        "away": "BAL",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "DET",
        "away": "TEN",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "HOU",
        "away": "IND",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "JAX",
        "away": "GB",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "MIA",
        "away": "ARI",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "NE",
        "away": "NYJ",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "TB",
        "away": "ATL",
        "odds": [],
        "startTime": dayjs("2024-10-27T13:00:00"),
        "status": true
    },
    {
        "id": null,
        "home": "WAS",
        "away": "CHI",
        "odds": [],
        "startTime": dayjs("2024-10-27T16:25:00"),
        "status": true
    },
    {
        "id": null,
        "home": "LAR",
        "away": "MIN",
        "odds": [],
        "startTime": dayjs("2024-10-24T20:15:00"),
        "status": true
    }
]