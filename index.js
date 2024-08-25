const matchupGuide=document.getElementById("matchupGuide");
const enemyChampion=document.getElementById("enemyChampion");
const assassinList=["Zed", "Fizz", "Qiyana"];
const controlMageList=["Syndra","Viktor","Orianna"];
const bruiserList=["Yasuo","Yone","Irelia"];
const tankList=["Malphite","Skarner","Warwick"];

function Assassin(name){
    this.name=name,
    this.type="assassin",
    this.play="play safe and stack your passive and outscale for late game teamfights."
}

function ControlMage(name){
    this.name=name,
    this.type="control mage",
    this.play="poke them out to help set up kill pressure when your jungler ganks."
}

function Bruiser(name){
    this.name=name,
    this.type="bruiser",
    this.play="avoid long fights while stacking your passive and poking them out."
}

function Tanks(name){
    this.name=name,
    this.type="tank",
    this.play="get the free farm and stack your passive to become a late game monster."
}

document.getElementById("guideButton").onclick = function() {
    const championName = enemyChampion.value;
    let guide;

    if (assassinList.includes(championName)) {
        const champion = new Assassin(championName);
        guide = `Since you are playing against ${champion.name}, a ${champion.type}, you should ${champion.play}`;
    } else if (controlMageList.includes(championName)) {
        const champion = new ControlMage(championName);
        guide = `Since you are playing against ${champion.name}, a ${champion.type}, you should ${champion.play}`;
    } else if (bruiserList.includes(championName)) {
        const champion = new Bruiser(championName);
        guide = `Since you are playing against ${champion.name}, a ${champion.type}, you should ${champion.play}`;
    } else if (tankList.includes(championName)) {
        const champion = new Tank(championName);
        guide = `Since you are playing against ${champion.name}, a ${champion.type}, you should ${champion.play}`;
    } else {
        guide = "Please enter a valid champion name.";
    }

    matchupGuide.textContent = guide;
};