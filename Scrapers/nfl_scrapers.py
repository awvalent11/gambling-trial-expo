import re
import time

import requests
import urllib3
from bs4 import BeautifulSoup
from selenium import webdriver
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


# driver = webdriver.Chrome('https://espnbet.com/sport/football/organization/united-states/competition/nfl')

nfl_team_abbreviations = ["PHI", "DEN", "LV", "GB", "CAR", "NO", "KC", "MIN"
                          "DAL", "BUF", "CHI", "CIN", "LV", "SF", "ARI", "PIT", "LA Chargers"
                          "TB", "NE", "IND", "WSH", "TEN", "JAX", "HOU", "NY Giants", "SEA"
                          "NY Jets", "NYG", "DET", "MIA", "CLE", "NO", "LA Rams"]
def extracts_odds_from_html(text):
    pattern = r">(.*?)<"
    matches = re.findall(pattern, text)
    return matches

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
def transforms_espn_bets_date(espn_array):
    i = 0
    while i < len(espn_array):
        if espn_array[i] in months:
            espn_array.pop(i)
            espn_array.pop(i)
    else:
        i += 1

def trans_espn_bets_date(espn_array):
    new_list = []
    i = 0
    for item in months:
        if espn_array[item] in months:
            espn_array.pop(item)
            espn_array.pop(item)
    return espn_array

def scrape_draftkings_live_nfl(target='file',
                               url='https://sportsbook.draftkings.com/leagues/football/nfl',
                               requests=requests,
                               BeautifulSoup=BeautifulSoup,
                               open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Draftkings NFL...')
    #Might need to change this bad boy to Chrome
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    # Send an HTTP GET request to the URL
    response = requests.get(url, verify=False, headers=headers)
    print("request made")

    # Check if the request was successful (status code 200)
    # if response.status_code == 200:
    print(response.status_code)
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')
    print("Youre hitting me! 1")
    # team = soup.findAll('div', class_="event-cell__team-info")
    # print("Team info")
    # print(team)
    odds = soup.findAll('td', class_="sportsbook-table__column-row")
    print(type(odds))
    print("Odds Info")
    odds_array = []
    for segment in odds:
        casted_segment = str(segment)
        cleaned_segment = extracts_odds_from_html(casted_segment)
        for word in cleaned_segment:
          if word != '':
            odds_array.append(word)
    print("Odds Array")
    print(odds_array)


def scrape_espn_live_nfl(target='file',
                               url='https://espnbet.com/sport/football/organization/united-states/competition/nfl',
                               requests=requests,
                               # webdriver = webdriver,
                               BeautifulSoup=BeautifulSoup,
                               ):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to ESPN/nfl/odds...')
    #Might need to change this bad boy to Chrome
    # !window.crossOriginIsolated && !navigator.serviceWorker)
    nfl_teams_array = []
    chrome_options = Options()
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(2)
    bet_content = driver.find_element(By.ID, "MarketplaceShelf:6cf35d0d-145f-4803-9f4b-9cec4427ebfb").text
    print("Raw Bet Content:")
    print(bet_content)
    espn_odds_array = bet_content.split()
    # print("Odds as Array")
    print(espn_odds_array)
    for element in espn_odds_array:
        if ":" in element:
            espn_odds_array.remove(element)
        if "-" in element:
            espn_odds_array.remove(element)
    print("ESPN Odds Array cleaned for time:")
    print(espn_odds_array)
    # print("Cleaning for Date:")
    # espn_odds_array = transforms_espn_bets_date(espn_odds_array)
    print(espn_odds_array)
    for element in espn_odds_array:
        if nfl_team_abbreviations.__contains__(element) or re.match(r"[-+]?\d{2,3}", element):
            nfl_teams_array.append(element)
    print("Final Array")
    print(nfl_teams_array)


    #You need a test condition for if this function does not find space-y-4, it shouldn't send any content and should retry call it 10 seconds later





def scrape_fanduel_live_nfl(target='file',
                         url="https://sportsbook.fanduel.com/",
                         requests=requests,
                         BeautifulSoup=BeautifulSoup,
                         # webdriver=webdriver
                         ):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Fanduel Bet NFL...')
    #Might need to change this bad boy to Chrome
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    # Send an HTTP GET request to the URL
    response = requests.get(url, verify=False, headers=headers)
    print("request made")

    # driver = webdriver.Chrome()
    # page = driver.get('https://sportsbook.fanduel.com/', headers=headers)
    time.sleep(20)
    # element = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class='space-y-4']")))
    # element = driver.find_element(By.CLASS_NAME, 'space-y-4')
    # print(page)


    # Check if the request was successful (status code 200)
    # if response.status_code == 200:
    #     print("got a 200")
    print(response.status_code)
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')
    # for card in soup.find('div', class_='space-y-4'):
    print(response.content)
    body = soup.find("section", data_testid_="marketplace-shelf-")
    print(body)
    # print("Youre hitting me 2")
    moneylines = soup.findAll("span", class_='ir is ff iz eh bc')
    print(moneylines)
    # # match = re.match(".*?>(.*)<.*")
    # # print(match)
    # spread = soup.findAll("div", class_='flex items-center gap-2 pt-2 w-[53%]')
    # print(spread)

url="https://sportsbook.caesars.com/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92"

def scrape_caesers_live_nfl(target='file',
                            url="https://sportsbook.caesars.com/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92",
                            requests=requests,
                            BeautifulSoup=BeautifulSoup,
                            ):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Caesers Bet NFL...')
    #Might need to change this bad boy to Chrome
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    # Send an HTTP GET request to the URL
    response = requests.get(url, verify=False, headers=headers)
    print("request made")

    # Check if the request was successful (status code 200)
    # if response.status_code == 200:
    #     print("got a 200")
    print(response.status_code)
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')
    # for card in soup.find('div', class_='space-y-4'):
    print(response.content)
    # body = soup.find("section", data_testid_="marketplace-shelf-")
    # print(body)
    # print("Youre hitting me 2")
    teams = soup.findAll("span", class_="truncate2Rows")
    spreads = soup.findAll("span", class_='cui-text-fg-default cui__market-button-line')
    print(teams)
    print(spreads)
    # # match = re.match(".*?>(.*)<.*")
    # spread = soup.findAll("div", class_='flex items-center gap-2 pt-2 w-[53%]')


