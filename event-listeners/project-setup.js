
var qs = function(cssSelct){
  return document.querySelector(cssSelct);
}

var qsAll = function(cssSelct){
  return document.querySelectorAll(cssSelct);
}

function answerQuestionFor(qId,fn){
  qs(qId+' button').addEventListener('click',function(){
    fn();
  })
}


function generatePromptAndDemoHTML(obj, index){
  var htmlString  = "<div class='prompt'>"
      htmlString +=   "<h3>Task #"+(index+1)+"</h3>"
      htmlString +=   "<p>"+obj.task+"</p>"
      htmlString += "</div>"
      htmlString += "<div class='content-box teacher-demo'>"
      htmlString +=   "<h4>Demo</h4>"
      htmlString +=   "<img src='"+obj.link+"' alt='effect'>"
      htmlString += "</div>"

  return htmlString
}

var tasks = [
  { 
    html_id: "hide-nav",
    task: "Add a button into the answer-box that, when clicked, will toggle the visibility of the nav menu. The easiest way is probably to change the class on the nav menu. (Check the css file.)",
    link: "gifs/toggle-vis.gif"
  },  
  { 
    html_id: "add-guest",
    task: "When the user hits enter while focus is on the input, the content of the input should be added to the list below.",
    link: "gifs/guestList.gif"
  },
  { 
    html_id: "add-guest-bonus",
    task: "Each added guest should come with a remove button. Clicking that button should remove the guest from the list. This is an adventure mode problem. Your homework can be considered technically complete if this is not solved.",
    link: "gifs/guestListBonus.gif"
  },
]

function findEl(els, fn){
  var foundEl = {}
  for (var i = 0; i < els.length; i++){
    
    if (fn(els[i],i,els) === true){
      foundEl = {
        el: els[i],
        index: i
      }
      break;
    } 
  }
  return foundEl
}

var exercises =  qsAll('.exercise-container')
tasks.forEach(function(t, i){
  var cssSelector="#"+t.html_id

  var el = findEl( exercises , function(el,i){
    return el.id === t.html_id
  })

  qs(cssSelector).innerHTML = generatePromptAndDemoHTML(t,el.index ) + qs(cssSelector).innerHTML
})


