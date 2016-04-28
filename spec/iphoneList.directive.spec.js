(function() {
	'use strict';

	describe('iphoneList directive', function() {
		var vm,
			items,
			searchStr,
			filterBy,
			$rootScope,
			$scope,
			$compile,
			element,
			el;

		beforeEach(module('iphonelist', 'iphoneApp'));
		beforeEach(inject(function(_$rootScope_, _$compile_) {
			$rootScope = _$rootScope_;
			$compile = _$compile_;
			items = ['[',
				'{',
					'"id": 1,',
					'"name": "iPhone SE",',
					'"color": "Silver",',
					'"type": "Wifi",',
					'"capacity": "16GB",',
					'"price": 629',
				'},',
				'{',
					'"id": 3,',
					'"name": "iPhone SE",',
					'"color": "Gold",',
					'"type": "Wifi",',
					'"capacity": "16GB",',
					'"price": 629',
				'},',
				'{',
					'"id": 5,',
					'"name": "iPhone SE",',
					'"color": "Space Grey",',
					'"type": "Wifi",',
					'"capacity": "16GB",',
					'"price": 629',
				'},',
				'{',
					'"id": 8,',
					'"name": "iPhone SE",',
					'"color": "Rose Gold",',
					'"type": "Wifi",',
					'"capacity": "64GB",',
					'"price": 829',
				'}',
			']'].join('');
			
			searchStr = "phone";
			filterBy = '["name", "color", "type", "capacity"]';

			$scope = $rootScope.$new();
			el = angular.element('<iphone-list iphones=\''+items+'\' search-string=\'"'+searchStr+'"\' filter-by-list=\''+filterBy+'\'></iphone-list>');

			element = $compile(el)($scope);
			$scope.$digest();
			vm = element.isolateScope().iphoneListCtrl;
		}));

		it('should be compiled', function() {
			expect(element.html()).not.toEqual(null);
		});

		it('should have isolate scope object with instanciate members', function() {
			expect(vm).toEqual(jasmine.any(Object));
			expect(vm.iphones).toEqual(jasmine.any(Array));
			expect(vm.iphones.length).toBe(4);
			expect(vm.searchString).toEqual("phone");
			expect(vm.filterByList.length).toBe(4);
		});

		it('should render out the rows in table when searchString is changed', function() {
			vm.searchString = "si";
			$scope.$digest();
			expect(element.find('tbody').find('tr').length).toBe(1);
		});

		it('should render out the rows in table when filterByList is changed', function() {
			vm.searchString = "si";
			vm.filterByList = ["name"];
			$scope.$digest();
			expect(element.find('tbody').find('tr').length).toBe(0);
			vm.filterByList = [];
			$scope.$digest();
			expect(element.find('tbody').find('tr').length).toBe(4);
		});
	});
})();