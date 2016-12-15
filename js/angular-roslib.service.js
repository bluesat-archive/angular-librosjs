/**
 * Created by hjed on 15/12/16.
 */

angular.
module('angular-roslib').
service('angularRosLib', function ( $timeout, $q) {
    var ros;
    var ready = false;
    function init_ros() {
        ros = new ROSLIB.Ros({
            url: ROS_CORE
        });
        // we need to know if we are ready
        ros.on('connection', function() {
            ready = true;
            console.log("connected");
        });

        //try to restablish the connection if we loose it
        ros.on('close', function () {
            console.log("lost connection");
            $timeout(function () {
                init_ros();
            }, 100);
        })

        //or if we error
        ros.on('error', function (error) {
            console.log("failed to connect: ", error);
            $timeout(function () {
                init_ros();
            }, 100);
        })

    }
    init_ros();

    // TODO: make this persitent
    this.publish = function (topic, messageType, message) {
        var topic = new ROSLIB.Topic({
            ros : ros,
            name : topic,
            messageType : messageType
        });
        topic.publish(message)
    };

    this.subscribe = function (topic, messageType) {
        var deferred = $q.defer();

        var topic = new ROSLIB.Topic({
            ros : ros,
            name : topic,
            messageType : messageType
        });
        
        topic.subscribe(function (message) {
            deferred.notify(message);
        });

        return deferred.promise;
    }



});
