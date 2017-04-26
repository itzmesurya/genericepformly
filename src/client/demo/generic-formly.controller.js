(function () {
    'use strict';

    angular
        .module('demo')
        .controller('GenericFormlyController', GenericFormlyController);

    GenericFormlyController.inject = ['$scope'];

    function GenericFormlyController($scope) {
        var gfc = this;

        gfc.formFields = [{
            type: 'ep-button',
            templateOptions: {
                label: 'Name',
                req: true
            },
            data: {
                somePropertyToTriggerTheManipulator: true,
                theme: 'ace'
            }
        }, {
            type: 'ep-button',
            templateOptions: {
                label: 'Phone',
                req: true
            },
            data: {
                somePropertyToTriggerTheManipulator: true,
                theme: 'ml'
            }
        }, {
            type: 'ep-button',
            templateOptions: {
                label: 'Phone',
                req: true
            },
            data: {
                somePropertyToTriggerTheManipulator: true,
                theme: 'custom'
            }
        }];
        activate();

        ////////////////

        function activate() {}
    }
})();