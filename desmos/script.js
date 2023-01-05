
// var x=3

var letters= {
  // "A": [[""],
  //       [""],
  //       [""]],
  // "C": [["\\left(1.1x+"+(x+2)+"\\right)^{2}+\\left(y\\right)^{2}\\le10\\ \\left\\{\\left(1.1x+10\\right)^{2}+\\left(y\\right)^{2}\\ge4\\right\\}\\left\\{\\left|y\\right|-5\\ge\\frac{1.1x}{2}\\right\\}"]],
  // "K": [[""]
  //       [""]],
  // "O": [[""]],
  // "S": [[""]
  //       [""]],

}



function resetLetters() {
  /* Watch out for:
  < (having "<x" cut off the rest of the string) (put <0+x instead)
  */
  letters={
    "A": {
      "/":String.raw`y-${y}\le3\left(x+1.5-${x}\right)\left\{y-${y}\ge3\left(x+0.5-${x}\right)\right\}\left\{y-${y}\le3\right\}\left\{y-${y}\ge-3\right\}\left\{x\le0+${x}\right\}`,
      "\\":String.raw`y-${y}\le-3\left(x-1.5-${x}\right)\left\{y-${y}\ge-3\left(x-0.5-${x}\right)\right\}\left\{y-${y}\le3\right\}\left\{y-${y}\ge-3\right\}\left\{x\ge0+${x}\right\}`,
      "-":String.raw`y-${y}\le-0.5\left\{y-${y}\ge-1.5\right\}\left\{y+3-${y}\le3\left(x+1.5-${x}\right)\right\}\left\{y+3-${y}\le-3\left(x-1.5-${x}\right)\right\}`
    },
    "C": {"C": "\\left(1.1\\left(x-"+x+"\\right)\\right)^{2}+\\left(y-"+y+"\\right)^{2}\\le10\\ \\left\\{\\left(1.1\\left(x-"+x+"\\right)\\right)^{2}+\\left(y-"+y+"\\right)^{2}\\ge4\\right\\}\\left\\{\\left|y-"+y+"\\right|\\ge\\frac{1.1\\left(x-"+x+"\\right)}{2}\\right\\}"
          },
    "K": {
      "|":String.raw`x\ge-1.5+${x}\left\{x\le-0.4+${x}\right\}\left\{y\le3.1+${y}\right\}\left\{y\ge-3.1+${y}\right\}`,
      "<":String.raw`\left|y-${y}\right|\ge x-${x}\left\{\left|y-${y}\right|\le x+1.5-${x}\right\}\left\{y\le3.1+${y}\right\}\left\{y\ge-3.1+${y}\right\}`
    },
    "O": {"O":"\\left(1.1\\left(x-"+x+"\\right)\\right)^{2}+\\left(y-"+y+"\\right)^{2}\\le10\\ \\left\\{\\left(1.1\\left(x-"+x+"\\right)\\right)^{2}+\\left(y-"+y+"\\right)^{2}\\ge4\\right\\}"},
    "S": {
      "c":String.raw`\left(1.1\left(x-${x}\right)\right)^{2}+\left(1.1\left(y-\frac{1.5}{1.1}-${y}\right)\right)^{2}\le4\left\{\left(1.1\left(x-${x}\right)\right)^{2}+\left(1.1\left(y-\frac{1.5}{1.1}-${y}\right)\right)^{2}\ge1\right\}\left\{y\ge\left\{0+${x}<0+x<5+${x}:1.5+${y},-5+${y}\right\}\right\}`,
      "ↄ":String.raw`\left(1.1\left(x-${x}\right)\right)^{2}+\left(1.1\left(y+\frac{1.5}{1.1}-${y}\right)\right)^{2}\le4\left\{\left(1.1\left(x-${x}\right)\right)^{2}+\left(1.1\left(y+\frac{1.5}{1.1}-${y}\right)\right)^{2}\ge1\right\}\left\{y\le\left\{-5+${x}<0+x<0+${x}:-1.5+${y},5+${y}\right\}\right\}`
    },

  }
}

// letters[letter][part of letter][equation separated at number]


var currLetter
var x
var y

// console.log(String.raw`\he${2+2}`);

var count=0

var currUndefined

var historyHid=false

var mouseInForm=false


// var vpHeight=window.innerHeight
var vpHeight=window.screen.height
// var vpHeight=window.innerWidth*3/4
// var vpWidth=window.innerWidth
var vpWidth=window.screen.width
// var ratio=4/3
var ratio

function ratioResCheck(){
  if (vpWidth/vpHeight>=1.5){
    ratio=(vpWidth*0.6)/vpHeight
  }else{
    ratio=vpwidth/0
  }
}

ratioResCheck()


window.addEventListener("load", function(event){
  // test values (for laziness)
  // document.getElementById("letter").value="c"
  // document.getElementById("x").value="3"
  // document.getElementById("y").value="3"

  // ratio=window.innerWidth/window.innerHeight
  // console.log(window.screen.height);
  // console.log(window.screen.width);
  // console.log(window.screen.availHeight);
  // console.log(ratio);
  const main=document.getElementById("main")
  const mainBack=document.getElementById('mainBackground')
  if (window.innerWidth>/*window.innerHeight*/vpHeight*ratio){//if window width>60% screen width
      main.style.width="calc("+vpHeight+"px*"+ratio+")"
      main.style.margin="0 calc(calc(100vw - ("+vpHeight+"px*"+ratio+"))/2)"
      mainBack.style.width="calc("+vpHeight+"px*"+ratio+")"
      mainBack.style.margin="0 calc(calc(100vw - ("+vpHeight+"px*"+ratio+"))/2)"
  }else if ((window.innerWidth<=vpHeight*ratio)){
    main.style.width="100%"
    main.style.margin="0"
    mainBack.style.width="100%"
    mainBack.style.margin="0"
  }

  // This needs to be onload otherwise element is null (as script is async, not defer)
  document.querySelector("form").addEventListener("mouseenter", function (event){
    mouseInForm=true
  })
  document.querySelector("form").addEventListener("mouseleave", function (event){
    mouseInForm=false
  })
  const inputs=document.getElementsByClassName("inputText")
  for (let i=0; i<inputs.length;i++){
    inputs[i].addEventListener("focus", function (event){
      mouseInForm=false
    })
    inputs[i].addEventListener("blur", function (event){
      mouseInForm=true
    })
  }
  document.addEventListener("keypress",function (event){
    if (event.code=="Enter"&&mouseInForm==true){
      output()
    }
  })
  // can't do the next bit instead of the last 2 as the element needs to be focusable
  // document.querySelector("form").addEventListener("keypress",function (event){
  //   console.log(true);
  //   if (event.code=="Enter"){
  //     output()
  //   }
  // })
})

window.addEventListener("resize", function (event){
  const main=document.getElementById("main")
  const mainBack=document.getElementById('mainBackground')
  ratioResCheck()
  // console.log(window.innerWidth);
  // console.log(vpWidth*ratio);
  // console.log(window.innerWidth/window.innerHeight);

// if statements in wrong order (think about small devices)
// done (did ratioResCheck instead, dividing by 0 ftw!)


  if (window.innerWidth>/*window.innerHeight*/vpHeight*ratio){
    main.style.width="calc("+vpHeight+"px*"+ratio+")"
    main.style.margin="0 calc(calc(100vw - ("+vpHeight+"px*"+ratio+"))/2)"
    mainBack.style.width="calc("+vpHeight+"px*"+ratio+")"
    mainBack.style.margin="0 calc(calc(100vw - ("+vpHeight+"px*"+ratio+"))/2)"
  }else if ((window.innerWidth<=vpHeight*ratio)){
    main.style.width="100%"
    main.style.margin="0"
    mainBack.style.width="100%"
    mainBack.style.margin="0"
  }
})

window.addEventListener("orientationchange", function (event){
  ratioResCheck()
})

// event listener onpress enter in form to submit
// is in the onload listener


