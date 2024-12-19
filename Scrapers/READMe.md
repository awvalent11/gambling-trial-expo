**How to run locally** 
cd ./Scrapers
python3 -m venv venv # create a virtual environment
--Linux/ Mac: source venv/bin/activate
-- Windows: venv\Scripts\activate
pip install -r requirements.txt
TRY SCRAPY!!

***Starting Splash Container***
--- 
podman run -it -p 8050:8050 --rm scrapinghub/splash

***Top Sportsbooks***
--- 

BetMGM, Draftkings, Caesars, ESPN Bet, BetRivers, Fanatics, Bet365, FanDuel

---

***Code Quality Issues***
ESPN Bet Scraper is tightly coupled to Months and Year. When year turns over, and 
when months change over, check ESPN Bet page for Month abbreviations


