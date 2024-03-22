// random encounters/ varied by regions - add some monsters to default, add defaults to nondefault as well
// cult generator
// make sure half the encounters are creatures
// ghoul
// add arcane catastrophes from: fatal, GURPS magic and thaumatology, Dark Heresy, WFRP, Dungeon Crawl Classics
// add animals (from travel rules)
// pale one class - have the appropriate name generators
// monsters from death temple sztun
// monsters from my owne dungeons
// elf names
// dwarf names
//those adventure prompts from mork borg rulebook

//divide MB weapons into damage classes and roll accordingly (to enable to add more weapon types)

import {
 maleSlavicNames,
 maleRussianNames,
 WHFMaleHumanNames,
 crusaderNames,
 commonerNames
} from "./names.js";


const generateButton = document.getElementById("generate-button");
const nameDisplay = document.getElementById("name-display");
const categoryPicker = document.getElementById("kategoria");
const numberPicker = document.getElementById("liczba");
const formContainer = document.getElementById("form-container");
const selectColumn = document.getElementById("select-column");
let pickedClass = null; //can also be later used as any secondary option for generating, as only one can be used at a time

const MBCharacterClassPicker = document.createElement("select");

function updatePickedClass() {
  if (MBCharacterClassPicker.value === "Losowa klasa") {
    pickedClass = "Losowa klasa";
  } else {
    pickedClass = MBClasses.list.find((charClass) => {
      return charClass.characterClassName === MBCharacterClassPicker.value;
    });
  }
}

function updateSecondarySelectStatus() {
  if (categoryPicker.value === "MBCharacter") {
    function addOption(displayedName, valueIfDifferent) {
      let option = document.createElement("option");
      option.text = displayedName;
      option.value = displayedName;
      MBCharacterClassPicker.appendChild(option);
    }
    //formContainer.insertBefore(MBCharacterClassPicker, nameDisplay)
    selectColumn.appendChild(MBCharacterClassPicker);
    MBCharacterClassPicker.classList.add("input");
    ///
    MBCharacterClassPicker.classList.add("form-select");
    ///
    addOption("Postać bezklasowa");
    addOption("Losowa klasa");
    addOption("Bladawiec");
    addOption("Ezoteryczny pustelnik");
    addOption("Hardy kowal");
    addOption("Heretycki kapłan");
    addOption("Kleryk");
    addOption("Mag");
    addOption("Okultystyczny zielarz");
    addOption("Prorok martwego boga");
    addOption("Przeklęta ofiara");
    addOption("Przeklęty zmiennokształtny");
    addOption("Rynsztokowa szumowina");
    addOption("Upadły arystokrata");
    addOption("Wojownik");
    addOption("Świętokradczy śpiewak");
    addOption("Zapomniany filozof");
    addOption("Zębaty dezerter");
    addOption("Złodziej");
    MBCharacterClassPicker.addEventListener("click", () => {
      // if (MBCharacterClassPicker.value === 'Losowa klasa') {
      //   pickedClass = 'Losowa klasa'
      // } else {
      //   pickedClass = MBClasses.list.find((charClass) => { return charClass.characterClassName === MBCharacterClassPicker.value })
      // }
      updatePickedClass();
    });
    MBCharacterClassPicker.addEventListener("change", () => {
      updatePickedClass();
      removeAllChildren(nameDisplay);
    });
  } else {
    removeAllChildren(MBCharacterClassPicker);
    MBCharacterClassPicker.remove();
  }
}

categoryPicker.addEventListener("change", (e) => {
  document.getElementsByTagName("footer")[0].classList.add("invisible");
  removeAllChildren(nameDisplay);
  updateSecondarySelectStatus();
});

function updatePick() {
  category = categoryPicker.value;
  numberGenerated = numberPicker.value;
}

let numberGenerated = 20;
let category = "crusaderNames";

function k(sides, exploding = false) {
  let result = Math.floor(Math.random() * sides) + 1;
  if (exploding === true) {
    if (result === sides) {
      result = result + k(sides, true);
    }
  }

  return result;
}

function rollDFourDropLowest(){
  let rolls = [k(6), k(6), k(6), k(6)]
  rolls.sort().shift()
  return rolls.reduce((a, b) => a + b)
}

rollDFourDropLowest()

class Roll {
  constructor(result) {
    this.result = result;
  }
}

const medievalProfessions = {
  type: "picker",
  list: [
    "Aktor",
    "Alchemik",
    "Aptekarz",
    "Architekt",
    "Astrolog",
    "Bajarz",
    "Bankier",
    "Bednarz",
    "Biurokrata",
    "Blacharz",
    "Browarnik",
    "Brukarz",
    "Chirurg",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Chłop",
    "Cieśla",
    "Cieśla okrętowy",
    "Cyrulik",
    "Dmuchacz szkła",
    "Dozorca więzienny",
    "Dragoman",
    "Drobiarz",
    "Druciarz",
    "Drwal",
    "Emalier",
    "Farbiarz",
    "Folusznik",
    "Garbarz",
    "Garncarz",
    "Gipsiarz",
    "Gliptyk",
    "Goniec",
    "Górnik",
    "Grabarz",
    "Grawer",
    "Gręplarz",
    "Grotnik",
    "Guwerner",
    "Hafciarz",
    "Handlarz uliczny",
    "Harfiarz",
    "Hazardzista",
    "Herold",
    "Hodowca psów",
    "Ilustrator",
    "Introligator",
    "Inżynier",
    "Jubiler",
    "Kamieniarz",
    "Kapelusznik",
    "Karczmarz",
    "Kłusownik",
    "Kołodziej",
    "Koniuszy",
    "Konwisarz",
    "Kopista",
    "Korepetytor",
    "Koszykarz-plecionkarz",
    "koszykarz-plecionkarz ",
    "Kotlarz",
    "Kowal",
    "Krawiec",
    "Kucharz",
    "Kupiec bławatny",
    "Kupiec winny",
    "Kupiec żelazny",
    "Kurier",
    "Kuśnierz",
    "Leśnik",
    "Ludwisarz",
    "Lutnik",
    "Łuczarz",
    "Majordomus",
    "Malarz",
    "Mamka",
    "Marynarz",
    "Mędrzec",
    "Miecznik",
    "Mincerz",
    "Minstrel",
    "Miotlarz",
    "Młynarz",
    "Mosiężnik",
    "Murarz",
    "Nadzorca służby",
    "Nawigator",
    "Nosiwoda",
    "Notariusz",
    "Nożownik",
    "Ogrodnik",
    "Opój",
    "Oracz",
    "Owczarz",
    "Pachołek",
    "Pasterz",
    "Pasterz kóz",
    "Pastuch",
    "Piekarz",
    "Pijak",
    "Pilśniarz",
    "Pisarz",
    "Płatnerz",
    "Płytkarz",
    "Poborca podatkowy",
    "Podkuwacz",
    "Poeta",
    "Położnik",
    "Pomywacz",
    "Poseł",
    "Posłaniec",
    "Posługacz",
    "Powroźnik",
    "Praczka",
    "Prostytutka",
    "Przewodnik",
    "Radca prawny",
    "Rękawicznik",
    "Robotnik",
    "Rybak",
    "Rymarz",
    "Rytownik",
    "Rzeźbiarz",
    "Rzeźnik",
    "Serowar",
    "Skalnik",
    "Sklepikarz",
    "Skryba",
    "Sługa",
    "Służący",
    "Smolarz",
    "Snycerz",
    "Sokolnik",
    "Solarz",
    "Sprzedawca Ryb",
    "Stajenny",
    "Stawiacz pijawek",
    "Stolarz",
    "Strażnik więzienny",
    "Strzecharz",
    "Sukiennik",
    "Szczurołap",
    "Szewc",
    "Szklarz",
    "Szlifierz",
    "Szmaciarz",
    "Szmuklerz",
    "Szpachlarz",
    "Szpieg",
    "Szwaczka",
    "Ślusarz",
    "Świecarz",
    "Świniopas",
    "Tkacz",
    "Tłumacz",
    "Tokarz",
    "Tragarz",
    "Tragarz portowy",
    "Traper",
    "Trębacz",
    "Tynkarz",
    "Uczony",
    "Urzędnik",
    "Winiarz",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Wolny chłop",
    "Woźnica",
    "Wychowawca",
    "Wypalacz wapna",
    "Zabójca",
    "Zbrojmistrz",
    "Zegarmistrz",
    "Zielarz",
    "Złotnik",
    "Żebrak",
    "Żeglarz",
    "Akolita",
    "Banita",
    "Berserker",
    "Pirat",
    "Ciura obozowa",
    "Cyrkowiec",
    "Fanatyk",
    "Flisak",
    "Giermek",
    "Gladiator",
    "Guślarz",
    "Hiena cmentarna",
    "Kanciarz",
    "Kozak",
    "Łowca",
    "Łowca nagród",
    "Mieszczanin",
    "Mytnik",
    "Najemnik",
    "Ochotnik",
    "Ochroniarz",
    "Oprych",
    "Paź",
    "Podżegacz",
    "Porywacz zwłok",
    "Przemytnik",
    "Przepatrywacz",
    "Tropiciel",
    "Przewoźnik",
    "Rzecznik rodu",
    "Rzemieślnik",
    "Rzezimieszek",
    "Strażnik dróg",
    "Strażnik pól",
    "Strażnik miejski",
    "Szlachcic",
    "Szermierz",
    "Śmieciarz",
    "Tarczownik",
    "Uczeń",
    "Węglarz",
    "Uczeń czarodzieja",
    "Włóczykij",
    "Zabójca bestii",
    "Zarządca",
    "Złodziej",
    "Żak",
    "Żołnierz",
    "Żołnierz okrętowy",
    "Bartodziej",
    "Pasiecznik",
    "Łagiewnik",
    "Brązownik",
    "Bursztynnik",
    "Bursztyniarz",
    "Cukiernik",
    "Cienietnik",
    "Fajkarz",
    "Dziewiarz",
    "Dekarz",
    "Giser",
    "Iluminator",
    "Iskarz",
    "Kaletnik",
    "Karpiniarz",
    "Kartownik",
    "Kominiarz",
    "Korabnik",
    "Szkutnik",
    "Koronkarz",
    "Malarz szkła",
    "Witrażysta",
    "Modysta",
    "Obraźnik",
    "Organmistrz",
    "Organista",
    "Partacz",
    "Pozłotnik",
    "Pszczelarz",
    "Bartnik",
    "Rogownik",
    "Strycharz",
    "Cegielnik",
    "Szczytnik",
    "Szłomnik",
    "Tapicer",
    "Kat"
  ],
};





let MBMonsters = {
  // monster monsters potwory
  type: "picker",
  list: [],
};

class MBMonster {
  constructor(nazwa, HP, morale, pancerz, broń, specjalneCechy) {
    this.nazwa = nazwa;
    this.HP = HP;
    this.morale = morale;
    this.pancerz = pancerz;
    this.broń = broń;
    this.specjalneCechy = specjalneCechy;
  }
}

function createAndAddMonster({
  keyName,
  nazwa = "",
  HP = "",
  morale = "-",
  pancerz = "",
  broń = "nieuzbrojony k2",
  specjalneCechy = "",
}) {
  const newMonster = new MBMonster(
    nazwa,
    HP,
    morale,
    pancerz,
    broń,
    specjalneCechy,
  );
  MBMonsters = {
    ...MBMonsters,
    ...{ [keyName]: newMonster },
  };
  let description = `${nazwa} - HP: ${HP}, Morale: ${morale}, pancerz: ${pancerz}, ${broń} ${specjalneCechy}`
  MBMonsters.list.push(
    description
  );
  newMonster.description = description
  newMonster.keyName = keyName
  MBMonsterObjects.list.push(
    newMonster
  );

}

let MBMonsterObjects = {
  type: "picker",
  list: []
}

