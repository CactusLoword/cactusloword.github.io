
import * as stories from "../stories.js";
// "use strict"

var pearChapters={
  "Pear 1":"pear1.txt",
  "Pear 2":"pear2.txt",
  "Pear 3":"pear3.txt",
  "Pear 4":"pear4.txt",
  "Pear 5":"pear5.txt",
  "Pear 6":"pear6.txt",
  "Pear 7":"pear7.txt",
  "Pear 8":"pear8.txt",
  "Pear 9":"pear9.txt",
  "Pear 10":"pear10.txt",
  "Pear 11":"pear11.txt",
  "Pear 12":"pear12.txt",
  "Pear 13 and 14":"pear13.txt",
  "The Pear Dark Ages":"peardark.txt",
  "Pear 18":"pear18.txt",
  "Pear 19":"pear19.txt",
  "Pear 20":"pear20.txt",
  "Pear 22":"pear22.txt",
  "Pear 23 to 28":"pear23.txt",
  // "Pear 29":"pear29.txt", //needs added to
  "Pear Yinyang (30 and 31)":"pear30.txt",
  "Pear Assortment":"pearsassort.txt", //needs added to
  // "Pear Number idk anymore":"pearidk.txt",
}

// console.log(pearChapters["Pear 1"]);
// for(let key in pearChapters){
//   pearChapters[key]="peartext/"+pearChapters[key]
// }
// console.log(pearChapters["Pear 1"])

var listStory={
  "list":pearChapters
}

var storyNames={
  "storyName":"Sam P's Pears",
}

// var allObjects={
//   pearChapters
// }


// var text="";

// document.addEventListener("load",function (event){
//   document.getElementById("blackscreen").style.visibility="visible";
//   document.getElementById("blackscreen").style.backgroundColor="none";
//   setTimeout(function(){document.getElementById("blackscreen").style.visibility="hidden";},250)
// })

// function entryScreen(){
//   setTimeout(function(){
//     document.getElementById("blackscreen").style.transition="opacity 0.25s";
//     document.getElementById("blackscreen").style.opacity="0";
//   },0.000000000001)
//   setTimeout(function(){document.getElementById("blackscreen").style.visibility="hidden";},250)
// }

// stories.entryScreen()
stories.entryScreen()
// console.log(stories)
// stories.contentsSetup("list",listStoryNames,/*listStory,*/pearChapters)
stories.contentsSetup("list",storyNames,listStory/*,pearChapters*/,"storyName"/*,"desc.txt"*/,"")

// function sendParries(){
//   return listStoryNames,listStory,pearChapters
// }

// importObjects(pearChapters)

// contentsSetups("list")
// function contentsShows(){
//   contentsShow()
// }

// document.getElementById("contentsButt").addEventListener("click", function(event){
//   contentsShow()
// })


// function contentsSetups(list){
//   // precondition: object called listStory, showing the corrolation of lists to stories
//   // console.log(listStory[list])
//   document.getElementById("storyName").innerText=listStoryNames[list]
//   for (let key in listStory[list]){
//     // console.log(key)
//     document.getElementById(list).insertAdjacentHTML("beforeend",'<li class="story" data-key="'+key+'" data-list="'+list+'" onclick="chapterClick(this.dataset.key,this.dataset.list)">'+key+'</li>')
//     //load of rubbish which apparently didn't work for some reason (unsolved)
//     // document.getElementById("list").insertAdjacentHTML("beforeend",'<li class="story" onclick="storyClick('+key+')">'+key+'</li>')
//     // document.getElementById("list").insertAdjacentHTML("beforeend",`<li class="story" onclick="storyClick(${key})">${key}</li>`)
//     // document.getElementById("list").insertAdjacentHTML("beforeend",'<li class="story">'+key+'</li>')
//     // document.getElementById("list").setAttribute("onclick","storyClick("+key+")")
//     // document.getElementById("list").setAttribute("onclick","storyClick("+")")
//   }
//
//   //add small element to make margin of last list item element work
//   document.getElementById(list).insertAdjacentHTML("beforeend",'<div id="marginBox"></div>')
//   document.getElementById("marginBox").style.height="1px";
//   document.getElementById("marginBox").style.width="100%";
//   document.getElementById("marginBox").style.visibility="hidden";
// }

