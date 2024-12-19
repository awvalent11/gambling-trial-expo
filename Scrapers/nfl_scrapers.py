import re
import time

import requests
import urllib3
import scrapy
from scrapy.settings.default_settings import DUPEFILTER_CLASS, HTTPCACHE_STORAGE
# from scrapy_splash import SplashRequest
from bs4 import BeautifulSoup
from selenium import webdriver
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from datetime import date


# SPLASH_URL = 'https://sportsbook.fanduel.com/navigation/nfl'
# DUPEFILTER_CLASS = 'scrapy_splash.SplashAwareDupeFilter'
# HTTPCACHE_STORAGE = 'scrapy_splash.SplashAwareHttpCacheStorage'

# driver = webdriver.Chrome('https://espnbet.com/sport/football/organization/united-states/competition/nfl')

day = date.today().day
year = date.today().year

nfl_team_abbreviations = ["PHI", "DEN", "LV", "GB", "CAR", "NO", "KC", "MIN"
                          "DAL", "BUF", "CHI", "CIN", "LV", "SF", "ARI", "PIT", "LA Chargers"
                          "TB", "NE", "IND", "WSH", "TEN", "JAX", "HOU", "NY Giants", "SEA"
                          "NY Jets", "NYG", "DET", "MIA", "CLE", "NO", "LA Rams"]
def extracts_odds_from_html(text):
    pattern = r">(.*?)<"
    matches = re.findall(pattern, text)
    return matches

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


