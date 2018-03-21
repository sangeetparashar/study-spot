from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import csv
from datetime import datetime

def to_military(m):
    in_time = datetime.strptime(m, "%I:%M %p")
    out_time = datetime.strftime(in_time, "%H:%M")
    return out_time

url = "http://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm"

chromedriver = "./chromedriver"

driver = webdriver.Chrome(chromedriver)
driver.get(url)

# courseCodes = ["ACTURSCI", "AMERICAN", "ANATCELL", "ANTHRO", "APPLMATH", "ARABIC", "ARTHUM", "ASTRONOM", "BIBLSTUD", "BIOCHEM", "BIOLOGY", "BIOSTATS", "MTP-RADO", "MTP-TVSN", "MTP-FLDP", "BUSINESS", "CALCULUS", "CGS", "CBE", "CHEMBIO", "CHEM", "CSI", "CHINESE", "CHURCH", "CHURLAW", "CHURMUSI", "CEE", "CLASSICS", "CMBPROG", "COMMSCI", "COMPLIT", "COMPSCI", "DANCE", "DIGICOMM", "MTP-DIGL", "DIGIHUM", "DOL", "DISABST", "EARTHSCI", "ECONOMIC", "EELC", "ECE", "ENGSCI", "ENGLISH", "ENVIRSCI", "EPID", "EPIDEMIO", "FAMLYSTU", "FLDEDUC", "MTP-FILM", "FILM", "FINMOD", "FRSTNATN", "FOODNUTR", "FRENCH", "GEOGRAPH", "GEOLOGY", "GEOPHYS", "GERMAN", "GREEK", "GPE", "HEALTSCI", "HEBREW", "HINDI", "HISTTHEO", "HISTORY", "HISTSCI", "HOMILET", "HUMANECO", "INTEGSCI", "ICC", "INTERDIS", "INTREL", "ITALIAN", "JAPANESE", "JEWISH", "MTP-BRJR", "KINESIOL", "LATIN", "LAW", "LINGUIST", "LITURST", "LITURGIC", "MOS", "MTP-MKTG", "MATH", "MME", "MSE", "MIT", "MEDBIO", "MEDHINFO", "MEDSCIEN", "MEDIEVAL", "MICROIMM", "MORALTHE", "MTP-MMED", "MUSIC", "NEURO", "NURSING", "PASTTHEO", "PATHOL", "PERSIAN", "PHARM", "PHILST", "PHILOSOP", "PHYSICS", "PHYSIOL", "PHYSPHRM", "POLISCI", "PORTUGSE", "PSYCHOL", "REHABSCI", "RELEDUC", "RELSTUD", "SACRTHEO", "SCHOLARS", "SCIENCE", "SOCLJUST", "SOCWORK", "SOCIOLOG", "SE", "SPANISH", "SPEECH", "SPIRTHEO", "STATS", "SUPPAST", "SYSTHEO", "THANAT", "THEATRE", "THEOETH", "THEOLST", "THESIS", "TJ", "VAHISTRY", "VASTUDIO", "WTC", "WOMENST", "WORLDLIT", "WRITING"] 
courseCodes = ["ACTURSCI", "AMERICAN"]
data = []
newArray = []
l = 0

# Where H is Thursday.
days = ["M","T","W","H","F"]

f = csv.writer(open("output.csv", "w"))
data.append(["Course Code Start End Location Days"])

for j, code in enumerate(courseCodes):

    # data.append(code)
    # Take a break after every scrape otherwise we run into a captcha.
    time.sleep(10)
    print(code)
    select = Select(driver.find_element_by_id('inputSubject'))
    select.select_by_value(code)

    driver.find_element_by_css_selector('.btn.btn-info.span2').click()

    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    json = []
    table = soup.find(class_='table table-striped')
    title = soup.find_all('h4')
    print('------------------------------------------------------------')
    json = soup.findChildren('tr')
    for element in json:
        soup_string = str(element)

        if ('daysTable' in soup_string) :
            print(soup_string)
            print('------------------------------------------------------------')
        else:
            continue
           

    for t in title:
        captions = t.text.split()
        course = captions[0]
        code = captions[1]
        print(course + code)
        


        # for i,col in enumerate(soup.find_all('td')):
        #     try:
        #         if i>3 and i<10:
        #             if col.contents[0] and col.contents[0].strip():
        #                 #  print(col.contents[0])
        #                  print('________________')
        #                  print(col.contents[1])
        #                  print('________________')
        #                  print(col.contents[10])
        #                  print('_________________')
        #             elif i>8 and i<12:
        #                 try:
        #                     print('new')
        #                     print(col.contents[0])
        #                     newArray.append(col.contents[0])
        #             #         print(newArray)
        #                     l = l+1
        #                 except:
        #                     pass
        #             if l==3:
        #                 print(newArray)
        #     except:
        #         break
        