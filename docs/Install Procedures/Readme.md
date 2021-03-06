# Install Procedures

There are three containers to deploy on a Docker container system: the Nodejs 
container, the Mongo Database container, and the Zabbix Continuous Monitoring 
container. This installation procedure assumes that you already have Docker 
installed on your system and that you are on a unix system (for Windows machines,
you will most likely just need to remove 'sudo' from the commands).


## Deployment of Mongo Database container:

The MongoDB container is used by the web application to cache the queries,
results, and other cached items. Follow these steps to deploy the Mongo
container:


1.  First check to see if the mongodb container has already been previously deployed by running:
	
        sudo docker ps -a
	
    If there is a container named 'mongoDB', you can remove it by running:

        sudo docker rm -f mongoDB

    Otherwise, you can move on to the next step.

	
2.  You can now deploy the container by running the following command:

        sudo docker run -d --name mongoDB mongo


## Deployment of Nodejs container:
	
The Nodejs container runs the MedExplorer web application itself. To deploy
this container, follow these steps:


1.  Run the following command to pull the github repository:
    
        git clone http://www.github.com/NorthropGrumman/MedExplorer.git

    The following steps will assume that the root directory for this git 
    repository is /path/to/MedExplorer

2.  Set up the node modules for the server:

        cd /path/to/MedExplorer/src/server
        npm install

3.  Build the front-end code:

        cd /path/to/MedExplorer/src/client
        npm install
        bower install
        sudo grunt --force
        
4.  Run the following commands to build and run the nodejs container:

        cd /path/to/MedExplorer/src/jenkins-base
        sudo docker build --rm -t jenkins-base:latest .
        cd /path/to/MedExplorer/src/server/
        sudo docker build --rm -t <name>/nodejs:centos6 .
        sudo docker run -d -p 80:80 -p 10050:10050 --link mongoDB:mdb --name nodejs <name>/nodejs:centos6
        
    
    Replace \<name\> with any name you would like, so long as they match in both commands.
    The first two commands build the docker base image. This will be used to build the nodejs
    image. In future builds, you can then just execute the last three lines to re-build 
    the nodejs container more quickly.
		
## Deployment of Zabbix Continuous Monitoring container:

This container runs continuous monitoring on our web application. To deploy
this container, follow these steps:

1.  Simply run the following command:

        docker run -d -p 10051:10051 -p 10052:10052 -p 9001:80 -p 2812:2812 --name zabbix berngp/docker-zabbix
			
    Zabbix should now be accessible from \<hostname\>:9001/zabbix
	
2.  Next we need to set up Zabbix to monitor our web application. Log into the 
    Zabbix site. The default username is admin and password is zabbix.
	
3.  At the top of the Zabbix site, go to Configuration -> Hosts -> click on 
    Zabbix Server -> Web scenarios.

4.  At the "Configuration of Web Monitoring" page, click the "Create Scenario" 
    button on the top right corner.

5.  Enter scenario name, "MedExplorer", and select application, "General". 
    Change update interval, if necessary.

6.  Click the "Steps" tab.

7.  Inside the steps box, click the "Add" link.

8.  Enter the necessary information for the URL to listen to and specify the 
    url to listen to (for the nodejs container configured above it should be
    http://localhost:80/). Click the "Add" button.

9. Add any other steps to monitor a URL.

10. Click update to save the scenario. (Note: the Zabbix server may be disabled by default. To check this, go back to   
    Configuration -> Hosts and look under "Status". If "disabled", check the box of the server and select "Enable
    selected" in the dropdown below.)

11. To view continuous monitoring graphs, click the "Monitoring" tab at the top left of the page, then click on the "Graphs"
    tab. If no data is displayed, be sure to select a graph inside the "GRAPHS" box.
