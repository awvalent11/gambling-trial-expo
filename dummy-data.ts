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
export const mockNFLDataWeek9: exampleGameType[] = [
    {
        "id": null,
        "home": "KC",
        "away": "TB",
        "odds": [
            {
                "pointsSpread": -5.5,
                "overUnder": 29,
                "homeMoneyLine": -293,
                "awayMoneyLine": 219,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568622",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -297,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/tampa-bay-buccaneers-@-kansas-city-chiefs-33712735",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 29,
                "homeMoneyLine": -310,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832259",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 29,
                "homeMoneyLine": -310,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832259",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 29,
                "homeMoneyLine": -310,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832259",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 29,
                "homeMoneyLine": -310,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832259",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 28.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 223,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/05e9e3d0-0f4d-4cb6-b772-9884e6b767bb/kc-vs-tb",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 28.7,
                "homeMoneyLine": -290,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507052",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-04T20:15:00"),
        "status": false
    },
    {
        "id": null,
        "home": "PHI",
        "away": "JAX",
        "odds": [
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -219,
                "awayMoneyLine": 174,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568745",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -4.5,
                "overUnder": 29.3,
                "homeMoneyLine": -232,
                "awayMoneyLine": 187,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/jacksonville-jaguars-@-philadelphia-eagles-33712729",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -223,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832258",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -223,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832258",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -223,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832258",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -223,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832258",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.7,
                "homeMoneyLine": -226,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/a010b81d-fab7-4c86-a727-aea9d70501da/phi-vs-jax",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 29.3,
                "homeMoneyLine": -226,
                "awayMoneyLine": 181,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507047",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T16:05:00"),
        "status": false
    },
    {
        "id": null,
        "home": "GB",
        "away": "DET",
        "odds": [
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 94,
                "awayMoneyLine": -113,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568651",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 93,
                "awayMoneyLine": -111,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/detroit-lions-@-green-bay-packers-33712728",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 94,
                "awayMoneyLine": -114,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832256",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 94,
                "awayMoneyLine": -114,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832256",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 94,
                "awayMoneyLine": -114,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832256",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 94,
                "awayMoneyLine": -114,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832256",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31.3,
                "homeMoneyLine": 97,
                "awayMoneyLine": -115,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/61b42050-2e7f-4c4f-840f-ef025c1660e7/gb-vs-det",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 31,
                "homeMoneyLine": 97,
                "awayMoneyLine": -119,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507049",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T16:25:00"),
        "status": false
    },
    {
        "id": null,
        "home": "SEA",
        "away": "LAR",
        "odds": [
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 66,
                "awayMoneyLine": -79,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568888",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 68,
                "awayMoneyLine": -80,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/los-angeles-rams-@-seattle-seahawks-33712727",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 66,
                "awayMoneyLine": -80,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832257",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 66,
                "awayMoneyLine": -80,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832257",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 66,
                "awayMoneyLine": -80,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832257",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 66,
                "awayMoneyLine": -80,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832257",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 68,
                "awayMoneyLine": -81,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/b3e24ed5-97fa-4af4-87ff-e2943a515247/sea-vs-lar",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 31.3,
                "homeMoneyLine": 68,
                "awayMoneyLine": -81,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507050",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T16:25:00"),
        "status": false
    },
    {
        "id": null,
        "home": "ARI",
        "away": "CHI",
        "odds": [
            {
                "pointsSpread": 0.4,
                "overUnder": 28.7,
                "homeMoneyLine": -71,
                "awayMoneyLine": -71,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568780",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -1,
                "overUnder": 28.7,
                "homeMoneyLine": -71,
                "awayMoneyLine": -68,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/chicago-bears-@-arizona-cardinals-33712726",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 0.4,
                "overUnder": 28.7,
                "homeMoneyLine": -70,
                "awayMoneyLine": -72,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832255",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 0.4,
                "overUnder": 28.7,
                "homeMoneyLine": -70,
                "awayMoneyLine": -72,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832255",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0.4,
                "overUnder": 28.7,
                "homeMoneyLine": -70,
                "awayMoneyLine": -72,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832255",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 0.4,
                "overUnder": 28.7,
                "homeMoneyLine": -70,
                "awayMoneyLine": -72,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832255",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0,
                "overUnder": 28.7,
                "homeMoneyLine": -71,
                "awayMoneyLine": -71,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/a7d80b1f-7864-4cb5-b5ee-a6566b1ad7ef/ari-vs-chi",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -0.6,
                "overUnder": 28.7,
                "homeMoneyLine": -74,
                "awayMoneyLine": -68,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507048",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T16:05:00"),
        "status": false
    },
    {
        "id": null,
        "home": "ATL",
        "away": "DAL",
        "odds": [
            {
                "pointsSpread": -1.6,
                "overUnder": 33.9,
                "homeMoneyLine": -92,
                "awayMoneyLine": 77,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568735",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.9,
                "homeMoneyLine": -94,
                "awayMoneyLine": 80,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/dallas-cowboys-@-atlanta-falcons-33712731",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -91,
                "awayMoneyLine": 74,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832194",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -91,
                "awayMoneyLine": 74,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832194",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -91,
                "awayMoneyLine": 74,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832194",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -91,
                "awayMoneyLine": 74,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832194",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -94,
                "awayMoneyLine": 79,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/2a7fd754-8cda-466c-9b8a-15369dfa9b59/atl-vs-dal",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -1.6,
                "overUnder": 33.5,
                "homeMoneyLine": -94,
                "awayMoneyLine": 77,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507028",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "BAL",
        "away": "DEN",
        "odds": [
            {
                "pointsSpread": -5.8,
                "overUnder": 28.7,
                "homeMoneyLine": -284,
                "awayMoneyLine": 219,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568887",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -297,
                "awayMoneyLine": 232,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/denver-broncos-@-baltimore-ravens-33712724",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832199",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832199",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832199",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 226,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832199",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -6.1,
                "overUnder": 28.7,
                "homeMoneyLine": -310,
                "awayMoneyLine": 232,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/b52bd744-2a0b-4ea1-a6d8-7f3e22350ca2/bal-vs-den",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -5.8,
                "overUnder": 28.7,
                "homeMoneyLine": -322,
                "awayMoneyLine": 242,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507034",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "BUF",
        "away": "MIA",
        "odds": [
            {
                "pointsSpread": -3.9,
                "overUnder": 32.2,
                "homeMoneyLine": -179,
                "awayMoneyLine": 145,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30569031",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 31.9,
                "homeMoneyLine": -190,
                "awayMoneyLine": 155,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/miami-dolphins-@-buffalo-bills-33712732",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 32.2,
                "homeMoneyLine": -190,
                "awayMoneyLine": 148,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832201",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 32.2,
                "homeMoneyLine": -190,
                "awayMoneyLine": 148,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832201",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 32.2,
                "homeMoneyLine": -190,
                "awayMoneyLine": 148,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832201",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 32.2,
                "homeMoneyLine": -190,
                "awayMoneyLine": 148,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832201",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.2,
                "overUnder": 32.2,
                "homeMoneyLine": -179,
                "awayMoneyLine": 143,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/02fb00b3-d4d3-40a0-bcb6-d044f452bec2/buf-vs-mia",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -3.9,
                "overUnder": 32.2,
                "homeMoneyLine": -177,
                "awayMoneyLine": 145,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507035",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "CAR",
        "away": "NO",
        "odds": [
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -200,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568826",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 171,
                "awayMoneyLine": -213,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-orleans-saints-@-carolina-panthers-33712723",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -216,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832203",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -216,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832203",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -216,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832203",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -216,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832203",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 161,
                "awayMoneyLine": -206,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/f0f53ba5-2b82-49a6-a9f0-481bbcbbd912/car-vs-no",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 2.9,
                "overUnder": 28.1,
                "homeMoneyLine": 168,
                "awayMoneyLine": -226,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507033",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "CIN",
        "away": "LV",
        "odds": [
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -245,
                "awayMoneyLine": 194,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568650",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30,
                "homeMoneyLine": -252,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/las-vegas-raiders-@-cincinnati-bengals-33712725",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -258,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832206",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -258,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832206",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -258,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832206",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -258,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832206",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30.3,
                "homeMoneyLine": -248,
                "awayMoneyLine": 194,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/623a99e1-93bc-4a46-99f5-a4664778d077/cin-vs-lv",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -4.8,
                "overUnder": 30,
                "homeMoneyLine": -258,
                "awayMoneyLine": 200,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507029",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "CLE",
        "away": "LAC",
        "odds": [
            {
                "pointsSpread": 0.8,
                "overUnder": 27.1,
                "homeMoneyLine": 68,
                "awayMoneyLine": -81,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568584",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 0.6,
                "overUnder": 27.4,
                "homeMoneyLine": 67,
                "awayMoneyLine": -79,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/los-angeles-chargers-@-cleveland-browns-33712730",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 26.8,
                "homeMoneyLine": 68,
                "awayMoneyLine": -82,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832209",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 26.8,
                "homeMoneyLine": 68,
                "awayMoneyLine": -82,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832209",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 26.8,
                "homeMoneyLine": 68,
                "awayMoneyLine": -82,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832209",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 26.8,
                "homeMoneyLine": 68,
                "awayMoneyLine": -82,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832209",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 27.4,
                "homeMoneyLine": 68,
                "awayMoneyLine": -81,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/cffeb2e0-cbc8-40ce-a2db-fedd3f7108f6/cle-vs-lac",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 0.8,
                "overUnder": 27.4,
                "homeMoneyLine": 71,
                "awayMoneyLine": -84,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507030",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "MIN",
        "away": "IND",
        "odds": [
            {
                "pointsSpread": -3.9,
                "overUnder": 29,
                "homeMoneyLine": -174,
                "awayMoneyLine": 142,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568767",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -3.5,
                "overUnder": 29.3,
                "homeMoneyLine": -168,
                "awayMoneyLine": 139,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/indianapolis-colts-@-minnesota-vikings-33712733",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -3.5,
                "overUnder": 29,
                "homeMoneyLine": -171,
                "awayMoneyLine": 135,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832167",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -3.5,
                "overUnder": 29,
                "homeMoneyLine": -171,
                "awayMoneyLine": 135,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832167",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -3.5,
                "overUnder": 29,
                "homeMoneyLine": -171,
                "awayMoneyLine": 135,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832167",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -3.5,
                "overUnder": 29,
                "homeMoneyLine": -171,
                "awayMoneyLine": 135,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832167",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -3.9,
                "overUnder": 29.3,
                "homeMoneyLine": -172,
                "awayMoneyLine": 139,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/660cdff6-e209-4bb3-9bde-1a495b7dba6f/min-vs-ind",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -3.9,
                "overUnder": 29.3,
                "homeMoneyLine": -161,
                "awayMoneyLine": 129,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507051",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T20:20:00"),
        "status": false
    },
    {
        "id": null,
        "home": "NYG",
        "away": "WAS",
        "odds": [
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 97,
                "awayMoneyLine": -116,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568768",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 98,
                "awayMoneyLine": -116,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/washington-commanders-@-new-york-giants-33712734",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 94,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832169",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 94,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832169",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 94,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832169",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 94,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832169",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 102,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/8bcb4100-13ba-41d2-8b6d-6434a166effe/nyg-vs-was",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 1.5,
                "overUnder": 28.1,
                "homeMoneyLine": 100,
                "awayMoneyLine": -123,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507032",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "TEN",
        "away": "NE",
        "odds": [
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -116,
                "awayMoneyLine": 97,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568864",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.2,
                "homeMoneyLine": -112,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-england-patriots-@-tennessee-titans-33712722",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -116,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832171",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -116,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832171",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -116,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832171",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -116,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832171",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -113,
                "awayMoneyLine": 95,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/98cec306-8a68-45c3-8d54-c35dfcd22716/ten-vs-ne",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -2.3,
                "overUnder": 24.5,
                "homeMoneyLine": -113,
                "awayMoneyLine": 94,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507031",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-11-03T13:00:00"),
        "status": false
    },
    {
        "id": null,
        "home": "NYJ",
        "away": "HOU",
        "odds": [
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -84,
                "awayMoneyLine": 71,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568786",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -1,
                "overUnder": 27.4,
                "homeMoneyLine": -81,
                "awayMoneyLine": 70,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/houston-texans-@-new-york-jets-33712721",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -82,
                "awayMoneyLine": 67,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832192",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -82,
                "awayMoneyLine": 67,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832192",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -82,
                "awayMoneyLine": 67,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832192",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -82,
                "awayMoneyLine": 67,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832192",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -84,
                "awayMoneyLine": 71,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/a113ceb6-685d-49e9-838c-d95823812c45/nyj-vs-hou",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -1.3,
                "overUnder": 27.1,
                "homeMoneyLine": -84,
                "awayMoneyLine": 71,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16507027",
                "sportsBook": "Betmgm"
            }
        ],
        "startTime": dayjs("2024-10-31T20:15:00"),
        "status": false
    }
]