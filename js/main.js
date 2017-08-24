window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
        	var loc = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
        	if(loc == "index.html"){
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
        		
        	}else{
        		window.history.go(-1);
        	}
        }
    });

  var backbutton = document.querySelector('.back');
    
        backbutton.addEventListener("click", function() {
        	window.history.go(-1);
     
        });
        
    

};