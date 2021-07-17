/* https://github.com/emaleesoddy/coding-fun/
   just a silly little piece of javascript
   originally authored 24.04.2017
   License: Unlicense <unlicense.org>
*/
(function() {
    var button = document.getElementById("giveMeSomething");
    var message = document.getElementById("youShould");
    var thingsToDo = [
        'practice playing the ukelele',
        'go for a walk around the neighborhood— rain, snow, or shine',
        'take a camera, drive to a park, and go for a hike',
        'write a blog post',
        'lay in the hammock (or by the fireplace) and read a book',
        'complete a trailhead',
        'go to the gym and workout',
        'do a set of push-ups, crunches, and squats',
        'paint something',
        'do some laundry',
        'clean an area of the house',
        'organize something in the house',
        'color a page in a coloring book',
        'write a short story',
        'code something',
        'weed the garden',
        'do something DIY you pinned on Pinterest',
        'meditate',
        'watch a TEDtalk',
        'clean up the yard',
        'go get a mani/pedi',
        'exercise on the elliptical for the length of one television show',
        'upload a few of the most recent photos you’ve taken',
        'do that internal work thing you “haven’t had time for”',
        'do something to expand your career',
        'find a local class for something you’re interested in and sign-up',
        'call your parents',
        'take a bath, but keep it to 30 minutes (seriously)',
        'call your grandma',
        'schedule a night out with your friends',
        'play with your cat & his favorite laser toy',
        'go to a hobby/maker shop and pick out a DIY science/tech kit',
        'go to a comic book shop',
        'go to a book store',
        'walk to a local coffee shop',
        'sketch something',
        'review your budget',
        'go on a date night with your significant other or a friend',
    ];
    function chooseSomething() {
        var pickANumber = Math.floor(Math.random() * thingsToDo.length);
        return thingsToDo[pickANumber];
    }
    button.onclick = function() {
        message.innerHTML = 'You should <b>' + chooseSomething() + '</b>.';
    }
})();