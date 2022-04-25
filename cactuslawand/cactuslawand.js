var bot=5;
var botShad=5;
var left=50;

// var left=0;

//url parameters

var isKeyDown={
  "KeyW":false,
  "KeyS":false,
  "KeyA":false,
  "KeyD":false,
  "ArrowUp":false,
  "ArrowDown":false,
  "ArrowLeft":false,
  "ArrowRight":false,
}

//position of left
var posOutside={
  "peardoor":80,
  "librarydoor":10,
  "irodorimidoori":110,
  "workingdoor":-30,
}

var doorBot=60;
var cactusLeft=50;

var posThings={
  "sign":{
    bottom:55,
    left:50
  }
}

var sizes={
  cactus:{
    // h:document.getElementById("cactus").style.height,
    h:25,
    w:9.7 //found by trial and error
  },
  "peardoor":{
  // door:{
    h:30,
    w:10
  },
  "librarydoor":{
    h: 30,
    w: 10
  },
  "irodorimidoori":{
    h: 30,
    w: 10
  },
  "workingdoor":{
    h: 30,
    w: 10
  },
  "sign":{
    h:40,
    w:15
  },
}

// document.getElementById("cactus").style.height="25%"
// console.log(getComputedStyle(document.getElementById("cactus")).getPropertyValue("height"))
// console.log(sizes);

var positions=posOutside;

var doorLocations={
  "peardoor":"pearstall",
  "librarydoor":"library",
  "irodorimidoori":"irodorimidori",
  "workingdoor":"",
}

// document.addEventListener("load",function (event){
//   document.getElementById("blackscreen").style.visibility="visible";
//   document.getElementById("blackscreen").style.backgroundColor="none";
//   setTimeout(function(){document.getElementById("blackscreen").style.visibility="hidden";},250)
// })

function entryScreen(){
  setTimeout(function(){
    document.getElementById("blackscreen").style.transition="opacity 0.25s";
    document.getElementById("blackscreen").style.opacity="0";
  },0.000001)
  setTimeout(function(){document.getElementById("blackscreen").style.visibility="hidden";},250)
}

entryScreen()

// console.log(document.getElementById("backbot").style.left);
document.addEventListener("keydown",function (event){
  console.log(event.code);
  switch (event.code) {
    case "KeyW":
    case "ArrowUp":
      if (!isKeyDown[event.code]){
      goup();
      isKeyDown[event.code]=true}
      break;
    case "KeyS":
    case "ArrowDown":
      if (!isKeyDown[event.code]){
      godown();
      isKeyDown[event.code]=true}
      break;
    case "KeyA":
    case "ArrowLeft":
      if (!isKeyDown[event.code]){
      goleft();
      isKeyDown[event.code]=true}
      break;
    case "KeyD":
    case "ArrowRight":
      if (!isKeyDown[event.code]){
      goright();
      isKeyDown[event.code]=true}
      break;
    // default:

  }
  // console.log(event.key);
  // console.log(event.code);
})

document.addEventListener("keyup",function(event){
  // if (isKeyDown){
  // let code=event.code
  // console.log(isKeyDown.w);
  if (isKeyDown[event.code]){
    switch(event.code){
      case "KeyW":
      case "ArrowUp":
        endcontrol(timeu);
        break;
      case "KeyS":
      case "ArrowDown":
        endcontrol(timed);
        break;
      case "KeyA":
      case "ArrowLeft":
        endcontrol(timel);
        break;
      case "KeyD":
      case "ArrowRight":
        endcontrol(timer);
        break;}
    isKeyDown[event.code]=false;
    // console.log(isKeyDown[event.code]);
}})

function closeControls(){
  document.getElementById("controls").style.visibility="hidden";
}

function goup(){
  // console.log(document.getElementById("cactus").style.left)
  document.getElementById("cactus").src="cactusback.png";
  function collisionDetectThingsUp(){
    for (let key in posThings){
      // console.log(collisionDetectThings(key));
      // console.log(bot+1+sizes.cactus.h-24<=posThings[key]["bottom"]);
      if (collisionDetectThings(key)/*&&bot+sizes.cactus.h-24==posThings[key]["bottom"]*/){
        collisionFlags.up=true
        return true
      }else{
        collisionFlags.up=false
      }
    }
    return false
  }
  timeu=setInterval(frame,50)
  function frame(){
    // console.log(collisionDetectThingsUp()+"up");
    // collisionDetectThingsUp()
    bot++;
    if (bot<70&&/*!collisionFlags.up*/!collisionDetectThingsUp()/*&&!collisionDetectThingsUp()*/){
    // bot++;
    document.getElementById("cactus").style.bottom=bot+"%";
    botShad++;
    document.getElementById("shadow").style.bottom=botShad+"%";
    for (let key in positions){
      collisionDetectDoor(key)
    }
    for (let key in posThings){
      collisionDetectThingsZIndex(key)
    }
  }else{
    bot--
  }
}}

