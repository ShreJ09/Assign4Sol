(function(window) {
    var byeName = new Object();
    var speakWord = "Goodbye";
    byeName.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeName = byeName;
})(window);