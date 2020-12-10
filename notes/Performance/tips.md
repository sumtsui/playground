#### Avoid forced synchronous layouts

https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts



#### Use `requestAnimationFrame` for visual changes

https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution



JavaScript runs on the browser’s main thread, right alongside style calculations, layout, and, in many cases, paint. If your JavaScript runs for a long time, it will block these other tasks, potentially causing frames to be missed.



