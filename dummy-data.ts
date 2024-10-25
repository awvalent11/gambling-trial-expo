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
    id: number
    home: string
    away: string
    // odds: string[]
    status: boolean
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
                "homeMoneyLine": -340,
                "awayMoneyLine": 279,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568623",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -7.9,
                "overUnder": 52.2,
                "homeMoneyLine": -386,
                "awayMoneyLine": 314,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-york-giants-@-pittsburgh-steelers-33691832",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 307,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832190",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 307,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832190",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 307,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832190",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 307,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832190",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -382,
                "awayMoneyLine": 307,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/e9d45af0-e10a-402d-9a3a-8b4ec303148d/pit-vs-nyg",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -8.6,
                "overUnder": 52.2,
                "homeMoneyLine": -393,
                "awayMoneyLine": 314,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470119",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "SF",
        "away": "DAL",
        "odds": [
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -283,
                "awayMoneyLine": 234,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568741",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -5,
                "overUnder": 67.9,
                "homeMoneyLine": -300,
                "awayMoneyLine": 252,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/dallas-cowboys-@-san-francisco-49ers-33276816",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832188",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832188",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832188",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832188",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -307,
                "awayMoneyLine": 254,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/f780da4d-af83-48c5-bfda-db2aa8acbfeb/sf-vs-dal",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -5.7,
                "overUnder": 67.2,
                "homeMoneyLine": -286,
                "awayMoneyLine": 236,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470118",
                "sportsBook": "Betmgm"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -357,
                "awayMoneyLine": 269,
                "sportsbookUrl": "https://www.sisportsbook.com/football/usa/nfl/e-1492307/",
                "sportsBook": "Howdy :)"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "CIN",
        "away": "PHI",
        "odds": [
            {
                "pointsSpread": -4.3,
                "overUnder": 68.6,
                "homeMoneyLine": -211,
                "awayMoneyLine": 177,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568654",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 67.9,
                "homeMoneyLine": -220,
                "awayMoneyLine": 186,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/philadelphia-eagles-@-cincinnati-bengals-33691821",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -201,
                "awayMoneyLine": 166,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832181",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -201,
                "awayMoneyLine": 166,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832181",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -201,
                "awayMoneyLine": 166,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832181",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -201,
                "awayMoneyLine": 166,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832181",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -207,
                "awayMoneyLine": 174,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/66fd0ac6-d7f0-4c51-a4aa-528d9ec1def6/cin-vs-phi",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -3.6,
                "overUnder": 68.6,
                "homeMoneyLine": -207,
                "awayMoneyLine": 171,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470115",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "DEN",
        "away": "CAR",
        "odds": [
            {
                "pointsSpread": -15.7,
                "overUnder": 58.6,
                "homeMoneyLine": -786,
                "awayMoneyLine": 586,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568672",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -15,
                "overUnder": 57.9,
                "homeMoneyLine": -886,
                "awayMoneyLine": 657,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/carolina-panthers-@-denver-broncos-33691825",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 57.9,
                "homeMoneyLine": -800,
                "awayMoneyLine": 586,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832183",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 57.9,
                "homeMoneyLine": -800,
                "awayMoneyLine": 586,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832183",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 57.9,
                "homeMoneyLine": -800,
                "awayMoneyLine": 586,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832183",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 57.9,
                "homeMoneyLine": -800,
                "awayMoneyLine": 586,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832183",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 58.6,
                "homeMoneyLine": -857,
                "awayMoneyLine": 614,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/9a6a83bb-4be4-4ea4-abd5-b1d4f4b6d2d2/den-vs-car",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -15.7,
                "overUnder": 58.6,
                "homeMoneyLine": -857,
                "awayMoneyLine": 643,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470116",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "LV",
        "away": "KC",
        "odds": [
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 472,
                "awayMoneyLine": -607,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568627",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 486,
                "awayMoneyLine": -614,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/kansas-city-chiefs-@-las-vegas-raiders-33691831",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 514,
                "awayMoneyLine": -686,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832187",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 514,
                "awayMoneyLine": -686,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832187",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 514,
                "awayMoneyLine": -686,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832187",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 514,
                "awayMoneyLine": -686,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832187",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 13.6,
                "overUnder": 59.3,
                "homeMoneyLine": 514,
                "awayMoneyLine": -686,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/65c05823-ff35-41bd-b4e6-30f5ee1233e9/lv-vs-kc",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 12.9,
                "overUnder": 59.3,
                "homeMoneyLine": 536,
                "awayMoneyLine": -714,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470117",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "LAC",
        "away": "NO",
        "odds": [
            {
                "pointsSpread": -10,
                "overUnder": 59.3,
                "homeMoneyLine": -443,
                "awayMoneyLine": 357,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568689",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -10,
                "overUnder": 57.9,
                "homeMoneyLine": -479,
                "awayMoneyLine": 386,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-orleans-saints-@-los-angeles-chargers-33691820",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -10,
                "overUnder": 58.6,
                "homeMoneyLine": -493,
                "awayMoneyLine": 379,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832178",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -10,
                "overUnder": 58.6,
                "homeMoneyLine": -493,
                "awayMoneyLine": 379,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832178",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -10,
                "overUnder": 58.6,
                "homeMoneyLine": -493,
                "awayMoneyLine": 379,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832178",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -10,
                "overUnder": 58.6,
                "homeMoneyLine": -493,
                "awayMoneyLine": 379,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832178",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -10,
                "overUnder": 58.6,
                "homeMoneyLine": -500,
                "awayMoneyLine": 393,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/9c1ecdb1-b85b-4cc1-bdc8-d7574fccb122/lac-vs-no",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -10,
                "overUnder": 57.9,
                "homeMoneyLine": -500,
                "awayMoneyLine": 400,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470113",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "SEA",
        "away": "BUF",
        "odds": [
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 194,
                "awayMoneyLine": -231,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568682",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 66.4,
                "homeMoneyLine": 203,
                "awayMoneyLine": -240,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/buffalo-bills-@-seattle-seahawks-33691829",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 193,
                "awayMoneyLine": -236,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832179",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 193,
                "awayMoneyLine": -236,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832179",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 193,
                "awayMoneyLine": -236,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832179",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 193,
                "awayMoneyLine": -236,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832179",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 66.4,
                "homeMoneyLine": 193,
                "awayMoneyLine": -229,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/674a2458-d829-47f3-8a2a-937949cf4dbe/sea-vs-buf",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 66.4,
                "homeMoneyLine": 193,
                "awayMoneyLine": -229,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470114",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "CLE",
        "away": "BAL",
        "odds": [
            {
                "pointsSpread": 11.4,
                "overUnder": 63.6,
                "homeMoneyLine": 443,
                "awayMoneyLine": -564,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568896",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 12.1,
                "overUnder": 63.6,
                "homeMoneyLine": 472,
                "awayMoneyLine": -600,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/baltimore-ravens-@-cleveland-browns-33691824",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 11.4,
                "overUnder": 63.6,
                "homeMoneyLine": 500,
                "awayMoneyLine": -650,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832211",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 11.4,
                "overUnder": 63.6,
                "homeMoneyLine": 500,
                "awayMoneyLine": -650,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832211",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 11.4,
                "overUnder": 63.6,
                "homeMoneyLine": 500,
                "awayMoneyLine": -650,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832211",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 11.4,
                "overUnder": 63.6,
                "homeMoneyLine": 500,
                "awayMoneyLine": -650,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832211",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 12.1,
                "overUnder": 63.6,
                "homeMoneyLine": 493,
                "awayMoneyLine": -650,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/c2f6b26b-4c7c-4f38-931b-184f05d0260b/cle-vs-bal",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 12.1,
                "overUnder": 63.6,
                "homeMoneyLine": 500,
                "awayMoneyLine": -643,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470105",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "DET",
        "away": "TEN",
        "odds": [
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -929,
                "awayMoneyLine": 672,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568598",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 63.6,
                "homeMoneyLine": -886,
                "awayMoneyLine": 657,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/tennessee-titans-@-detroit-lions-33691827",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -893,
                "awayMoneyLine": 643,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832212",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -893,
                "awayMoneyLine": 643,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832212",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -893,
                "awayMoneyLine": 643,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832212",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -893,
                "awayMoneyLine": 643,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832212",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -929,
                "awayMoneyLine": 657,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/2229b569-9325-4a49-afc6-6d51a67d0f0b/det-vs-ten",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -16.4,
                "overUnder": 64.3,
                "homeMoneyLine": -929,
                "awayMoneyLine": 679,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470106",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "HOU",
        "away": "IND",
        "odds": [
            {
                "pointsSpread": -7.1,
                "overUnder": 64.3,
                "homeMoneyLine": -322,
                "awayMoneyLine": 264,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568673",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 65,
                "homeMoneyLine": -329,
                "awayMoneyLine": 272,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/indianapolis-colts-@-houston-texans-33691826",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -350,
                "awayMoneyLine": 279,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832172",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -350,
                "awayMoneyLine": 279,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832172",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -350,
                "awayMoneyLine": 279,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832172",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -350,
                "awayMoneyLine": 279,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832172",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -343,
                "awayMoneyLine": 280,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/2c8a3f2a-3282-4010-83be-d7fc22ec72a6/hou-vs-ind",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -7.1,
                "overUnder": 65,
                "homeMoneyLine": -357,
                "awayMoneyLine": 286,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470112",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "JAX",
        "away": "GB",
        "odds": [
            {
                "pointsSpread": 8.2,
                "overUnder": 70,
                "homeMoneyLine": 234,
                "awayMoneyLine": -283,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568721",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 7.1,
                "overUnder": 70.7,
                "homeMoneyLine": 246,
                "awayMoneyLine": -293,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/green-bay-packers-@-jacksonville-jaguars-33691828",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70,
                "homeMoneyLine": 250,
                "awayMoneyLine": -307,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832173",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70,
                "homeMoneyLine": 250,
                "awayMoneyLine": -307,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832173",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70,
                "homeMoneyLine": 250,
                "awayMoneyLine": -307,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832173",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70,
                "homeMoneyLine": 250,
                "awayMoneyLine": -307,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832173",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70.7,
                "homeMoneyLine": 243,
                "awayMoneyLine": -293,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/07c404e9-e9b9-48fa-b3b7-4483b7642845/jax-vs-gb",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 8.2,
                "overUnder": 70.7,
                "homeMoneyLine": 243,
                "awayMoneyLine": -300,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470111",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "MIA",
        "away": "ARI",
        "odds": [
            {
                "pointsSpread": -6.4,
                "overUnder": 65.7,
                "homeMoneyLine": -293,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568723",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -280,
                "awayMoneyLine": 234,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/arizona-cardinals-@-miami-dolphins-33691813",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832174",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832174",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832174",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 66.4,
                "homeMoneyLine": -300,
                "awayMoneyLine": 243,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832174",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 65.7,
                "homeMoneyLine": -307,
                "awayMoneyLine": 254,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/9c81a610-3169-4fb9-92da-c0e78ab37ac8/mia-vs-ari",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": -6.4,
                "overUnder": 65.7,
                "homeMoneyLine": -322,
                "awayMoneyLine": 257,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470107",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "NE",
        "away": "NYJ",
        "odds": [
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 372,
                "awayMoneyLine": -464,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568807",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 10,
                "overUnder": 59.3,
                "homeMoneyLine": 386,
                "awayMoneyLine": -479,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-york-jets-@-new-england-patriots-33691816",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 386,
                "awayMoneyLine": -493,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832175",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 386,
                "awayMoneyLine": -493,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832175",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 386,
                "awayMoneyLine": -493,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832175",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 386,
                "awayMoneyLine": -493,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832175",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 386,
                "awayMoneyLine": -493,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/6d6b4437-b32b-4651-91bf-2165564de45a/ne-vs-nyj",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 10,
                "overUnder": 58.6,
                "homeMoneyLine": 393,
                "awayMoneyLine": -500,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470108",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "TB",
        "away": "ATL",
        "odds": [
            {
                "pointsSpread": 5.1,
                "overUnder": 65.7,
                "homeMoneyLine": 171,
                "awayMoneyLine": -203,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568795",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 5.1,
                "overUnder": 65,
                "homeMoneyLine": 177,
                "awayMoneyLine": -209,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/atlanta-falcons-@-tampa-bay-buccaneers-33691830",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 176,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832176",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 176,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832176",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 176,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832176",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 65.7,
                "homeMoneyLine": 176,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832176",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 5.1,
                "overUnder": 65,
                "homeMoneyLine": 174,
                "awayMoneyLine": -207,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/62538db8-9984-46a3-b78c-17be3a504572/tb-vs-atl",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 5.1,
                "overUnder": 65.7,
                "homeMoneyLine": 171,
                "awayMoneyLine": -207,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470109",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "WAS",
        "away": "CHI",
        "odds": [
            {
                "pointsSpread": 6.1,
                "overUnder": 61.4,
                "homeMoneyLine": 177,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568591",
                "sportsBook": "Draftkings"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 62.2,
                "homeMoneyLine": 186,
                "awayMoneyLine": -220,
                "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/chicago-bears-@-washington-commanders-33691815",
                "sportsBook": "Fanduel"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 62.2,
                "homeMoneyLine": 171,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832177",
                "sportsBook": "Playsugarhouse"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 62.2,
                "homeMoneyLine": 171,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832177",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 62.2,
                "homeMoneyLine": 171,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832177",
                "sportsBook": "Howdy :)"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 62.2,
                "homeMoneyLine": 171,
                "awayMoneyLine": -211,
                "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832177",
                "sportsBook": "Betrivers"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 61.4,
                "homeMoneyLine": 180,
                "awayMoneyLine": -214,
                "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/da5d30c2-6b45-4e29-ac55-6386cb455181/was-vs-chi",
                "sportsBook": "Caesars"
            },
            {
                "pointsSpread": 6.1,
                "overUnder": 61.4,
                "homeMoneyLine": 193,
                "awayMoneyLine": -229,
                "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16470110",
                "sportsBook": "Betmgm"
            }
        ],
        "status": false
    },
    {
        "id": null,
        "home": "LAR",
        "away": "MIN",
        "odds": [],
        "status": true
    }
]