def scrape_draftkings_live_nfl(target='file',
                               url='https://sportsbook.draftkings.com/leagues/football/nfl',
                               requests=requests,
                               BeautifulSoup=BeautifulSoup,
                               open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Draftkings NFL...')
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    response = requests.get(url, verify=False, headers=headers)
    print("request made")
    print(response.status_code)
    soup = BeautifulSoup(response.content, 'html.parser')
    print("Youre hitting me! 1")
    # team = soup.findAll('div', class_="event-cell__team-info")
    # print("Team info")
    # print(team)
    odds = soup.findAll('td', class_="sportsbook-table__column-row")
    draftkings_nfl_odds_array = []
    for segment in odds:
        casted_segment = str(segment)
        cleaned_segment = extracts_odds_from_html(casted_segment)
        for word in cleaned_segment:
          if word != '':
            draftkings_nfl_odds_array.append(word)
    print("Draftkings NFL Odds Array")
    print(draftkings_nfl_odds_array)




def scrape_fanduel_live_nfl(target='file',
                            url='https://sportsbook.fanduel.com/navigation/nfl',
                            # url='https://smp.nj.sportsbook.fanduel.com/api/sports/fixedodds/readonly/v1/getMarketPrices?priceHistory=1',
                            requests=requests,
                            # webdriver = webdriver,
                            BeautifulSoup=BeautifulSoup,
                            ):
    headers = {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '783',
        'content-type': 'application/json',
        'origin': 'https://sportsbook.fanduel.com',
        'priority': 'u=1, i',
        'referer': 'https://sportsbook.fanduel.com/',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "Windows",
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'x-application': 'FhMFpcPWXMeyZxOx',
        'x-px-context': '_px3=ebf2d53716050a4ac665a0bac31acd2568c7725cf2ec3cd42214f6958fb1db88:T9En3eak4Rb/PnCISMANw0M1vBjJiOAjDqO9krfQGtXvEDIm4eeI1Q8WJ97SGNZUAA1XUWafbZAeOe4P6CtD1A==:1000:n3F7xWm0mAeSziiL7c/TXLQvqCK4Q4tGww7ykWelRFc7jLMJnQZys/BXbO7l0lPSaT0oUqVrjK4aUX57CuE/naNAeTC3DI66OdZ9z/N2P5/ctgowckWXOUyu/DYnR8x1dXhUwTkPfpr9mws500/f+i7TIF0wDZKGg1e0U1/p3w2B6CdaPzRLksFswKzIGbeymmfAUSfasnhmHsxHiXKygw8Q2T3qLi3q1t0DP0OoN6c=;_pxvid=9e8264fa-b0c6-11ef-95d4-4a4e417a337d;pxcts=5f2bab73-bc9a-11ef-9221-639394f0781c;'
        }
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to fanduel/nfl...')
    # Might need to change this bad boy to Chrome
    # !window.crossOriginIsolated && !navigator.serviceWorker)

    chrome_options = Options()
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(15)
    bet_content = driver.find_element(By.XPATH, "html/body/div[1]/div/div/div/div[1]/main/div/div[1]/div/div[2]/div[3]/ul").text
    print("Raw Bet Content:")
    print(bet_content)


    # ***** ///////////////////////////////////////////////// *****************************
#     target='file',
#                          url="https://sportsbook.fanduel.com/",
#                          requests=requests,
#                          BeautifulSoup=BeautifulSoup,
#                          # webdriver=webdriver
#                          ):
#     urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
#     print('making request to Fanduel Bet NFL...')
#     #Might need to change this bad boy to Chrome
#     headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
#     # Send an HTTP GET request to the URL
#     print("request made")
#     response = requests.get(url, verify=False, headers=headers)
#     #Might need to change this bad boy to Chrome
#     # !window.crossOriginIsolated && !navigator.serviceWorker)
#     nfl_teams_array = []
#     chrome_options = Options()
#     chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
#     driver = webdriver.Chrome()
#     driver.get(url)
#     # time.sleep(2)
#     bet_content = driver.find_element(By.ID, "MarketplaceShelf:6cf35d0d-145f-4803-9f4b-9cec4427ebfb").text
#     print("Raw Bet Content:")
#     print(bet_content)
#     # driver = webdriver.Chrome()
#     # page = driver.get('https://sportsbook.fanduel.com/', headers=headers)
#     time.sleep(2)
#     # element = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class='space-y-4']")))
#     # element = driver.find_element(By.CLASS_NAME, 'space-y-4')
#     # print(page)
#
#
#     # Check if the request was successful (status code 200)
#     # if response.status_code == 200:
#     #     print("got a 200")
#     print(response.status_code)
#     # Parse the HTML content of the page
#     soup = BeautifulSoup(response.content, 'html.parser')
#     # for card in soup.find('div', class_='space-y-4'):
#     print(response.content)
#     body = soup.find("section", data_testid_="marketplace-shelf-")
#     print(body)
#     # spread = soup.findAll("div", class_='flex items-center gap-2 pt-2 w-[53%]')

url="https://sportsbook.caesars.com/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92"

# def scrape_caesers_live_nfl(target='file',
#                             # url="https://sportsbook.caesars.com/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92",
#                             url="https://sportsbook.caesars.com/us/dc/bet/americanfootball",
#                             requests=requests,
#                             BeautifulSoup=BeautifulSoup,
#                             ):

    # TRY SCRAPY!!!
    # urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    # print('making request to Caesers Bet NFL...')
    #
    # chrome_options = Options()
    # chrome_options.add_argument('user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"')
    # chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    # driver = webdriver.Chrome(options=chrome_options)
    # cookie = {
    #     'name': 'caesers-cookie',
    #     'value': 'visid_incap_630352=TP8Auma8SrSf9/PJ8s/SIITmUWcAAAAAQUIPAAAAAADiBXE+eeNBEoHJQT5pTYZN; incap_ses_1419_630352=/x7KeGJVjkyz1zHyKU2xE4TmUWcAAAAAR54uScXj0h9peJVtGrbKjQ==; at_check=true; AMCVS_05C8485451E452E30A490D45%40AdobeOrg=1; _gcl_au=1.1.480356430.1733420678; _scid=sOC4WBnVfiU4Ms1Qfa_n6Ln1dNO9_0IS; s_cc=true; _ga=GA1.1.417967047.1733420680; _ScCbts=%5B%5D; _mkto_trk=id:580-JWZ-774&token:_mch-caesars.com-6cf2adcf7c0c2e9764642254a577efc6; afUserId=a92a8bc6-fc66-4c25-88eb-6bb444b9f822-p; AF_SYNC=1733420681923; _sctr=1%7C1733378400000; _fbp=fb.1.1733694385204.263471526878272595; _ALGOLIA=anonymous-69fe63b5-b554-457a-b7d3-424a9f2bad62; incap_ses_210_630352=CFwpPksGRFqpqwHHERLqAgQbVmcAAAAAQiPWuhZDQTQCzWBDRhyEDw==; RoktRecogniser=aea9dc24-d790-4a55-89b8-7764984282ec; nlbi_630352_2684390=FVzXEq7AKlqvuMrh2LS4EQAAAACpN09eqcexikiRayFeKHyh; incap_ses_1663_630352=BEU4ZKB8MCxoHHGm4ykUF1FyWGcAAAAAbtZAh3IY7+jUcCV80zG11A==; reese84=3:BiVpAdQZyH1FWxWBgm0sPw==:Pn8sQfRof6B7th3j57x7PZDFyJ0lfsbNLDejUbRpJ+J1uPe6i9gd37g5aoxAKfauBMsJ+qtF/NM2YXgW7oADHM5GKpYMauwlw6vJPKRB1SE4MWGoJePmkVqNLz/W2mkepf/1Ffyli6W5qJTJNUnOTzpTCvuz2/4/Z4CshMZYvTrbgYvibb0PZiKDaGmuh1ZqKH7CW7+U9s8V6bbE05OEeFIjddvpDJinKiYJat0Wj5fTRyrOTxTvkkFBhkB3VKkpjWT7h6Kx4qqYk77JYsIuCKfucpgFuBbKsJuIc4nH0GK7myGektm9dkBtRW75txwxGTYxpnl6mP1mK0mTG5/Ts2ECqz3iC+oi66sPma7KfW1QIzkGSzMjZLiL5GpleBkYC24CNiGkZp0ZgGVmE/JXm3yyczGrdYTh/zK3Ne0XWUGfoJi08CDNLaeEadHk/MGnPOwy6bR4goF3+9svEOIvmw==:rVQ6Fen2xpRxI9yQog38HTLdRH5BzZ1eMYG37V0u4NA=; dtCookie=v_4_srv_11_sn_F126AC111B2A58EA8C64A2058EFFA4F1_perc_100000_ol_0_mul_1_app-3A92edb528d9036fcd_1_rcs-3Acss_0; TLTUID=EAC1AE1415ABB187470BAE0D532896E4; TLTSID=AA9E0F4FCFE244BB9AA26C06C41F37F0; nlbi_630352=w/uZak7dtnoGIA4n2LS4EQAAAAAxzI0qvUFuoPY/9okRCCFB; _scid_r=zmC4WBnVfiU4Ms1Qfa_n6Ln1dNO9_0ISOJf0LA; nlbi_630352_2147483392=uPqmSjmL6WwsKfXc2LS4EQAAAAAjkBkD9aDRSQorWaicbAyo; AMCV_05C8485451E452E30A490D45%40AdobeOrg=179643557%7CMCIDTS%7C20068%7CMCMID%7C79354999575449411980415090000698565757%7CMCAAMLH-1734488540%7C7%7CMCAAMB-1734488540%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1733890940s%7CNONE%7CvVersion%7C5.5.0; mbox=PC#8418b625ec3544fcab31213e8043b282.34_0#1797129630|session#03b4d8337fb7478da1a56e949bfe2a20#1733886690; _uetsid=f4f6b860b71511efb93293eac4e6ad6d; _uetvid=9a351370b33011efa9affb3644fbe275; _ga_PPYR8MS1KL=GS1.1.1733883737.6.1.1733884841.10.0.0; s_sq=harrahsglobaldev%3D%2526c.%2526a.%2526activitymap.%2526page%253Dhttps%25253A%25252F%25252Fsportsbook.caesars.com%25252Fus%25252Fdc%25252Fbet%25252Famericanfootball%25253Fid%25253D007d7c61-07a7-4e18-bb40-15104b6eac92%2526link%253DNFL%252520Featured%252520Schedule%252520Live%252520Future%252520Bets%252520Skip%252520the%252520Banners%252520Kupp%252520%252526%252520Kittle%252520Each%25252060%25252B%252520Receiving%252520Yards%252520Dec%25252012%25252C%2525207%25253A15%252520PM%252520%25257C%252520Was%252520%25252B215%252520Now%252520%25252B2%2526region%253DBODY%2526.activitymap%2526.a%2526.c%2526pid%253Dhttps%25253A%25252F%25252Fsportsbook.caesars.com%25252Fus%25252Fdc%25252Fbet%25252Famericanfootball%25253Fid%25253D007d7c61-07a7-4e18-bb40-15104b6eac92%2526oid%253DfunctionJn%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DDIV; fs_uid=#1388JK#20bf3420-e167-4fa1-9935-a77f1ccebd53:51943bb2-b5e8-40ae-89ac-047eedeb3658:1733888163036::1#/1764956723; fs_lua=1.1733888334624; aws-waf-token=e16fb6ec-d086-48ad-bde4-687851a8ce68:EgoAocgaCtU+AQAA:POUmGNRGPOb83qC5DkdX6mN4mjKvTff4QtOU6BGQd70mq+m3nDEeQMASQtccFgBQ0Z4jF/Xj32sMTZXWV7WGsRmhvBlzVgHRGgspTJJgdWPF+sZVTGEcXiiFrKINhgYdX6sntqUn9cN2SgZToS/0D7EKWV56vBuhCN1XrXrY5v4VC++boR60RixumqtlO2jlSiQL0Y1PeABb2M9rtAVDiCtSq3MeMr6CMI0Mswr2dX2voIiLP4U3g07k6yv9oGHCP+8FAHRIHFXk6YuHRw==',
    #     'domain': 'sportsbook.caesars.com',
    #     'path': '/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92'
    # }
    # driver.add_cookie(cookie)
    # driver.implicitly_wait(10)
    #
    # driver.get(url)
    # time.sleep(40)
    #
    # bet_content = driver.find_element(By.CLASS_NAME, "EventCard").text
    # print(bet_content)

    # urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    # session = requests.Session()
    # cookies = {'cookie_name': 'cookie_value'}
    # headers = {
    #     'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
    #     # 'Referrer-Policy': 'strict-origin-when-cross-origin',
    #     'authority': 'sportsbook.caesars.com',
    #     'method': 'GET',
    #     'path': '/us/dc/bet/americanfootball?id=007d7c61-07a7-4e18-bb40-15104b6eac92',
    #     'scheme': 'https',
    #     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    #     'accept-encoding': 'gzip, deflate, br, zstd',
    #     'accept-language': 'en-US,en;q=0.9',
    #     'cache-control': 'max-age=0',
    #     'Cookie': 'visid_incap_630352=TP8Auma8SrSf9/PJ8s/SIITmUWcAAAAAQUIPAAAAAADiBXE+eeNBEoHJQT5pTYZN; incap_ses_1419_630352=/x7KeGJVjkyz1zHyKU2xE4TmUWcAAAAAR54uScXj0h9peJVtGrbKjQ==; at_check=true; AMCVS_05C8485451E452E30A490D45%40AdobeOrg=1; _gcl_au=1.1.480356430.1733420678; _scid=sOC4WBnVfiU4Ms1Qfa_n6Ln1dNO9_0IS; s_cc=true; _ga=GA1.1.417967047.1733420680; _ScCbts=%5B%5D; _mkto_trk=id:580-JWZ-774&token:_mch-caesars.com-6cf2adcf7c0c2e9764642254a577efc6; afUserId=a92a8bc6-fc66-4c25-88eb-6bb444b9f822-p; AF_SYNC=1733420681923; _sctr=1%7C1733378400000; _fbp=fb.1.1733694385204.263471526878272595; _ALGOLIA=anonymous-69fe63b5-b554-457a-b7d3-424a9f2bad62; incap_ses_210_630352=CFwpPksGRFqpqwHHERLqAgQbVmcAAAAAQiPWuhZDQTQCzWBDRhyEDw==; RoktRecogniser=aea9dc24-d790-4a55-89b8-7764984282ec; nlbi_630352_2684390=FVzXEq7AKlqvuMrh2LS4EQAAAACpN09eqcexikiRayFeKHyh; incap_ses_1663_630352=BEU4ZKB8MCxoHHGm4ykUF1FyWGcAAAAAbtZAh3IY7+jUcCV80zG11A==; reese84=3:BiVpAdQZyH1FWxWBgm0sPw==:Pn8sQfRof6B7th3j57x7PZDFyJ0lfsbNLDejUbRpJ+J1uPe6i9gd37g5aoxAKfauBMsJ+qtF/NM2YXgW7oADHM5GKpYMauwlw6vJPKRB1SE4MWGoJePmkVqNLz/W2mkepf/1Ffyli6W5qJTJNUnOTzpTCvuz2/4/Z4CshMZYvTrbgYvibb0PZiKDaGmuh1ZqKH7CW7+U9s8V6bbE05OEeFIjddvpDJinKiYJat0Wj5fTRyrOTxTvkkFBhkB3VKkpjWT7h6Kx4qqYk77JYsIuCKfucpgFuBbKsJuIc4nH0GK7myGektm9dkBtRW75txwxGTYxpnl6mP1mK0mTG5/Ts2ECqz3iC+oi66sPma7KfW1QIzkGSzMjZLiL5GpleBkYC24CNiGkZp0ZgGVmE/JXm3yyczGrdYTh/zK3Ne0XWUGfoJi08CDNLaeEadHk/MGnPOwy6bR4goF3+9svEOIvmw==:rVQ6Fen2xpRxI9yQog38HTLdRH5BzZ1eMYG37V0u4NA=; dtCookie=v_4_srv_11_sn_F126AC111B2A58EA8C64A2058EFFA4F1_perc_100000_ol_0_mul_1_app-3A92edb528d9036fcd_1_rcs-3Acss_0; TLTUID=EAC1AE1415ABB187470BAE0D532896E4; TLTSID=AA9E0F4FCFE244BB9AA26C06C41F37F0; nlbi_630352=w/uZak7dtnoGIA4n2LS4EQAAAAAxzI0qvUFuoPY/9okRCCFB; _scid_r=zmC4WBnVfiU4Ms1Qfa_n6Ln1dNO9_0ISOJf0LA; nlbi_630352_2147483392=uPqmSjmL6WwsKfXc2LS4EQAAAAAjkBkD9aDRSQorWaicbAyo; AMCV_05C8485451E452E30A490D45%40AdobeOrg=179643557%7CMCIDTS%7C20068%7CMCMID%7C79354999575449411980415090000698565757%7CMCAAMLH-1734488540%7C7%7CMCAAMB-1734488540%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1733890940s%7CNONE%7CvVersion%7C5.5.0; mbox=PC#8418b625ec3544fcab31213e8043b282.34_0#1797129630|session#03b4d8337fb7478da1a56e949bfe2a20#1733886690; _uetsid=f4f6b860b71511efb93293eac4e6ad6d; _uetvid=9a351370b33011efa9affb3644fbe275; _ga_PPYR8MS1KL=GS1.1.1733883737.6.1.1733884841.10.0.0; s_sq=harrahsglobaldev%3D%2526c.%2526a.%2526activitymap.%2526page%253Dhttps%25253A%25252F%25252Fsportsbook.caesars.com%25252Fus%25252Fdc%25252Fbet%25252Famericanfootball%25253Fid%25253D007d7c61-07a7-4e18-bb40-15104b6eac92%2526link%253DNFL%252520Featured%252520Schedule%252520Live%252520Future%252520Bets%252520Skip%252520the%252520Banners%252520Kupp%252520%252526%252520Kittle%252520Each%25252060%25252B%252520Receiving%252520Yards%252520Dec%25252012%25252C%2525207%25253A15%252520PM%252520%25257C%252520Was%252520%25252B215%252520Now%252520%25252B2%2526region%253DBODY%2526.activitymap%2526.a%2526.c%2526pid%253Dhttps%25253A%25252F%25252Fsportsbook.caesars.com%25252Fus%25252Fdc%25252Fbet%25252Famericanfootball%25253Fid%25253D007d7c61-07a7-4e18-bb40-15104b6eac92%2526oid%253DfunctionJn%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DDIV; fs_uid=#1388JK#20bf3420-e167-4fa1-9935-a77f1ccebd53:51943bb2-b5e8-40ae-89ac-047eedeb3658:1733888163036::1#/1764956723; fs_lua=1.1733888334624; aws-waf-token=e16fb6ec-d086-48ad-bde4-687851a8ce68:EgoAocgaCtU+AQAA:POUmGNRGPOb83qC5DkdX6mN4mjKvTff4QtOU6BGQd70mq+m3nDEeQMASQtccFgBQ0Z4jF/Xj32sMTZXWV7WGsRmhvBlzVgHRGgspTJJgdWPF+sZVTGEcXiiFrKINhgYdX6sntqUn9cN2SgZToS/0D7EKWV56vBuhCN1XrXrY5v4VC++boR60RixumqtlO2jlSiQL0Y1PeABb2M9rtAVDiCtSq3MeMr6CMI0Mswr2dX2voIiLP4U3g07k6yv9oGHCP+8FAHRIHFXk6YuHRw==',
    #     'priority': 'u=0, i',
    #     'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    #     'sec-ch-ua-mobile': '?0',
    #     'sec-ch-ua-platform': "Windows",
    #     'sec-fetch-dest': 'document',
    #     'sec-fetch-mode': 'navigate',
    #     'sec-fetch-site': 'same-origin',
    #     'sec-fetch-user': '?1',
    #     'upgrade-insecure-requests': '1'
    # }
    # # session.cookies.update(cookies)
    # response = session.get(url, headers=headers)

    # print("request made")
    # print(response.status_code)
    # soup = BeautifulSoup(response.content, 'html.parser')
    # print(response.content)



def scrape_bet365(url='https://www.nj.bet365.com/?_h=KLFyUfv5CIkgW8De9ujzOg%3D%3D&btsffd=1#/AC/B12/C20426855/D48/E1441/F36/',
    requests=requests,
    BeautifulSoup=BeautifulSoup,
    open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Bet365 NFL...')
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    session = requests.Session()
    cookies = {'cookie_name': 'cookie_value'}
    session.cookies.update(cookies)
    response = session.get(url, headers=headers)

    print("request made")
    print(response.status_code)
    soup = BeautifulSoup(response.content, 'html.parser')
    print(response.content)


def scrape_bettingpros(url='https://www.bettingpros.com/nfl/odds/spread/',
                       requests=requests,
                       BeautifulSoup=BeautifulSoup,
                       open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Bettingpros...')
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    response = requests.get(url, verify=False, headers=headers)
    chrome_options = Options()
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
    driver = webdriver.Chrome()
    content = driver.find_element(By.ID, "odds-offers___tables-container").text
    print("Raw Bet Content:")
    print(content)


def scrape_vegas_insider_live_nfl(target='file',
                               url='https://www.vegasinsider.com/nfl/odds/las-vegas/',
                               requests=requests,
                               BeautifulSoup=BeautifulSoup,
                               open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Vegas Insider NFL...')
    # headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    # response = requests.get(url, verify=False, headers=headers)
    # print("request made")
    # print(response.status_code)
    # soup = BeautifulSoup(response.content, 'html.parser')
    # # teams = soup.findAll('div', class_= 'team-plate')
    # # odds = soup.findAll('td', class_= 'team-odds')
    # odds = soup.get_text()
    # print(odds.split())
    nfl_teams_array = []
    chrome_options = Options()
    chrome_options.add_argument('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1')
    driver = webdriver.Chrome()
    driver.get(url)
    # time.sleep(2)
    bet_content = driver.find_element(By.CLASS_NAME, "odds-table")
    bet_content = driver.find_elements(By.CSS_SELECTOR, "img")
    print("Raw Bet Content:")
    print(bet_content)
