import requests
import urllib3
from bs4 import BeautifulSoup
from espn_bet_scraper import scrape_espn_bet
from human_readable import write_pretty, read_data
from scrape_live_mlb_betting_pros import scrape_betting_pros_mlb_live

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

        # Enrich categories information
        # categorized_resources = read_categories_csv(CAVAZOS_RESOURCES_CSV)
        # updated_resources = replace_categories(categorized_resources, all_data)

        # resources = fix_slash_in_resources(updated_resources)

        # Send data to firebase or file
        # if target == 'firebase':
        #     for card in all_data:
        #         firestore_client: google.cloud.firestore.Client = firestore.client()
                # write to the staging database
                # resource = fix_slash_in_resource(resource)
        #        firestore_client.collection("bases").document("cavazos").collection("directory").document(card['title']).set(card)
        if target == 'file':
            # write all_data to a file
            with open('mlb_apr_8.txt', mode='w') as f:
                f.write(str(all_data))

        return 'Success!'
    else:
        return f'Failed to retrieve the web page. Status code: {response.status_code}\n'


if __name__ == '__main__':
    # scrape_mlb()
    # scrape_espn_bet()
    scrape_betting_pros_mlb_live()
    # schools_data = read_data('mlb_apr_8.txt')
    # write_pretty('mlb_apr_8_pretty.txt', schools_data)