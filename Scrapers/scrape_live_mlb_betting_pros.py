import requests
import urllib3
from bs4 import BeautifulSoup
from espn_bet_scraper import scrape_espn_bet
from human_readable import write_pretty, read_data

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
    # print(response.content)
    soup = BeautifulSoup(response.content, 'html.parser')
    # print(soup.prettify())
    # Extract information
    all_data = []
    print("You're hitting me 1")
    # You can parameterize date here
    rawApi = requests.get("https://api.bettingpros.com/v3/events?sport=MLB&date=2024-06-21", headers={ 'X-Api-Key': "CHi8Hy5CEE4khd46XNYL23dCFX96oUdw6qOt1Dnh"})
    event_id_dict = {}
    date_api_response = rawApi.json()
    event_id_dict.update(date_api_response)
    events = event_id_dict["events"]
    event_id_string = ""
    for event in events:
        event_id = event["id"]
        event_id_string += str(event_id)
        event_id_string += ":"
        print("I am the event_id to pass", event_id_string)
    event_id_string = event_id_string[:-1]
    print(event_id_string)
    # scrape event_ids from rawApi to get rawOddsApi
    api = "https://api.bettingpros.com/v3/offers?sport=MLB&market_id=122&event_id={}&location=TX&limit=5&page=1".format(event_id_string)
    rawOddsApi = requests.get(api, headers = { "X-Api-Key": "CHi8Hy5CEE4khd46XNYL23dCFX96oUdw6qOt1Dnh"})
    # Using GET request directly to xhr resource on Betting Pros
    print(rawOddsApi.content)
    dict = {

    }
    response = rawOddsApi.json()
    dict.update(response)
    offers = dict["offers"]
    for offer in offers:
        # participants = offer["participants"]
        #     print(participant["id"])
        selections = offer["selections"]
        # for participant in participants:
        for selection in selections:
            team = selection["label"]
            print("Team name:", team)
            books = selection['books']
            for book in books:
                lines = book['lines']
                for line in lines:
                    print(line['link'])
                    print(line['cost'])

