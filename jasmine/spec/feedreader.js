/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {

    describe('RSS Feeds', function() {

       it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });



       it('has a URL defined', function(){
        allFeeds.forEach(function(feed){
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe('');
        });
    });    



       it('has a name', function(){
        allFeeds.forEach(function(feed){
            expect(feed.name).toBeDefined();
            expect(feed.name).not.toBe('');
        });
    }); 

   });




    describe('The menu', function(){





       it('is hidden by default', function(){
        expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });



       it('becomes visible when clicked', function(){
        $('.icon-list').click();
        expect($('body').hasClass('menu-hidden')).toBeFalsy();
        $('.icon-list').click();
        expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });

   });



    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });


        

        it('does its thing', function(done){
            expect($('.feed').has('.entry').length > 0).toBe(true);
            done();

        });



    });
    

    describe('New Feed Selection', function(){

        

       beforeEach(function(done){
        loadFeed(0, function(){
            done();
        });
    });

       it('changes content', function(done){
        var prevText = $('.entry').html().split('<h2>')[1].split('</h2>')[0];
        loadFeed(1, function(){
            var currText = $('.entry').html().split('<h2>')[1].split('</h2>')[0];
            expect(prevText === currText).toBe(false);
            done();
        });
        
    });




   });
}());
