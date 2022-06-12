
import * as stories from "../stories.js";

var physics={
  "Matter and Radiation":"matter.txt",
  "Quarks and Leptons":"quarks.txt",
  "Quantum Phenomena":"phenomena.txt",
  "Mechanics: Forces in equilibrium":"equilibrium.txt",
  "Waves":"waves.txt",
  "Mechanics in motion":"motion.txt",
  "Optics":"optics.txt",
  "Electricity":"electricity.txt",
  "Force and Momentum":"momentum.txt",
  "Newton's Laws":"newton.txt",
  "Work, Energy and Power":"enerpow.txt",
}

// console.log(physics["Waves"]);
// for(let key in physics){
//   physics[key]="physics/"+physics[key]
// }
// console.log(physics["Waves"])

var chemistry={
  "Chapter 2: Ions, atoms and compounds":"chap2.txt",
  "Chapter 3: Amount of substance":"chap3.txt",
  "Chapter 4: Acids and Redox":"chap4.txt",
  "Chapter 5: Electrons and Bonding":"chap5.txt",
  "Chapter 6: Shapes of molecules and intermolecular forces":"chap6.txt",
  "Chapter 7: Periodicity":"chap7.txt",
  // "Chapter 8: ":"chap8.txt",
  "Chapter 9: Enthalpy":"chap9.txt",
  "Chapter 10: Rates of Reaction":"chap10.txt",
  // "Chapter 11: Basic Concepts of Organic Chemistry":"chap11.txt",
  "Chapter 12: Alkanes":"chap12.txt",
  "Chapter 13: Alkenes":"chap13.txt",
  "Chapter 14: Alcohols":"chap14.txt",
  "Chapter 15: Haloalkanes":"chap15.txt",
}

// for(let key in chemistry){
//   chemistry[key]="chemistry/"+chemistry[key]
// }

var computing={
  "Hardware":"hardware.txt",
  "Software":"software.txt",
  "Algorithms and Programming":"prog.txt",
  // "Data types":"",
}

var maths={
  "Trig and Vectors":"trig.txt",
  "Differentiation":"differentiation.txt",
  "Algebra and functions":"algebra.txt",
  "Exponentials and Logarithms":"explog.txt",
  "Kinematics":"kinematics.txt",
  "Transforming/ sketching graphs":"transformers.txt",
  // "Proof":"",
  // "Integration":"",
  // "Sampling":"",
}

var listStory={
  "physlist":physics,
  "chemlist":chemistry,
  "complist":computing,
  "mathslist":maths
}

var storyNames={
  "storyNamePhys":"Physics Reviews",
  "storyNameChem":"Chemistry Reviews",
  "storyNameComp":"Computing Reviews",
  "storyNameMaths":"Maths Reviews"
}

stories.entryScreen()
stories.contentsSetup("physlist",storyNames,listStory/*,pearChapters*/,"storyNamePhys"/*,"physics/desc.txt"*/,"physics/")
stories.contentsSetup("chemlist",storyNames,listStory/*,pearChapters*/,"storyNameChem"/*,"chemistry/desc.txt"*/,"chemistry/")
stories.contentsSetup("complist",storyNames,listStory/*,pearChapters*/,"storyNameComp"/*,"computing/desc.txt"*/,"computing/")
stories.contentsSetup("mathslist",storyNames,listStory/*,pearChapters*/,"storyNameMaths"/*,"maths/desc.txt"*/,"maths/")
