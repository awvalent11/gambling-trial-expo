import re
import requests
import urllib3
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from datetime import date

mlb_teams = ["Cardinals", "Yankees", "Braves", "Twins", "Orioles",
             "Phillies", "Blue", "Jays", "Rays", "Pirates", "Tigers",
             "Marlins", "Astros", "Nationals", "Brewers", "Royals",
             "Athletics", "Dodgers", "White", "Sox", "Guardians",
             "Giants", "Cubs", "Padres", "Diamondbacks", "Reds",
             "Red", "Sox", "Angels", "Rookies", "Mariners", "Rangers"
             ]
def extracts_odds_from_html(text):
    pattern = r">(.*?)<"
    matches = re.findall(pattern, text)
    return matches

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

def scrape_vegas_insider_mlb(target='file',
                                  url='https://www.vegasinsider.com/mlb/odds/las-vegas/',
                                  requests=requests,
                                  BeautifulSoup=BeautifulSoup,
                                  open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Vegas Insider MLB...')

    chrome_options = Options()
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
    driver = webdriver.Chrome()
    driver.get(url)
    # time.sleep(2)
    bet_content_array = []
    odds = driver.find_element(By.CLASS_NAME, "odds-table").text
    odds_split = odds.split()
    for segment in odds_split:
        if mlb_teams.__contains__(segment):
            bet_content_array.append(segment)
        if segment.__contains__("+") | segment.__contains__("-"):
            bet_content_array.append(segment)
    print(odds_split)
    print(bet_content_array)