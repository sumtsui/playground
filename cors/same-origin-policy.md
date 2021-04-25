### Same-origin policy

In [computing](https://en.wikipedia.org/wiki/Computing), the **same-origin policy** (sometimes abbreviated as **SOP**) is an important concept in the web application [security model](https://en.wikipedia.org/wiki/Computer_security_model). Under the policy, a [web browser](https://en.wikipedia.org/wiki/Web_browser_engine) permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same *origin*. An origin is defined as a combination of [URI scheme](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier), [host name](https://en.wikipedia.org/wiki/Hostname), and [port number](https://en.wikipedia.org/wiki/Port_(computer_networking)). This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model).

This mechanism bears a particular significance for modern web applications that extensively depend on [HTTP cookies](https://en.wikipedia.org/wiki/HTTP_cookie)[[1\]](https://en.wikipedia.org/wiki/Same-origin_policy#cite_note-httpcookierfc-1) to maintain authenticated user sessions, as servers act based on the HTTP cookie information to reveal sensitive information or take state-changing actions. A strict separation between content provided by unrelated sites must be maintained on the client-side to prevent the loss of data confidentiality or integrity.

**It is very important to remember that the same-origin policy applies only to scripts.** This means that resources such as images, CSS, and dynamically-loaded scripts can be accessed across origins via the corresponding HTML tags[[2\]](https://en.wikipedia.org/wiki/Same-origin_policy#cite_note-2) (with fonts being a notable exception[[3\]](https://en.wikipedia.org/wiki/Same-origin_policy#cite_note-3)). **Attacks take advantage of the fact that the same origin policy does not apply to HTML tags.**

https://en.wikipedia.org/wiki/Same-origin_policy



Two URLs have the *same origin* if the [protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol), [port](https://developer.mozilla.org/en-US/docs/Glossary/port) (if specified), and [host](https://developer.mozilla.org/en-US/docs/Glossary/host) are the same for both. You may see this referenced as the "scheme/host/port tuple", or just "tuple". (A "tuple" is a set of items that together comprise a whole — a generic form for double/triple/quadruple/quintuple/etc.)



https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

### Cross-origin resource sharing

https://en.wikipedia.org/wiki/Cross-origin_resource_sharing



The following table gives examples of origin comparisons with the URL `http://store.company.com/dir/page.html`:

| URL                                               | Outcome     | Reason                                           |
| :------------------------------------------------ | :---------- | :----------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Same origin | Only the path differs                            |
| `http://store.company.com/dir/inner/another.html` | Same origin | Only the path differs                            |
| `https://store.company.com/page.html`             | Failure     | Different protocol                               |
| `http://store.company.com:81/dir/page.html`       | Failure     | Different port (`http://` is port 80 by default) |
| `http://news.company.com/dir/page.html`           | Failure     | Different host                                   |



https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#:~:text=The%20same%2Dorigin%20policy%20is,documents%2C%20reducing%20possible%20attack%20vectors.

## Cross-origin network access

The same-origin policy controls interactions between two different origins, such as when you use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or an [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element. These interactions are typically placed into three categories:

- Cross-origin *writes* are typically allowed. Examples are links, redirects, and form submissions. Some HTTP requests require [preflight](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests).
- Cross-origin *embedding* is typically allowed. (Examples are listed below.)
- Cross-origin *reads* are typically disallowed, but read access is often leaked by embedding. For example, you can read the dimensions of an embedded image, the actions of an embedded script, or the [availability of an embedded resource](https://bugzilla.mozilla.org/show_bug.cgi?id=629094).

Here are some examples of resources which may be embedded cross-origin:

- JavaScript with `<script src="…"></script>`. Error details for syntax errors are only available for same-origin scripts.
- CSS applied with `<link rel="stylesheet" href="…">`. Due to the [relaxed syntax rules](https://scarybeastsecurity.blogspot.com/2009/12/generic-cross-browser-cross-domain.html) of CSS, cross-origin CSS requires a correct `Content-Type` header. Restrictions vary by browser: [Internet Explorer](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622939(v=vs.85)?redirectedfrom=MSDN), [Firefox](https://www.mozilla.org/en-US/security/advisories/mfsa2010-46/), [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=9877) , [Safari](https://support.apple.com/kb/HT4070) (scroll down to CVE-2010-0051) and [Opera](https://security.opera.com/cross-domain-data-theft-with-css-load-opera-security-advisories/).
- Images displayed by [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).
- Media played by [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
- External resources embedded with [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed).
- Fonts applied with [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face). Some browsers allow cross-origin fonts, others require same-origin.
- Anything embedded by [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe). Sites can use the [`X-Frame-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) header to prevent cross-origin framing.

###  

#### Why same-origin policy is so important?

https://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important

- Without SOP, one site can make request to a server under different domain freely, even with the cookie of the other site. For example, if I logged in Facebook, so the browser will have the cookie of Facebook. Another site can make a request to Facebook, with that cookie. Thus do whatever an authenticated user can do. 



CSP

https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP