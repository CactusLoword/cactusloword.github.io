


function entryScreen(){
  setTimeout(function(){
    document.getElementById("blackscreen").style.transition="opacity 0.25s";
    document.getElementById("blackscreen").style.opacity="0";
  },0.000000000001)
  setTimeout(function(){document.getElementById("blackscreen").style.visibility="hidden";},250)
}

// console.log(document.getElementById("contentsExit").onclick)

// entryScreen()
// contentsSetup("list")


function contentsSetup(list,storyNames,listStory/*,story*/,storyNameID/*,desc*/,filepath){
  let story=listStory[list]
  // precondition: object called listStory, showing the corrolation of lists to stories
  // console.log(listStory[list])
  // let filepath=findFilePath(desc)
  if (filepath==undefined){
    filepath=""
  }
  document.getElementById(storyNameID).innerText=storyNames[storyNameID]
  for (let key in /*listStory[list]*/story){
    // console.log(key)
    document.getElementById(list).insertAdjacentHTML("beforeend",'<li class="story" data-key="'+key+'" data-list="'+list+'" onclick="">'+key+'</li>')
    // document.querySelector("li").addEventListener("click", function(event){
    //   chapterClick(this.dataset.key,this.dataset.list)
    // })
    //load of rubbish which apparently didn't work for some reason (unsolved)
    // document.getElementById("list").insertAdjacentHTML("beforeend",'<li class="story" onclick="storyClick('+key+')">'+key+'</li>')
    // document.getElementById("list").insertAdjacentHTML("beforeend",`<li class="story" onclick="storyClick(${key})">${key}</li>`)
    // document.getElementById("list").insertAdjacentHTML("beforeend",'<li class="story">'+key+'</li>')
    // document.getElementById("list").setAttribute("onclick","storyClick("+key+")")
    // document.getElementById("list").setAttribute("onclick","storyClick("+")")
  }

  //add small element to make margin of last list item element work
  document.getElementById(list).insertAdjacentHTML("beforeend",'<div id="marginBox'+list+'"></div>')
  document.getElementById("marginBox"+list).style.height="1px";
  document.getElementById("marginBox"+list).style.width="100%";
  document.getElementById("marginBox"+list).style.visibility="hidden";

  document.getElementById(list).addEventListener("click",function(event){
    if (event.target.className=="story"){
      // event.target.onclick
      // chapterClick(this.dataset.key,this.dataset.list,/*listStory,*/story)
      // console.log(event.target.dataset.key);
      // console.log(this.dataset.key);
      if (filepath!=undefined){
        chapterClick(event.target.dataset.key,/*event.target.dataset.list,*/story,filepath)
      }else{
        chapterClick(event.target.dataset.key,/*event.target.dataset.list,*/story,"")
      }
    }else if (event.target.className=="storyName") {
      document.getElementById("viewer").style.visibility="visible";
      document.getElementById("viewer").style.opacity="1";
      document.getElementById("viewerExit").style.visibility="visible";
      document.getElementById("storyTitle").innerHTML="<br>";
      // document.getElementById("storyText").innerText="";
      fetch(filepath+"desc.txt").then(function(response) {
        return response.text();
      }).then(function(data) {
        document.getElementById("storyText").innerText=data;
    })
  }
  })
}

// function closeElement(buttId,elementId){
//   document.getElementById(buttId).style.visibility="hidden";
//   document.getElementById(elementId).style.opacity="0";
//   setTimeout(function(){document.getElementById(elementId).style.visibility="hidden";},500)
//   //all parameters?
// }

