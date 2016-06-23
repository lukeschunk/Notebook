One rasberry pi, one 

1. Get little plastic pins on green part to let go - 
2. Leave rasberry pi sitting on top = serial port plugged in with cable head down - let it wrap around a few circles, and then plug it into the usb 
3. Battery pack below rasberry pi - plug in USB to battery 
### Caveats 
- once the color on the roombot fades from red to green - everything is working this means the roombot is good to go

### COnnecting to WIFI
* They already know the MX guest WIFI
* They also know the PiFi network - which is on the router 

### Router -
* Plan A - plug in the ethernet cable - that makes it easy because when we go to roombots.mx.com - see if bots have connected - then they don't have to 
* Plan B - 
* Once you're at roombots.mx.com - you can see what the roombot address is and tell people at the meetup that's what it is 
* All it needs is power - but if they have an ethernet that's really nice, because then the rasberry pi can be on the public wifi 

* Admin, pifipifi
```
wifi: pifi 
password: pifipifi
```
192.1168.1.1

### Safety module
If the robot's cliff sensors go off ( or you pick it up )  it will go into safety mode. e
* Hit `safe` to clear the roombot 


1 binary translation and decoding - piece - sending bytes back and forth, and it's a translation layer - so you have to be able to detect the beginnings and endings of messages
2 recruit bot - piece of elixer that looks for a usb connection and will try to connect to a UR 

### turn it off
* Put it into safety module
* Press the power button 
