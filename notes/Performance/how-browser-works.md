https://developers.google.com/web/updates/2018/09/inside-browser-part1

### Modern web browser architecture 



#### CPU

First is the **C**entral **P**rocessing **U**nit - or **CPU**. The CPU can be considered your computer’s brain. A CPU core, pictured here as an office worker, can handle many different tasks one by one as they come in. It can handle everything from math to art while knowing how to reply to a customer call. In the past most CPUs were a single chip. A core is like another CPU living in the same chip. In modern hardware, you often get more than one core, giving more computing power to your phones and laptops.

#### GPU

**G**raphics **P**rocessing **U**nit - or **GPU** is another part of the computer. Unlike CPU, GPU is good at handling simple tasks but across multiple cores at the same time. As the name suggests, it was first developed to handle graphics. This is why in the context of graphics "using GPU" or "GPU-backed" is associated with fast rendering and smooth interaction. In recent years, with GPU-accelerated computing, more and more computation is becoming possible on GPU alone.



#### Three layers of computer architecture

![Hardware, OS, Application](https://developers.google.com/web/updates/images/inside-browser/part1/hw-os-app.png)



#### Process and thread

A process is an application when it is running. When you start an application, a process is created. The program might create thread(s) to help it do work, but that's optional. The Operating System gives the process a "slab" of memory to work with and all application state is kept in that private memory space. When you close the application, the process also goes away and the Operating System frees up the memory.

A process can ask the Operating System to spin up another process to run different tasks. When this happens, different parts of the memory are allocated for the new process. If two processes need to talk, they can do so by using **I**nter **P**rocess **C**ommunication (**IPC**). Many applications are designed to work this way so that if a worker process get unresponsive, it can be restarted without stopping other processes which are running different parts of the application.



#### Browser architecture

So how is a web browser built using processes and threads? Well, it could be one process with many different threads or many different processes with a few threads communicating over IPC.

The important thing to note here is that these different architectures are implementation details. There is no standard specification on how one might build a web browser. One browser’s approach may be completely different from another.

For the sake of this blog series, we are going to use Chrome’s recent architecture:

At the top is the browser process coordinating with other processes that take care of different parts of the application. For the renderer process, multiple processes are created and assigned to each tab. Until very recently, Chrome gave each tab a process when it could; now it tries to give each site its own process, including iframes (see [Site Isolation](https://developers.google.com/web/updates/2018/09/inside-browser-part1#site-isolation)).



| Process and What it controls |                                                              |
| :--------------------------- | ------------------------------------------------------------ |
| Browser                      | Controls "chrome" part of the application including address bar, bookmarks, back and forward buttons. Also handles the invisible, privileged parts of a web browser such as network requests and file access. |
| Renderer                     | Controls anything inside of the tab where a website is displayed. |
| Plugin                       | Controls any plugins used by the website, for example, flash. |
| GPU                          | Handles GPU tasks in isolation from other processes. It is separated into different process because GPUs handles requests from multiple apps and draw them in the same surface. |



#### The benefit of multi-process architecture in Chrome

Earlier, I mentioned Chrome uses multiple renderer process. In the most simple case, you can imagine each tab has its own renderer process. Let’s say you have 3 tabs open and each tab is run by an independent renderer process. If one tab becomes unresponsive, then you can close the unresponsive tab and move on while keeping other tabs alive. If all tabs are running on one process, when one tab becomes unresponsive, all the tabs are unresponsive. That’s sad.

Another benefit of separating the browser's work into multiple processes is security and sandboxing. Since operating systems provide a way to restrict processes’ privileges, the browser can sandbox certain processes from certain features. **For example, the Chrome browser restricts arbitrary file access for processes that handle arbitrary user input like the renderer process.**🤔

Because processes have their own private memory space, they often contain copies of common infrastructure (like V8 which is a Chrome's JavaScript engine). This means more memory usage as they can't be shared the way they would be if they were threads inside the same process. In order to save memory, Chrome puts a limit on how many processes it can spin up. The limit varies depending on how much memory and CPU power your device has, but when Chrome hits the limit, it starts to run multiple tabs from the same site in one process.

The same approach is applied to the browser process. Chrome is undergoing architecture changes to run each part of the browser program as a service allowing to easily split into different processes or aggregate into one.

#### Saving more memory - Servicification in Chrome

General idea is that when Chrome is running on powerful hardware, it may split each service into different processes giving more stability, but if it is on a resource-constraint device, Chrome consolidates services into one process saving memory footprint. Similar approach of consolidating processes for less memory usage have been used on platform like Android before this change.

<!--Service vs Process-->

#### Per-frame renderer processes - Site Isolation

[Site Isolation](https://developers.google.com/web/updates/2018/07/site-isolation) is a recently introduced feature in Chrome that runs a separate renderer process for each cross-site iframe. We’ve been talking about one renderer process per tab model which allowed cross-site iframes to run in a single renderer process with sharing memory space between different sites. Running a.com and b.com in the same renderer process might seem okay. The [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) is the core security model of the web; it makes sure one site cannot access data from other sites without consent. Bypassing this policy is a primary goal of security attacks. Process isolation is the most effective way to separate sites. With [Meltdown and Spectre](https://developers.google.com/web/updates/2018/02/meltdown-spectre), it became even more apparent that we need to separate sites using processes. With Site Isolation enabled on desktop by default since Chrome 67, each cross-site iframe in a tab gets a separate renderer process.



### What happens in navigation

...



### Inner workings of a Renderer Process

The renderer process is responsible for everything that happens inside of a tab. In a renderer process, the main thread handles most of the code you send to the user. Sometimes parts of your JavaScript is handled by worker threads if you use a web worker or a service worker. Compositor and raster threads are also run inside of a renderer processes to render a page efficiently and smoothly.

The renderer process's core job is to turn HTML, CSS, and JavaScript into a web page that the user can interact with.



#### Parsing

- Construction of a DOM



https://blog.logrocket.com/eliminate-content-repaints-with-the-new-layers-panel-in-chrome-e2c306d4d752/?gi=cd6271834cea



