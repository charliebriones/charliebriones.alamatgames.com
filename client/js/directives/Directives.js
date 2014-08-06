/**
 * Created with JetBrains WebStorm.
 * User: Charlie
 * Date: 2/6/14
 * Time: 1:32 AM
 * To change this template use File | Settings | File Templates.
 */
charlieSiteApp.directive('a', function () {
    return {
        restrict:'E',
        link:function (scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function (e) {
                    e.preventDefault();
                    /*if (attrs.ngClick) {
                     scope.$eval(attrs.ngClick);
                     }*/
                });
            }
        }
    };
});

charlieSiteApp.directive('compileData', function ($compile) {
    return {
        scope:true,
        link:function (scope, element, attrs) {
            var elmnt;
            attrs.$observe('template', function (myTemplate) {
                if (angular.isDefined(myTemplate)) {
                    // compile the provided template against the current scope
                    elmnt = $compile(myTemplate)(scope);
                    //element.html(""); // dummy "clear"
                    element.append(elmnt);
                }
            });
        }
    };
});

