$(document).ready(function(){
        notifyMe = function(title,body) {
          if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
          }
          else if (Notification.permission === "granted") {
                var options = {
                        body: body,
                        icon: "icon.jpg",
                        dir : "ltr"
                     };
                  var notification = new Notification(title,options);
          }
          else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
              if (!('permission' in Notification)) {
                Notification.permission = permission;
              }
            
              if (permission === "granted") {
                var options = {
                      body: body,
                      icon: "icon.jpg",
                      dir : "ltr"
                  };
                var notification = new Notification(title,options);
              }
            });
          }
        };

});