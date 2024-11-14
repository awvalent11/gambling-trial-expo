import requests
import urllib3
from bs4 import BeautifulSoup
import time
from selenium import webdriver

from Scrapers.nfl_scrapers import scrape_caesers_live_nfl
from espn_bet_scraper import scrape_espn_bet
from human_readable import write_pretty, read_data
from scrape_live_mlb_betting_pros import scrape_betting_pros_mlb_live
from nfl_scrapers import scrape_espn_live_nfl, scrape_fanduel_live_nfl, scrape_draftkings_live_nfl

def scrape_game_card(html_element):
    game_line_data = {}

    #scrape school data for each school 'card'
    #Extract the desired information if the elements exist

    game_line_data = html_element.find('div', class_='sportsbook-outcome-cell__line')

    return game_line_data
def scrape_mlb(target='file',
                   url='https://sportsbook.draftkings.com/leagues/baseball/mlb',
                   requests=requests,
                   BeautifulSoup=BeautifulSoup,
                   scrape_game_card=scrape_game_card,
                   open=open):
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    print('making request...')
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
        # print(soup.prettify())
        # Extract information
    all_data = []
    print("You're hitting me 1")

    for card in soup.find_all('span', class_='sportsbook-outcome-cell__line'):
        print("You're hitting me 2")
        data = card
        print(data)
            # if len(data) != 0:
        all_data.append(data)




if __name__ == '__main__':
    # scrape_mlb()
    # scrape_espn_bet()
    #scrape_betting_pros_mlb_live()
    # schools_data = read_data('mlb_apr_8.txt')
    # write_pretty('mlb_apr_8_pretty.txt', schools_data)
    # scrape_draftkings_live_nfl()
    # scrape_espn_live_nfl()
    scrape_fanduel_live_nfl()
    # scrape_caesers_live_nfl()