import sys 

from time import sleep
import psycopg2
import psycopg2.extras
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from sqlalchemy import create_engine

from db.base_class import Base

# need to import all the models here
from models import __init__

DB_HOST = "localhost"
DB_NAME = "cts_database"
DB_USER = "postgres"
DB_PASS = "Ayban.98"
DB_PORT = 5432

engine = create_engine("postgresql://postgres:Ayban.98@localhost:5432/cts_database", echo=True)
# default operations and data name
operation = ""
data_name = ""

# check the number of arguments 
if len(sys.argv) == 3:
    operation = sys.argv[1]
    data_name = sys.argv[2]


try:
    if operation == "drop" and data_name == DB_NAME:
        
        print("Running ", operation," ",data_name)
        conn = psycopg2.connect(user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT)
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT) # for creating a database    
            
        try:
            sql = f"""drop database IF EXISTS {DB_NAME};"""
            print("-Deleting Database ", DB_NAME )
            sleep(2)

            curr = conn.cursor() #  cursor
            curr.execute(sql)
            conn.commit()
            print("Database Successfully Dropped")
        except Exception as e:
             print('\n',e)
             print("**Error deleting database**")
        finally:
            try:
                curr.close()
                conn.close()
            except:
                pass

        print("")


    elif len(sys.argv) == 1:
        print("Creating Database")
        conn = psycopg2.connect(user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT)
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT) # for creating a database    
            
        try:
            sql = f"""CREATE DATABASE {DB_NAME};"""
            print("-Creating Database ",DB_NAME )
            sleep(2)

            curr = conn.cursor() #  cursor
            curr.execute(sql)
            conn.commit()
            print("Database Created")
            curr.close()
            conn.close()
        except Exception as e:
            print('\n',e)
            print("**Error Creating database**\n")
            operation="drop"
            try:
                curr.close()
                conn.close()
            except:
                pass


        sleep(1)
        print("-Adding All Tables to database")
        sleep(1)
        try:
            Base.metadata.create_all(engine)
        except Exception as e:
            print('\n',e)
            print("**Error Updating Models**")

        print("")
    else:
        print("\n-Incorrect arguments on command line")
 

    print("")
except Exception as e:
    print(e)
    print("Exiting\n")
    try:
        conn.close()
    except:
        pass
    exit()