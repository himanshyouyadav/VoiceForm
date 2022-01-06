// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
// var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;


// // document.getElementById("start").onclick = function() {
// //   recognition.start();
// //   recognition.continuous  = true;
// // }

// // recognition.onresult = function(event) 
// // {
// //   var textValue = event.results[0][0].transcript;
// //   console.log(event.results[0][0].transcript)
// //   console.log('Confidence: ' + event.results[0][0].confidence);
// //   // nameInput = document.getElementById("name");
// //   console.log(textValue);
// //   // item[1].value = textValue ;
// // }


// function fillInput()
// {
//   const form = document.querySelector("#form");
//   const allChildrens = form.childNodes;
//   // console.log(allChildrens);
//   const children = form.children;
//   // console.log(children);
//   // console.log(form.lastChild);
//   childs = Object.entries(children)
//   for(var i=0;i<childs.length;i++)
//   {
//     if(childs[i][1].localName == "input")
//     {
//       recognition.start();

//       recognition.onresult = function(event) 
//       {
//         var textValue = event.results[0][0].transcript;
//         console.log(event.results[0][0].transcript)
//         console.log('Confidence: ' + event.results[0][0].confidence);
//         // nameInput = document.getElementById("name");
//         console.log(textValue);
//         childs[i].value = textValue ;
//         recognition.abort()
//       }
//     }
//     console.log(childs[i][1].localName)
//     // console.log(item[1].localName == "input");
//   }
//   // console.log(childs[i][1])
// }
// }
// fillInput();


// // recognition.onresult = function(event) 
// // {
// //   var textValue = event.results[0][0].transcript;
// //   console.log(event.results[0][0].transcript)
// //   console.log('Confidence: ' + event.results[0][0].confidence);
// //   nameInput = document.getElementById("name");
// //   nameInput.value = textValue ;
// // }


// // recognition.onspeechend = function() {
// //   recognition.stop();
// // }

// // recognition.onnomatch = function(event) {
// //   diagnostic.textContent = "I didn't recognise that color.";
// // }

// // recognition.onerror = function(event) {
// //   diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
// // }


if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'fill my name as': function(name) {
      document.getElementById("#name").value = name;
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}