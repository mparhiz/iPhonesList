(function() {
	'use strict';

	describe('filter searchFor', function() {
		var searchFor,
			items,
			searchString,
			filterBy;

		beforeEach(module('iphoneApp'));
		beforeEach(inject(function(_$filter_) {
			searchFor = _$filter_('searchFor');
			items = [
				{
					"id": 1,
					"name": "iPhone SE",
					"color": "Silver",
					"type": "Wifi",
					"capacity": "16GB",
					"price": 629
				},
				{
					"id": 3,
					"name": "iPhone SE",
					"color": "Gold",
					"type": "Wifi",
					"capacity": "16GB",
					"price": 629
				},
				{
					"id": 5,
					"name": "iPhone SE",
					"color": "Space Grey",
					"type": "Wifi",
					"capacity": "16GB",
					"price": 629
				},
				{
					"id": 8,
					"name": "iPhone SE",
					"color": "Rose Gold",
					"type": "Wifi",
					"capacity": "64GB",
					"price": 829
				}
			];
			
			searchString = "iphone";
			filterBy = ['name', 'color', 'type', 'capacity'];
		}));

		it('should be registered', function() {
			expect(searchFor).not.toBeNull();
		});

		it('should return array of object', function() {
			expect(searchFor(items, searchString, filterBy)).toEqual(jasmine.any(Array));
			expect(searchFor(items, searchString, filterBy)[0]).toEqual(jasmine.any(Object));
			expect(searchFor(items, searchString, filterBy).length > 0).toBeTruthy();
		});

		it('should return an array of four objects', function(){
			expect(searchFor(items, searchString, filterBy).length).toBe(4);

			searchString = "android";
			filterBy = [];
			expect(searchFor(items, searchString, filterBy).length).toBe(4);

			filterBy = ['xxxx', 'yyyy'];
			expect(searchFor(items, searchString, filterBy).length).toBe(4);
		});

		it('should return an empty array', function(){
			searchString = "android";
			expect(searchFor(items, searchString, filterBy).length).toBe(0);
		});

		it('should return an array of one object', function(){
			searchString = "64";
			filterBy = ['capacity'];
			expect(searchFor(items, searchString, filterBy)[0].capacity).toEqual("64GB");
		});
	});
})();