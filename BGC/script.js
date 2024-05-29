

document.addEventListener('DOMContentLoaded', () => {
    const clubs = [
        { name: "Randers Golf Klub", region: "Midtjylland", club_type: "Type1", holes: 18, range: "Yes", facilities: "Facility1", image: "images/randers-golf-klub.jpg" },
        { name: "Aarhus Golf Klub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Stensballe Golf Klub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/stensballe-golf-klub.jpg" },
        { name: "Norddjurs Golf Klub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Skanderborg Golfklub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Hobro Golfklub", region: "Nordjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Lyngbygaard Golf", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Aarhus Aadal Golf Klub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
        { name: "Randers Fjord Golfklub", region: "Midtjylland", club_type: "Type2", holes: 9, range: "No", facilities: "Facility2", image: "images/aarhus-golf-klub.jpg" },
    ];

    // Function to display clubs in the club list
    function displayClubs(filteredClubs) {
        const clubList = document.getElementById('club-list');
        clubList.innerHTML = '';

        filteredClubs.forEach(club => {
            const clubDiv = document.createElement('div');
            clubDiv.className = 'club';
            clubDiv.innerHTML = `<img src="${club.image}" alt="${club.name}"><h4>${club.name}</h4>`;
            clubList.appendChild(clubDiv);
        });
    }

    // Function to filter clubs based on selected criteria
    window.filterClubs = function filterClubs() {
        const region = document.getElementById('region').value;
        const clubType = document.getElementById('club_type').value;
        const holes = document.getElementById('holes').value;
        const range = document.getElementById('range').value;
        const facilities = document.getElementById('facilities').value;

        const filteredClubs = clubs.filter(club => {
            return (!region || club.region === region) &&
                   (!clubType || club.club_type === clubType) &&
                   (!holes || club.holes == holes) &&
                   (!range || club.range === range) &&
                   (!facilities || club.facilities === facilities);
        });

        displayClubs(filteredClubs);
    };

    // Display all clubs initially
    displayClubs(clubs);  
});

document.addEventListener('DOMContentLoaded', () => {
    const clubs = [
        {
            name: "Randers Golf Klub",
            region: "Midtjylland",
            club_type: "Randers Golf Klub",
            holes: [18],
            range: "Yes",
            facilities: ["Restaurant", "Driving Range", "Parkering"],
            image: "images/randers-golf-klub.png",
            description1: "Randers Golf Klub er kendt for sin naturskønne beliggenhed og velplejede baner. Klubben tilbyder udfordringer for golfspillere på alle niveauer og har moderne faciliteter.",
            description2: "Klubben tilbyder udfordringer for golfspillere på alle niveauer og har moderne faciliteter.",
            link: "randersgc.html"
        },
        {
            name: "Aarhus Golf Klub",
            region: "Midtjylland",
            club_type: "Aarhus Golf Klub",
            holes: [9, 18],
            range: "No",
            facilities: ["Restaurant", "Parkering","Driving Range"],
            image: "images/aarhus-golf-klub.png",
            description1: "Aarhus Golf Klub er en prestigefyldt medlemsklub tilsluttet BGC, der tilbyder enestående golfoplevelser i hjertet af Aarhus.",
            description2: "Deres 18-hullers bane byder på udfordringer og spænding for golfentusiaster på alle niveauer. Med state-of-the-art faciliteter, inklusive driving range, putting greens og en hyggelig klubhus, er Aarhus Golf Klub det perfekte sted at dyrke sin kærlighed til golf og skabe uforglemmelige minder med venner og familie.  ...",
            link: "aarhusgc.html"
        },
        {
            name: "Stensballe Golf Klub",
            region: "Midtjylland",
            club_type: "Stensballe Golf Klub",
            holes: [27, 18, 9],
            range: "No",
            facilities: ["Restaurant","Shop","Parkering"],
            image: "images/stensballe-golf-klub.png",
            description1: "Stensballe Golf Klub tilbyder en fantastisk 27-hullers bane, der er velegnet til både begyndere og erfarne golfspillere. Klubben er kendt for sine smukke omgivelser og fremragende faciliteter.",
            description2: "Klubben er kendt for sine smukke omgivelser og fremragende faciliteter.",
            link: "#"
        },
        {
            name: "Norddjurs Golfklub",
            region: "Midtjylland",
            club_type: "Norddjurs Golfklub",
            holes: [9, 18],
            range: "No",
            facilities: ["Driving Range","Buggy", "Golfbil", "Restaurant","Parkering"],
            image: "images/norddjurs-golf-klub.png",
            description1: "Norddjurs Golf Klub er en charmerende klub med en spændende 18-hullers bane. Klubben byder på en afslappet atmosfære og gode faciliteter, inklusive driving range og restaurant.",
            description2: "Klubben byder på en afslappet atmosfære og gode faciliteter.",
            link: "#"
        },
        {
            name: "Skanderborg Golfklub",
            region: "Midtjylland",
            club_type: "Skanderborg Golfklub",
            holes: [9, 18],
            range: "No",
            facilities: ["Driving Range","Restaurant","Buggy","Parkering"],
            image: "images/skanderborg-golf-klub.png",
            description1: "Skanderborg Golfklub er beliggende i naturskønne omgivelser og tilbyder en udfordrende 18-hullers bane. Klubben har fremragende faciliteter, herunder driving range og en hyggelig restaurant.",
            description2: "Klubben har fremragende faciliteter og en hyggelig atmosfære.",
            link: "#"
        },
        {
            name: "Hobro Golfklub",
            region: "Nordjylland",
            club_type: "Hobro Golfklub",
            holes: [18],
            range: "No",
            facilities: ["Parkering","Driving Range","Shop"],
            image: "images/hobro-golf-klub.png",
            description1: "Hobro Golfklub er kendt for sin venlige atmosfære og velplejede 18-hullers bane. Klubben tilbyder gode træningsfaciliteter og en velassorteret golfbutik.",
            description2: "Klubben tilbyder gode træningsfaciliteter og en velassorteret golfbutik.",
            link: "#"
        },
        {
            name: "Lyngbygaard Golf",
            region: "Midtjylland",
            club_type: "Lyngbygaard Golf",
            holes: [9, 18],
            range: "No",
            facilities: ["Driving Range", "Parkering","Restaurant"],
            image: "images/lyngbygaard-golf-klub.png",
            description1: "Lyngbygaard Golf byder på en imponerende 18-hullers bane, der er designet til at udfordre golfspillere på alle niveauer. Klubben har moderne faciliteter og en dejlig restaurant.",
            description2: "Klubben har moderne faciliteter og en dejlig restaurant.",
            link: "#"
        },
        {
            name: "Aarhus Aadal Golf Club",
            region: "Midtjylland",
            club_type: "Aarhus Aadal Golf Club",
            holes: [9, 18], 
            range: "No",
            facilities: ["Buggy","Driving Range","Restaurant"],
            image: "images/aadal-golf-klub.png",
            description1: "Aarhus Aadal Golf Club er en attraktiv klub med en spændende 18-hullers bane.",
            description2: "Klubben tilbyder gode træningsfaciliteter og en hyggelig klubhusatmosfære.",
            link: "#"
        },
        {
            name: "Randers Fjord Golfklub",
            region: "Midtjylland",
            club_type: "Randers Fjord Golfklub",
            holes: [18, 6],
            range: "No",
            facilities: ["Buggy","Parkering","Driving Range"],
            image: "images/randers-fjord-golf-klub.png",
            description1: "Randers Fjord Golfklub er beliggende i smukke omgivelser ved fjorden og tilbyder en 18-hullers bane. Klubben er kendt for sin afslappede atmosfære og gode faciliteter, herunder driving range og buggyudlejning.",
            description2: "Klubben er kendt for sin afslappede atmosfære og gode faciliteter.",
            link: "#"
        },
        
    ];

    // Facility icons for modal
    const facilityIcons = {
        "Restaurant": "images/icons/restaurant.png",
        "Driving Range": "images/icons/driving-range.png",
        "Parkering": "images/icons/parking.png",
        "Shop": "images/icons/shop.png",
        "Buggy": "images/icons/buggy.png",
        "Golfbil": "images/icons/golf-cart.png",
        "Golfvogn": "images/icons/golf-cart.png",
        "Holes": "images/icons/holes.png",
    };

    
    // Function to display clubs in the club list
    function displayClubs(filteredClubs) {
        const clubList = document.getElementById('club-list');
        clubList.innerHTML = '';

        filteredClubs.forEach(club => {
            const clubDiv = document.createElement('div');
            clubDiv.className = 'club';
            clubDiv.style.backgroundImage = `url('${club.image}')`;
            clubDiv.innerHTML = `
                <h4>${club.name}</h4>
                <button onclick="openModal('${club.name}')">Læs mere</button>
            `;
            clubList.appendChild(clubDiv);
        });
    }

    // Function to filter clubs based on selected criteria
    window.filterClubs = function filterClubs() {
        const region = document.getElementById('region').value;
        const clubType = document.getElementById('club_type').value;
        const holes = document.getElementById('holes').value;
        const range = document.getElementById('range').value;
        const facilities = document.getElementById('facilities').value;

        const filteredClubs = clubs.filter(club => {
            return (!region || club.region === region) &&
                   (!clubType || club.club_type === clubType) &&
                   (!holes || club.holes.includes(parseInt(holes))) &&
                   (!range || club.range === range) &&
                   (!facilities || club.facilities.includes(facilities));
        });

        displayClubs(filteredClubs);
    };

    // Function to open modal and display club details
    window.openModal = function openModal(clubName) {
        const club = clubs.find(club => club.name === clubName);
        if (club) {
            document.getElementById('modal-image').src = club.image;
            document.getElementById('modal-title').textContent = club.name;
            document.getElementById('modal-description1').textContent = club.description1;
            document.getElementById('modal-description2').textContent = club.description2;
            document.getElementById('modal-link').href = club.link;

            const facilitiesContainer = document.getElementById('modal-facilities');
            facilitiesContainer.innerHTML = '';

            // Display holes as a single facility with the count next to it
            if (club.holes.length > 0) {
                const facilityDiv = document.createElement('div');
                facilityDiv.innerHTML = `<img src="${facilityIcons['Holes']}" alt="Holes" class="facility-icon"> ${club.holes.join(', ')} huller`;
                facilitiesContainer.appendChild(facilityDiv);
            }

            // Display other facilities
            club.facilities.forEach(facility => {
                if (facility !== "Holes") {
                    const facilityDiv = document.createElement('div');
                    const iconPath = facilityIcons[facility] || "images/icons/default.png"; // Default icon if not found
                    facilityDiv.innerHTML = `<img src="${iconPath}" alt="${facility}" class="facility-icon"> ${facility}`;
                    facilitiesContainer.appendChild(facilityDiv);
                }
            });

            //NY DATA KLUB SLETTES?
            document.getElementById('modal-link').onclick = function() {
                saveClubData(club);
            };
            //NY DATA KLUB SLETTES?

            document.getElementById('club-modal').style.display = "block";
        }
    };

    // Function to close modal
    window.closeModal = function closeModal() {
        document.getElementById('club-modal').style.display = "none";
    };

    //NY DATA KLUB SLETTES?
    function saveClubData(club) {
        localStorage.setItem('selectedClub', JSON.stringify(club));
    }
    //NY DATA KLUB SLETTES?

    // Display all clubs initially
    displayClubs(clubs);  

});







