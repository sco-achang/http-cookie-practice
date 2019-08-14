# http-cookie-practice
This is just a practice application to refresh understanding of cookies and how they work.

# Creating Cookies
 1. Document.cookie (client side) 
 2. set-cookie header (server side)


# Cookies Properties
## Sent with each request
Cookies are automatically sent to the server with each request. This is why there should be a limit to the amount of cookies stored as having a bloated amount of cookies will slow down network requests between the user and and server.


## Per Domain
They are stored per domain think of them as cookie buckets, for instance you visit google.com you will get a specific cookie for google.com, any cookies created while in google.com will go to the google.com bucket and so on. there are exceptions but this the general rule.

by default if you create cookie, it will only be accessable within the domain, it will only be sent to the same domain. You can create a cookie with the domain property which will also include subdomains. example, domain=albert.com , includes home.husseinnasser.com, about.albert.com etc.. 


## Path specific cookies
cookies for a given path only. /r1 /r2 routes make only cookie for r1 and cookie for r2 client will only send cookies for that path. 
if you know you are going to use the cookies in certain paths why waste precious bandwidth sending it with every path? 


# Cookies Types
 1. Session cookie - no expiration/ max-age date AS once browser is CLOSED, they are "deleted". Modern browsers can keep them though!
 2. permanent cookie - 'max-age' is SET
 3. http-only cookie -  served by server ('document.cookie' is CLIENT-SIDE ONLY)
 4. secure cookie only acceptable with https
 5. Third party cookie - page references another page, gets its own cookies..
 6. Zombie Cookies -  recreted even after users delete them, e-tags from the server

# Cookie Security GOTCHAS 
1. Cookies can be stolen via XSS scripts.
2. cross site request forgery is where your 'active' online session can be 'hijacked' and be used to do malicious activities. Most common example is using a person's online 'banking session' and transfering money to the attacker.  