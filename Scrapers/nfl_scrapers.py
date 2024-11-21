import time

import requests
import urllib3
from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By

# driver = webdriver.Chrome('https://espnbet.com/sport/football/organization/united-states/competition/nfl')




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
    print("Odds Info")
    print(odds)


def scrape_espn_live_nfl(target='file',
                               url='https://espnbet.com/sport/football/organization/united-states/competition/nfl',
                               requests=requests,
                               # webdriver = webdriver,
                               BeautifulSoup=BeautifulSoup,
                               ):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to ESPN Bet NFL...')
    #Might need to change this bad boy to Chrome
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    # Send an HTTP GET request to the URL
    # driver = webdriver.Chrome()
    # page = driver.get('https://espnbet.com/sport/football/organization/united-states/competition/nfl')
    # time.sleep(45)
    # element = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class='space-y-4']")))
    # element = driver.find_element(By.CLASS_NAME, 'space-y-4')
    # print(page)
    # response = requests.get(url, verify=False, headers=headers)
    # print("request made")

    # Check if the request was successful (status code 200)
    # if response.status_code == 200:
    #     print("got a 200")
    # print(response.status_code)
    # Parse the HTML content of the page
    # soup = BeautifulSoup(response.content, 'html.parser')
    # for card in soup.find('div', class_='space-y-4'):
    # print(response.content)
    # body = soup.find("section", data_testid_="marketplace-shelf-")
    # body = driver.find_element(by="div", value="marketplace-shelf-")
    # print(body)
    # print("Youre hitting me 2")
    # teams = soup.findAll("div", class_='flex p-0')
    # print(teams)
    # # match = re.match(".*?>(.*)<.*")
    # # print(match)
    # spread = soup.findAll("div", class_='flex items-center gap-2 pt-2 w-[53%]')
    # print(spread)

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


