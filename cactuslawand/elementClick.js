//onclick functions which don't involve the story objects

var openContents=""

function closeElement(buttId,elementId){
  // document.getElementById("clickBlocker").style.visibility="hidden";
  // elementId=openContents
  document.getElementById(buttId).style.visibility="hidden";
  document.getElementById(elementId).style.opacity="0";
  setTimeout(function(){document.getElementById(elementId).style.visibility="hidden";},500)
  //all parameters?
}

function closeContents(){
  document.getElementById("contentsExit").style.visibility="hidden";
  document.getElementById(openContents).style.opacity="0";
  setTimeout(function(){document.getElementById(openContents).style.visibility="hidden";openContents=""},500)
}

function contentsShow(contents){
  if (openContents!=""){
    document.getElementById(openContents).style.visibility="hidden";
    document.getElementById(openContents).style.opacity="0";
  }
  openContents=contents
  // document.getElementById("clickBlocker").style.visibility="visible";
  document.getElementById(contents).style.visibility="visible";
  document.getElementById(contents).style.opacity="1";
  document.getElementById("contentsExit").style.visibility="visible";
  // document.getElementById("contentsButt").style.visibility="hidden";
}
