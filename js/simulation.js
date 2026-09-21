const Simulation = {

    TOTAL_ROUNDS: 38,

    // =========================================================
    // LIGAS
    // =========================================================

    leagues: {

        brazil: {
            id: "brazil",
            name: "Brasil",
            country: "Brasil",
            flag: "🇧🇷",

            clubs: [
                { id: "brasil_inicial", name: "Clube Inicial Brasil", strength: 68 },
                { id: "brasil_aurora", name: "Aurora Paulista", strength: 72 },
                { id: "brasil_uniao", name: "União Central", strength: 75 },
                { id: "brasil_capital", name: "Capital FC", strength: 78 },
                { id: "brasil_estrelas", name: "Estrela do Sul", strength: 81 },
                { id: "brasil_nacional", name: "Nacional SC", strength: 84 },
                { id: "brasil_porto", name: "Real Porto", strength: 86 },
                { id: "brasil_federal", name: "Federal FC", strength: 79 },
                { id: "brasil_metropole", name: "Metrópole FC", strength: 74 },
                { id: "brasil_vitoria", name: "Vitória Metropolitana", strength: 70 }
            ]
        },

        argentina: {
            id: "argentina",
            name: "Argentina",
            country: "Argentina",
            flag: "🇦🇷",

            clubs: [
                { id: "arg_inicial", name: "Clube Inicial Argentina", strength: 68 },
                { id: "arg_buenos", name: "Buenos Aires FC", strength: 73 },
                { id: "arg_estrella", name: "Estrella Argentina", strength: 76 },
                { id: "arg_nacional", name: "Nacional de Plata", strength: 79 },
                { id: "arg_athletico", name: "Atlético del Sur", strength: 81 },
                { id: "arg_porteno", name: "Porteno FC", strength: 84 },
                { id: "arg_rioplatense", name: "Río Platense", strength: 86 },
                { id: "arg_central", name: "Central Argentino", strength: 80 },
                { id: "arg_union", name: "Unión de Córdoba", strength: 74 },
                { id: "arg_juvenil", name: "Juventud FC", strength: 70 }
            ]
        },

        portugal: {
            id: "portugal",
            name: "Portugal",
            country: "Portugal",
            flag: "🇵🇹",

            clubs: [
                { id: "por_inicial", name: "Clube Inicial Portugal", strength: 68 },
                { id: "por_lisboa", name: "Lisboa Athletic", strength: 74 },
                { id: "por_porto", name: "Porto Real", strength: 79 },
                { id: "por_norte", name: "Norte FC", strength: 76 },
                { id: "por_estrela", name: "Estrela Lusitana", strength: 81 },
                { id: "por_atlantico", name: "Atlântico FC", strength: 84 },
                { id: "por_nacional", name: "Nacional Lusitano", strength: 87 },
                { id: "por_sul", name: "Sul Sporting", strength: 73 },
                { id: "por_central", name: "Central Português", strength: 78 },
                { id: "por_vitoria", name: "Vitória de Portugal", strength: 71 }
            ]
        },

        spain: {
            id: "spain",
            name: "Espanha",
            country: "Espanha",
            flag: "🇪🇸",

            clubs: [
                { id: "esp_inicial", name: "Clube Inicial Espanha", strength: 68 },
                { id: "esp_madrid", name: "Madrid Atlético", strength: 78 },
                { id: "esp_valencia", name: "Valencia Real", strength: 75 },
                { id: "esp_sevilla", name: "Sevilla Unión", strength: 77 },
                { id: "esp_norte", name: "Norte Español", strength: 73 },
                { id: "esp_castilla", name: "Castilla FC", strength: 82 },
                { id: "esp_real", name: "Real Hispânico", strength: 90 },
                { id: "esp_barcelona", name: "Barcelona Azul", strength: 88 },
                { id: "esp_atletico", name: "Atlético Ibérico", strength: 85 },
                { id: "esp_vitoria", name: "Vitória Madrid", strength: 71 }
            ]
        },

        england: {
            id: "england",
            name: "Inglaterra",
            country: "Inglaterra",
            flag: "🏴",

            clubs: [
                { id: "eng_inicial", name: "Clube Inicial Inglaterra", strength: 68 },
                { id: "eng_london", name: "London City", strength: 76 },
                { id: "eng_north", name: "North United", strength: 79 },
                { id: "eng_liverpool", name: "Liverpool Royal", strength: 86 },
                { id: "eng_manchester", name: "Manchester Blue", strength: 91 },
                { id: "eng_west", name: "West Albion", strength: 78 },
                { id: "eng_red", name: "Redchester FC", strength: 84 },
                { id: "eng_chelsea", name: "Chelsea Capital", strength: 87 },
                { id: "eng_arsenal", name: "Arsenal London", strength: 88 },
                { id: "eng_everton", name: "Everton Central", strength: 72 }
            ]
        },

        france: {
            id: "france",
            name: "França",
            country: "França",
            flag: "🇫🇷",

            clubs: [
                { id: "fra_inicial", name: "Clube Inicial França", strength: 68 },
                { id: "fra_paris", name: "Paris Royal", strength: 90 },
                { id: "fra_lyon", name: "Lyon Athletic", strength: 80 },
                { id: "fra_marseille", name: "Marseille Azul", strength: 82 },
                { id: "fra_nice", name: "Nice FC", strength: 76 },
                { id: "fra_monaco", name: "Monaco Elite", strength: 85 },
                { id: "fra_nantes", name: "Nantes Central", strength: 72 },
                { id: "fra_lille", name: "Lille Nord", strength: 79 },
                { id: "fra_bordeaux", name: "Bordeaux Real", strength: 74 },
                { id: "fra_toulouse", name: "Toulouse FC", strength: 70 }
            ]
        },

        germany: {
            id: "germany",
            name: "Alemanha",
            country: "Alemanha",
            flag: "🇩🇪",

            clubs: [
                { id: "ger_inicial", name: "Clube Inicial Alemanha", strength: 68 },
                { id: "ger_berlin", name: "Berlin FC", strength: 74 },
                { id: "ger_dortmund", name: "Dortmund Central", strength: 86 },
                { id: "ger_bayern", name: "Bayern Imperial", strength: 91 },
                { id: "ger_leipzig", name: "Leipzig Athletic", strength: 82 },
                { id: "ger_hamburg", name: "Hamburg Nord", strength: 76 },
                { id: "ger_frankfurt", name: "Frankfurt Elite", strength: 79 },
                { id: "ger_stuttgart", name: "Stuttgart FC", strength: 75 },
                { id: "ger_wolfsburg", name: "Wolfsburg Real", strength: 78 },
                { id: "ger_koln", name: "Köln Central", strength: 71 }
            ]
        },

        italy: {
            id: "italy",
            name: "Itália",
            country: "Itália",
            flag: "🇮🇹",

            clubs: [
                { id: "ita_inicial", name: "Clube Inicial Itália", strength: 68 },
                { id: "ita_milan", name: "Milano Rosso", strength: 85 },
                { id: "ita_inter", name: "Inter Milano", strength: 87 },
                { id: "ita_roma", name: "Roma Imperial", strength: 82 },
                { id: "ita_torino", name: "Torino FC", strength: 76 },
                { id: "ita_napoli", name: "Napoli Azul", strength: 84 },
                { id: "ita_lazio", name: "Lazio Capital", strength: 79 },
                { id: "ita_firenze", name: "Firenze FC", strength: 75 },
                { id: "ita_juventus", name: "Torino Juventus", strength: 89 },
                { id: "ita_bologna", name: "Bologna Central", strength: 72 }
            ]
        }
    },

    // =========================================================
    // MAPA DE CLUBES
    // =========================================================

    clubs: {},

    // =========================================================
    // INICIALIZAÇÃO
    // =========================================================

    init() {

        this.clubs = {};

        Object.values(this.leagues).forEach(league => {

            league.clubs.forEach(club => {

                this.clubs[club.id] = {
                    ...club,
                    leagueId: league.id,
                    leagueName: league.name,
                    country: league.country,
                    flag: league.flag
                };

            });

        });
    },

    // =========================================================
    // CARREGAR JOGADOR
    // =========================================================

    loadPlayer() {

        const saved = localStorage.getItem("careerPlayer");

        if (!saved) {
            return null;
        }

        try {

            const player = JSON.parse(saved);

            this.preparePlayer(player);

            return player;

        } catch (error) {

            console.error("Erro ao carregar jogador:", error);

            return null;
        }
    },

    // =========================================================
    // SALVAR
    // =========================================================

    savePlayer(player) {

        localStorage.setItem(
            "careerPlayer",
            JSON.stringify(player)
        );

    },

    // =========================================================
    // PREPARAR JOGADOR
    // =========================================================

    preparePlayer(player) {

        if (!player) {
            return;
        }

        // -----------------------------
        // COMPATIBILIDADE COM CARREIRAS ANTIGAS
        // -----------------------------

        if (!player.career) {

            player.career = {
                totalGoals: player.goals || 0,
                totalAssists: player.assists || 0,
                totalAppearances: player.appearances || 0,
                seasons: 0,
                transfers: []
            };

        }

        if (!player.career.transfers) {
            player.career.transfers = [];
        }

        if (!player.transfer) {

            player.transfer = {
                offer: null,
                cooldown: 0,
                nextCheck: 6,
                lastTransferSeason: null
            };

        }

        if (!player.attributes) {

            player.attributes = {
                speed: 72,
                finishing: 68,
                passing: 76,
                dribbling: 79,
                physical: 63,
                mental: 71,
                positioning: 68,
                defense: 40
            };

        }

        if (typeof player.form !== "number") {
            player.form = 75;
        }

        if (typeof player.energy !== "number") {
            player.energy = 100;
        }

        if (typeof player.round !== "number") {
            player.round = 0;
        }

        if (typeof player.season !== "number") {
            player.season = 2026;
        }

        if (typeof player.appearances !== "number") {
            player.appearances = 0;
        }

        if (typeof player.goals !== "number") {
            player.goals = 0;
        }

        if (typeof player.assists !== "number") {
            player.assists = 0;
        }

        if (typeof player.averageRating !== "number") {
            player.averageRating = 0;
        }

        if (typeof player.goodMatches !== "number") {
            player.goodMatches = 0;
        }

        if (!player.league) {

            const countryMap = {
                "Brasil": "brazil",
                "Argentina": "argentina",
                "Portugal": "portugal",
                "Espanha": "spain",
                "Inglaterra": "england",
                "França": "france",
                "Alemanha": "germany",
                "Itália": "italy"
            };

            player.league =
                countryMap[player.country] || "brazil";

        }

        // Corrige clube antigo
        const currentClub = this.getClub(player.club);

        if (!currentClub) {

            const league = this.leagues[player.league];

            if (league) {

                player.club = league.clubs[0].id;

            }

        }

        // Se veio da criação antiga com nome do clube
        const foundClubByName = this.findClubByName(player.club);

        if (foundClubByName) {
            player.club = foundClubByName.id;
            player.league = foundClubByName.leagueId;
        }

        // Caso seja uma carreira antiga
        if (player.club === "Clube Inicial") {

            const league = this.leagues[player.league] || this.leagues.brazil;

            player.club = league.clubs[0].id;

        }

        this.ensureLeague(player);

        if (!player.schedule || player.schedule.length !== this.TOTAL_ROUNDS) {

            this.generateSchedule(player);

        }

        this.savePlayer(player);
    },

    // =========================================================
    // BUSCAR CLUBE
    // =========================================================

    getClub(clubId) {

        return this.clubs[clubId] || null;

    },

    findClubByName(name) {

        if (!name) {
            return null;
        }

        return Object.values(this.clubs).find(
            club => club.name === name
        ) || null;

    },

    // =========================================================
    // BUSCAR LIGA DO JOGADOR
    // =========================================================

    getPlayerLeague(player) {

        if (!player) {
            return null;
        }

        return this.leagues[player.league] || null;

    },

    // =========================================================
    // GARANTIR TABELA
    // =========================================================

    ensureLeague(player) {

        const league = this.getPlayerLeague(player);

        if (!league) {
            return [];
        }

        if (!player.leagueTable) {
            player.leagueTable = {};
        }

        league.clubs.forEach(club => {

            if (!player.leagueTable[club.id]) {

                player.leagueTable[club.id] = {

                    id: club.id,
                    name: club.name,
                    strength: club.strength,

                    points: 0,
                    played: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,

                    goalsFor: 0,
                    goalsAgainst: 0

                };

            }

        });

        // Remove clubes de uma liga antiga
        Object.keys(player.leagueTable).forEach(id => {

            const exists = league.clubs.some(
                club => club.id === id
            );

            if (!exists) {
                delete player.leagueTable[id];
            }

        });

        return Object.values(player.leagueTable);

    },

    // =========================================================
    // CRIAR CALENDÁRIO REAL
    // =========================================================

    generateSchedule(player) {

        const league = this.getPlayerLeague(player);

        if (!league) {
            return;
        }

        const teams = league.clubs.map(club => club.id);

        // algoritmo de round-robin
        let rotation = [...teams];

        const firstHalf = [];

        for (let round = 0; round < teams.length - 1; round++) {

            const matches = [];

            for (let i = 0; i < teams.length / 2; i++) {

                let home = rotation[i];
                let away = rotation[teams.length - 1 - i];

                // Alternância do mando
                if (round % 2 === 1) {

                    const temp = home;

                    home = away;
                    away = temp;

                }

                matches.push({
                    home,
                    away
                });

            }

            firstHalf.push(matches);

            // Mantém o primeiro fixo e gira os demais
            const fixed = rotation[0];
            const rest = rotation.slice(1);

            rest.unshift(rest.pop());

            rotation = [fixed, ...rest];

        }

        const secondHalf = firstHalf.map(round => {

            return round.map(match => ({

                home: match.away,
                away: match.home

            }));

        });

        player.schedule = [
            ...firstHalf,
            ...secondHalf
        ];

        player.scheduleLeague = league.id;

        this.savePlayer(player);

    },

    // =========================================================
    // PRÓXIMO ADVERSÁRIO
    // =========================================================

    getNextOpponent(player) {

        const league = this.getPlayerLeague(player);

        if (!league) {
            return null;
        }

        if (
            !player.schedule ||
            player.schedule.length !== this.TOTAL_ROUNDS ||
            player.scheduleLeague !== league.id
        ) {

            this.generateSchedule(player);

        }

        const roundIndex = Math.min(
            Math.max(player.round, 0),
            this.TOTAL_ROUNDS - 1
        );

        const matches = player.schedule[roundIndex];

        if (!matches) {
            return null;
        }

        const match = matches.find(
            item =>
                item.home === player.club ||
                item.away === player.club
        );

        if (!match) {
            return null;
        }

        const opponentId =
            match.home === player.club
                ? match.away
                : match.home;

        return this.getClub(opponentId);

    },

    // =========================================================
    // MANDO DE CAMPO
    // =========================================================

    isPlayerHome(player) {

        const league = this.getPlayerLeague(player);

        if (!league) {
            return false;
        }

        const matches = player.schedule[player.round];

        if (!matches) {
            return false;
        }

        const match = matches.find(
            item =>
                item.home === player.club ||
                item.away === player.club
        );

        if (!match) {
            return false;
        }

        return match.home === player.club;

    },

    // =========================================================
    // OVERALL
    // =========================================================

    calculateOverall(player) {

        const a = player.attributes;

        let overall;

        switch (player.position) {

            case "GOL":

                overall =
                    a.mental * 0.20 +
                    a.positioning * 0.25 +
                    a.defense * 0.30 +
                    a.physical * 0.15 +
                    a.passing * 0.10;

                break;

            case "ZAG":

                overall =
                    a.defense * 0.35 +
                    a.physical * 0.20 +
                    a.mental * 0.15 +
                    a.positioning * 0.15 +
                    a.passing * 0.10 +
                    a.speed * 0.05;

                break;

            case "LAT":

                overall =
                    a.speed * 0.20 +
                    a.defense * 0.20 +
                    a.physical * 0.15 +
                    a.passing * 0.15 +
                    a.dribbling * 0.15 +
                    a.positioning * 0.15;

                break;

            case "VOL":

                overall =
                    a.defense * 0.20 +
                    a.passing * 0.25 +
                    a.mental * 0.20 +
                    a.physical * 0.15 +
                    a.positioning * 0.10 +
                    a.dribbling * 0.10;

                break;

            case "MC":

                overall =
                    a.passing * 0.25 +
                    a.mental * 0.20 +
                    a.dribbling * 0.15 +
                    a.positioning * 0.15 +
                    a.physical * 0.10 +
                    a.speed * 0.05 +
                    a.finishing * 0.10;

                break;

            case "MEI":

                overall =
                    a.passing * 0.20 +
                    a.dribbling * 0.20 +
                    a.mental * 0.20 +
                    a.finishing * 0.15 +
                    a.positioning * 0.10 +
                    a.speed * 0.10 +
                    a.physical * 0.05;

                break;

            case "PE":
            case "PD":

                overall =
                    a.speed * 0.20 +
                    a.dribbling * 0.25 +
                    a.finishing * 0.15 +
                    a.passing * 0.15 +
                    a.positioning * 0.15 +
                    a.mental * 0.10;

                break;

            case "ATA":

                overall =
                    a.finishing * 0.30 +
                    a.positioning * 0.20 +
                    a.speed * 0.15 +
                    a.dribbling * 0.15 +
                    a.mental * 0.10 +
                    a.physical * 0.10;

                break;

            default:

                overall =
                    Object.values(a).reduce(
                        (sum, value) => sum + value,
                        0
                    ) / Object.values(a).length;

        }

        overall = Math.round(overall);

        if (player.potential) {
            overall = Math.min(overall, player.potential);
        }

        return overall;

    },

    // =========================================================
    // FATOR DE TREINO POR IDADE
    // =========================================================

    getAgeTrainingFactor(age) {

        if (age <= 18) return 1.25;
        if (age <= 20) return 1.10;
        if (age <= 23) return 1.00;
        if (age <= 26) return 0.88;
        if (age <= 29) return 0.72;
        if (age <= 32) return 0.55;

        return 0.35;

    },

    // =========================================================
    // TREINAMENTO
    // =========================================================

    train(player, attribute) {

        if (!player.attributes[attribute]) {

            return {
                success: false,
                message: "Atributo inválido."
            };

        }

        if (player.energy < 25) {

            return {
                success: false,
                message: "Você está sem energia suficiente para treinar."
            };

        }

        if (player.trainingUsed) {

            return {
                success: false,
                message: "Você já treinou nesta rodada."
            };

        }

        const oldOverall = player.overall;

        const current = player.attributes[attribute];

        const ageFactor =
            this.getAgeTrainingFactor(player.age);

        const potentialGap =
            Math.max(
                0,
                (player.potential || 85) - current
            );

        let gain =
            0.12 +
            Math.random() * 0.20;

        gain *= ageFactor;

        gain *= Math.min(
            1.25,
            0.55 + potentialGap / 25
        );

        // Evita crescimento exagerado
        gain = Math.min(gain, 0.45);

        player.attributes[attribute] =
            Math.min(
                99,
                current + gain
            );

        player.energy -= 22;

        player.form = Math.min(
            100,
            player.form + 1
        );

        player.overall =
            this.calculateOverall(player);

        player.trainingUsed = true;

        this.savePlayer(player);

        return {

            success: true,

            message:
                `${this.attributeName(attribute)} melhorou.`,

            attribute,

            gain,

            oldOverall,

            newOverall: player.overall

        };

    },

    // =========================================================
    // DESCANSAR
    // =========================================================

    rest(player) {

        if (player.trainingUsed) {

            return {
                success: false,
                message: "Você já realizou uma atividade nesta rodada."
            };

        }

        player.energy = Math.min(
            100,
            player.energy + 30
        );

        player.form = Math.min(
            100,
            player.form + 2
        );

        player.trainingUsed = true;

        this.savePlayer(player);

        return {

            success: true,

            message:
                "Você descansou e recuperou energia."

        };

    },

    // =========================================================
    // NOME DOS ATRIBUTOS
    // =========================================================

    attributeName(attribute) {

        const names = {

            speed: "Velocidade",
            finishing: "Finalização",
            passing: "Passe",
            dribbling: "Drible",
            physical: "Físico",
            mental: "Mental",
            positioning: "Posicionamento",
            defense: "Defesa"

        };

        return names[attribute] || attribute;

    },

    // =========================================================
    // SIMULAR PARTIDA
    // =========================================================

    simulateMatch(player) {

        const opponent = this.getNextOpponent(player);

        if (!opponent) {

            return {
                success: false,
                message: "Não foi possível encontrar o adversário."
            };

        }

        const currentClub = this.getClub(player.club);

        const isHome =
            this.isPlayerHome(player);

        const homeClub =
            isHome
                ? currentClub
                : opponent;

        const awayClub =
            isHome
                ? opponent
                : currentClub;

        // -----------------------------
        // FORÇA DOS CLUBES
        // -----------------------------

        let homeStrength =
            homeClub.strength;

        let awayStrength =
            awayClub.strength;

        // vantagem de casa
        homeStrength += 3;

        // -----------------------------
        // IMPACTO DO JOGADOR
        // -----------------------------

        const playerImpact =
            (player.overall * 0.55) +
            (player.form * 0.25) +
            (player.energy * 0.10) +
            (player.attributes.mental * 0.10);

        if (isHome) {
            homeStrength +=
                Math.max(
                    0,
                    (playerImpact - 65) * 0.10
                );
        } else {
            awayStrength +=
                Math.max(
                    0,
                    (playerImpact - 65) * 0.10
                );
        }

        // -----------------------------
        // GOLS
        // -----------------------------

        const homeExpected =
            0.65 +
            Math.max(
                0,
                (homeStrength - awayStrength) / 24
            );

        const awayExpected =
            0.65 +
            Math.max(
                0,
                (awayStrength - homeStrength) / 24
            );

        const homeGoals =
            this.randomGoals(homeExpected);

        const awayGoals =
            this.randomGoals(awayExpected);

        // -----------------------------
        // DESEMPENHO DO JOGADOR
        // -----------------------------

        const playerStrength =
            player.overall * 0.55 +
            player.form * 0.25 +
            player.energy * 0.20;

        const relativeStrength =
            playerStrength -
            opponent.strength;

        let goalChance =
            0.04 +
            Math.max(
                0,
                relativeStrength
            ) / 600;

        let assistChance =
            0.05 +
            Math.max(
                0,
                relativeStrength
            ) / 500;

        if (
            ["MEI", "MC", "PE", "PD"].includes(
                player.position
            )
        ) {

            assistChance += 0.05;

        }

        if (player.position === "ATA") {
            goalChance += 0.08;
        }

        if (
            player.position === "PE" ||
            player.position === "PD"
        ) {

            goalChance += 0.04;

        }

        if (
            player.position === "GOL" ||
            player.position === "ZAG"
        ) {

            goalChance *= 0.25;
            assistChance *= 0.20;

        }

        let goals = 0;
        let assists = 0;

        if (Math.random() < goalChance) {
            goals++;
        }

        if (
            Math.random() < goalChance * 0.25 &&
            ["ATA", "PE", "PD"].includes(player.position)
        ) {
            goals++;
        }

        if (Math.random() < assistChance) {
            assists++;
        }

        // -----------------------------
        // NOTA
        // -----------------------------

        let rating = 6.0;

        if (homeGoals > awayGoals && isHome) {
            rating += 0.5;
        }

        if (awayGoals > homeGoals && !isHome) {
            rating += 0.5;
        }

        if (homeGoals < awayGoals && isHome) {
            rating -= 0.35;
        }

        if (awayGoals < homeGoals && !isHome) {
            rating -= 0.35;
        }

        rating +=
            (player.form - 75) / 100;

        rating +=
            (player.overall - opponent.strength) / 100;

        rating += goals * 0.85;
        rating += assists * 0.45;

        rating +=
            (Math.random() - 0.5) * 0.45;

        rating =
            Math.max(
                4.5,
                Math.min(
                    10,
                    rating
                )
            );

        rating =
            Math.round(rating * 10) / 10;

        // -----------------------------
        // ATUALIZAR TABELA
        // -----------------------------

        this.applyLeagueResult(
            player,
            homeClub.id,
            awayClub.id,
            homeGoals,
            awayGoals
        );

        // -----------------------------
        // ESTATÍSTICAS DO JOGADOR
        // -----------------------------

        player.appearances++;
        player.goals += goals;
        player.assists += assists;

        player.career.totalAppearances++;
        player.career.totalGoals += goals;
        player.career.totalAssists += assists;

        // média
        const previousRatings =
            (player.appearances - 1) *
            player.averageRating;

        player.averageRating =
            (
                previousRatings + rating
            ) / player.appearances;

        player.averageRating =
            Math.round(
                player.averageRating * 100
            ) / 100;

        if (rating >= 7.5) {
            player.goodMatches++;
        }

        // -----------------------------
        // ENERGIA / FORMA
        // -----------------------------

        player.energy = Math.max(
            0,
            player.energy - 15
        );

        if (rating >= 7) {

            player.form = Math.min(
                100,
                player.form + 2
            );

        } else if (rating < 5.8) {

            player.form = Math.max(
                40,
                player.form - 2
            );

        }

        // -----------------------------
        // FINANÇAS
        // -----------------------------

        const salary =
            player.salary || 1000;

        player.money += salary;

        if (goals > 0) {
            player.money += goals * 500;
        }

        if (assists > 0) {
            player.money += assists * 250;
        }

        // -----------------------------
        // VALOR DE MERCADO
        // -----------------------------

        player.marketValue =
            this.calculateMarketValue(player);

        // -----------------------------
        // TRANSFERÊNCIAS
        // -----------------------------

        if (player.transfer.cooldown > 0) {
            player.transfer.cooldown--;
        }

        if (
            player.transfer.offer &&
            player.transfer.offer.expiry !== undefined
        ) {

            player.transfer.offer.expiry--;

            if (player.transfer.offer.expiry <= 0) {
                player.transfer.offer = null;
            }

        }

        const transferOffer =
            this.maybeGenerateTransferOffer(player);

        // -----------------------------
        // FINAL DA RODADA
        // -----------------------------

        player.lastOpponent = opponent.id;

        player.round++;

        player.trainingUsed = false;

        // -----------------------------
        // FIM DE TEMPORADA
        // -----------------------------

        let seasonFinished = false;

        if (player.round >= this.TOTAL_ROUNDS) {

            player.round =
                this.TOTAL_ROUNDS;

            this.finishSeason(player);

            seasonFinished = true;

        }

        this.savePlayer(player);

        return {

            success: true,

            homeTeam: homeClub.name,
            awayTeam: awayClub.name,

            homeGoals,
            awayGoals,

            goals,
            assists,

            rating,

            opponent,

            transferOffer,

            seasonFinished

        };

    },

    // =========================================================
    // GERAÇÃO DE GOLS
    // =========================================================

    randomGoals(expected) {

        const roll = Math.random();

        if (roll < 0.10) return 0;

        if (roll < 0.62) {
            return Math.random() < expected / 2
                ? 1
                : 0;
        }

        if (roll < 0.90) {
            return Math.random() < expected / 1.8
                ? 2
                : 1;
        }

        return Math.random() < expected / 2.5
            ? 3
            : 2;

    },

    // =========================================================
    // RESULTADO NA TABELA
    // =========================================================

    applyLeagueResult(
        player,
        homeId,
        awayId,
        homeGoals,
        awayGoals
    ) {

        this.ensureLeague(player);

        const home =
            player.leagueTable[homeId];

        const away =
            player.leagueTable[awayId];

        if (!home || !away) {
            return;
        }

        home.played++;
        away.played++;

        home.goalsFor += homeGoals;
        home.goalsAgainst += awayGoals;

        away.goalsFor += awayGoals;
        away.goalsAgainst += homeGoals;

        if (homeGoals > awayGoals) {

            home.wins++;
            home.points += 3;

            away.losses++;

        } else if (awayGoals > homeGoals) {

            away.wins++;
            away.points += 3;

            home.losses++;

        } else {

            home.draws++;
            away.draws++;

            home.points++;
            away.points++;

        }

    },

    // =========================================================
    // SIMULAR OUTRAS PARTIDAS
    // =========================================================

    simulateOtherMatches(player) {

        const matches =
            player.schedule[player.round];

        if (!matches) {
            return;
        }

        matches.forEach(match => {

            const isPlayerMatch =
                match.home === player.club ||
                match.away === player.club;

            if (isPlayerMatch) {
                return;
            }

            const home =
                this.getClub(match.home);

            const away =
                this.getClub(match.away);

            if (!home || !away) {
                return;
            }

            let homeStrength =
                home.strength + 3;

            let awayStrength =
                away.strength;

            const difference =
                homeStrength - awayStrength;

            const homeExpected =
                0.65 +
                Math.max(0, difference / 25);

            const awayExpected =
                0.65 +
                Math.max(0, -difference / 25);

            const homeGoals =
                this.randomGoals(homeExpected);

            const awayGoals =
                this.randomGoals(awayExpected);

            this.applyLeagueResult(
                player,
                home.id,
                away.id,
                homeGoals,
                awayGoals
            );

        });

    },

    // =========================================================
    // ORDENAÇÃO DA TABELA
    // =========================================================

    sortTable(player) {

        this.ensureLeague(player);

        return Object.values(
            player.leagueTable
        ).sort((a, b) => {

            if (b.points !== a.points) {
                return b.points - a.points;
            }

            const gdA =
                a.goalsFor -
                a.goalsAgainst;

            const gdB =
                b.goalsFor -
                b.goalsAgainst;

            if (gdB !== gdA) {
                return gdB - gdA;
            }

            return b.goalsFor - a.goalsFor;

        });

    },

    // =========================================================
    // CLASSIFICAÇÃO DO JOGADOR
    // =========================================================

    getStanding(player) {

        const table =
            this.sortTable(player);

        return table.findIndex(
            club => club.id === player.club
        ) + 1;

    },

    // =========================================================
    // VALOR DE MERCADO
    // =========================================================

    calculateMarketValue(player) {

        let value =
            150000 +
            (player.overall * 30000);

        value +=
            player.goals * 25000;

        value +=
            player.assists * 15000;

        value +=
            player.appearances * 2500;

        value +=
            Math.max(
                0,
                player.averageRating - 6
            ) * 100000;

        // jovens valem mais
        if (player.age <= 21) {
            value *= 1.25;
        }

        if (player.age <= 19) {
            value *= 1.15;
        }

        // idade avançada reduz
        if (player.age >= 30) {
            value *= 0.80;
        }

        if (player.age >= 33) {
            value *= 0.65;
        }

        return Math.round(value);

    },

    // =========================================================
    // SALÁRIO
    // =========================================================

    calculateSalary(player, club) {

        let salary =
            1000 +
            club.strength * 180 +
            player.overall * 250;

        salary +=
            player.goals * 150;

        salary +=
            player.assists * 100;

        return Math.round(salary);

    },

    // =========================================================
    // REQUISITOS PARA TRANSFERÊNCIA
    // =========================================================

    transferRequirements(
        player,
        targetClub,
        isForeign
    ) {

        let requiredOverall =
            targetClub.strength - 9;

        let requiredAppearances =
            8;

        let requiredRating =
            6.4;

        let requiredGoals =
            0;

        // clubes muito fortes
        if (targetClub.strength >= 82) {

            requiredOverall =
                targetClub.strength - 5;

            requiredAppearances =
                15;

            requiredRating =
                7.0;

        }

        if (targetClub.strength >= 87) {

            requiredOverall =
                targetClub.strength - 3;

            requiredAppearances =
                20;

            requiredRating =
                7.3;

        }

        // Transferência internacional é mais difícil
        if (isForeign) {

            requiredOverall += 2;
            requiredAppearances += 5;
            requiredRating += 0.15;

        }

        // atacante
        if (
            ["ATA", "PE", "PD"].includes(
                player.position
            )
        ) {

            requiredGoals =
                targetClub.strength >= 82
                    ? 5
                    : 2;

        }

        return {

            overall: requiredOverall,
            appearances: requiredAppearances,
            rating: requiredRating,
            goals: requiredGoals

        };

    },

    // =========================================================
    // SCORE DO JOGADOR
    // =========================================================

    transferScore(player) {

        let score = 0;

        score +=
            player.overall * 1.1;

        score +=
            player.form * 0.20;

        score +=
            player.averageRating * 7;

        score +=
            player.appearances * 0.30;

        score +=
            player.goals * 2;

        score +=
            player.assists * 1.5;

        if (player.age <= 21) {
            score += 8;
        }

        if (player.age >= 29) {
            score -= 5;
        }

        return score;

    },

    // =========================================================
    // GERAR PROPOSTA
    // =========================================================

    maybeGenerateTransferOffer(player) {

        if (player.transfer.offer) {
            return null;
        }

        if (
            player.transfer.cooldown > 0
        ) {
            return null;
        }

        if (
            player.appearances <
            (player.transfer.nextCheck || 8)
        ) {
            return null;
        }

        const currentClub =
            this.getClub(player.club);

        if (!currentClub) {
            return null;
        }

        const currentLeague =
            this.getPlayerLeague(player);

        if (!currentLeague) {
            return null;
        }

        const eligible = [];

        // =====================================================
        // REGRA:
        // INTERNACIONAL SOMENTE DEPOIS DE PELO MENOS 1 TEMPORADA
        // =====================================================

        const canInternational =
            player.career.seasons >= 1;

        Object.values(this.clubs).forEach(club => {

            if (club.id === player.club) {
                return;
            }

            const isForeign =
                club.leagueId !== player.league;

            if (isForeign && !canInternational) {
                return;
            }

            // não oferecer clube muito inferior
            if (
                club.strength <
                currentClub.strength - 3
            ) {
                return;
            }

            const requirements =
                this.transferRequirements(
                    player,
                    club,
                    isForeign
                );

            if (
                player.overall <
                requirements.overall
            ) {
                return;
            }

            if (
                player.appearances <
                requirements.appearances
            ) {
                return;
            }

            if (
                player.averageRating <
                requirements.rating
            ) {
                return;
            }

            if (
                player.goals <
                requirements.goals
            ) {
                return;
            }

            eligible.push({

                club,
                isForeign,
                requirements

            });

        });

        if (!eligible.length) {
            return null;
        }

        // =====================================================
        // CHANCE DE RECEBER PROPOSTA
        // =====================================================

        let chance =
            0.10;

        if (player.overall >= 75) {
            chance += 0.06;
        }

        if (player.overall >= 80) {
            chance += 0.07;
        }

        if (player.overall >= 85) {
            chance += 0.08;
        }

        if (player.averageRating >= 7) {
            chance += 0.05;
        }

        if (player.form >= 85) {
            chance += 0.04;
        }

        // internacional é mais raro
        const internationalEligible =
            eligible.filter(
                item => item.isForeign
            );

        const domesticEligible =
            eligible.filter(
                item => !item.isForeign
            );

        let pool;

        if (
            canInternational &&
            internationalEligible.length &&
            Math.random() < 0.22
        ) {

            pool = internationalEligible;

        } else {

            pool =
                domesticEligible.length
                    ? domesticEligible
                    : internationalEligible;

        }

        if (!pool.length) {
            return null;
        }

        if (Math.random() > chance) {
            return null;
        }

        // Escolher clube adequado ao nível
        pool.sort(
            (a, b) =>
                a.club.strength -
                b.club.strength
        );

        const possibleTargets =
            pool.filter(item =>
                item.club.strength <=
                player.overall + 8
            );

        const selected =
            possibleTargets.length
                ? possibleTargets[
                    Math.floor(
                        Math.random() *
                        possibleTargets.length
                    )
                ]
                : pool[
                    Math.floor(
                        Math.random() *
                        pool.length
                    )
                ];

        const target =
            selected.club;

        const salary =
            this.calculateSalary(
                player,
                target
            );

        const fee =
            Math.round(
                this.calculateMarketValue(player) *
                (0.90 + Math.random() * 0.35)
            );

        const offer = {

            clubId: target.id,
            clubName: target.name,

            leagueId: target.leagueId,
            leagueName: target.leagueName,

            country: target.country,
            flag: target.flag,

            isForeign:
                selected.isForeign,

            salary,

            fee,

            playerOverall:
                player.overall,

            requiredOverall:
                selected.requirements.overall,

            requiredAppearances:
                selected.requirements.appearances,

            requiredRating:
                selected.requirements.rating,

            requiredGoals:
                selected.requirements.goals,

            expiry: 4

        };

        player.transfer.offer = offer;

        this.savePlayer(player);

        return offer;

    },

    // =========================================================
    // ACEITAR TRANSFERÊNCIA
    // =========================================================

    acceptTransfer(player) {

        const offer =
            player.transfer.offer;

        if (!offer) {

            return {

                success: false,

                message:
                    "Não existe nenhuma proposta."

            };

        }

        const oldClub =
            this.getClub(player.club);

        const newClub =
            this.getClub(offer.clubId);

        if (!newClub) {

            return {

                success: false,

                message:
                    "Clube da proposta não encontrado."

            };

        }

        // -----------------------------
        // HISTÓRICO
        // -----------------------------

        player.career.transfers.push({

            season: player.season,

            from:
                oldClub
                    ? oldClub.name
                    : player.club,

            to:
                newClub.name,

            fromLeague:
                oldClub
                    ? oldClub.leagueName
                    : player.league,

            toLeague:
                newClub.leagueName,

            fee:
                offer.fee

        });

        // -----------------------------
        // TROCA REAL DO CLUBE
        // -----------------------------

        player.club =
            newClub.id;

        // -----------------------------
        // TROCA REAL DA LIGA
        // -----------------------------

        player.league =
            newClub.leagueId;

        player.leagueName =
            newClub.leagueName;

        player.country =
            player.country;

        // -----------------------------
        // SALÁRIO
        // -----------------------------

        player.salary =
            offer.salary;

        // bônus de assinatura
        player.money +=
            Math.round(
                offer.salary * 2
            );

        // -----------------------------
        // RESET DO ESTADO DA PROPOSTA
        // -----------------------------

        player.transfer.offer =
            null;

        player.transfer.cooldown =
            6;

        player.transfer.nextCheck =
            player.appearances + 8;

        player.transfer.lastTransferSeason =
            player.season;

        // -----------------------------
        // NOVA TABELA
        // -----------------------------

        player.leagueTable = {};

        this.ensureLeague(player);

        // -----------------------------
        // NOVO CALENDÁRIO
        // -----------------------------

        this.generateSchedule(player);

        this.savePlayer(player);

        return {

            success: true,

            oldClub:
                oldClub
                    ? oldClub.name
                    : "Clube anterior",

            newClub:
                newClub.name,

            newLeague:
                newClub.leagueName,

            salary:
                player.salary

        };

    },

    // =========================================================
    // RECUSAR TRANSFERÊNCIA
    // =========================================================

    declineTransfer(player) {

        if (!player.transfer.offer) {

            return {

                success: false,

                message:
                    "Não existe proposta."

            };

        }

        const rejectedClub =
            player.transfer.offer.clubName;

        player.transfer.offer =
            null;

        player.transfer.cooldown =
            3;

        player.transfer.nextCheck =
            player.appearances + 5;

        this.savePlayer(player);

        return {

            success: true,

            message:
                `Você recusou a proposta do ${rejectedClub}.`

        };

    },

    // =========================================================
    // FINALIZAR TEMPORADA
    // =========================================================

    finishSeason(player) {

        player.seasonFinished = true;

        const standing =
            this.getStanding(player);

        let award = null;

        if (
            player.averageRating >= 7.5 &&
            player.appearances >= 25
        ) {

            award = "Melhor jogador da temporada";

        } else if (
            player.goals >= 15
        ) {

            award = "Artilheiro da temporada";

        } else if (
            standing === 1
        ) {

            award = "Campeão da Liga";

        }

        player.seasonAward =
            award;

        this.savePlayer(player);

    },

    // =========================================================
    // DESENVOLVIMENTO NO FINAL DA TEMPORADA
    // =========================================================

    developAtSeasonEnd(player) {

        const oldOverall =
            player.overall;

        const potential =
            player.potential || 85;

        let development =
            0.4 +
            Math.random() * 0.8;

        // bom desempenho
        if (player.averageRating >= 7) {
            development += 0.5;
        }

        if (player.averageRating >= 7.5) {
            development += 0.4;
        }

        if (player.appearances >= 25) {
            development += 0.3;
        }

        // jovens evoluem mais
        development *=
            this.getAgeTrainingFactor(
                player.age
            );

        // perto do potencial desacelera
        const gap =
            potential - player.overall;

        if (gap <= 3) {
            development *= 0.35;
        } else if (gap <= 7) {
            development *= 0.65;
        }

        development =
            Math.min(
                development,
                2.5
            );

        // Distribui a evolução entre atributos
        const attributes =
            Object.keys(
                player.attributes
            );

        for (let i = 0; i < 2; i++) {

            const attribute =
                attributes[
                    Math.floor(
                        Math.random() *
                        attributes.length
                    )
                ];

            player.attributes[attribute] =
                Math.min(
                    99,
                    player.attributes[attribute] +
                    development / 2
                );

        }

        player.overall =
            this.calculateOverall(player);

        return {

            oldOverall,

            newOverall:
                player.overall,

            development:
                player.overall -
                oldOverall

        };

    },

    // =========================================================
    // NOVA TEMPORADA
    // =========================================================

    startNewSeason(player) {

        if (!player.seasonFinished) {

            return {

                success: false,

                message:
                    "A temporada ainda não terminou."

            };

        }

        const development =
            this.developAtSeasonEnd(player);

        player.season++;

        player.age++;

        player.career.seasons++;

        // -----------------------------
        // RESET TEMPORADA
        // -----------------------------

        player.goals = 0;
        player.assists = 0;
        player.appearances = 0;

        player.averageRating = 0;

        player.goodMatches = 0;

        player.form = 75;

        player.energy = 100;

        player.round = 0;

        player.trainingUsed = false;

        player.seasonFinished = false;

        player.seasonAward = null;

        // -----------------------------
        // NOVA TABELA
        // -----------------------------

        player.leagueTable = {};

        this.ensureLeague(player);

        // -----------------------------
        // NOVO CALENDÁRIO
        // -----------------------------

        this.generateSchedule(player);

        // -----------------------------
        // TRANSFERÊNCIAS
        // -----------------------------

        player.transfer.offer = null;

        player.transfer.cooldown = 4;

        player.transfer.nextCheck = 8;

        this.savePlayer(player);

        return {

            success: true,

            development,

            season:
                player.season,

            age:
                player.age

        };

    }

};


// =============================================================
// INICIALIZAR SISTEMA
// =============================================================

Simulation.init();