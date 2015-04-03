import click
import subprocess
import pymongo

@click.command()
@click.option('--run/--no-run', default=None, help="run mongod with `--dbpath`")
@click.option('--info/--no-info', default=False, help="the names of the databases")
@click.option('--create', default=None, help="create a database, specify a name")
@click.option('--delete', default=None, help="delete a database, specify a name")
@click.option('--shutdown/--no-shutdown', default=None, help='shutdown the database server using `--dbpath`')
@click.option('--dbpath', default=None, help='specify the dbpath to run or remove')

def handle(run, info, create, delete, shutdown, dbpath):
    if run:
        dbrun(dbpath)

    client = pymongo.MongoClient('localhost', 27017)

    if create:
        dbcreate(client, create)

    if info:
        dbinfo(client)
        
    if delete:
        dbdelete(client, delete)

    if shutdown:
        dbshutdown(dbpath)
        
def dbrun(dbpath):
    command = ['mongod']
    if dbpath:
        command.append('--dbpath')
        command.append(dbpath)
    subprocess.Popen(command)

def dbcreate(client, dbname):
    db = client[dbname]
    collection = db['setup-collection']
    collection.insert({'setup-data' : True})
    
def dbinfo(client):
    click.echo('list of databases')
    for name in client.database_names():
        click.echo('database: {0}'.format(name))

def dbdelete(client, dbname):
    if click.confirm('Do you want to delete the {0} database?'.format(dbname)):
        client.drop_database(dbname)
    click.echo('deleted the {0} database'.format(dbname))

def dbsetup():
    #Add some test data to the database
    pass

def dbshutdown(dbpath):
    command = ['mongod']
    command.append('--shutdown')
    if dbpath:
        command.append('--dbpath')
        command.append(dbpath)
    subprocess.call(command)

if __name__ == "__main__":
    handle()
    

