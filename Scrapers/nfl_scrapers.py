import re
import time

import requests
import urllib3
from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By

# driver = webdriver.Chrome('https://espnbet.com/sport/football/organization/united-states/competition/nfl')


def extracts_odds_from_html(text):
    pattern = r">(.*?)<"
    matches = re.findall(pattern, text)
    return matches

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
    headers = { 'authority': 'www.espn.com', 'method': 'GET', 'path': '/nfl/odds',
    'scheme': 'https',
    'Accept':
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-encoding': 'gzip, deflate, br, zstd',
    'Accept-language': 'en-US,en;q=0.9',
    'Cache-control': 'max-age=0',
    'Cookie':
    'connectionspeed=full; edition-view=espn-en-us; edition=espn-en-us; country=us; region=ccpa; _dcf=1; SWID=40DBFE17-FEE0-486F-C8CF-04DFE91FC1A0; s_ensCDS=0; s_ensNSL=0; s_ensRegion=ccpa; _nr=0; check=true; mboxEdgeCluster=35; block.check=true%7Ctrue; userZip=78745; country=us; hashedIp=93a0d2de7837275560520e655954e0ca93633d454fa1e27b796e05292330a595; __fitt-sess-device.prod=c290bca4-9e49-4f5b-a7f2-b66cbedf4633; s_ensNR=1732204451403-New; usprivacy=1YNY; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Nov+21+2024+09%3A54%3A14+GMT-0600+(Central+Standard+Time)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=9d3820b6-93bc-45c0-955c-9393f3a1c2d8&interactionCount=1&isAnonUser=1&landingPath=https%3A%2F%2Fwww.espn.com%2Fnfl%2Fodds&groups=C0001%3A1%2CC0003%3A1%2CBG1145%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1; mbox=session#60df022477114c03a52a011551726aef#1732206317|PC#60df022477114c03a52a011551726aef.35_0#1795449257; trc_cookie_storage=taboola%2520global%253Auser-id%3Da2c32a37-bd6a-4708-9910-0665e04bb382-tucte38dd27; client_type=html5; client_version=4.7.0; espn-prev-page=espn%3Anfl%3Aodds; tveAuth=espn3; IR_gbd=espn.com; IR_9070=1732204466103%7C0%7C1732204466103%7C%7C; s_ecid=MCMID%7C18820971724534117111531506916012528029; AMCVS_5BFD123F5245AECB0A490D45%40AdobeOrg=1; s_cc=true; AMCV_5BFD123F5245AECB0A490D45%40AdobeOrg=-50417514%7CMCMID%7C18820971724534117111531506916012528029%7CMCAID%7CNONE%7CMCOPTOUT-1732211667s%7CNONE%7CvVersion%7C5.5.0; _scor_uid=35cd69875599420f97f264358b437246; tvid=c19d008c9be1401aa1a4bcf80ed9a3b2; nol_fpid=hw2bqe8lrnq4a34dy0ihfhfo5lbl01732204469|1732204469774|1732204469774|1732204469774; _cb=2IJczBrI5IfBC_6ox; _chartbeat2=.1732204470785.1732204470785.1.DOC8SqDQ4quhXRiI9IA3o0e9Iky.1; _cb_svref=https%3A%2F%2Fwww.google.com%2F; __gads=ID=6eb7b9994f1e4fbd:T=1732204473:RT=1732204473:S=ALNI_MZpArkPtU3_oATaAXqTwIqRfz4vXg; __gpi=UID=00000f9afb749530:T=1732204473:RT=1732204473:S=ALNI_MZCtj481J03vUH3HU4Dl7Tx5ZEtVw; __eoi=ID=9ec0c13011a39c0b:T=1732204473:RT=1732204473:S=AA-AfjbxS_sSvW1R1hRa40_ZMS42; espnCreative138271411242=true; _gcl_au=1.1.1990675345.1732204475',
    'If-modified-since': 'Thu, 21 Nov 2024 15:54:58 GMT',

    'priority':'u=0, i',
    'referer':
    'https://www.google.com/',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile':
    '?0',
    'sec-ch-ua-platform':
    "Windows",
    'sec-fetch-dest':
    'document',
    'sec-fetch-mode':
    'navigate',
    'sec-fetch-site':
    'same-origin',
    'sec-fetch-user':
    '?1',
    'upgrade-insecure-requests':
    '1',
    'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    }
    # Send an HTTP GET request to the URL
    response = requests.get(url, verify=False, headers=headers)
    print("request made")

    # Check if the request was successful (status code 200)
    # if response.status_code == 200:
    print(response.status_code)
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')
    print("Youre hitting me! 1")
    print(response.content)
    # odds = soup.find('section', class_="liAe.zpZVw.qVkLt.pYgZk.Mxrkk.ynwu.YsFN.Feejh.VZTD.rEPuv.SjBgB.cbeTh.pmxDZ.rgQax.EKVem.WOJBZ.vQPWd.LvcUy.ARPdS.VMbsQ")
    # print(odds)




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


