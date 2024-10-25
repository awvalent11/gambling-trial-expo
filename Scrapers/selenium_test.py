import time
from selenium import webdriver



driver = webdriver.Chrome()
driver.get('https://stackoverflow.com/questions/38081021/using-selenium-on-mac-chrome');

time.sleep(15) # Let the user actually see something!

search_box = driver.find_element_by_name('q')

search_box.send_keys('ChromeDriver')

search_box.submit()

time.sleep(5) # Let the user actually see something!

driver.quit()