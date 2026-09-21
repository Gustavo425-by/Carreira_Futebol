const ClubDatabase = {

    leagues: {

        nacional: {
            name: "Liga Nacional",
            country: "Brasil",
            strength: 60
        },

        argentina: {
            name: "Liga Argentina",
            country: "Argentina",
            strength: 62
        },

        portugal: {
            name: "Liga Portuguesa",
            country: "Portugal",
            strength: 65
        },

        espanha: {
            name: "Liga Espanhola",
            country: "Espanha",
            strength: 76
        },

        inglaterra: {
            name: "Liga Inglesa",
            country: "Inglaterra",
            strength: 80
        },

        franca: {
            name: "Liga Francesa",
            country: "França",
            strength: 73
        },

        alemanha: {
            name: "Liga Alemã",
            country: "Alemanha",
            strength: 77
        },

        italia: {
            name: "Liga Italiana",
            country: "Itália",
            strength: 75
        }

    },


    clubs: [

        {
            id: "clube_inicial",
            name: "Clube Inicial",
            country: "Brasil",
            league: "nacional",
            strength: 62,
            reputation: 45,
            stadium: "Estádio Municipal"
        },

        {
            id: "atletico_fc",
            name: "Atlético FC",
            country: "Brasil",
            league: "nacional",
            strength: 64,
            reputation: 48,
            stadium: "Arena Atlético"
        },

        {
            id: "real_capital",
            name: "Real Capital",
            country: "Brasil",
            league: "nacional",
            strength: 72,
            reputation: 65,
            stadium: "Arena Capital"
        },

        {
            id: "fc_imperial",
            name: "FC Imperial",
            country: "Brasil",
            league: "nacional",
            strength: 78,
            reputation: 74,
            stadium: "Estádio Imperial"
        },

        {
            id: "united_city",
            name: "United City",
            country: "Brasil",
            league: "nacional",
            strength: 82,
            reputation: 82,
            stadium: "City Arena"
        },

        {
            id: "racing_del_sur",
            name: "Racing del Sur",
            country: "Argentina",
            league: "argentina",
            strength: 68,
            reputation: 58,
            stadium: "Estádio del Sur"
        },

        {
            id: "club_andino",
            name: "Club Andino",
            country: "Argentina",
            league: "argentina",
            strength: 74,
            reputation: 69,
            stadium: "Arena Andina"
        },

        {
            id: "lisboa_sport",
            name: "Lisboa Sport",
            country: "Portugal",
            league: "portugal",
            strength: 75,
            reputation: 70,
            stadium: "Estádio Lisboa"
        },

        {
            id: "porto_real",
            name: "Porto Real",
            country: "Portugal",
            league: "portugal",
            strength: 79,
            reputation: 78,
            stadium: "Arena Real"
        },

        {
            id: "madrid_cf",
            name: "Madrid CF",
            country: "Espanha",
            league: "espanha",
            strength: 86,
            reputation: 90,
            stadium: "Estádio Madrid"
        },

        {
            id: "barcelona_real",
            name: "Barcelona Real",
            country: "Espanha",
            league: "espanha",
            strength: 88,
            reputation: 92,
            stadium: "Camp Real"
        },

        {
            id: "london_united",
            name: "London United",
            country: "Inglaterra",
            league: "inglaterra",
            strength: 84,
            reputation: 86,
            stadium: "London Stadium"
        },

        {
            id: "manchester_blue",
            name: "Manchester Blue",
            country: "Inglaterra",
            league: "inglaterra",
            strength: 91,
            reputation: 95,
            stadium: "Blue Arena"
        },

        {
            id: "paris_fc",
            name: "Paris FC",
            country: "França",
            league: "franca",
            strength: 87,
            reputation: 91,
            stadium: "Paris Arena"
        },

        {
            id: "munich_star",
            name: "Munich Star",
            country: "Alemanha",
            league: "alemanha",
            strength: 89,
            reputation: 93,
            stadium: "Star Arena"
        },

        {
            id: "milano_calcio",
            name: "Milano Calcio",
            country: "Itália",
            league: "italia",
            strength: 84,
            reputation: 87,
            stadium: "Milano Stadium"
        }

    ],


    getClub(id) {

        return this.clubs.find(
            club => club.id === id
        ) || null;

    },


    getClubByName(name) {

        return this.clubs.find(
            club => club.name === name
        ) || null;

    },


    getClubsByLeague(league) {

        return this.clubs.filter(
            club => club.league === league
        );

    },


    getClubsByCountry(country) {

        return this.clubs.filter(
            club => club.country === country
        );

    },


    getPossibleTransfers(player) {

        const overall =
            player.overall || 68;

        return this.clubs.filter(
            club => {

                if (
                    club.name === player.club
                ) {
                    return false;
                }

                const difference =
                    club.strength -
                    overall;

                return difference <= 15;

            }
        );

    },


    calculateInterest(player, club) {

        const overall =
            player.overall || 68;

        const potential =
            player.potential ||
            overall;

        const difference =
            overall -
            club.strength;

        let interest = 50;


        interest +=
            (overall - 70) * 2;


        interest +=
            (potential - overall) * 1.5;


        if (difference >= 10) {

            interest += 25;

        }

        else if (difference >= 0) {

            interest += 10;

        }

        else if (difference >= -10) {

            interest -= 10;

        }

        else {

            interest -= 30;

        }


        if (player.age <= 21) {

            interest += 10;

        }

        else if (player.age >= 30) {

            interest -= 10;

        }


        interest +=
            (club.reputation - 50) * 0.15;


        return Math.max(
            0,
            Math.min(
                100,
                Math.round(interest)
            )
        );

    },


    generateOffer(player, club) {

        const interest =
            this.calculateInterest(
                player,
                club
            );

        if (interest < 55) {
            return null;
        }


        const marketValue =
            player.marketValue ||
            SimulationEngine.calculateMarketValue(
                player
            );


        let transferValue =
            marketValue *
            (
                0.85 +
                Math.random() * 0.70
            );


        if (club.strength >= 85) {

            transferValue *= 1.25;

        }


        transferValue =
            Math.round(
                transferValue
            );


        let salary =
            player.salary ||
            SimulationEngine.calculateSalary(
                player
            );


        salary *=
            1 +
            (
                club.strength - 60
            ) * 0.025;


        salary *=
            0.90 +
            Math.random() * 0.35;


        salary =
            Math.round(
                salary
            );


        return {

            clubId:
                club.id,

            clubName:
                club.name,

            country:
                club.country,

            league:
                club.league,

            interest:
                interest,

            transferValue:
                transferValue,

            salary:
                salary,

            contractYears:
                Math.floor(
                    2 +
                    Math.random() * 4
                ),

            status:
                "pending"

        };

    },


    generateOffers(player) {

        const possible =
            this.getPossibleTransfers(
                player
            );

        const offers = [];


        possible.forEach(
            club => {

                const interest =
                    this.calculateInterest(
                        player,
                        club
                    );

                const roll =
                    Math.random() * 100;


                if (
                    interest >= 65 &&
                    roll <= interest
                ) {

                    const offer =
                        this.generateOffer(
                            player,
                            club
                        );

                    if (offer) {

                        offers.push(
                            offer
                        );

                    }

                }

            }
        );


        return offers;

    },


    transferPlayer(
        player,
        clubId,
        offer = null
    ) {

        const club =
            this.getClub(
                clubId
            );


        if (!club) {

            return {

                success: false,

                message:
                    "Clube não encontrado."

            };

        }


        if (!player.clubHistory) {

            player.clubHistory = [];

        }


        player.clubHistory.push({

            club:
                player.club,

            season:
                player.season,

            type:
                "transfer"

        });


        player.club =
            club.name;

        player.clubId =
            club.id;

        player.clubCountry =
            club.country;

        player.clubLeague =
            club.league;


        if (offer) {

            player.salary =
                offer.salary;

        }

        else {

            player.salary =
                SimulationEngine.calculateSalary(
                    player
                );

        }


        player.reputation =
            player.reputation || 0;


        player.reputation +=
            Math.round(
                club.reputation * 0.05
            );


        player.reputation =
            Math.min(
                100,
                player.reputation
            );


        return {

            success: true,

            club:
                club,

            message:
                "Transferência concluída."

        };

    }

};


window.ClubDatabase =
    ClubDatabase;