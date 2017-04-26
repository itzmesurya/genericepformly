(function () {
    'use strict';

    angular
        .module('directives')
        .directive('awesomeTemplateButton', awesomeTemplateButton);

    function awesomeTemplateButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerFunc,
            templateUrl: 'directives/awesome-template-button.html',
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    /* @ngInject */
    function ControllerFunc() {

    }
})();