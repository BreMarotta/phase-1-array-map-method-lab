const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//const titleCased = () => {
//const titles = tutorials.map(function createArray(string){
 // let wordArray = string.split(' ');


 // return wordArray.map(function(array){
    // return array.charAt().toUpperCase() + array.slice(1);
     

  //});
//  return wordArray.join(' ');
  
//});
//return titles;
//}

const titleCased = () => {


  const titles = tutorials.map(function (string) {
      let wordArray = string.split(' ');
      return wordArray.map(function upper(array) {
        let capital = array.charAt().toUpperCase() + array.slice(1);
        return capital; 
      });
    });  
  return titles.map(titles => titles.join(" "));
}

    
   
  
  

