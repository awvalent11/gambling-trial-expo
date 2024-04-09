from pprint import pprint


def read_data(filename='data.txt'):
    with open(filename, mode='r') as f:
        data = eval(f.read())
    print(f'{len(data)} resources read')
    return data


def write_pretty(filename, data):
    with open(filename, mode='w') as f:
        # pprint(data)

        # pprint to file
        pprint(data, f)


def write_titles(filename, data):
    with open(filename, mode='w') as f:
        for d in data:
            # print(d['title'])
            f.write(d['title'] + '\n')


def write_filtered(filename, data):
    with open(filename, mode='w') as f:
        for d in data:
            line = d['title'] + '\n'
            # print(line, end='')
            f.write(line)


def write_csv(filename, data):
    import csv
    with open(filename, mode='w') as f:
        fieldnames = ['Title', 'Categories', 'Notice', 'Address']
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction='ignore')
        writer.writeheader()
        for d in data:
            d['Title'] = d['title']
            d['Address'] = d['address']['building'] + ' ' + d['address']['street_address']
            d['Categories'] = d['categories']
            d['Notice'] = d['notice']

            writer.writerow(d)


if __name__ == '__main__':
    data = read_data()
    write_pretty('pretty.txt', data)
    # write_titles('titles.txt', data)
    # write_filtered('filtered.txt', data)
    # write_csv('data.csv', data)
    # pprint(data)