createAndAddMonster({
  keyName: "underpaidTiredGuard",
  nazwa: "Źle opłacany, zmęczony strażnik",
  HP: "5",
  morale: "7",
  pancerz: "Skóra -k2",
  broń: "Prosta broń k4 lub k6",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "weakMindlessUndead",
  nazwa: "Słaby, bezmyślny nieumarły",
  HP: "4",
  morale: "-",
  pancerz: "Bezużyteczne szmaty",
  broń: "Pięść k4 lub topór k6",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "innocentBystander",
  nazwa: "Niewinny postronny",
  HP: "3",
  morale: "5",
  pancerz: "brak",
  broń: "Desperackie machanie k2",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "kobolth",
  nazwa: "Kôbôlth",
  HP: "2",
  morale: "-",
  pancerz: "brak",
  broń: "Prowizoryczny nóż k4, test DR12 na odporność albo infekcja",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "duskGnoum",
  nazwa: "Mroczny Gnoum",
  HP: "4",
  morale: "7",
  pancerz: "brak",
  broń: "Nóż k4",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "mongrel",
  nazwa: "Masywny czarny pies ze skołtunionym futrem",
  HP: "8",
  morale: "9",
  pancerz: "brak",
  broń: "Ugryzienie k4+1, test DR12 na odporność albo infekcja",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "nestingDeath",
  nazwa: "Pająk wielkości dużego psa",
  HP: "12",
  morale: "-",
  pancerz: "Gruby karapaks -k2",
  broń: "Ugryzienie k4, test DR12 na odporność albo zesztywnienie (testy mają +2 DR przez godzinę)",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "fleshEatingMonster",
  nazwa: "Mięsożerny potwór",
  HP: "8",
  morale: "8",
  pancerz: "Gruba skóra -k2",
  broń: "Ugryzienie k4 + infekcja (2/6)",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "clawsEyesSpideryLegs",
  nazwa: "Szpony, oczy, pajęcze nogi",
  HP: "12",
  morale: "-",
  pancerz: "chityna -k4",
  broń: "Szpony k6 (obrona DR14)",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "mutatedTombRobber",
  nazwa: "Zmutowany rabuś grobowców",
  HP: "13",
  morale: "9",
  pancerz: "Dziwne ciało -k4",
  broń: "Długi ostry nóż k6",
  specjalneCechy: "",
}); // daj do graven-tosk
createAndAddMonster({
  keyName: "antiArcaneLichQueen",
  nazwa: "Antymagiczna królowa liczy",
  HP: "24",
  morale: "-",
  pancerz: "Nekro-pole -k4",
  broń: "Okkültystyczny cios k8",
  specjalneCechy: "Pożera moce",
}); // daj do graven-tosk
createAndAddMonster({
  keyName: "corruptedWarlord",
  nazwa: "Spaczony wódz",
  HP: "20",
  morale: "11",
  pancerz: "Czarny metal -k6",
  broń: "Kolczasty zweihänder k10",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "daemon",
  nazwa: "Dæmon",
  HP: "24",
  morale: "-",
  pancerz: "Niczym powietrze -k8",
  broń: "Dotyk entropii k6",
  specjalneCechy: "-2 siły/cios",
});
createAndAddMonster({
  keyName: "goblin",
  nazwa: "Goblin",
  HP: "6",
  morale: "7",
  pancerz: "Twarda skóra -k2",
  broń: "Nóż/krótki łuk k4",
  specjalneCechy:
    "Szybki, atak i obrona DR14, jeśli nie zostanie zabity, ten kogo atakował po k6 dniach sam zmieni się w goblina. Warość: głowa 7s, złapany 150s, martwy 20s",
});
createAndAddMonster({
  keyName: "scum",
  nazwa: "Szumowina",
  HP: "7",
  morale: "8",
  pancerz: "brak",
  broń: "Zatruty nóż k4 + infekcja (DR10 Odporność)",
  specjalneCechy:
    "BG z najwyższą prezencją robi test DR14 na początku walki, porażka oznacza, że losowy członek drużyny został trafiony podstępnym ciosem w plecy +3 do obrażeń. Wartość: złapany (winny poważnej) zbrodni 50-120s, martwy (winny poważnej zbrodni) 20-70s.",
});
createAndAddMonster({
  keyName: "berserker",
  nazwa: "Berserker",
  HP: "13",
  morale: "9",
  pancerz: "Stwardniała skóra -k2",
  broń: "k4: 1. Długi korbacz k8, ciężka buława k6, miecz na łańcuchu k6, ogromny młot bojowy k10",
  specjalneCechy:
    "Atakuje dwukrotnie na rundę, ale nie trudzi się obroną (DR10 na trafienie). Wartość: złapany 55s, martwy 20s, krew (1l) 3s.",
});
createAndAddMonster({
  keyName: "shadowCreature",
  nazwa: "Istota cienia",
  HP: "18",
  morale: "10",
  pancerz: "Bezcielesność -k4",
  broń: "Dotyk entropii k6",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "wraith",
  nazwa: "Upiór",
  HP: "15",
  morale: "-",
  pancerz: "brak",
  broń: "Dotyk k4 + wysysanie sił",
  specjalneCechy:
    "Szybkie, ulotne i trudne do trafienia (DR14). Te bezcielesne zjawy zawsze wygrywają inicjatywę. Ich dotyk wysysa Siłę, Prezencję i Inicjatywę, zmniejszając je o 1 do końca walki. Wartość: złapany 120s, czaszka 70s, ektoplazma 25s.",
});
createAndAddMonster({
  keyName: "bloodDrenchedSkeleton",
  nazwa: "Krwawy szkielet",
  HP: "7",
  morale: "8",
  pancerz: "brak",
  broń: "Krótki miecz lub nóż k4, kościste palce k2",
  specjalneCechy:
    "Porusza się bezgłośnie, potrafi naśladować głosy, ale tylko słowa, które słyszał. Ataki bronią kłutą mają DR14. Atak zadający 5 lub więcej obrażeń niszczy szkielet kompletnie. Wartość: złapany 35s, zniszczony 7s.",
});
createAndAddMonster({
  keyName: "undeadNecromancer",
  nazwa: "Nieumarły Nekromanta",
  HP: "15",
  morale: "-",
  pancerz: "Nekrobariera -k4",
  broń: "Cios k6",
  specjalneCechy:
    "Paraliżujący dotyk DR14 na Prezencję, żeby się ocknąć. Co runę może wykraść zawartość pobliskiego zwoju i użyć jego zawartość przeciwko właścicielowi. Wartość: złapany 200s, zwłoki 130s, czaszka 100s.",
});
createAndAddMonster({
  keyName: "troll",
  nazwa: "Troll",
  HP: "32",
  morale: "specjalne",
  pancerz: "Gruba skóra -k2",
  broń: "Pięść 2k6",
  specjalneCechy:
    "Tchórz pomimo rozmiaru, mocno zraniony ucieka.Nigdy nie zapomina, kto go skrzywdził. Podczas leczenia rośnie i powraca silniejszy niż wcześniej. Wyleczone HP dodawane jest do maksymalnego. Z każdym powrotem zyskuje też k6 do obrażeń. Wartość: złapany 200s, martwy 70s, róg 25s.",
});
createAndAddMonster({
  keyName: "zombie",
  nazwa: "Zombie",
  HP: "7",
  morale: "-",
  pancerz: "Skórzane pozostałości -k2",
  broń: "Drapnięcie/Ugryzienie k2",
  specjalneCechy:
    "Każdy kto zostanie ugryziony robi test DR8 na Odporność, porażka oznacza, że po dwóch dniach ginie i powstaje jako zombie. Wartość: złapany 30s, krew/l 5s",
});
createAndAddMonster({
  keyName: "undeadDoll",
  nazwa: "Nieumarła Lalka",
  HP: "11",
  morale: "-",
  pancerz: "Porcelana -k2",
  broń: "Szpony/przeszywające ugryzienie k4",
  specjalneCechy:
    "Przerażające spojrzenie: test na Prezencję DR12 na początku walki, porażka oznacza paraliżujący strach przez k4 rundy. Wartość: złapana 80s, głowa 20s.",
});
createAndAddMonster({
  keyName: "grotesque",
  nazwa: "Gargulec",
  HP: "18",
  morale: "-",
  pancerz: "Glina/kamień -k6",
  broń: "Szpony k6, promień z oczu k8",
  specjalneCechy:
    "Wtapiają się w otoczenie i ciężko je dostrzec. Poruszają się powoli i łatwo je trafić (DR10). Ich przerażający wzrok atakuje 1-2/6, zawsze trafia. Wartość: złapany 190s, martwy (cały) 100s, martwy (w kawałkach) 10s.",
});
createAndAddMonster({
  keyName: "wickheadKnifeWielder",
  nazwa: "Knotogłowy nożownik",
  HP: "10",
  morale: "7",
  pancerz: "brak",
  broń: "Nóż z zaschniętą krwią k4 - 1/4 szansy na infekcję",
  specjalneCechy:
    "Zakrada się do wrogów, cichy jak grób. 25% szans, że jego niesamowicie brudny nóż wywoła infekcję. Potrafi magicznie zgasić wszelkie okoliczne źródła światła, zapalić własną oślepiającą lampę i zaatakować, by następnie zniknąć w ciemnościach. Wartość: złapaty 60s, zdekapitowana latarnia 15s, zwłoki 20s.",
});
createAndAddMonster({
  keyName: "wyvern",
  nazwa: "Wiwerna",
  HP: "25",
  morale: "10",
  pancerz: "Gruba skóra -k4",
  broń: "Ugryzienie/użądlenie k6",
  specjalneCechy:
    "60% szansy, że ugryzie. Jadowite żądło może sparaliżować ofiarę - test DR14 aby uniknąć bolesnej godziny paraliżu. Wartość: złapana 200s, zwłoki 100s, gruczoł jadowy 60s, kolec ogonowy 60s",
});
createAndAddMonster({
  keyName: "earthbound",
  nazwa: "Kundlak",
  HP: "8",
  morale: "7",
  pancerz: "brak",
  broń: "Laska/kość udowa k4",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "wildWickhead",
  nazwa: "Dziki knotogłowy",
  HP: "10",
  morale: "7",
  pancerz: "brak",
  broń: "nóż k4",
  specjalneCechy: "",
});
createAndAddMonster({
  keyName: "paleOne",
  nazwa: "Bladawiec",
  HP: "5",
  morale: "8",
  pancerz: "brak",
  broń: "bezbronny k2",
  specjalneCechy: "50% szansy, że może raz dziennie użyć losowej mocy.",
});
createAndAddMonster({
  keyName: "prowler",
  nazwa: "Włóczęga",
  HP: "8",
  morale: "8",
  pancerz: "Skórznia -k2",
  broń: "Nóż/kość udowa k4, okazjonalnie brudny krótki miecz k4+1",
  specjalneCechy: "",
});
// createAndAddMonster({keyName: "", nazwa : "", HP : "", morale : "-", pancerz : "brak", broń : "", specjalneCechy : ""});

let MBUncleanScroll = {
  type: "picker",
  list: [
    "Dłonie Otwierają Południową Bramę (przeklęty zwój) - kula ognia trafia k2 istoty zadając każdej z nich k8 obrażeń",
    "Język Eris (przeklęty zwój) - wybrana przez ciebie istota jest zdezorientowana przez 10 minut",
    "Te-le-kin-eza (przeklęty zwój) - przesuwasz przedmioty do k4x4 metry przez k6 minut",
    "Lucy-ferna Lewitacja (przeklęty zwój) - unosisz się przez Skupienie +k10 rund",
    "Demon Żył (przeklęty zwój) - jedna istota dusi się przez k6 rund, tracąc k4 HP na rundę",
    "Dziewięć Purpurowych Znaków Rozplątuje Burzę (przeklęty zwój) - tworzysz k2 pioruny po k6 obrażeń każdy",
    "Metzhuotl Oślepia Twoje Oko (przeklęty zwój) - istota staje się niewidzialna przez k6 rund lub dopóki otrzyma obrażenia, atakuje i broni się z DR6",
    "Odrażający Psychopomp (przeklęty zwój) - przywołujesz (k6): 1-3 k4 szkielety, 4-6 k4 zombie",
    "Powieka Oślepia Wiatr (przeklęty zwój) - k4 istoty zasypiają na godzinę, chyba że przejdą test DR14",
    "Śmierć (przeklęty zwój) - wszystkie istory w obrębie 10 metrów tracą w sumie 4k10 HP",
  ],
};

let MBSacredScroll = {
  type: "picker",
  list: [
    "Łaska Martwego Świętego (święty zwój) - k2 istoty regenerują k10 HP każda",
    "Łaska Dla Grzesznika (święty zwój) - wybrana istota dostaje +k6 do wybranego rzutu",
    "Szepty Przekraczają Wrota (święty zwój) - zadaj trzy pytania martwej istocie",
    "Egida Rozpaczy (święty zwój) - wybrana istota otrzymuje 2k6 dodatkowych HP na 10 rund",
    "Oszukane Przeznaczenie (święty zwój) - jedna istota, martwa krócej niż tydzień, zostaje ożywiona z przerażającymi wspomnieniami",
    "Bestialska Mowa (święty zwój) - możesz rozmawiać ze zwierzętami przez k20 minut",
    "Fałszywy Świt/Rydwan Nocy (święty zwój) - światło lub całkowita ciemność przez 3k10 minut",
    "Hermetyczny Krok (święty zwój) - odnajdujesz wszystkie pułapki na swojej drodze przez 2k10 minut",
    "Pochłaniające Spojrzenie (święty zwój) - k4 istoty tracą po k8 HP każda",
    "Enochiańska Składnia (święty zwój) - jedna istota ślepo podąża za pojedyńczym rozkazem",
  ],
};