function endcontrol(time){
  clearInterval(time);
  // clearInterval(time);
}

// var endcontroll={
//   "KeyW": endcontrol(timeu),
//   "KeyS": endcontrol(timed),
//   "KeyA": endcontrol(timel),
//   "KeyD": endcontrol(timer),
// }

function godown(){
  document.getElementById("cactus").src="cactus.png";
  timed=setInterval(frame,50)
  function collisionDetectThingsDown(){
    for (let key in posThings){
      if (collisionDetectThings(key)&&collisionsThings.down(key)){
        return true
      }
    }
    return false
  }
  function frame(){
    bot--;
    if (bot>1&&!collisionDetectThingsDown()/*&&!collisionDetectThingsDown()*//*&& !collisiondown is a hit (this means if collision down isn't a hit, can still move down, if other collision is made)*/){
    // bot--;
    document.getElementById("cactus").style.bottom=bot+"%";
    botShad--;
    document.getElementById("shadow").style.bottom=botShad+"%";
    for (let key in posThings){
      collisionDetectThingsZIndex(key)
    }
  }else{
    bot++
  }
}}

function goleft(){
  // console.log(document.getElementById("backbot").style.left);
  document.getElementById("cactus").src="cactussidel.png";
  function collisionDetectThingsLeft(){
    for (let key in posThings){
      // console.log(collisionDetectThings(key));
      // console.log(collisionsThings.left(key));
      if (collisionDetectThings(key)&&collisionsThings.left(key)){
        return true
      }
    }
    return false
  }
  timel=setInterval(frame,50)
  function frame(){
    left++;
    for (let key in positions){
      // console.log(key)
      positions[key]=positions[key]+1;
    }
    // console.log(positions)
    for (let key in posThings){
      posThings[key]["left"]=posThings[key]["left"]+1
    }
    if (left<150&&!collisionDetectThingsLeft()/*&&!collisionDetectThingsLeft()*/){
      // left++;
      document.getElementById("backbot").style.left=left+"%";
      // positions.peardoor++;
      // document.getElementById("peardoor").style.left=positions.peardoor+"%";
      // for (let key in positions){
      //   // console.log(key)
      //   positions[key]=positions[key]+1;
      //   document.getElementById(key).style.left=positions[key]+"%";
      //   collisionDetectDoor(key)
      // }
      // // console.log(positions)
      // for (let key in posThings){
      //   posThings[key]["left"]=posThings[key]["left"]+1
      //   document.getElementById(key).style.left=posThings[key]["left"]+"%";
      // }
      for (let key in positions){
        document.getElementById(key).style.left=positions[key]+"%";
        collisionDetectDoor(key)
      }
      for (let key in posThings){
        document.getElementById(key).style.left=posThings[key]["left"]+"%";
      }
    }else{
      left--;
      for (let key in positions){
        // console.log(key)
        positions[key]=positions[key]-1;
      }
      // console.log(positions)
      for (let key in posThings){
        posThings[key]["left"]=posThings[key]["left"]-1;
      }
    }
}}