function chapterClick(chapter,/*list,*/story,filepath){
  // story=listStory[list]
  document.getElementById("viewer").style.visibility="visible";
  document.getElementById("viewer").style.opacity="1";
  document.getElementById("viewerExit").style.visibility="visible";
  //clear all
  // document.getElementById("viewer").innerHTML='<h2 id="storyTitle">'+chapter+'</h2>'
  document.getElementById("storyTitle").innerText=chapter;
  document.getElementById("storyText").innerText="";
  // fetch("pear2.txt")
  // .then(response =>{
  //   console.log(response)
  //   console.log(response.text());
  //   return response.text();
  // }).then(data=>{
  //   console.log(data)
  // })
  // // document.getElementById("storyText").data=stories[story];
  // console.log(story)
  // console.log(chapter);
  // console.log(story[chapter]);
  // console.log(listStory["list"][chapter]);
  fetch(filepath+story[chapter]).then(function(response) {
    // console.log(response.text);
    // console.log(response.status);
    return response.text();
  }).then(function(data) {
    editText(data,filepath);
    // document.getElementById('storyText').innerHTML=data;
    // document.getElementById("storyText").innerText=data;
    // console.log(data);
    // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+data+'</p>');
})
}

// function contentsShow(){
//   document.getElementById("contents").style.visibility="visible";
//   document.getElementById("contents").style.opacity="1";
//   document.getElementById("contentsExit").style.visibility="visible";
//   document.getElementById("contentsButt").style.visibility="hidden";
// }

// function load() {
//     var file = new XMLHttpRequest();
//     file.open("GET", "pear2.txt",false);
//     file.send(null)
//     // file.onreadystatechange = function() {
//       // if (file.readyState === 4) {  // Makes sure the document is ready to parse
//       //   if (file.status === 200) {  // Makes sure it's found the file
//       console.log(file.responseText)
//           // console.log(text)
//         // }
//       // }
//     // }
// }


function editText(text,filepath){
  let sectionText="";
  let imgText="";
  let imgFlag=false
  let count=0;
  // console.log("storyText"+count);
  document.getElementById("storyText").insertAdjacentHTML("beforeend",'<p id="storyText'+count+'" class="storyText" style="position:static;margin: 1%;"></p>')
  for (let i=0;i<text.length;i++){
    if (text[i]=="<" && i+3<text.length && text[i+1]=="i" && text[i+2]=="m" && text[i+3]=="g"){
      imgFlag=true;
      imgText='<img class="storyImg" style="position:static;" src="'+filepath ;//skip some i s?
      // i=i+4
      i=i+9
      // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+sectionText+'</p>');
      document.getElementById("storyText"+count).innerText+=sectionText
      sectionText="";
    }else if (imgFlag){
      imgText=imgText+text[i]
      if (text[i]==">"){
        // document.getElementById("viewer").insertAdjacentHTML("beforeend",imgText)
        // document.getElementById("storyText").innerHTML+=imgText
        document.getElementById("storyText").insertAdjacentHTML("beforeend",imgText)
        // console.log(document.getElementById("storyText"+count).innerHTML);
        // document.getElementById("storyText").innerHTML+="<img src='../cactus.png'>"
        // document.getElementById("storyText").innerText+=""
        imgText=""
        imgFlag=false
        count++
        document.getElementById("storyText").insertAdjacentHTML("beforeend",'<p id="storyText'+count+'" class="storyText" style="position:static;margin: 1%;"></p>')
      }
    }else{
      sectionText=sectionText+text[i]
    }
  }

  // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+sectionText+'</p>')
  // console.log(document.getElementById("storyText"+count).innerHTML);
  document.getElementById("storyText"+count).innerText+=sectionText
  // console.log(document.getElementById("storyText"+count).innerHTML)
}// won't include para spaces, include <br> in txt file? (could run through python if that's a pain, replace\n with <br>)
//test also when new chapter is pressed, "viewer" needs to be cleared (done now)

// document.getElementById("contentsButt").addEventListener("click", function(event){
//   contentsShow()
// })file

// function findFilePath(desc){
//   let filePath=""
//   let foundFlag=false
//   for (let i=desc.length;i>=0;i--){
//     if (desc[i]=="/"){
//       foundFlag=true
//     }
//     if (foundFlag==true){
//       filePath=desc[i]+filePath
//     }
//   }
//   return filePath
// }

export {entryScreen,contentsSetup,chapterClick}
