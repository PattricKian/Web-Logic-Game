var imgObjects = []
const equations = document.getElementById("equations")
var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {
    keyboard: false,
    backdrop: 'static',
    focus: true
})
const nextTask = document.getElementById("nextTask")
const hintImage = document.getElementById("hintImg")
const hintButton = document.getElementById("help")

var tasks = localStorage.getItem("tasks") == null ? [] : JSON.parse(localStorage.getItem("tasks"))
var task
var currTask, results = []

new Sortable(equations , {
    animation: 150,
    ghostClass: 'blue-background-class'
});


function arrayShuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const loadImages = () => {
    currTask = tasks.shift()
    if(currTask === undefined){
        tasks = ['A','B','C','D','E','F','G','H','I','J']
        arrayShuffle(tasks)
        localStorage.setItem("tasks", JSON.stringify(tasks));
        currTask = tasks.shift()
        
        
      
            
      
    }
    fetch("./images.json")
    .then(res => res.json())
    .then(data => {
        results = []
        task = data[currTask]
        task.forEach(image => {
            results.push(image.result)
            appendImage(image);
        })
        arrayShuffle(imgObjects)
        equations.innerHTML = ''
        for(i = 0; i < imgObjects.length ; i++) {
            equations.appendChild(imgObjects[i])
        }
        imgObjects = []
    })

   

            
       
        
}

function appendImage(jsonImg){
    var equation = document.createElement("img");
    
    equation.src = `./images/${jsonImg.filename}`;
    equation.style = "object-fit: none"
    equation.style.cursor = "pointer";
    equation.draggable = true
    equation.setAttribute("class", "row");
    equation.setAttribute("result", jsonImg.result)
    imgObjects.push(equation)

   
   
    if(currTask == "E" ){
    var div = document.getElementById('test_text')
    div.replaceChildren();
    div.innerHTML += 'Úroveň: Ľahká';
    }
   else if(currTask == "A" ){
        var div = document.getElementById('test_text')
        div.replaceChildren();
        div.innerHTML += 'Úroveň: Ľahká';
        }
        else if(currTask == "B" ){
            var div = document.getElementById('test_text')
            div.replaceChildren();
            div.innerHTML += 'Úroveň: Ľahká';
            }
            else if(currTask == "C" ){
                var div = document.getElementById('test_text')
                div.replaceChildren();
                div.innerHTML += 'Úroveň: Ľahká';
                }
           else if(currTask == "D" ){
                    var div = document.getElementById('test_text')
                    div.replaceChildren();
                    div.innerHTML += 'Úroveň: Ľahká';
                    }
else{
    var div = document.getElementById('test_text')
    div.replaceChildren();
    div.innerHTML += 'Úroveň: Tažká';
}
}

equations.addEventListener("change", () => {
    var list = equations.querySelectorAll("img")
    for(var i = 0; i < results.length; i++){
        if(list[i].getAttribute("result") != results[i]){
            return;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTimeout(function() {
        modal.show();
    }, 500);  
})

nextTask.addEventListener("click", () => {
    modal.hide()
    loadImages()
})

hintButton.addEventListener("click", () => {
    hintImage.innerHTML = ''
    var newImg = document.createElement("img")
    newImg.src = "./help/help"+currTask+".png"
    hintImage.appendChild(newImg)
})





loadImages()











window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }