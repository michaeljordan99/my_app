/* AngularJS */
function UserCtrl($scope) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};
}

function UserRestCtrl($scope, $http) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};

	delete $http.defaults.headers.common['X-Requested-With'];

    $http({ method: 'GET', url: 'http://localhost:8080/hello/mark' }).
	  success(function (data, status, headers, config) {
	  	$scope.user = data;
	  }).
	  error(function (data, status, headers, config) {
	  	alert('error');
	  });
}

/* jQuery */

$(function () {

    $(window).scroll(function (eventData) {

        var pos = $(document).scrollTop();
        
        if(pos > 0)
        {
            $("header").addClass("bottom-header");
        }
        else{
            $("header").removeClass("bottom-header");
        }

        if(pos > 50)
        {
            $("#top").removeClass("hidden");
        }
        else{
            $("#top").addClass("hidden");
        }
    });

    $("#top").on("click", function(){
        $('html, body').animate({scrollTop:0}, 'fast');
    });

    var popover1Content = "<div id='popover1Content'>"
                        + "<h4>Account</h4>"
                        + "<div id='popoverInnerContent'>"
                        + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                        + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "
                        + "</div>"
                        + "<div id='popoverFooter'>"
                        + "<button onclick='hidePopover(&quot;popover1&quot;);'' class='btn btn-primary'>Close</button>"
                        + "</div>"
                        + "</div>";

    $('#popover1').popover({
       html: true,
       content: function(ele) { return popover1Content; }
    });
});

function hidePopover(control) {
    $("#" + control).popover('hide');
    return false;
}