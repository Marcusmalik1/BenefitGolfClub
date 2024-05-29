
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = {
        person1: {
            name: "Christoffer Krogh",
            role: "Google Ads Manager",
            description: "Christoffer Krogh, 31 år, har spillet golf i 17 år og har et handicap på 6,2. Som medlem af BGC er han kendt for at være burning hot i pressede situationer. Hans styrke er præcision på greenen med sin Scottie Cameron putter, mens hans køller kan være uforudsigelige. Hans bedste runde er 2 over par. Christoffers erfaring og evne til at levere under pres gør ham til en værdifuld del af vores team.",
            image: "images/christoffer_om.png"
        },
        person2: {
            name: "Christian Jensen",
            role: "E-commerce & online marketing",
            description: "Christian Jensen, er vores e-handels- og online marketingekspert med 10 års erfaring. Han optimerer vores digitale platforme og driver vækst med effektive strategier. Christian elsker golf, hvor hans styrke er lange drives, mens putteteknikken kan forbedres. Hans dedikation gør ham uvurderlig både professionelt og på golfbanen.",
            image: "images/Christian_om.png"
        },
        person3: {
            name: "Martin Jensen",
            role: "Backend Developer",
            description: "Vores talentfulde udvikler, har en dyb passion for både teknologi og golf. Som en dedikeret medlem af BGC, har Martin spillet golf i fire år, og hans færdigheder på banen fortsætter med at imponere. Selvom han endnu ikke har afsløret sit handicap, er hans engagement og evner tydelige for alle, der spiller med ham.",
            image: "images/Marth_om.png"
        }
    };

    window.openTeamModal = function(personKey) {
        const person = teamMembers[personKey];
        if (person) {
            document.getElementById('about-modal-image').src = person.image;
            document.getElementById('about-modal-name').textContent = person.name;
            document.getElementById('about-modal-role').textContent = person.role;
            document.getElementById('about-modal-description').textContent = person.description;
            document.getElementById('about-modal').style.display = "block";
        }
    };

    window.closeTeamModal = function() {
        document.getElementById('about-modal').style.display = "none";
    };
});