const MBTabletOfOchreObscurity = {
  //finish this next, then add The dejection of your roots
  type: "picker",
  list: [
    "Teoria Snów (Tablica Ochrowej Ciemności) - cel zaczyna wątpić we własną prawdziwość. Atak i obrona przeciwko niemu jest łatwiejsza o 2",
    "Całkowite Zrozumienie Materii (Tablica Ochrowej Ciemności) - naprawia lub psuje jeden przedmiot standardowego rozmiaru, normalny lub magiczny, w tym zbroję (zwiększa/zmniejsza o rangę) i broń",
    "Połączenie z Podświadomością Zbiorową (Tablica Ochrowej Ciemności) - wyczuwasz obecność żywych istot w zasięgu 20 metrów, nawet w innych pomieszczeniach",
    "Logiczne Przewidywanie (Tablica Ochrowej Ciemności) - używając Czystej Logiki możesz wydedukować naturę wszelkich pułapek lub mechanizmów w zasięgu 10 metrów lub wszelkich mocy użytych w zasięgu 20 metrów",
    "Mięso-Organiczna Speleofagia (Tablica Ochrowej Ciemności) - transmogryfikuje skałę rozmiaru dziecka w przypalone, trudne do przeżucia mięso mogące wykarmić k4 wygłodniałe osoby",
    "Zamknięta w Czasie Pneumotoksyna (Tablica Ochrowej Ciemności) - ta popękana tablica może zostać skruszona w grudkowaty pył. Wysypana na istotę zadaje k6 obrażeń - na 6 istota krztusi się i umiera. Tablica pojawia się następnego ranka w ekwipunku posiadacza. Test na Skupienie tej tablicy jest niegroźny dla użytkownika, wskazuje tylko, czy pył trafia w swój cel",
    "Indukowana Nieważność (Tablica Ochrowej Ciemności) - zapisany na tej tablicy kod dosłownie usuwa zasadnicze znaczenie istoty na k4 rundy. W tym czasie przeciwnicy nie będą jej atakować, nawet jeśli ona ich zaatakuje",
    "Strukturalna Krio-kondensacja (Zamarznięty Księżyc) (Tablica Ochrowej Ciemności) - wilgoć w powietrzu zamarza tworząc 5-metrowy most lub cała woda w zasięgu 50 metrów zamarza (z wyjątkiem znajdującej się w ciałach istot żywych)",
    "Meta-Alchemia (Tablica Ochrowej Ciemności) - użytkownik może zmienić naczynie z cieczą w jeden z następujących sposobów: zmienić ją w dwie dawki czerwonej lub czarnej trucizny, stworzyć Pogardę Vularka (pijący rzuca DR16 na Odporność, porażka sprawia, że skacze z wielkiej wysokości), zmienić truciznę w wodę lub wino",
    "Memetyczna Kognitywna Palpitacja (Tablica Ochrowej Ciemności) - niemalże niedostrzegalne ruchy ciała przekazują prostą zarazę umysłową, która sprawia, że jedna istota tańczy szaleńczo przez k4 rundy. Nie może ona atakować ani bronić się podczas tej choreomanii",
  ],
};

function returnRandomSacredOrUncleanScroll() {
  return MBUncleanScroll.list.concat(MBSacredScroll.list);
}

class MBCharacterClass {
  constructor(
    characterClassName,
    description,
    originLabel,
    origin,
    specialAbility,
    rolledAbility,
    numberOfRolledAbilities,
    agility,
    presence,
    strength,
    toughness,
    omens,
    scrollRule,
    HPdie,
    silverDie,
    silverNumberOfRolls,
    silverMultiplier,
    weaponRoll,
    armorRoll,
    secondaryOriginLabel,
    secondaryOrigin
  ) {
    this.characterClassName = characterClassName;
    this.description = description;
    this.originLabel = originLabel;
    this.origin = origin;
    this.specialAbility = specialAbility;
    this.rolledAbility = rolledAbility;
    this.numberOfRolledAbilities = numberOfRolledAbilities;
    this.agility = agility;
    this.presence = presence;
    this.strength = strength;
    this.toughness = toughness;
    this.omens = omens;
    this.scrollRule = scrollRule;
    this.HPdie = HPdie;
    this.silverDie = silverDie;
    this.silverNumberOfRolls = silverNumberOfRolls;
    this.silverMultiplier = silverMultiplier;
    this.weaponRoll = weaponRoll;
    this.armorRoll = armorRoll;
    this.secondaryOriginLabel = secondaryOriginLabel;
    this.secondaryOrigin = secondaryOrigin;
  }
}

let MBClasses = {
  // classes lista klas
  type: "picker",
  list: [],
};

function createAndAddClass({
  characterClassName,
  description,
  originLabel,
  origin,
  specialAbility,
  rolledAbility,
  numberOfRolledAbilities,
  agility,
  presence,
  strength,
  toughness,
  omens,
  scrollRule,
  HPdie,
  silverDie,
  silverNumberOfRolls,
  silverMultiplier,
  weaponRoll,
  armorRoll,
  secondaryOriginLabel,
  secondaryOrigin,
}) {
  const newClass = new MBCharacterClass(
    characterClassName,
    description,
    originLabel,
    origin,
    specialAbility,
    rolledAbility,
    numberOfRolledAbilities,
    agility,
    presence,
    strength,
    toughness,
    omens,
    scrollRule,
    HPdie,
    silverDie,
    silverNumberOfRolls,
    silverMultiplier,
    weaponRoll,
    armorRoll,
    secondaryOriginLabel,
    secondaryOrigin
  );
  MBClasses.list.push(newClass);
}

createAndAddClass({
  characterClassName: "Zębaty dezerter",
  description:
    "Masz jakichś trzydzieścioro przyjaciół, którzy cię nigdy nie zawiedli: TWOJE ZĘBY. Jesteś nielojalny, niepoczytalny, czy po prostu nie dajesz się kontrolować - sam odszedłeś z każdej grupy, która sama cię nie wykopała. Ale twój parlament zębów - ogromnych, wystających, grubych i ostrych - zawsze był twoim sprzymierzeńcem",
  originLabel: "Twoje najdawniejsze wspomnienie to ",
  origin: [
    "spalony budynek w Sarkash. Twój dom?",
    "gnijący wrak dryfujący po szarym morzu.",
    "burdel w Schleswigu. Całkiem przyjemne miejsce.",
    "spanie razem z psami w kącie karczmy, oczekując czyjegoś powrotu.",
    "podążanie za armią we wschodnim Wästlandzie.",
    "ssanie piersi wilczycy w dziczy Bergen Chrypty.",
  ],
  specialAbility:
    "Niezdarny - testy zręczności są trudniejsze o 2 punkty (z wyjątkiem obrony). Analfabeta - jesteś niezdolny do odczytywania zwojów. Ugryzienie - atak DR10, k6 obrażeń. Musisz być blisko celu. 1-2 na k6, że przeciwnik uzyska atak okazyjny",
  rolledAbility: [
    "Wykrzywiona Maska Potwora - wywołuje prymitywny strach u pomniejszych istot, takich jak gobliny, gnoumy i dzieci. Gdy ją nosisz, testują one morale co rundę",
    "Brązowy Bułat z Galgenbeck - śmierdzący miecz wygrzebany z wojskowego wychodka (k6 obrażeń). Gdy go dzierżysz, atak i obrona mają DR10. 1/6 szansy, że trafiony przeciwnik ulegnie gwałtownej sepsie i zginie w ciągu 10 minut",
    "Zęby Czarodzieja - cztery dziwne zęby grzechoczą w czarnym woreczku. Przed walką rzuć k6 na każdy z zębów. Każda 6 oznacza, że jeden z twoich ataków zada maksymalne obrażenia",
    "Proca Starego Sigűrda - Sigűrd był najsilniejszym człowiekiem, którego gardło przegryzłeś. Ta proca, upleciona z jego długich siwych włosów, nigdy cię nie zawiodła. 2k4 obrażeń, wymaga kamieni wielkości pięści, które na szczęście (lub nieszczęście) znaleźć można wszędzie",
    "Wiekowy Posokowiec - astmatyczny, niepoczytalny i ledwo żywy, ten zasuszony pies ma doskonały węch, który potrafi wywęszyć skarby nawet w najobrzydliwszych śmieciach. Atakuje z DR10 (ugryzienie k6), broni się z DR12. Ma 12 HP. Wpada w szał w pobliżu goblinów i berserków",
    "Podkowa Rumaka Kostuchy - wygląda zwyczajnie, ale od momentu znalezienia jej w jakiejś mrocznej krypcie jesteś przekonany, że pochodzi od konia samej Śmierci. W twoich rękach atakuje z DR10, k4 obrażeń. 1/6 szansy, że zmiażdży czaszkę, natychmiastowo uśmiercając małą lub średnią istotę. Podkowa wraca do twojej dłoni jak bumerang.",
  ],
  agility: -1,
  presence: 0,
  strength: 2,
  toughness: 0,
  omens: 2,
  scrollRule: "illiterate",
  HPdie: 10,
  silverDie: false,
  silverNumberOfRolls: false,
  weaponRoll: false,
  armorRoll: false,
});

