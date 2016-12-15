/**
 * Created by hjed on 15/12/16.
 */

angular.module("angular-roslib").directive("arsLogComponent", function (angularRosLib) {
    function link(scope, element, attrs) {
        console.log("blah");
        angularRosLib.subscribe("/rosout", "rosgraph_msgs/Log").then(function (done) {
        }, function (error) {
        }, function (update) {
            console.log(update);
            element.append("<p>" + update.msg + "</p>");
        });
        
        element.on('$destroy', function () {
           //TODO: delete subscription here 
        });
    }
    return {
        link: link
    };
});
