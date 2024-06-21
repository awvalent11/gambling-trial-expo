import requests
import urllib3
from bs4 import BeautifulSoup
from espn_bet_scraper import scrape_espn_bet
from human_readable import write_pretty, read_data

def scrape_game_card(html_element):
    game_line_data = {}

    #scrape school data for each school 'card'
    #Extract the desired information if the elements exist

    game_line_data = html_element.find('div', class_='wrapper odds-container')

    return game_line_data
def scrape_betting_pros_mlb_live(target='file',
               url='https://www.bettingpros.com/mlb/odds/moneyline/',
               requests=requests,
               BeautifulSoup=BeautifulSoup,
               open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request to Bettings Pros...')
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
    print(response.content)
    soup = BeautifulSoup(response.content, 'html.parser')
    # print(soup.prettify())
    # Extract information
    all_data = []
    print("You're hitting me 1")
    # rawApi = requests.get("https://api.bettingpros.com/v3/events?sport=MLB&date=2024-06-21", headers={ 'X-Api-Key': "CHi8Hy5CEE4khd46XNYL23dCFX96oUdw6qOt1Dnh"})
    rawOddsApi = requests.get("https://api.bettingpros.com/v3/offers?sport=MLB&market_id=122&event_id=92956:92835:94376:94885:93323:93168:94038:94167:94595:94177:93877:93008:94136:94906&location=TX&limit=5&page=1", headers = { "X-Api-Key": "CHi8Hy5CEE4khd46XNYL23dCFX96oUdw6qOt1Dnh"})
    # Using GET request directly to xhr resource on Betting Pros
    # print(rawOddsApi.content)
    dict = {

    }
    response = rawOddsApi.json()
    dict.update(response)
    print(dict["offers"])
