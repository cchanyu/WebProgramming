##### Question: What's the difference between the Web and the Internet?
Internet - "highway"
global network of computer networks that rely on a standardized protocol (TCP/IP) to communicate. It provides a variety of information and methods of data communication(FTP, SSH, HTTP) and can be accessed in a number of different ways (cellular, satellite, dial up, wifi connections). 

ARPANET - created by Military during the cold war and it was early days of Internet, a way to communicate in case of nuclear disaster happens.

Network - nodes and networks share data between each other. 
Internet is large network of networks. It allows a lot of methods of telecommunications. 

Web - "cars"
World Wide Web(WWW) or Web is one specific method for transmitting and receiving data over the internet that was built in 1980s by Sir Tim Berners Lee as a solution for information sharing for scientists on the internet.

Web resources are made identifiable via Uniform Resource Locators (URLs) and transferred via the Hypertext Transfer Protocol(HTTP).

Web needs the Internet.

http://info.cern.ch/hypertext/WWW/TheProject.html
Hypertext - links to other sources
basically a dictionary

##### Question: How does the Web work?
1. Search a website url
Your computer connect to the web via your Internet Service Provider(ISP) and searches for a particular domain or web address like google.com or github.com

2. Domain name system
Your local network contacts a DNS server which returns the full IP address associated to that particular domain & your computer makes a request to connect to the remote web server.

3. Web server <> You
The remote web server sends back a response to your computer passes any resources stored at that domain.

DNS is the most important, You use DNS to find that IP address of that domain. 

-----
The Hypertext Transfer Protocol(HTTP) is the cycle of requests and response that flow between web clients and servers.

clients - Your personal PC
servers - Can be anything, but should be able to handle.

HTTP Requests - formatted data objects specifying particular methods the client is using to access server data.
HTTP Responses - are data objects sent from a server containing the data

HTTP Methods:
GET - Read data
POST - Insert data
PUT or PATCH - Update or insert data
DELETE - Delete data

HTTP Status Codes:
2xx - Success
3xx - Redirection
4xx - Client Error
5xx - Server Error

Client-Side - Refers to web application actions that take place on the end user's computer.
Front End Development - refers to programming affecting what the client sees.

Server-Side - Refers to web application actions that take place on the server computer.
Back End Development - refers to programming the client doesn't see. These are normally actions handled server-side. 

HTML/CSS:
HyperText Markup Language (HTML) - is the standard markup language for web pages
Cascading Style Sheets(CSS) - are rules that describe the style of an HTML documents

Web programming languages:
ex. Java, PHP, Python, Javascript

Front End & Back End Frameworks:
Front End - Angular, React, Vue.js
Back End - Node.js, Django