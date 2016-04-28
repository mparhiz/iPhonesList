(function(angular) {
	'use strict'

	angular
		.module('iphoneApp', [])
		.constant('PHONE_LIST_URL','iphones.json')
		.service('getPhoneListService', getPhoneListService)
		.controller('AppController', AppController)
		.directive('iphoneList', iphoneList)
		.filter('searchFor', searchFor);

	function getPhoneListService($http, PHONE_LIST_URL){
		return {
			retriveData : function(){
				return $http.get(PHONE_LIST_URL)
					.then(function(respond){
						return respond.data;
					});
			}
		}
	}

	function AppController(getPhoneListService) {
		var vm = this;
		vm.searchStr = "";
		vm.filterByList = ['name', 'color', 'type', 'capacity'];
		vm.iphones = [];
		getPhoneListService.retriveData()
			.then(function(iphoneData){
				vm.iphones = iphoneData;
		});
	}

	function iphoneList(){
		return {
			restrict: 'E',
			templateUrl: 'iphonelist.html',
			replace: true,
			scope: {},
			bindToController: {
				iphones: '=',
				searchString: '=',
				filterByList: '='
			},
			controller: iphoneListController,
			controllerAs: 'iphoneListCtrl'
		};

		function iphoneListController(){
		}
	}

	function searchFor(){
		return function(items, searchStr, filterByList){
			if(!searchStr && !filterByList){
				return items;
			} else {
				var result = [];
				searchStr = searchStr.toLowerCase();
				result = items.filter(function(item){
					var bool = true;
					var first = true;
					filterByList.forEach(function(filterBy){
						if (filterBy in item) {
							if (first) {
								bool = (item[filterBy].toLowerCase().indexOf(searchStr) !== -1);
								first = !first;
							} else {
								bool = (item[filterBy].toLowerCase().indexOf(searchStr) !== -1) || bool;
							}
						}
					});
					return bool;
				});
				return result;					
			}
		};
	}
})(window.angular);
