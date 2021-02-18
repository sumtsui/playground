## Google Chrome Performance Tab

https://developers.google.com/web/tools/chrome-devtools/evaluate-performance

### Analyze frames per second

The main metric for measuring the performance of any animation is frames per second (FPS). Users are happy when animations run at 60 FPS.

1. Look at the **FPS** chart. Whenever you see a red bar above **FPS**, it means that the framerate dropped so low that it's probably harming the user experience. In general, the higher the green bar, the higher the FPS.
![2020-09-23 at 2.48 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/371881B6-6980-49F5-967F-9EC0FB2B2913-1971-0004270EA3A40DAB/2020-09-23 at 2.48 PM.png)

   

2. Below the **FPS** chart you see the **CPU** chart. The colors in the **CPU** chart correspond to the colors in the **Summary** tab, at the bottom of the Performance panel. The fact that the **CPU** chart is full of color means that the CPU was maxed out during the recording. Whenever you see the CPU maxed out for long periods, it's a cue to find ways to do less work.
![2020-09-23 at 2.51 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/A4E53F96-835F-436F-A208-498FACCA94BA-1971-000427325F8D4474/2020-09-23 at 2.51 PM.png)
![2020-09-23 at 2.51 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/7BE59EE5-5804-446B-85FD-A11A9B09AB97-1971-000427353F353F85/2020-09-23 at 2.51 PM.png)

3. In the **Frames** section, hover your mouse over one of the green squares. DevTools shows you the FPS for that particular frame. Each frame is probably well below the target of 60 FPS.
![2020-09-23 at 2.58 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/F842CF5F-96BC-4705-A384-551914F88A2A-1971-0004278D61F6FCF6/2020-09-23 at 2.58 PM.png)



### Find the bottleneck

1. Note the summary tab. When no events are selected, this tab shows you a breakdown of activity. The page spent most of its time rendering. Since **performance is the art of doing less work**, your goal is to reduce the amount of time spent doing rendering work.
    ![2020-09-23 at 3.29 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/9C5D46E9-6935-48D4-A06F-288EDE851E34-1971-00042928D7BD1A7B/2020-09-23 at 3.29 PM.png)

2. Expand the **Main** section. DevTools shows you a flame chart of activity on the main thread, over time. The x-axis represents the recording, over time. Each bar represents an event. A wider bar means that event took longer. The y-axis represents the call stack. When you see events stacked on top of each other, it means the upper events caused the lower events.
    ![2020-09-23 at 3.33 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/1CABB2D2-421F-407C-A7A6-63291C6A647B-1971-000429667110E18A/2020-09-23 at 3.33 PM.png)

3. Note the red triangle in the top-right of the **Animation Frame Fired** event. Whenever you see a red triangle, it's a warning that there may be an issue related to this event.
    ![2020-09-23 at 4.29 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/44CAD021-D5BE-4B2A-8AAD-869D3D8B454D-1971-00042C75325BCDB9/2020-09-23 at 4.29 PM.png)

4. Click the **Animation Frame Fired** event. The **Summary** tab now shows you information about that event. Note the **reveal** link. Clicking that causes DevTools to highlight the event that initiated the **Animation Frame Fired** event. Also note the **app.js:94** link. Clicking that jumps you to the relevant line in the source code.
    ![2020-09-23 at 4.32 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/56BF9A82-F9F5-49CD-A600-47F9C78B6FB5-1971-00042CA38D72A0AD/2020-09-23 at 4.32 PM.png)

5. Under the **app.update** event, there's a bunch of purple events. If they were wider, it looks as though each one might have a red triangle on it. Click one of the purple **Layout** events now. DevTools provides more information about the event in the **Summary** tab. Indeed, there's a warning about forced reflows (another word for layout).
    ![2020-09-23 at 4.35 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/8E1EAFD4-86A7-4A2A-A461-C19D78668226-1971-00042CC40F368C8E/2020-09-23 at 4.35 PM.png)

6. In the **Summary** tab, click the **app.js:70** link under **Layout Forced**. DevTools takes you to the line of code that forced the layout.
    ![2020-09-23 at 4.39 PM](/var/folders/g1/9zjbxn3j3x7_tbtcpcz33nfm0000gp/T/se.razola.Glui2/4815C269-5E88-4460-BF1C-5D2C98A60E53-1971-00042CFC790FEC54/2020-09-23 at 4.39 PM.png)
    The problem with this code is that, in each animation frame, it changes the style for each square, and then queries the position of each square on the page. Because the styles changed, the browser doesn't know if each square's position changed, so it has to re-layout the square in order to compute its position. See [Avoid forced synchronous layouts](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts) to learn more.





