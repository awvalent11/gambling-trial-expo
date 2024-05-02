import string

import requests
import urllib3
import re
from bs4 import BeautifulSoup

def scrape_game_card(html_element):
    team_names = html_element.findAll('img', class_='Image Logo Logo__sm')
    for img in team_names:
        print(img.get('title', 'No title attribute'))

    odds_table = html_element.findAll('td')
    print("You're hitting the odds table")
    print(odds_table)
    for odds in odds_table:
        lt = re.findall('-?\d+\.?\d*', string)
        print(lt)


def scrape_espn_bet(target='file',
               url='https://www.espn.com/mlb/lines',
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
    print(response.status_code)

    soup = BeautifulSoup(response.content, 'html.parser')
    # print(soup.prettify())
    # Extract information
    all_data = []
    print("You're hitting me 1")

    for card in soup.find_all('div', class_='margin-date'):
        print("You're hitting me 2")
        scrape_game_card(card)
        # data = card
        # print(data)
        # if len(data) != 0:
        # all_data.append(data)

        # Enrich categories information
        # categorized_resources = read_categories_csv(CAVAZOS_RESOURCES_CSV)
        # updated_resources = replace_categories(categorized_resources, all_data)

        # resources = fix_slash_in_resources(updated_resources)

        if target == 'file':
            # write all_data to a file
            with open('mlb_apr_8.txt', mode='w') as f:
                f.write(str(all_data))

        return 'Success!'

    for card in soup.find_all('table', class_='Table Table--align-right'):
        print("You're hitting me Table align right")
        scrape_game_card(card)
        # data = card
        # print(data)
        # if len(data) != 0:
        # all_data.append(data)

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