function output(){
  if (document.getElementById("letter").value==""){//(currLetter)
    alert("Missing letter")
  }else if (document.getElementById("x").value==""){//x
    alert("Missing x-coordinate")
  }else if(document.getElementById("y").value==""){//y
    alert("Missing y-coordinate")
  }else{
    currLetter=document.getElementById("letter").value.toUpperCase()
    x=parseFloat(document.getElementById("x").value)
    y=parseFloat(document.getElementById("y").value)
    // console.log(x);
    // console.log(typeof x);
    if (isNaN(x)){
      alert("x-coordinate isn't a number")
    }else if (isNaN(y)){
      alert("y-coordinate isn't a number")
    }else{
      resetLetters()
      if (letters[currLetter]==undefined){
        // document.getElementById("outputArea").innerHTML="Letter not supported";
        alert("Letter not supported")
      }else{
        // resetLetters()
        document.getElementById("historyArea").insertAdjacentHTML("afterbegin","<div class='letterOutput'> "+document.getElementById("outputArea").innerHTML+"</div>"+"<br>")
        document.getElementById("outputArea").innerHTML=""
        document.getElementById("outputArea").insertAdjacentHTML("beforeend",
        `<p>${currLetter}</p>

        ${(function (){
            let string=""
            for (let key in letters[currLetter]){
              // console.log(letters[currLetter][key]);
              string=string+`<div class="letterPartOutput" data-equationid="equation${count}" data-copyid="copy${count}" onclick="copyText(this.dataset.equationid, this.dataset.copyid)">
                            <p class="letterPart">${key}</p>
              <p class="equation" id="equation${count}">${letters[currLetter][key]}</p>
              <div class="copyBox"><p class="copyTitle" id="copy${count}">Copy</p></div>
              </div>`
              count=count+1
            }
            return string
            })()}
            `
        )
        // count=count+1
      }
    }
  }
}


function historyReveal(){
  const historyArea=document.getElementById('historyArea')
  const history=document.getElementById('history')
  const historyTitle=document.getElementById('historyTitle')
  switch (historyHid) {
    case true:
      // historyArea.style.transition="opacity 0.25s";
      // historyArea.style.opacity="1"
      // setTimeout(function(){
      historyArea.style.visibility="visible"
      historyArea.style.display="block"

      history.style.backgroundColor="#5a6"
      history.style.border="none"
      history.style.borderTop="3px solid #083"
      historyTitle.style.borderTop="none"
    // },250)
      historyHid=false
      break;
    case false:
      // historyArea.style.transition="opacity 0.25s"
      // historyArea.style.opacity="0"
      // setTimeout(function(){
      historyArea.style.visibility="hidden"
      historyArea.style.display="none"

      history.style.borderTop="none"
      history.style.backgroundColor="#ada"
      history.style.border="1px dashed #beb"
      historyTitle.style.borderTop="3px solid #083"
    // },250)
      historyHid=true
      break;
  }
}

function historyHover(){
  const historyArea=document.getElementById('historyArea')
  const history=document.getElementById('history')
  const historyTitle=document.getElementById('historyTitle')
  history.style.backgroundColor="#6b6"
  history.style.border="none"
  history.style.borderTop="3px solid #083"
  historyTitle.style.borderTop="none"

}

function historyUnhover(){
  const historyArea=document.getElementById('historyArea')
  const history=document.getElementById('history')
  const historyTitle=document.getElementById('historyTitle')
  history.style.backgroundColor="#8b8"
  switch (historyHid) {
    case true:
      history.style.borderTop="none"
      history.style.backgroundColor="#ada"
      history.style.border="1px dashed #beb"
      historyTitle.style.borderTop="3px solid #083"
      break;
    case false:
      history.style.backgroundColor="#5a6"
      history.style.border="none"
      history.style.borderTop="3px solid #083"
      historyTitle.style.borderTop="none"
      break;
  }
}


function copyText(equationId, copyId){
  // console.log(equationId);
  // console.log(copyId);
  navigator.clipboard.writeText(document.getElementById(equationId).innerText)
  document.getElementById(copyId).innerText="Copied"
  setTimeout(function(){document.getElementById(copyId).innerText="Copy"},3000)
}