function goright(){
  document.getElementById("cactus").src="cactussider.png";
  function collisionDetectThingsRight(){
    for (let key in posThings){
      // console.log(collisionDetectThings(key));
      // console.log(collisionsThings.left(key));
      if (collisionDetectThings(key)&&collisionsThings.right(key)){
        return true
      }
    }
    return false
  }
  timer=setInterval(frame,50)
  function frame(){
    left--;
    for (let key in positions){
      positions[key]=positions[key]-1;
    }
    for (let key in posThings){
      posThings[key]["left"]=posThings[key]["left"]-1
    }
    if (left>-50&&!collisionDetectThingsRight()/*&&!collisionDetectThingsRight()*/){
    // left--;
    document.getElementById("backbot").style.left=left+"%";
    // for (let key in positions){
    //   // console.log(key)
    //   positions[key]=positions[key]-1;
    //   document.getElementById(key).style.left=positions[key]+"%";
    //   collisionDetectDoor(key)
    // }
    // for (let key in posThings){
    //   posThings[key]["left"]=posThings[key]["left"]-1
    //   document.getElementById(key).style.left=posThings[key]["left"]+"%";
    // }
    for (let key in positions){
      document.getElementById(key).style.left=positions[key]+"%";
      collisionDetectDoor(key)
    }
    for (let key in posThings){
      document.getElementById(key).style.left=posThings[key]["left"]+"%";
    }
  }else{
    left++;
    for (let key in positions){
      positions[key]=positions[key]+1;
    }
    for (let key in posThings){
      posThings[key]["left"]=posThings[key]["left"]+1
    }
  }
}}

// function collisionDetect(){
//   let key="peardoor"
//   // for (let key in positions){
//     if ((bot)||)
//   // }
// }

function collisionDetectDoor(key){
  // console.log(collisions.up(key));
  // console.log(collisions.left(key))
  // console.log(collisions.right(key))
  if (collisionsDoor.up(key)&&collisionsDoor.left(key)&&collisionsDoor.right(key)){
    // console.log("true collision")
    document.getElementById("blackscreen").style.visibility="visible";
    document.getElementById("blackscreen").style.opacity="1";
    setTimeout(function(){location.assign(doorLocations[key])},250)
  }
}

var collisionsDoor={
  up: function (key){
    // console.log(bot+sizes.cactus.h);
    // console.log(positions[key]);
    if (bot+sizes.cactus.h>=doorBot+20/*make it more 3d realistic*/){
      // console.log("collision detected up")
      return true
      // location.assign("pearstall/pearstall.html")
      // probably do a transition, it is too abrupt
      //also on re-entry from building, placement needs to be recorded (not sure how yet)
    }
  },
  // down:,
  left: function (key){
    // console.log(50)
    // console.log(positions["peardoor"]+sizes.peardoor.w);
    if (positions[key]+sizes[key].w-(sizes[key].w/2/*the offset from translate(-50%)*/)-1/*to make it look neater*/>=cactusLeft-(sizes.cactus.w/2)){
      // console.log("collision detected left")
      return true
    }
  },
  right: function(key){
    if (positions[key]-(sizes[key].w/2/*the offset from translate(-50%)*/)+1/*to make it look neater*/<=cactusLeft+sizes.cactus.w-(sizes.cactus.w/2)){
      // console.log("collision detected right")
      return true
    }
  },
  // bottom:function(key){
  //   if (bot+sizes.cactus.h>=doorBot+20){
  //     return true
  //   }
  // }
}

var collisionFlags={
  up:false,
  down:false,
  left:false,
  right:false
}

function collisionDetectThingsZIndex(key){
  // console.log(bot);
  // console.log(posThings[key]["bottom"]);
  if (bot>=posThings[key]["bottom"]){
    document.getElementById(key).style.zIndex="1"
  }
  else{
    document.getElementById(key).style.zIndex="0"
  }
}

function collisionDetectThings(key){
  if (collisionsThings.up(key)&&collisionsThings.down(key)&&collisionsThings.left(key)&&collisionsThings.right(key)){
    return true
  }else{
    return false
  }
}

function collisionDetectAllThings(){
  // console.log(collisionDetectThings());
  for (let key in posThings){
    if (collisionDetectThings(key)){
      return true
    }
  }
  return false
}

var collisionsThings={
  up: function(key){
    if (bot+sizes.cactus.h-24>=posThings[key]["bottom"]){
      return true
    }
    else{
      return false
    }
  },
  down: function(key){
    if (bot-1<=posThings[key]["bottom"]){
      return true
    }
    else{
      return false
    }
  },
  left: function(key){
    if (posThings[key]["left"]+sizes[key].w-(sizes[key].w/2)-1>=cactusLeft-(sizes.cactus.w/2)){
      return true
    }
    else{
      return false
    }
  },
  right: function(key){
    if (posThings[key]["left"]-(sizes[key].w/2)+1<=cactusLeft+sizes.cactus.w-(sizes.cactus.w/2)){
      return true
    }
    else{
      return false
    }
  }
}
