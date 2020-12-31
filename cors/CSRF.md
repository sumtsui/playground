https://en.wikipedia.org/wiki/Cross-site_request_forgery

### Cross-site request forgery

In a CSRF attack, the attacker's goal is to cause an innocent victim to unknowingly submit a maliciously crafted web request to a website that the victim has privileged access to. This web request can be crafted to include URL parameters, cookies and other data that appear normal to the web server processing the request. At risk are web applications that perform actions based on input from trusted and authenticated users without requiring the user to authorize the specific action. A user who is authenticated by a cookie saved in the user's web browser could unknowingly send an HTTP request to a site that trusts the user and thereby causes an unwanted action.

A general property of web browsers is that they will automatically and invisibly include any cookies used by a given domain in any web request sent to that domain. This property is exploited by CSRF attacks in that any web request made by a browser will automatically include any cookies (including session cookies and others) created when a victim logs into a website. In the event that a user is tricked into inadvertently submitting a request through their browser these automatically included cookies will cause the forged request to appear real to the web server and it will perform any appropriately requested actions including returning data, manipulating session state, or making changes to the victim's account.

In order for a CSRF attack to work, an attacker must identify a reproducible web request that executes a specific action such as changing an account password on the target page. Once such a request is identified, a link can be created that generates this malicious request and that link can be embedded on a page within the attacker's control.[1][3] This link may be placed in such a way that it is not even necessary for the victim to click the link. For example, it may be embedded within an html image tag on an email sent to the victim which will automatically be loaded when the victim opens their email. Once the victim has clicked the link, their browser will automatically include any cookies used by that website and submit the request to the web server. The web server will not be able to identify the forgery because the request was made by a user that was logged in, and submitted all the requisite cookies.

https://www.hacksplaining.com/prevention/csrf

https://stackoverflow.com/questions/21058183/whats-to-stop-malicious-code-from-spoofing-the-origin-header-to-exploit-cors

https://github.com/expressjs/csurf