createAndAddClass({
  characterClassName: "Rynsztokowa szumowina",
  description:
    "Nieszczęśliwa gwiazda uśmiechnęła się nad twoimi narodzinami. Bieda, przestępczość i kiepskie wychowanie nie pomogły. W twojej społeczności uczciwy zarobek nigdy nie wchodził w grze. Nie żebyś próbował, co ty jesteś, jakiś frajer? Ostry nóż i bezksiężycowa noc warte są więcej niż tydzień harówki",
  originLabel: "Niskourodzony: ",
  origin: [
    "wrzucony do wozu z nawozem razem z błonami płodowymi.",
    "matka powieszona na drzewie na obrzeżach Galgenbeck, wypadłeś z jej zwłok.",
    "wychowany przez szczury w rynsztokach Griftu.",
    "kopany i bity pod stołem w piekarni w Schleswigu.",
    "zbiegły z z Tvelandzkiego sierocińca.",
    "wychowany przez banitów w ruderze na południe od Alliánsu.",
  ],
  specialAbility:
    "Skryty - testy zręczności i skupienia są łatwiejsze o 2 punkty. Gdy po raz pierwszy zdobywasz poziom, rzuć jeszcze raz na Specjalność. Na kolejnych poziomach szumowina może przerzucić jedną lub obie Specjalności.",
  rolledAbility: [
    "Tchórzliwe Pchnięcie - kiedy atakujesz lekką bronią jednoręczną z zaskoczenia, rzuć DR10 na zręczność. Sukces oznacza jedno automatyczne trafienie, zadające normalne obrażenia +3",
    "Brudne Paluszki - twoje zręczne dłonie dostają się do kieszeni i otwierają zamki z testem DR8 na zręczność. Zaczynasz z zestawem wytrychoów",
    "Odrażający Smarkomiot - twoja flegma jest lepka, grudkowata i celna na niewielkie dystanse. Możesz pluć k2 razy na starcie. Rzuć test DR8 na skupienie, żeby trafić. Cel zostaje oślepiony, harczy i wymiotuje przez k4 rundy. Każdy, kto to widzi - przyjaciel czy wróg - musi zdać test na odporność by również nie zwymiotować. BG testują DR10, wrogowie DR12",
    "Oszukać Przeznaczenie - za każdym razem, kiedy zużywasz omen, jest 50% szansy, że go jednak nie zużywasz",
    "Ekskrementalnie Skryty - masz niesamowitą zdolnośc ukrywania się w brudzie i odpadach. Dostrzeżenie cię w takich warunkach wymaga testu DR16 na skupienie",
    "Unikanie Śmierci -  jesteś tak nieprzyjemny, nieważny i odrażający, że nawet Śmierć woli cię unikać. W przypadku śmierci, jeśli jest choć najmniejsze prawdopodobieństwo, że mógłbyś przetrwać, jest 50% szans, że tak się stało. Wracasz wtedy po 10 rundach z k4 HP oraz mało prawdopodobnym wyjaśnieniem swojego powrotu",
  ],
  agility: 0,
  presence: 0,
  strength: -2,
  toughness: 0,
  omens: 2,
  scrollRule: false,
  HPdie: 6,
  silverDie: 6,
  silverNumberOfRolls: 1,
  weaponRoll: 6,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Ezoteryczny pustelnik",
  description:
    "Kamień twej jaskini jest jednością z gwiazdami. Cisza i perfekcja. Teraz jednak chaos upadającego świata zakłóca twoje rytuały a płaszcz nocy staje się ciemniejszy niż mrok twojej jaskini. Irytujące!",
  originLabel: "Upiorne pochodzenie: ",
  origin: [
    "obudził się dorosły wewnątrz rytualnego kręgu pod północnym mostem do Griftu.",
    "wyszedł pozbawiony wspomnień z jaskini w klifach Terionu.",
    "jedyne dziecko, które przetrwało incydent w Dolinie Niefortunnych Nieumarłych.",
    "umierając na zarazę w szałasie w Bergen Chrypcie, dotknąłeś czegoś z zewnątrz.",
    "zwykły człowiek, do momentu, gdy napotkał coś na ciemnej polanie w Sarkash.",
    "wychowany na samotnej wyspie na jeziorze Onda. Nikt inny nie słyszał nigdy o tej wyspie i nie możesz na nią wrócić.",
  ],
  specialAbility: "",
  rolledAbility: [
    "Mistrz Przeznaczenia - po ci mapy, skoro masz dostęp do kwintesencji przyczynowości? Znasz właściwą drogę po zdaniu testu DR8 na skupienie",
    "Księga Wrzącej Krwi - możesz odczytać księgę raz dziennie. Twój przeciwnik musi zdać test DR12 aby cię powstrzymać. Jeśli mu się nie uda, pojawi się k2 berserków-pogromców z zapomnianego wymiaru krwi. Rzuć k6: 1-4 walczą u twojego boku. 5-6 obracają się przeciwko tobie i próbują zniszczyć księgę. Po starciu powracają do swojego więzienia",
    "Mówca Prawd - dwa razy dizennie twoja mądrość, wiedza i wewnętrzny spokój mogą udzielić jasności wybranej istocie. DR jej następnego testu jest obniżone o 4",
    "Uczeń Niewidzialnego Kolegium - raz dziennie możesz przywołać k2 zwojów, które mogą zostać użyte jeden raz. Rzuć k4: 1-2 zwoje są święte, 3-4 zwoje są przeklęte. Jeśli zwoje nie zostaną wykorzystane do zmroku, obracają się w popiół",
    "Bard Nieumierających - poznałeś melodie zaświatów. Muzyka twojej harfy daje +k4 do rzutów na reakcję",
    "Jastrząb Bojowy - twój podstępny, prawie inteligentny, jastrząb jest lojalny tylko wobec ciebie. Nawet bez wspólnego języka, rozumiesz jego okrzyki, gdy czuwa, prowadzi zwiad i atakuje nieprzyjaciół. Atak/obrona DR10 (szpony/dziobanie k4), 8 HP",
  ],
  agility: 0,
  presence: 2,
  strength: -2,
  toughness: 0,
  omens: 4,
  scrollRule: ["scroll", "random"],
  HPdie: 4,
  silverDie: 6,
  silverNumberOfRolls: 1,
  weaponRoll: 4,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Upadły arystokrata",
  description:
    "Ukorzony wyłącznie przed wspomnieniami twojej dawnej chwały, nigdy nie zgodziłbyś się podporządkować komuś innemu. Nie ty, szlachetna krew! (Nie żeby ci kmioci mogli zrozumieć głębię twojej rozpaczy)",
  originLabel: "Wszystko szło tak dobrze, do czasu kiedy ",
  origin: [
    "twój pałac w Wästlandzie został obrócony w gruzy.",
    "twoje królestwo karawan w Tvelandzie popadło w nędzę.",
    "brat króla Fathmu IX, Zikmund, twój ojciec, został zamordowany.",
    "południowe imperium Südglans zatonęło w morzu.",
    "Anthelia zażądała daru ze szlachetnej krwi",
    "dwaj książęta zostali porwani na zachód Bergen Chrypty i zniknęli w czarnej szczelinie wschodnich stoków.",
  ],
  specialAbility: "",
  rolledAbility: [
    //should have two of those, actually
    'Miecz Twoich Przodków - ten wspaniały i ewidentnie magiczny gadający miecz jest egzaltowany, niegodny zaufania i darzy cię cichą pogardą. Kpi z twoich porażek i jeśli zostanie wielokrotnie rozczarowany, ma 1/6 szansę, by podczas ataku "przypadkowo" razić ciebie lub twoich towarzyszy. Zadaje k6+1 obrażeń. Atak i obrona DR 10',
    '"Poltroon" (Nędzny Tchórz), Nadworny Błazen - ten praktycznie bezużyteczny, osobiście irytujący i stanowiący ciężar emocjonalny trefniś rozprasza twoich wrogów w trakcie walki. W czasie dwóch pierwszych rund ty i twoi sprzymierzeńcy macie +2 do ataku i obrony',
    "Barbarister, Niesamowity Koń - Barbarister jest magiczny, inteligentny, arogancki i próżny. Potrafi też mówić. Jeśli przekonasz go, Barbarister okazjonalnie może dodać ci +2 do testów na skupienie mających do czynienia z logiką i intelektem. Koń prawdopodobnie jest od ciebie mądrzejszy i dobrze o tym wie",
    "Giermek Hamfund - jedyną funkcją tego niesamowicie tchórzliwego sługi jest sprawowanie pieczy nad przeklętym mieczem Eurekią. Raz na starcie, jeśli Hamfunda uda się odnaleźć, Eurekia może zostać dobyta. Miecz zadaje 2k6 obrażeń, przy każdym uderzeniu rzuć k6. Jeśli wypadnie 1, giermek zostaje zabity, a Eurekia znika na zawsze",
    "Dar Wężowej Skóry - kosztowne pudełeczko z drzewa sandałowego pokryte wężową skórą. Wewnątrz znajduje się z pozoru zwykły sztylet, zawinięty w jedwab. Sztylet zadaje k4 obrażeń, ale przy wyrzucieniu 1 cel ginie natychmiastowo od śmiertelnej trucizny, którą nasączone jest ostrze",
    "Róg Schleswidzkich Lordów! - raz dziennie możesz zadąć w tę powgniataną starą trąbkę i wykonać test DR12 na skupienie. Jedna istota może wykonać następny test niezwiązany z walką jako automatyczny sukces",
    "Błękitnokrwisty - pokolenia znoszące spiski, trucizny i ostrza nędzarzy sprawiają, że twoja krew jest wyjątkowo odporna na infekcje. Nie dotyczy cię codzienna utrata HP w przypadku infekcji",
    "Znak Bogactwa - długi i niedługi szlachty nie zostają łatwo zapomnane. Pokaż tę starożytną pieczęć swego rodu kupcowi, a masz 50% szans, że obniży ceny o połowę dla ciebie oraz twojej drużyny. W przeciwnym wypadku ceny są podwojone",
    "Rodowy Klejnot - niegdyś chluba rodowej kolekcji, to szafirowe cudeńko jest kuszącym celem. Kiedy wzniesiesz go w górę, wrogie istoty łase na bogactwa atakować będą ciebie, przed kimkolwiek innym",
  ],
  agility: 0,
  presence: 0,
  strength: 0,
  toughness: 0,
  omens: 2,
  scrollRule: false,
  HPdie: 6,
  silverDie: 6,
  silverNumberOfRolls: 4,
  weaponRoll: 8,
  armorRoll: 3,
});

createAndAddClass({
  characterClassName: "Heretycki kapłan",
  description:
    "Ścigany przez Dwugłowe Bazyliszki Prawdziwej Wiary, heretyk bredzi wśród ruin, włóczy się nieskończenie po zakurzonych traktach i bezcześci katedry nocą",
  originLabel: "Przeklęte pochodzenie: ",
  origin: [
    "Galgenbeck, w pobliżu katedry Dwugłowych Bazyliszków.",
    "zmasakrowany kult w Alliánsie, jedyny ocalały.",
    "krypty Griftu.",
    "ruiny świątyni w Dolinie Niefortunnych Nieumarłych.",
    "jeden z wielu złodziejskich tunelów w Graven-Tosk.",
    "sekretny kościół w Bergen Chrypcie.",
  ],
  specialAbility: "Może używać Mocy odziany w średnią zbroję",
  rolledAbility: [
    "Święty pastorał - zakończony hakiem z ludzkiej kości pokrytym zachodzącymi na siebie antymodlitwami. Ten żezł zahacza o inne światy. Zadaje 2k4 obrażeń każdemu, oprócz ludzi pozbawionych wiary",
    "Kradziona mitra - doczesne ciało noszącego tę świętą czapkę zanika, stając się trudne do trafienia w walce (obrona DR10). Naciągnięta na uszy poza walką sprawia, że kapłan staje się prawie niewidzialny, testujac na ukrywanie z DR8",
    "Lista grzechów - długi i precyzyjny dokument, weryfikowany z rzeczywistością by odkryć niewidocznych złoczyńców. Zdany test DR10 na prezencje sprawia, że dziwne światło otacza złe istoty. Właściciel listy broni się przed takim wykryciem z modyfikatorem +2",
    "Bluźniercza Biblia Nechrubela - tak niesamowicie bluźniercza, że nawet sam kapłan może ją czytać tylko raz dziennie. Rzuć kością: wynik parzysty - przez resztę dnia bohaterowie graczy leczą k4 HP już po pięciu minutach odpoczynku, wynik nieparzysty - kapłana nawiedzają demoniczne halucynacje. MG może wymyślić k3 rzeczy, które tylko kapłan widzi i opisać je graczowi jak prawdziwe. Efekt przemija wraz ze świtem.",
    "Kamienie ze świątyni Thel-Emasa - rzuć kamienie na ziemię. Ich ułożenie pokazuje, czy niebezpieczeństwo czyha w pobliskim pomieszczeniu. Kamienie mogą kłamać. Kapłan robi test DR10 aby sprawdzić czy mówią prawdę, ale po porażce nie może testować ponownie do zachodu słońca",
    "Krucyfiks (Nie Ten Jezus) - tego krucyfiksu można użyc w starciach z nieumarłymi, jak również pomniejszymi trollami czy goblinami. Rzuć na morale (stosując modyfikator do skupienie kapłana), aby sprawdzić, czy istoty wycofają się z pokornym ukłonem",
  ],
  agility: 0,
  presence: 2,
  strength: -2,
  toughness: 0,
  omens: 4,
  scrollRule: false,
  HPdie: 8,
  silverDie: 6,
  silverNumberOfRolls: 3,
  weaponRoll: 8,
  armorRoll: 1,
});

