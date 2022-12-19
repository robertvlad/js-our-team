//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        name: "Wayner Barnett",
        role: "Founder & CEO",
        image: "wayner-barnertt-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gorgon",
        role: "Office Manager",
        image: "waalter-gorgon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }    
]


//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++){
    
    let member = team[i];

    for(let key in member){
        console.log(member[key]);
    }
}


//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

const ul_list = document.getElementById("team-list");

for (let i = 0; i < team.length; i++){

    let member = team[i];
    
    let list_item = `<li>${member.name} - ${member.role} - ${member.image}</li>`;

    ul_list.innerHTML += list_item;
 
}

