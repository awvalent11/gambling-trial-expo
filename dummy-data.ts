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
        payoff: 600,
        status: false
    }, {
        id: 4,
        home: "SFO",
        away: "CAR",
        moneyLine: -11.0,
        odds: +120,
        expiration: dayjs('2024-11-17'),
        position: 100,
        payoff: 120,
        status: true
    }]