angular.module('MedExplorer')
  //Capitalize the first character of a string and lowercase the rest.
  .filter('sentence', function() {
    return function(input, scope) {
      if(input) {
        input = input.toLowerCase();
        return input.substring(0,1).toUpperCase() + input.substring(1);
      }
    };
  })
  //Uppercase all characters
  .filter('uppercase', function() {
    return function(input, scope) {
      if(input)
        return input.toUpperCase();
    };
  })
  //Lowercase all characters
  .filter('lowercase', function() {
    return function(input, scope) {
      if(input)
        return input.toLowerCase();
    };
  })
  //Uppercase The First Character Of Each Word And Lowercase The Rest
  .filter('title', function() {
    return function(input, scope) {
      if(input) {
        input = input.toLowerCase();
        var words = input.split(' '),
            output = '';
        for(i in words) {
            output += words[i].substring(0,1).toUpperCase() + words[i].substring(1);
            if(i < words.length - 1)
              output += ' ';
        }
        return output;
      }
    };
  })
  //Uppercase The First Character Of Each Word But DON'T Touch The REST
  .filter('title-preserve-upper', function() {
    return function(input, scope) {
      if(input) {
        var words = input.split(' '),
            output = '';
        for(i in words) {
            output += words[i].substring(0,1).toUpperCase() + words[i].substring(1);
            if(i < words.length - 1)
              output += ' ';
        }
        return output;
      }
    };
  });