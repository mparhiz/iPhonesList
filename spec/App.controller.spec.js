(function() {
	'use strict';

	describe('App controller', function(){
		var ctrl,
			mockService,
			filterBy = ['name', 'color', 'type', 'capacity'];

		beforeEach(module('iphoneApp'));
		beforeEach(inject(function(_$controller_, _getPhoneListService_) {
			mockService = _getPhoneListService_;
			ctrl = _$controller_('AppController', {
				getPhoneListService: mockService
			});

		}));

		it('should have a filterBy list for searching', function() {
			expect(ctrl.filterByList).toEqual(jasmine.any(Array));
			expect(ctrl.filterByList).toEqual(filterBy);
		});
	});
})();
