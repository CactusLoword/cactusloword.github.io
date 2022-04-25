
import * as stories from "../stories.js";

var anime={
  "Episode 1: Getting Everyone Together!":"ep1.txt",
  "Episode 2: Getting the Words Together!":"ep2.txt",
  "Episode 3: Getting Motivated!":"ep3.txt",
  "Episode 4: Getting the Song's Title!":"ep4.txt",
  "Episode 5: Getting an Ominous Paper!":"ep5.txt",
  "Episode 6: Getting our Pyjamas!":"ep6.txt",
  "Episode 7: Getting to our Performance!":"ep7.txt",
  "Episode 8: Getting the Extra Credit!":"ep8.txt"
}

var music={
  "Part 1: Irodorimidori":"irodorimidori.txt",
  "Part 2: HaNaMiNa":"limits.txt",
  "Part 3: S.S.L.":"ssl.txt",
  "Limits by SSL":"limits.txt",
  "Blueprint by HaNaMiNa":"blueprint.txt",
  "NewStartでReadyGo! by Serina, Aliciana and Nazuna":"newstart.txt"
}


var listStory={
  "animelist":anime,
  "musiclist":music
}

var storyNames={
  "storyNameAnime":"Irodorimidori Anime Reviews",
  "storyNameMusic":"Irodorimidori Review Saga"
}

stories.entryScreen()
stories.contentsSetup("animelist",storyNames,listStory/*,pearChapters*/,"storyNameAnime"/*,"physics/desc.txt"*/,"anime/")
stories.contentsSetup("musiclist",storyNames,listStory/*,pearChapters*/,"storyNameMusic"/*,"chemistry/desc.txt"*/,"music/")
