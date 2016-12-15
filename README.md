# angular-librosjs
Angular Wraper for librosjs this is intended as a proof of concept for using angular/ionic with ros.

## Setup

1. Install npm

`sudo apt-get install npm`

2. Install rosbridge
`sudo apt-get install ros-kinetic-rosbridge-server`

2. run npm install in this directory to get dependecies

`npm install`

## Run

TODO: setup some fancy npm way of doing this

1. run `roscore`
2. run rosbridge
`roslaunch rosbridge_server rosbridge_websocket.launch`
3. Open the index.html file in your browser