createAndAddClass({
  characterClassName: "Okultystyczny zielarz",
  description:
    "Zrodzony z grzyba, wychowany na polanie, zajrzał w oko księżyca odbite w srebrnoczarnym stawie",
  originLabel: "Pochodzi z ",
  origin: [
    "cichego odosobnienia, jakie zapewnia mrok Sarkash.",
    "cichego odosobnienia, jakie zapewnia mrok Sarkash.",
    "cichego odosobnienia, jakie zapewnia mrok Sarkash.",
    "nielegalnych nocnych targowisk Schleswigu.",
    "heretyckiej wyspy Crëlut, dwie mile morskie na wschód od Griftu.",
    "małej wiedźmiej chatki w Galgenbeck",
    "starych zamarzniętych ruin niedaleko Alliánsu.",
    "ruin posiadłości Króla Cieni, gęstych od wspomnień grzybów i dymu.",
  ],
  specialAbility:
    "Przenośne laboratorium - bez przerwy zbierasz i stale zużywasz różne składniki, każdego dnia masz dośc materiałów do stworzena dwóch losowych wywarów (w sumie k4 dawki). Niewykorzystane tracą swoje właściwości po 24 godzinach",
  rolledAbility: [""],
  agility: 0,
  presence: 0,
  strength: -2,
  toughness: 2,
  omens: 2,
  scrollRule: false,
  HPdie: 6,
  silverDie: 6,
  silverNumberOfRolls: 2,
  weaponRoll: 6,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Przeklęty zmiennokształtny",
  description:
    "Powinieneś był umrzeć, ale coś złapało twoją duszę, gdy tonęła ona w rzece Śmierci i scaliło ją na powrót z twoim śmiertelnym ciałem. Tylko tym razem, nie jest to wyłącznie twoja klatka - w prądach zaświatów, twoja dusza wymieszała się z inną umierającą istotą. Teraz jesteś przepołowiony. Wiedziesz podzieloną egzystencję, zwarty w wiecznych zmaganiach człowieka z bestią. Powinieneś był umrzeć",
  originLabel: "Zginąłeś ",
  origin: [
    "trzymając ciało ukochanej osoby w ramionach.",
    "od strzały, która przebiła twój mózg.",
    "kilka minut po narodzinach",
    "zabity ręką przyjaciela.",
    "zamordowany w swoim łóżku.",
    "na wozie wiozącym ofiary zarazy.",
  ],
  specialAbility:
    "Możesz świadomie ulec staraniom swojej drugiej strony i zmienić swoją anatomię na jej wzór. Przemieszczenie kości wymaga jednej bolesnej runy. Twoja zwierzęca forma prawdopodobnie nie jest w stanmie używać broni ani pancerza",
  rolledAbility: [
    "Morderczy szczur: malutki - testy na zręczność, w tym obrona, mają DR8, twoje ugryzienie (k4) niesie chorobę - test DR 14 na skupienie, w przypadku porażki cel atakuje swojego sprzymeirzeńca do momentu śmierci któregoś z nich",
    "Obdarty ze skóry i kapiący wilk: zaciekły - ataki mają DR10, twoje kły (k6) - zadają obrażenia krytyczne również przy naturalnym 19 i prowokują test na morale, śliski od krwi - redukcja obrażeń -k2",
    "Czaszkogłowy kruk: szybki i latający - obrona ma DR10, wykonuje dwa ataki szponami (k4) na rundę, twoja koścista głowa działa jak broń i tarcza - redukcja obrażeń o -1, możesz zignorować całe obrażenia z jednego ataku. Czaszka zrasta się po k6 dniach",
    "Niedźwiedź z Bergen Chrypty: ciężki i masywny - testy na siłę, odporność i ataki mają DR10, obrona ma DR14, gruba skóra - redukcja obrażeń k4, szpony i ugryzienie zadają k8 obrażeń",
    "Jaszczurka życia i śmierci: regeneruje k4 HP na rundę, gryzie (k6) i pluje kwasem (k4, 1/4 szansa że obniży pancerz o 1 poziom), łuskowata skóra - redukcja obrażeń -k2",
    "Prorokująca zagładę małpa: zręczna - testy na zręczność, w tym obrona, mają DR10, może używać lekkiej broni oraz zbroi, twoje trzecie oko pozwala ci czytać przeklęte zwoje z DR10",
  ],
  agility: 0,
  presence: -2,
  strength: 1,
  toughness: 1,
  omens: 2,
  scrollRule: false,
  HPdie: 8,
  silverDie: 6,
  silverNumberOfRolls: 2,
  weaponRoll: 6,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Bladawiec",
  description:
    "Czaisz się na skrajach osad, może i oceniając, ale rzadka wchodząc w interakcje. Jesteś fundamentalnie odmienny i nigdzie nie przynależysz. Miewasz napady niezrozumiałego szaleństwa i samodestrukcyjnego gniewu, ale głównie czekasz na nieuniknione w samotnej rezygnacji",
  originLabel: "Niewypowiedziane pochodzenie: ",
  origin: [
    "wyłowiony z Nieskończonego Morza przez rybaków.",
    "przypadkowo przywołany przez kultystów w Graven-Tosk.",
    "wyrzygany przez wstrętną bestię w Bergen Chrypcie.",
    "spadł z nieba w pobliżu Alliánsu.",
    "wykluł się z jaja złożonego przez bagienną babę na Wästlandzkim mokradle.",
    "wypełzł z pęknięcia w ziemi w pobliżu Griftu.",
  ],
  specialAbility:
    "Jesteś piśmienny, ale tylko w martwych językach i nie możesz używać zwojów. Potrafisz jednak intuicyjnie użyć jednej Mocy dziennie, losowanej o zmierzchu lub o świcie (wybierz sobie)",
  rolledAbility: [
    "Gwiazdy miały rację - rzucasz k4+2 na omeny. Powiedz coś tajemniczego za każdym razem, gdy wykorzystujesz jeden z nich",
    "Błoniaste skrzydła - potrafisz latać krótkie dystanse, ale nie możesz nosić zbroi. Ptaki cię nie lubią",
    "Niepospolita glina - potrafisz czerpać odżywienie z gleby, ale normalne jedzenie cię obrzydza. Pachniesz grzybami",
    "Manna skądś - możesz wydać swój zapas mocy aby stworzyć dziwnie smakowity, choć niepokojący, pokarm dla k6 osób",
    "Giętkie kończyny - potrafisz wydostać się z wszelkich więzów i przecisnąć się przez malutkie przestrzenie. -4 DR do testów na gibkość",
    "Zbyt wiele oczu - po prostu za dużo. Nie możesz zostać zaatakowany z zaskoczenia. Możesz wyrzec się na dany dzień mocy, aby zostawić za sobą jedno z oczu i patrzeć przez nie na odległość (jeśli oko zostanie zniszczone, otrzymujesz k2 pkt. obrażeń)",
  ],
  agility: 1,
  presence: 1,
  strength: 0,
  toughness: -2,
  omens: 4,
  scrollRule: "illiterate",
  HPdie: 6,
  silverDie: 6,
  silverNumberOfRolls: 1,
  weaponRoll: 6,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Prorok martwego boga",
  description:
    "Głosy w twojej głowie mówią ci, co masz robić - a przynajmniej tak myślisz. Jesteś prorokiem boga zabitego przez Bazyliszka, JĄ, pośród podłych wierzchołków Bergen Chrypty. Nikt nie chce słuchać słów twojego boga, ale ty nadal je słyszysz. Dzień i noc. Jak rozgrzane kable oplatające twój mózg",
  originLabel: "Twój bóg to:",
  origin: [`obg`],
  specialAbility:
    "Jesteś piśmienny i możesz używać zwojów, ale musisz zdać test DR12 na skupienie by powstrzymać się przed próbą zniszczenia słów fałszywych bogów. Jeśli zaczynasz ze zwojem, załóż, że automatycznie zdałeś test",
  rolledAbility: [
    "Krwawe Znaki - jesteś biczownikiem, regularnie umartwiasz się, aby obudzić swojego boga. Jeśli zadasz sobie k3 obrażenia przed walką, zyskujesz +2 do liczby rzutów równej liczbie utraconych HP",
    "Władca Niczego - nosisz dziwaczną aranżację strojów i strzępów, która wygląda na parodię króla lub królowej. Zyskujesz +2 do rzutów w celu zaimponowania naiwnym",
    "Zapach Rozkładu - nie dość, że twój bóg jest martwy, odór jego gnicia przenika cię. Ten wywracający bebechy smród daje ci bonus +2 do rzutów na obronę",
    "Nieskładny Sofistyczny Bełkot - skup się, aby wygłosić pogmatwaną litanię, której słuchacze muszą zdać test DR10 na Skupienie aby nie stracić następnej akcji",
    "Posoka Zgnilizny - odrażające płyny twojego gnijącego boga wyciekają z twoich dłoni - czarne stygmaty. Możesz wytrzeć ręce w gołą skórę napastnika (jak atak z DR12), który musi wtedy zdać test DR12 na odporność, aby uniknąć spazmów i toczenia piany trwających dwie rundy",
    "Moje Ciało Naczyniem - twój bóg może i jest martwy, ale czymże jest śmierć dla boga? Raz dziennie możesz pozwolić duchowi swojego bóstwa na wypełnienie twojego ciała i wyznania prawdy w formie pytania z odpowiedzią tak lub nie, której MG musi udzielić zgodnie z prawdą. Bóg odchodzi, pozostawiając twoje ciało osłabionym",
    "W Śmierci Żyję - kiedy zginiesz, rzuć DR14 na Skupienie. Jeśli rzut się udał, twój bóg odmawia ci przejścia do zaświatów i wracasz z 1 HP. W przypadku porażki, twoje ciało zostaje pochłonięte przez święty płomień",
    "Oczy Świętego Ognia - twoje źrenice płoną duszą twojego pana. Raz na starcie możesz zaatakować (DR10), miotając ogniem ze swoich oczu (k6 obrażeń); oślepia cię to do końca trwania walki",
  ],
  numberOfRolledAbilities: 2,
  agility: 0,
  presence: 2,
  strength: 0,
  toughness: -2,
  omens: 3,
  scrollRule: false,
  HPdie: 4,
  silverDie: 6,
  silverNumberOfRolls: 1,
  silverMultiplier: 5,
  weaponRoll: 4,
  armorRoll: 2,
});

createAndAddClass({
  characterClassName: "Zapomniany filozof", //tablet of ochre obscurity - add through scrollRule
  description:
    "Twoja droga to bezrozumny labirynt, każda świątynia skąpana we krwi, każdy cel obleczony w mrok. Kiedyś myślałeś, że chłodna analiza może ujarzmić Los, teraz to marzenie o rozumie zgniło i przeobraziło się w wirujące szaleństwo. Jedyne co pozostało, to sam chłód.",
  originLabel: "Korzenie twojego odrzucenia: ",
  origin: [
    "twoja matka na zmianę chwaliła cię i upokarzała, co doprowadziło cię do wyniosłego wyobrażenia o własnej osobie i płonącej nienawiści do samego siebie.",
    "chciałeś być wojownikiem albo wielkim przywódcą, ale nie możesz! Przestać! Myśleć! DOŚĆ JUŻ TYCH MYŚLI!",
    "środowiskowa głupota i jasne światła sprawiają, że twoje nadwrażliwe tkanki mózgowe PŁONĄ ŻYWYM OGNIEM.",
    "mogłeś uratować ten przeklęty świat! Gdyby tylko te szare masy zrozumiały twój GENIUSZ!",
    'padłeś ofiarą umysłowego wirusa "miłości", po czym obiekt twojego afektu udał się, by zamieszkać w dziurze.',
    "zapisałeś swoją uniwersalną filozofię w pojedyńczym tomie dla potomnych i na własne oczy oglądałeś, jak płonie, podczas gdy uciekałeś. Wszystko jest stracone.",
    "kultyści Udoka pochwycili twoją rodzinę i zmusili cię do debatowania, podczas gdy jedli twoich rodziców żywcem.",
    "byłeś najbardziej rozchwytywanym filozofem Südglans (które zatonęło w morzu), teraz wszyscy bezlitośnie z ciebie kpią.",
  ],
  specialAbility:
    "Bezlitosna Inkwizycja - zrób test DR14 aby przejrzeć przez podstępy i złudzenia innych. Dość już tych KŁAMSTW!\n Posiadasz Tablicę Ochrowej Ciemności - relikwię zapomnianego umysłowego kultu, tak rzadką, że można ją sprzedać za 100 sztuk srebra. Tablica liczy się jako przedmiot standardowego rozmiaru. Jeśli bohater odniesie krytyczną porażkę w czasie ataku/obrony - jedna tablica pęka. Poza tym działają tak jak zwoje. Pokrywające je znaki są trudne do zrozumienia, bohater musi mieć +3 Skupienia lub być Zapomnianym Filozofem aby ich używać",
  rolledAbility: [
    "Cierń Zrozumienia - gdy jest on noszony, ciernie wbijają się w twoje ciało (k2 obrażeń) i Potrzegasz Wszystko (-4DR do następnego testu i ignorujesz dwa następne ataki). Aby znowu uzyskać ten efekt, ukoronuj się ponownie. Obrażenia są za każdym razem większe (k2, k4, k6 itd.), resetuje je przespana noc",
    "Hegeliańska Sowa - ta filozoficzna bestia jest zgorzkniałym, opornym i nadwrażliwym asystentem - przekonać ją możesz testem DR12 na Skupienie. Po dwóch pomocnych akcjach obserwuje cię z cichą pogardą. Potrafi przynosić drobne przedmioty, atakować wrogów oraz znajdować pułapki. Nocą sowa zsyła ci w snach wiedzę o tym, co powinieneś był zrobić danego dnia. Hegeliańska sowa - zbyt szybka, by ją trafić. Szpony/dziobanie k4. Ataki mają DR8",
    "Pryzmat Niepewności - do jego aktywowania potrzebujesz zewnętrznego źródła światła oraz testu DR10 na Skupienie. Jego światło możesz skierować na maksymalnie dwie istoty, lecząc k6 HP. Przez następną godzinę wszystkie testy dla jednej z nich mają DR obniżone o 2. Jeśli test się nie powiedzie, otrzymują k4 obrażeń i ich broń lub zbroja zostaje zniszczona. Możesz użyć pryzmatu dwa razy na dzień",
    'Flet Tosku - raz na walkę, kiedy istota ginie, możesz zagrać na tym kościanym flecie Rozbrzmiewającą Fugę. Zadaje ona "echo" śmiertelnych obrażeń losowemu z pobliskich wrogów',
    "Szarfa Słupnika - UMYSŁ kontroluje ciało! Nic nie jest dobre ani złe, ale myślenie o tym to sprawia, tyczy się to również kalorii i protein. Noszenie tego pasa sprawia, że nie odczuwasz głodu i wystarczy, być pił wodę, aby odzyskać HP w czasie wypoczynku. Noszenie go dłużej, niż k4 dni powoduje omdlenie. Aby odzyskał moc, należy odczekać jedną dobę",
    "Naznaczony Ciemnością - stale zmieniająca się Tablica Ochrowej Ciemności jest wytatuowana na twoim ciele. Co rano wylosuj, jaka Tablica to jest. Może być użyta raz dziennie, ale jej użycie to zawsze automatyczny sukces",
  ],
  agility: 0,
  presence: 2,
  strength: -2,
  toughness: 0,
  omens: 4,
  scrollRule: "Tablet of Ochre Obscurity", //use this rule to apply tablet
  HPdie: 4,
  silverDie: 6,
  silverNumberOfRolls: 1,
  weaponRoll: 6,
  armorRoll: 2,
  secondaryOriginLabel: "Odrzucenie twoich korzeni: ",
  secondaryOrigin: [
    "wychowany przez fanatycznych teistów w świątyni pod jednym z mostów Griftu",
    "urodzony przez bezimienną matkę w galgenbeckim sanatorium",
    "wychowany przez niepiśmiennych, ciemnogrodzkich chamów w spokojnym wästlandzkim lesie",
    "wychowany na zamarzniętym pustkowiu w Kergüs przez wstydzących się życia kultystów, którzy uważali, że nikt nie powinien przychodzić na ten umierający świat",
    "opuszczony w jednej z katakumb Bergen Chrypty",
    "wykształcony przez potępionych pośród błotnych dołów Doliny Niefortunnych Nieumarłych",
  ],
});

