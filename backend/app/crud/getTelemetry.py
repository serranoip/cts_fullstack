from app.schemas.telemetrySchema import TelemetryBase
from app.db.db_connection import connect_to_telemetryTable
import pandas as pd
import csv



def sat_telemetry():
    telemetryList = connect_to_telemetryTable()
    urls = []
    dataFrameOfLists  = []
    csvStrings = []
    newTelemetryList = []

    for entries in telemetryList:
        urls.append(entries.dict())
    urlList = [urlExtract['telemetryUrl'] for urlExtract in urls]

    for links in urlList:
        dataFrameOfLists.append(pd.read_csv(f'''{links}'''))
    
    for dfs in dataFrameOfLists:
        csvStrings.append(dfs.to_json(orient="records"))
    print(csvStrings[1])

    for entries in range(len(urls)):
        urls[entries]['telemetryDataRet'] = csvStrings[entries]
    
    for row in range(len(urls)):
        newTelemetryList.append(
            TelemetryBase(
                id = urls[row]['id'],
                dateReceived=urls[row]['dateReceived'],
                telemetryFilename=urls[row]['telemetryFilename'],
                telemetryUrl=urls[row]['telemetryUrl'],
                telemetryDataRet=urls[row]['telemetryDataRet']
            )
        )
    return newTelemetryList