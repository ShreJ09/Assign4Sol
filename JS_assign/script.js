(function() {
    var names = ["Bhumika", "Jyoti", "Karishma", "Shreya", "Payal", "Aman", "Lora", "Paula", "Lucky", "Juginder"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeName.speak(names[i]);
        } else {
            helloName.speak(names[i]);
        }
    }
})();