createAndAddClass({
  characterClassName: "Hardy kowal",
  description:
    '"Błogosławieni niech będą ci, którzy wykuwają żelazo, gwoździe i drut kolczasty"',
  originLabel: "",
  origin: [
    "Twój pan został pobity na śmierć na ulicach Galgenbeck, zaraz przed warsztatem.",
    "Byłeś pracownikiem służebnym w Kergüs, dopiero co spłaciłeś swoje długi.",
    'Bandyci płacili ci za pozbywanie się "dowodów" w twoim piecu.',
    "Wykuwałeś narzędzia tortur w Pałacu Króla Cieni.",
    "Twój terminator został porwany w biały dzień przez grupę zakapturzonych postaci.",
    "Człowiek zwany Rzeźnikiem płacił ci sowicie za haki i łańcuchy.",
  ],
  specialAbility:
    "Jesteś piśmienny, ale nie możesz używać zwojów - po co komu takie rzeczy, gdy można wykuć porządną broń?",
  rolledAbility: [
    "Wykuty w Ogniu - +6 do wszystkich testów mających do czynienia z ogniem lub gorącem",
    "Niech Żyje Młot - zwykłe narzędzia, takie jak młotki, zadają w twoich rękach k6 obrażeń",
    "Szybka Naprawa - jeśli masz pod ręką jakiś złom, zrób test DR12 na Skupienie aby naprawić zbroję, porażka redukuje zbroję o kolejny poziom",
    "Cęgi - jeśli uda ci się obronić przed atakiem, 1/4 szansy na złapanie przeciwnika cęgami i zyskanie ataku okazyjnego",
    "Szczęśliwa Podkowa - działa jak bumerang, zadake k6 obrażeń",
    "Niezłomny - może naprawiać nawet zbroję zredukowaną do 0.",
    "Kolekcjoner Kości - zdaj test na Skupienie DR14 aby wykonać z kości tarczę jednorazowego użytku -k2",
    '"Znam Ten Mechanizm" - zdaj test na Skupienie DR12 aby otworzyć zamek. Porażka oznacza, że konieczny jest klucz',
  ],
  numberOfRolledAbilities: false,
  agility: -2,
  presence: 0,
  strength: 1,
  toughness: 1,
  omens: 2,
  scrollRule: false,
  HPdie: false,
  silverDie: 6,
  silverNumberOfRolls: 3,
  silverMultiplier: 10,
  weaponRoll: false,
  armorRoll: false,
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

createAndAddClass({
  characterClassName: "Przeklęta ofiara",
  description:
    "Próbowali złożyć cię w ofierze dla swojej przeklętej sprawy, ale uciekłeś. Teraz jesteś zbiegiem, a zagłada ściga cię, gdziekolwiek się udasz",
  originLabel:
    "Jesteś naznaczony piętnem kultu, który próbował złożyć cię w ofierze. Ich sługi ciągną do znaku na twoim ciele i duszy jak ćmy do ognia. Twoim prześladowcą jest ",
  origin: [
    "Kościół Dwugłowych Bazyliszków.",
    "Kult Nechrubela,",
    "Las Sarkash.",
    "Królowa Anthelia z Kergüs.",
    "Nieskończony Gon.",
    "Boska Ręka.",
  ],
  specialAbility: "",
  rolledAbility: [
    "Twój nawiedzany koszmarami sen jest tak lekki, że liczysz się jako obudzony jeśli coś wydarzy się podczas twojego snu",
    "Masz szósty zmysł jeśli chodzi o niebezpieczeństwo. Rzucaj na inicjatywę dwukrotnie, wybierz wyższy wynik",
    "Nosisz przeklętą zbroję, redukcja obrażeń -k6. Nie ogranicza ona twoich ruchów, ale nie możesz jej zdjąć, nie można więc opatrzeć twoich ran",
    "Używasz ogromnej broni, wystarczająco wielkiej, by powalić bogów. Cokolwiek to jest, zadaje k12 obrażeń, ale ataki mają DR14",
    "Zdobyłeś dziwnych sojuszników. Czymkolwiek są, mogą wyleczyć ci k6 HP w zamian za 1 omen",
    "Zastąpiłeś jedną ze swoich kończyn ukrytą bronią. Atak z DR10, by zaskoczyć wroga, zadając k10 obrażeń. Przeładowanie jest problematyczne",
  ],
  numberOfRolledAbilities: false,
  agility: 0,
  presence: -2,
  strength: 0,
  toughness: [6, 2, 6],
  omens: 2,
  scrollRule: false,
  HPdie: 10,
  silverDie: 6,
  silverNumberOfRolls: 2,
  silverMultiplier: 10,
  weaponRoll: false,
  armorRoll: false,
  secondaryOriginLabel: "Aby zachować życie poświęciłeś ",
  secondaryOrigin: [
    "kończynę lub oko",
    "swój cień",
    "swoją duszę",
    "swoje nienarodzone dziecko",
    "swoją jedyną prawdziwą miłość",
    "całą swoją rodzinną wioskę",
  ],
});

createAndAddClass({
  characterClassName: "Wojownik",
  description: "Jesteś wojownikiem",
  originLabel: "Gdzie poznałeś sztukę wojenną? ",
  origin: [
    "Żołnierz - państwo wyszkoliło cię do walki, więc to właście robiłeś. A teraz co? Więcej walki.",
    "Strażnik - jak żołnierz, tylko nie musiałeś opuszczać miejsca zamieszkania, aby mieć możliwość wymierzać przemoc.",
    "Barowy zabijaka - upijałeś się i wdawałeś w bójki. W końcu stałeś się w tym dobry.",
    "Kowal - uderzałeś rzeczy młotami, a głowy są mniej twarde od żelaza.",
    "Łupieżca - dorastałeś w brutalnej społeczności złodziei. Walka to twoja druga natura.",
    "Inkwizytor - kościół płacił ci za bicie heretyków, było świetnie.",
  ],
  specialAbility:
    "Zabójca - jeśli swoim atakiem zredukujesz wroga do 0 HP, zadaje resztę obrażeń pobliskiemu przeciwnikowi (o ile taki jest). Klasa klasyczna - gdy po raz pierwszy zdobędziesz poziom, możesz wybrać jeden nieheroiczny atut. Możesz mieć tylko jeden atut",
  rolledAbility: [""],
  numberOfRolledAbilities: false,
  agility: 0, //for abilities use simple modifier (positive or negative value) for more complex cases, use [die, number of dice, modifier]
  presence: -2,
  strength: 2,
  toughness: 0,
  omens: 2,
  scrollRule: "illiterate", //not actually illiterate, just doesn't start with a scroll;
  HPdie: 10,
  silverDie: 6,
  silverNumberOfRolls: 3,
  silverMultiplier: 10,
  weaponRoll: [6, 4],
  armorRoll: [3, 1],
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

createAndAddClass({
  characterClassName: "Złodziej",
  description:
    "Jesteś złodziejem, kradniesz rzeczy. Kradniesz lepiej, niż większość. Co można jeszcze powiedzieć? Nic, bo nie gadasz ze strażnikami",
  originLabel: "Gdzie poznałeś sztukę złodziejską? ",
  origin: [
    "Sierota - nie miałeś nic, prócz tego, co sobie wziąłeś, więc brałeś, co mogłeś.",
    "Szlachcic - urodziłeś się ze szlachetną krwią w twoich żyłach, ale coś się zmieniło. *Zasługujesz* na bogactwo.",
    "Niesłusznie oskarżony - odsiedziałeś raz swoje i nauczyłeś się zawodu. Nie ma co marnować swojej wiedzy.",
    "Pirat - kochałeś morze, a ono kochało ciebie. Złodziejstwo to twoja druga natura.",
    "Przypadek - nie chciałeś zostać wmieszany w przestępstwa, ale oto jesteś.",
    "Wygnaniec - musiałeś opuścić swój dom, teraz bierzesz, co musisz, by zrobić, co możesz.",
  ],
  specialAbility:
    "Uzdolniony - DR testów na Zręczność przy skradaniu wynosi dla ciebie 8. Klasa klasyczna - gdy po raz pierwszy zdobędziesz poziom, możesz wybrać jeden nieheroiczny atut. Możesz mieć tylko jeden atut. Zaczynasz z zestawem wytrychów.",
  rolledAbility: [""],
  numberOfRolledAbilities: false,
  agility: 2, //for abilities use simple modifier (positive or negative value) for more complex cases, use [die, number of dice, modifier]
  presence: 0,
  strength: 0,
  toughness: -2,
  omens: 2,
  scrollRule: false, //'illiterate' rerolls scrolls,'Tablet of Ochre Obscurity' - has tablet like philosopher, 'random scroll'
  HPdie: 6,
  silverDie: 6,
  silverNumberOfRolls: 4,
  silverMultiplier: 10,
  weaponRoll: 6, //if more complex use [die, modifier]
  armorRoll: 2,
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

createAndAddClass({
  characterClassName: "Kleryk",
  description:
    "Kapłan, boski mag, czy też święty wojownik, nie obchodzi cię, jak nazywają cię ludzie, póki czczą właściwego boga. Jesteś tak oddany swojej religii, że zstąpiła na ciebie łaska bogów",
  originLabel: "Gdzie poznałeś sztukę bycia pobożniejszym od innych? ",
  origin: [
    "Akolita - niegdyś zapalałeś świece, teraz rozpalasz ogień wiary w sercach wiernych.",
    "Neofita - byłeś już dorosły, gdy twoje oczy otworzyły się na nową wiarę.",
    "Wybraniec - twój bóg lub bogowie pojawili się w twoich snach. Twoim przeznaczeniem jest... coś.",
    'Nieznane - byłeś "normalny", a tu nagle możesz dzierżyć moc bogów.',
    "Półbóg - bóstwo dołożyło się do twojego rodowodu. Teraz możesz dzierżyć jego moc.",
    "Proto-kapłan - swojego rodzaju pra-kleryk, poznałeś sekret skradnięcia mocy bogów.",
  ],
  specialAbility:
    "Kleryk - możesz używać świętych zwojów nosząc średnią zbroję. Klasa klasyczna - gdy po raz pierwszy zdobędziesz poziom, możesz wybrać jeden nieheroiczny atut. Możesz mieć tylko jeden atut",
  rolledAbility: [""],
  numberOfRolledAbilities: false,
  agility: -2,
  presence: 0,
  strength: 0,
  toughness: 2,
  omens: 4,
  scrollRule: ["scroll", "sacred"],
  HPdie: 8,
  silverDie: 6,
  silverNumberOfRolls: 3,
  silverMultiplier: 10,
  weaponRoll: 2,
  armorRoll: [2, 1],
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

createAndAddClass({
  characterClassName: "Mag",
  description:
    'Niektórzy nazywają cię magiem, inni czarodziejem, jeszcze inni bredzą coś o "specjalistach" czy "arkanomantach", cokolwiek to znaczy. Tak czy inaczej, używasz magii. Ludzie nie lubią magii. Mówili, że jest ona narzędziem Nechrubela. Mówili, że wszyscy okultyści to pustelnicy i heretycy. Mówili wiele różnych rzeczy, zanim pozmieniałeś ich w ropuchy',
  originLabel: "Gdzie poznałeś sztukę magiczną? ",
  origin: [
    "Uczeń - czarodziej wziął cię na ucznia. Zmarł *w tajemniczych okolicznościach*.",
    "Bibliotekarz - zajmowałeś się książkami, ale pewnego razu natrafiłeś na *interesującą* książkę.",
    "Wyklęty - byłeś religijny, do czasu gdy poznałeś siłę herezji.",
    "Kultysta - wrodziłeś się w magiczny kult, czarodziejstwo jest dla ciebie jak oddychanie. Zwykle normalne.",
    "Krew - miałeś potężnego przodka. Magię masz we krwi.",
    "Pakt - zawarłeś umowę. Może i straciłeś duszę, ale było warto. Chyba.",
  ],
  specialAbility:
    "Magik - używanie zwojów przeklętych ma dla ciebie DR 8. Klasa klasyczna - gdy po raz pierwszy zdobędziesz poziom, możesz wybrać jeden nieheroiczny atut. Możesz mieć tylko jeden atut",
  rolledAbility: [""],
  numberOfRolledAbilities: false,
  agility: 0, //for abilities use simple modifier (positive or negative value) for more complex cases, use [die, number of dice, modifier]
  presence: 2,
  strength: -2,
  toughness: 0,
  omens: 3,
  scrollRule: ["scroll", "unclean"], //'illiterate' rerolls scrolls,'Tablet of Ochre Obscurity' - has tablet like philosopher, ['scroll', 'random'/'holy'/'unholy']
  HPdie: false,
  silverDie: 6,
  silverNumberOfRolls: 2,
  silverMultiplier: 10,
  weaponRoll: 4, //if more complex use [die, modifier]
  armorRoll: 1,
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

createAndAddClass({
  characterClassName: "Świętokradczy śpiewak",
  description:
    "Zawsze sprowadzałeś niechciane dźwięki, twoje powołanie jako bard doprowadziło cię do hańby i ruiny, aż do pamiętnego dnia, gdy istota o nieszlachetnym charakterze zaproponowała ci interes życia. Twoja dusza wyje, ale śpiew wypływający z twoich ust jest słodki, a twoja sakiewka coraz słodsza. Warto było",
  originLabel: "Umowa została zawarta ",
  origin: [
    "w wychodku na obrzeżach Griftu.",
    "gdy ukrywałeś się przed strażą w Galgenbeck.",
    "w komnacie Wästlandzkiego arystokraty.",
    "gdy śniłeś w zapomnianym rowie.",
    "w schleswidzkiej celi.",
    "gdy minuty dzieliły cię od zamarznięcia na śmierć w drodze do Alliánsu.",
  ],
  specialAbility:
    "Otacza cię aura nienaturalnego uroku, pozwalająca niepokoić wrogów i uspokajać przyjaciół. Zamiast używania Mocy w danym dniu, możesz dodać lub odjąć k6 od dowolnego testu na morale.",
  rolledAbility: [
    "Kobza Przeznaczenia - połączenie pozszywanych włochatych pęcherzy z wystającymi kościanymi rurkami, w które się dmicha. Kiedy to robisz, wybrani słuchacze przepełnieni są nieziemskim głodem, tak jakby nie jedli od tygodnia",
    "Lira Korbowo-Bólowa - kręcenie tym ostrunowanym kawałkiem drewna i kości wydaje dźwięk, który rani uszy istot, które nie przejdą testu DR12 na prezencję. W pierwszej rundzie zadaje k2 obrażeń, w następnej k4 i tak dalej",
    "Grzbietowa Łupina - gdy bijesz w ten bęben zrobiony ze skorupy diabła, rzuć 2k6: 6+ - wszyscy oprócz ciebie rzucają DR14 na Zręcznośc, albo padają na ziemię. 11 - wybierz k4 istoty, które słyszą twoje bębnienie. Ich kręgosłupy łamią się jak zapałki. Nie możesz już więcej użyć bębna tego dnia. 12 - w twoich uszach nie przestaje dzwonić. Jesteś głuchy przez następne 25 godziny. Może też służyć jako tarcza",
    "Diabelska Koncha - róg belzebubonicznej istoty z najgłębszych głębin Bezkresnego Morza. Gdy w nie zadmiesz, płuca twoich wrogów wypełniają się morską wodą, jeśli nie przejdą testu DR14 na Odporność, muszą wtedy poświęcić rundę na pozbycie się wody, zanim będą mogli zrobić cokolwiek innego",
    "Organki Doustne - zagraj na tych kościstych organkach, by natychmiastowo przywrócić Złamanemu (0HP) słuchaczowi k4 HP. Nie może on mówić, dopóki nie zregeneruje całkowicie HP",
    "Lutnia Porządnego Łupnia - gdy na niej grasz, dźwięki tego instrumentu w kształcie topora (k8 obrażeń), sprawiają, że Siła i Prezencja każdego, kto je słyszy, zamieniają się na k6 dni. Kolejne odsłuchania w tym czasie nie dają efektów",
  ],
  numberOfRolledAbilities: false,
  agility: 0, //for abilities use simple modifier (positive or negative value) for more complex cases, use [die, number of dice, modifier]
  presence: 2,
  strength: 0,
  toughness: -2,
  omens: 2,
  scrollRule: false, //'illiterate' rerolls scrolls,'Tablet of Ochre Obscurity' - has tablet like philosopher, ['scroll', 'random'/'holy'/'unholy']
  HPdie: false,
  silverDie: false,
  silverNumberOfRolls: false,
  silverMultiplier: false,
  weaponRoll: 6, //if more complex use [die, modifier]
  armorRoll: 3,
  secondaryOriginLabel: false,
  secondaryOrigin: false,
});

// createAndAddClass ({characterClassName: '',
// description: '',
// originLabel: '',
// origin: [''],
// specialAbility: '',
// rolledAbility: [''],
// numberOfRolledAbilities: false,
// agility: 0,//for abilities use simple modifier (positive or negative value) for more complex cases, use [die, number of dice, modifier]
// presence: 0,
// strength: 0,
// toughness: 0,
// omens: 2,
// scrollRule: false, //'illiterate' rerolls scrolls,'Tablet of Ochre Obscurity' - has tablet like philosopher, ['scroll', 'random'/'holy'/'unholy']
// HPdie: false,
// silverDie: false,
// silverNumberOfRolls: false,
// silverMultiplier: false,
// weaponRoll: false,//if more complex use [die, modifier]
// armorRoll: false,
// secondaryOriginLabel: false,
// secondaryOrigin: false})

const classLessCharacter = new MBCharacterClass(
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  0,
  0,
  0,
  0,
  2,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
);

const MBCharacter = function () {
  return {
    type: "pickerRoller",
    list: [createCharacter(pickedClass)],
  };
};

function calculateAbilityModifier (score){
  let abilityModifier = 0
  if (score <= 4) {
    abilityModifier = "-3";
  } else if (score <= 6) {
    abilityModifier = "-2";
  } else if (score <= 8) {
    abilityModifier = "-1";
  } else if (score <= 12) {
    abilityModifier = "0";
  } else if (score <= 14) {
    abilityModifier = "+1";
  } else if (score <= 16) {
    abilityModifier = "+2";
  } else {
    abilityModifier = "+3";
  }
  return abilityModifier
}

function createCharacter(chosenCharacterClass) {
  let characterClass = chosenCharacterClass ? chosenCharacterClass: classLessCharacter;
  if (chosenCharacterClass === "Losowa klasa") {
    characterClass = pickFromList(MBClasses);
  }
  function generateAbility(modifier) {
    // let abilityScore = null;
    let rollForAbility = null;
    if (typeof modifier === "number") {
      rollForAbility = k(6) + k(6) + k(6) + modifier;
    } else {
      //array [die, number of dice, modifier]
      for (let x = 0; x < modifier[1]; x++) {
        rollForAbility += k(modifier[0]);
      }
      rollForAbility += modifier[2];
    }
    return calculateAbilityModifier(rollForAbility);
  }
  let AGI = generateAbility(characterClass.agility);
  let PRE = generateAbility(characterClass.presence);
  let STR = generateAbility(characterClass.strength);
  let TOU = generateAbility(characterClass.toughness);


  if (!characterClass.characterClassName){//classless
    let betterAbilityRolls = [k(4), k(4)]
    while (betterAbilityRolls[0] === betterAbilityRolls[1]){
      betterAbilityRolls[1] = k(4)
    }   
    if (betterAbilityRolls.includes(1)){
      AGI = calculateAbilityModifier(rollDFourDropLowest())
    }
    if (betterAbilityRolls.includes(2)){
      PRE = calculateAbilityModifier(rollDFourDropLowest())
    }
    if (betterAbilityRolls.includes(3)){
      STR = calculateAbilityModifier(rollDFourDropLowest())
    }
    if (betterAbilityRolls.includes(4)){
      TOU = calculateAbilityModifier(rollDFourDropLowest()) 
    }
  }
  let HP =
  (characterClass.HPdie ? k(characterClass.HPdie) : k(8)) + parseInt(TOU);
  if (HP < 1) {
    HP = 1;
  }
  
  let maxOmens = 2;
  if (characterClass) {
    maxOmens = characterClass.omens;
  }
  let currentOmens = k(maxOmens);
  //weapons broń brońki bronie
  const fourDamageMeleeWeapons = [
    "kość udowa (k4)",
    "laska (k4)",
    "krótki miecz (k4)",
    "nóż (k4)",
    "sierp (k4)",
  ];
  const sixDamageMeleeWeapons = ["młot bojowy (k6)", "miecz (k6)"];
  const bows = ["łuk (k6, Skupienie+10 strzał)"];
  const eightDamageMeleeWeapons = ["kiścień (k8)"];
  const crossbows = ["kusza (k8, Skupienie+10 bełtów)"];
  const tenDamageMeleeWeapons = ["zweihänder (k10)"];

  let MBWeapons = [
    randomizeFromArray(fourDamageMeleeWeapons),
    randomizeFromArray(fourDamageMeleeWeapons),
    randomizeFromArray(fourDamageMeleeWeapons),
    randomizeFromArray(fourDamageMeleeWeapons),
    randomizeFromArray(sixDamageMeleeWeapons),
    randomizeFromArray(sixDamageMeleeWeapons),
    randomizeFromArray(bows),
    randomizeFromArray(eightDamageMeleeWeapons),
    randomizeFromArray(crossbows),
    randomizeFromArray(tenDamageMeleeWeapons),
  ];
  //const MBWeapons = ['kość udowa (k4)', 'laska (k4)','krótki miecz (k4)', 'nóż (k4)','młot bojowy (k6)', 'miecz (k6)', 'łuk (k6, Skupienie+10 strzał)', 'kiścień (k8)', 'kusza (k8, Skupienie+10 bełtów)', 'zweihänder (k10)']
  //split into damage tiers and add different kinds with appropriate probability
  const d6Equipment = [
    "",
    "",
    "plecak o pojemności 6 przedmiotów",
    "worek o pojemności 10 przedmiotów",
    "mały wózek",
    "osiołek",
  ];

  const d12EquipmentOne = [
    "lina (10 metrów)",
    `pochodnie (${parseInt(PRE) + 4} szt.)`,
    `latarnia i zapas oliwy na ${parseInt(PRE) + 6} godz.`,
    "pasek magnezu",
    "przeklęty zwój",
    "ostra igła",
    `skrzynka z lekami - użycia: ${parseInt(PRE) + 4
    } (powstrzymuje krwawienie/infekcję i leczy k6 HP)`,
    "metalowy pilnik i wytrychy",
    "pułapka na niedźwiedzie (Skupienie DR14 aby wykryć, k8 obrażeń)",
    "bomba (zapieczętowana butelka, k10 obrażeń)",
    `buteleczka czerwonej trucizny - dawki: ${k(
      4
    )} (Odporność DR12 aby uniknąć k10 obrażeń)`,
    "srebrny krucyfiks",
  ];
  const d12EquipmentTwo = [
    `eliksir życia - dawki: ${k(4)} (leczy k6 HP i usuwa infekcję),`,
    "święty zwój",
    `mały ale wredny pies (${k(6) + 2
    } HP, ugryzienie k4, posłuszny tylko tobie)`,
    `małpy (${k(4)}), które ignorują cię, ale też kochają, (${k(4) + 2
    } HP, cios/ugryzienie k4)`,
    "wykwintny perfum wart 25s",
    "skrzynka z narzędziami: 10 gwoździ, cęgi, młotek, mała piła i wiertło",
    "ciężki łańcuch (5m)",
    "kotwiczka na linie",
    "tarcza (-1 obrażeń lub zniszcz tarczę by zignorować atak)",
    "łom (k4)",
    "smalec (działa jak 5 posiłków)",
    "namiot",
  ];

  let armors = [
    [""],
    ["futrzasta zbroja", "przeszywanica", "skórzana zbroja"],
    ["zbroja łuskowa", "kolczuga"],
    ["zbroja lamelkowa", "zbroja płytowa"],
  ];

  let armorTiers = [
    "zbroja lekka, -k2 obrażeń",
    "zbroja średnia, -k4 obrażeń, DR+2 do testów zręczności, w tym obrony",
    "zbroja ciężka, -k6 obrażeń, DR+4 do testów zręczności, DR+2 do obrony",
  ];

  let d6EquipmentRoll = randomizeFromArray(d6Equipment);
  let d12EquipmentRollOne = randomizeFromArray(d12EquipmentOne);
  let d12EquipmentRollTwo = randomizeFromArray(d12EquipmentTwo);
  let additionalSpecialItem = null;

  let armorRoll = null;

  if (typeof characterClass.armorRoll === "number") {
    armorRoll = k(characterClass.armorRoll) - 1;
  } else if (typeof characterClass.armorRoll === "boolean") {
    armorRoll = k(4) - 1;
  } else {
    armorRoll =
      k(characterClass.armorRoll[0]) + characterClass.armorRoll[1] - 1;
  }

  let weaponRoll = null;

  if (typeof characterClass.weaponRoll === "number") {
    weaponRoll = k(characterClass.weaponRoll) - 1;
  } else if (typeof characterClass.weaponRoll === "boolean") {
    weaponRoll = k(10) - 1;
  } else {
    weaponRoll =
      k(characterClass.weaponRoll[0]) + characterClass.weaponRoll[1] - 1;
  }

  if (armorRoll > 0) {
    //so they won't get upgraded if they start without armor
    if (d12EquipmentRollOne === "przeklęty zwój") {
      if (characterClass.scrollRule === "illiterate") {
        while (d12EquipmentRollOne === "przeklęty zwój") {
          d12EquipmentRollOne = randomizeFromArray(d12EquipmentOne);
        }
      } else {
        armorRoll = k(2) - 1;
        d12EquipmentRollOne = pickFromList(MBUncleanScroll);
      }
    }
    if (d12EquipmentRollTwo === "święty zwój") {
      if (characterClass.scrollRule === "illiterate") {
        while (d12EquipmentRollTwo === "święty zwój") {
          d12EquipmentRollTwo = randomizeFromArray(d12EquipmentTwo);
        }
      } else {
        armorRoll = k(2) - 1;
        d12EquipmentRollTwo = pickFromList(MBSacredScroll);
      }
    }
  }

  if (characterClass.scrollRule === "Tablet of Ochre Obscurity") {
    additionalSpecialItem = pickFromList(MBTabletOfOchreObscurity);
  }

  let pickedArmor = randomizeFromArray(armors[armorRoll]);
  let pickedWeapon = MBWeapons[weaponRoll];
  let terribleTraitOne = pickFromList(MBTerribleTraits);
  let terribleTraitTwo = pickFromList(MBTerribleTraits);
  while (terribleTraitTwo === terribleTraitOne) {
    terribleTraitTwo = pickFromList(MBTerribleTraits);
  }
  let numberOfRolledAbilities = characterClass.numberOfRolledAbilities
    ? characterClass.numberOfRolledAbilities
    : 1;
  let rolledAbilities = characterClass.rolledAbility
    ? randomizeFromArray(characterClass.rolledAbility)
    : false;

  if (numberOfRolledAbilities > 1) {
    for (let i = 1; i < numberOfRolledAbilities; i++) {
      let newRolledAbility = randomizeFromArray(characterClass.rolledAbility);
      while (newRolledAbility === rolledAbilities) {
        newRolledAbility = randomizeFromArray(characterClass.rolledAbility);
      }
      rolledAbilities += `. ${newRolledAbility}`;
    }
  }

  let silverMultiplier = characterClass.silverMultiplier
    ? characterClass.silverMultiplier
    : 10;

  let silver = (k(6) + k(6)) * silverMultiplier;
  if (characterClass.silverDie) {
    let silverCounter = 0;
    for (let i = 0; i < characterClass.silverNumberOfRolls; i++) {
      silverCounter += k(characterClass.silverDie);
    }
    silver = silverCounter * silverMultiplier;
  }
  let additionalStartingScroll = false;

  if (Array.isArray(characterClass.scrollRule)) {
    if (characterClass.scrollRule[1] === "random") {
      additionalStartingScroll = randomizeFromArray(
        returnRandomSacredOrUncleanScroll()
      );
    } else if (characterClass.scrollRule[1] === "sacred") {
      additionalStartingScroll = pickFromList(MBSacredScroll);
    } else if (characterClass.scrollRule[1] === "unclean") {
      additionalStartingScroll = pickFromList(MBUncleanScroll);
    }
  }

  const createdCharacter =
    `${characterClass.characterClassName === "Bladawiec"
      ? pickFromList(MBPaleOneNames) :
      (characterClass.characterClassName === "Upadły arystokrata" ? (pickFromList(MBNames) + " " + pickFromList(MBTowns)) : pickFromList(MBNames) )
    }. ${characterClass.characterClassName
      ? `${characterClass.characterClassName}.`
      : ""
    } HP: ${HP}/${HP} Omeny ${currentOmens} (k${maxOmens}).
    ${characterClass.description
      ? `${characterClass.description}. ${characterClass.originLabel
      }${randomizeFromArray(characterClass.origin)}\n`
      : ""
    }${characterClass.secondaryOriginLabel
      ? `${characterClass.secondaryOriginLabel}${randomizeFromArray(
        characterClass.secondaryOrigin
      )}.\n`
      : ""
    }\n${terribleTraitOne}. ${terribleTraitTwo}. ${pickFromList(
      MBBrokenBodies
    )}. ${pickFromList(MBBadHabits)}.
    Atrybuty: siła ${STR}, zwinność: ${AGI}, skupienie ${PRE}, wytrzymałość ${TOU}.\n ${characterClass.specialAbility ? `\n${characterClass.specialAbility}.` : ""
    }${additionalSpecialItem ? `\n\n${additionalSpecialItem}.\n` : ""}${rolledAbilities ? `\n ${rolledAbilities}. \n` : ""
    }
    Ekwipunek: manierka, racje żywnościowe (${k(4)}), ${pickedWeapon}, ` +
    `${pickedArmor ? `${pickedArmor} (${armorTiers[armorRoll - 1]}), ` : ""} ${d6EquipmentRoll ? `${d6EquipmentRoll}, ` : ""
    }${d12EquipmentRollOne}, ${d12EquipmentRollTwo}, ${additionalStartingScroll ? `${additionalStartingScroll}. ` : ""
    }${silver} szt. srebra.`;

  return createdCharacter;
}

function removeAllChildren(element) {
  const counter = element.children.length;
  for (let m = 0; m <= counter; m++) {
    if (element.children[0]) {
      element.children[0].remove();
    }
  }
}

function randomizeFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayArray(ar, parent) {
  for (let j = 0; j < ar.length; j++) {
    const tableRow = document.createElement("tr");
    parent.appendChild(tableRow);

    const line = document.createElement("p");
    line.innerText = `${j + 1}. ${ar[j]}`;
    tableRow.appendChild(line);
  }
}

function pickFromList(pickedList) {
  if (pickedList.type === "mixerSpaced") {
    const nonTypeKeys = Object.keys(pickedList).filter((key) => {
      return key !== "type";
    });
    let combinedParts = "";
    for (let k = 0; k < nonTypeKeys.length; k++) {
      combinedParts += ` ${randomizeFromArray(pickedList[nonTypeKeys[k]])}`;
    }
    return combinedParts;
  } else if (pickedList.type === "mixerConcatenated") {
    const nonTypeKeys = Object.keys(pickedList).filter((key) => {
      return key !== "type";
    });
    let combinedParts = "";
    for (let k = 0; k < nonTypeKeys.length; k++) {
      combinedParts += randomizeFromArray(pickedList[nonTypeKeys[k]]);
    }
    return combinedParts;
  } else if (pickedList.type === "picker") {
    return randomizeFromArray(pickedList.list);
  } else if (pickedList().type === "pickerRoller") {
    // pickerRollers (e.g. random encounters, corpse loot) are functions, so that the numbers are rerolled each time
    return randomizeFromArray(pickedList().list);
  }
}

generateButton.addEventListener("click", () => {
  updatePick();
  updatePickedClass();
  const result = [];
  let footer = document.getElementsByTagName("footer")[0];
  if (/MB/.test(category)) {
    footer.classList.remove("invisible");
  } else {
    footer.classList.add("invisible");
  }

  const pickedCategory = eval(category);
  removeAllChildren(nameDisplay);
  for (let i = 0; i < numberGenerated; i++) {
    result.push(pickFromList(pickedCategory));
  }
  displayArray(result, nameDisplay);
});

updateSecondarySelectStatus();

const follower = function () {
  let armors = [
    "zbroja skórzana",
    "kolczuga"
  ]
  let list = []

  function createdFollower(type){
    let hp = k(2)
    let equipment = "unika walki, zmuszony do niej rzuca na morale co turę, jeśli zda test 4 razy pod rząd, nabiera odwagi i może zostać zbrojnym"
    let name = pickFromList(commonerNames)
    let morale = k(6)
    if (type==="giermek"){
      name = pickFromList(crusaderNames)
      hp = k(6)
      morale = k(5)+4
      equipment = randomizeFromArray(armors) + " miecz (k6), kopia (k8 konno, k6 i -2 do trafienia pieszo)"

    } else if (type==="zbrojny"){
      hp = k(8)
      morale = k(6)+2
      equipment = randomizeFromArray(armors) + ", miecz (k6), łuk (k6), 20 strzał"
    }

    return `${name}, ${type}, HP: ${hp}, morale ${morale}, ${equipment}`
  }

  list.push(createdFollower("giermek"))
  list.push(createdFollower("zbrojny"))
  list.push(createdFollower("sługa"))

  return {
    type: "pickerRoller",
    list,
  };
};


const looks = function () {
  let list = []
  let build = [
    "Wysportowany",
    "Krzepki",
    "Korpulentny",
    "Delikatny",
    "Wychudły",
    "Masywny",
    "Wiotki",
    "Chudy",
    "Muskularny",
    "Żylasty",
    "Tęgi"
  ]
  let face = [
    "nalana",
    "koścista",
    "przystojna",
    "o delikatnych rysach",
    "arystokratyczna",
    "wydłużona",
    "zniszczona",
    "orla",
    "szelmowska",
    "wąska",
    "szczurowata",
    "okrągła",
    "zapadła",
    "o ostrych rysach",
    "kwadratowa",
    "szeroka",
    "wilcza"
  ]
  let facialHair = [
    "gładko ogolony",
    "wąsy",
    "broda"
  ]
  let skin = [
    "pokryta bliznami",
    "oleista",
    "ciemna",
    "blada",
    "perfekcyjna",
    "ospowata",
    "rumiana",
    "ziemista",
    "opalona"
  ]
  let hair = [
    "łysy",
    "blondyn",
    "brunet",
    "szatyn",
    "rudy"
  ]
  let virtue = [
    "ambitny",
    "ostrożny",
    "odważny",
    "kulturalny",
    "ciekawski",
    "zdyscyplinowany",
    "zdeterminowany",
    "szczodry",
    "towarzyski",
    "uczciwy",
    "honorowy",
    "skromny",
    "idealistyczny",
    "sprawiedliwy",
    "lojalny",
    "litościwy",
    "pracy",
    "łagodny",
    "opanowany",
    "tolerancyjny"
  ]
  let vice = [
    "agresywny",
    "arogancki",
    "zgorzkniały",
    "tchórzliwy",
    "okrutny",
    "zdradliwy",
    "lekkomyślny",
    "żarłoczny",
    "chciwy",
    "wybuchowy",
    "leniwy",
    "nerwowy",
    "uprzedzony",
    "nonszalancki",
    "opryskliwy",
    "podejrzliwy",
    "próżny",
    "mściwy",
    "marnotrawny",
    "marudny"
  ]

  list.push(
    randomizeFromArray(build)+ ", twarz " + 
    randomizeFromArray(face) + ", " + randomizeFromArray(facialHair) + ", skóra " +
    randomizeFromArray(skin)+ ", " +
    randomizeFromArray(hair) + ", " +
    randomizeFromArray(virtue) + ", " +
    randomizeFromArray(vice)
  )

  return {
    type: "pickerRoller",
    list
  };
}




// console.log(MBMonsters.list.find(e=>e.))
// console.log(MBMonsterObjects.list.find(
//   (monster) => {
//     return monster.keyName === "goblin";
//   }).description)

// console.log(MBMonsterObjects)
//next thing to do: adjust wilderness and civilized encounters and discoveries
//see VORPAL

// console.log(pickFromList(MBTowns))
// MBMonsterObjects.list.find((monster) => { return monster.keyName === "undeadNecromancer";}).description


