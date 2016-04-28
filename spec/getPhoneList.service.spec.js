(function() {
	'use strict';

	describe('getPhoneListService service', function() {
		var getPhoneListService,
			$rootScope,
			$httpBackend,
			PHONE_LIST_URL;

		beforeEach(module('iphoneApp'));
		beforeEach(inject(function(_getPhoneListService_, _$rootScope_, _$httpBackend_, _PHONE_LIST_URL_) {
			getPhoneListService = _getPhoneListService_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;
			PHONE_LIST_URL = _PHONE_LIST_URL_;
		}));

		it('should be registered', function() {
			expect(getPhoneListService).not.toEqual(null);
		});

		describe('retriveData function', function() {
			it('should exist', function() {
				expect(getPhoneListService.retriveData).not.toEqual(null);
			});

			it('should return array of object', function() {
				getPhoneListService.retriveData()
					.then(function(phoneList){
						expect(phoneList).toEqual(jasmine.any(Array));
						expect(phoneList[0]).toEqual(jasmine.any(Object));
						expect(phoneList.length > 0).toBeTruthy();
					});
			});
	
			it('should return same as httpBackend returned', function() {
				var phones = [];
				$httpBackend.when('GET', PHONE_LIST_URL)
					.respond(phones);

				getPhoneListService.retriveData().then(function(phoneList) {
					expect(phoneList.length).toBe(8);
					expect(phoneList.length).toBe(phones.length);
					expect(phoneList).toEqual(phones);
				});

				//afterEach(function(){
				//	$httpBackend.flush();
				//	$rootScope.$digest();
				//});
			});
		});
	});
})();