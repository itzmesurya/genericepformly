(function() {
    'use strict';

    angular
        .module('directives')
        .directive('anotherAwesomeTemplateButton', anotherAwesomeTemplateButton);

    function anotherAwesomeTemplateButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: AATBController,
            template: '<button type="button" class="btn btn-danger">button</button>',
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function AATBController () {
        
    }
})();