// function closeElement(buttId,elementId){
//   document.getElementById(buttId).style.visibility="hidden";
//   document.getElementById(elementId).style.opacity="0";
//   setTimeout(function(){document.getElementById(elementId).style.visibility="hidden";},500)
//   //all parameters?
// }
//
// function chapterClick(chapter,list){
//   let story=listStory[list]
//   document.getElementById("viewer").style.visibility="visible";
//   document.getElementById("viewer").style.opacity="1";
//   document.getElementById("viewerExit").style.visibility="visible";
//   //clear all
//   // document.getElementById("viewer").innerHTML='<h2 id="storyTitle">'+chapter+'</h2>'
//   document.getElementById("storyTitle").innerText=chapter;
//   document.getElementById("storyText").innerText="";
//   // fetch("pear2.txt")
//   // .then(response =>{
//   //   console.log(response)
//   //   console.log(response.text());
//   //   return response.text();
//   // }).then(data=>{
//   //   console.log(data)
//   // })
//   // // document.getElementById("storyText").data=stories[story];
//   // console.log(story)
//   // console.log(chapter);
//   // console.log(story[chapter]);
//   // console.log(listStory["list"][chapter]);
//   fetch(story[chapter]).then(function(response) {
//     // console.log(response.text);
//     // console.log(response.status);
//     return response.text();
//   }).then(function(data) {
//     editText(data);
//     // document.getElementById("storyText").innerText=data;
//     // console.log(data);
//     // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+data+'</p>');
// })
// }
//
// function contentsShow(){
//   document.getElementById("contents").style.visibility="visible";
//   document.getElementById("contents").style.opacity="1";
//   document.getElementById("contentsExit").style.visibility="visible";
//   document.getElementById("contentsButt").style.visibility="hidden";
// }
//
// // function load() {
// //     var file = new XMLHttpRequest();
// //     file.open("GET", "pear2.txt",false);
// //     file.send(null)
// //     // file.onreadystatechange = function() {
// //       // if (file.readyState === 4) {  // Makes sure the document is ready to parse
// //       //   if (file.status === 200) {  // Makes sure it's found the file
// //       console.log(file.responseText)
// //           // console.log(text)
// //         // }
// //       // }
// //     // }
// // }
//
//
// function editText(text){
//   let sectionText="";
//   let imgText="";
//   let imgFlag=false
//   let count=0;
//   console.log("storyText"+count);
//   document.getElementById("storyText").insertAdjacentHTML("beforeend",'<p id="storyText'+count+'" class="storyText" style="position:static;margin: 1%;"></p>')
//   for (let i=0;i<text.length;i++){
//     if (text[i]=="<" && i+3<text.length && text[i+1]=="i" && text[i+2]=="m" && text[i+3]=="g"){
//       imgFlag=true;
//       imgText='<img  class="storyImg" style="position:static;"' ;//skip some i s?
//       i=i+4
//       // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+sectionText+'</p>');
//       document.getElementById("storyText"+count).innerText+=sectionText
//       sectionText="";
//     }else if (imgFlag){
//       imgText=imgText+text[i]
//       if (text[i]==">"){
//         // document.getElementById("viewer").insertAdjacentHTML("beforeend",imgText)
//         // document.getElementById("storyText").innerHTML+=imgText
//         document.getElementById("storyText").insertAdjacentHTML("beforeend",imgText)
//         console.log(document.getElementById("storyText"+count).innerHTML);
//         // document.getElementById("storyText").innerHTML+="<img src='../cactus.png'>"
//         // document.getElementById("storyText").innerText+=""
//         imgText=""
//         imgFlag=false
//         count++
//         document.getElementById("storyText").insertAdjacentHTML("beforeend",'<p id="storyText'+count+'" class="storyText" style="position:static;margin: 1%;"></p>')
//       }
//     }else{
//       sectionText=sectionText+text[i]
//     }
//   }
//
//   // document.getElementById("viewer").insertAdjacentHTML("beforeend",'<p class="storyText">'+sectionText+'</p>')
//   console.log(document.getElementById("storyText"+count).innerHTML);
//   document.getElementById("storyText"+count).innerText+=sectionText
//   console.log(document.getElementById("storyText"+count).innerHTML)
// }// won't include para spaces, include <br> in txt file? (could run through python if that's a pain, replace\n with <br>)
// //test also when new chapter is pressed, "viewer" needs to be cleared (done now)

// export {pearChapters, listStory, storyNames}
