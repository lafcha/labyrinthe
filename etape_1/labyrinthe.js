const labyrinthe = [
    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }],

    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m"],

    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }],

    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }],

    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }],

    [{ possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, { possibilitesRestantes: 4, pas: 0, eloignement: 0 }, "m", { possibilitesRestantes: 4, pas: 0, eloignement: 0 }],

];

const arrivee = [5, 2];

const mouvements =
{
    bas: [0, 1],
    droite: [1, 0],
    haut: [0, -1],
    gauche: [-1, 0]
};
let filDariane = [];
//ariane == ma position
let ariane = [0, 0];
let eloignement = 0;
let casesDejaVisitees = [];


jouerLabyrinthe();


function jouerLabyrinthe() {

     while (!cEstGagne()) {

        afficherLabyrinthe(labyrinthe, ariane);

        casesDejaVisitees = [];
        if (possibleDallerDansLaCase(mouvements.bas, "bas")) {
            deplacerAriane(mouvements.bas);
        } else if (possibleDallerDansLaCase(mouvements.droite, "droite")) {
            deplacerAriane(mouvements.droite);
        }

        else if (possibleDallerDansLaCase(mouvements.haut, "haut")) {
            deplacerAriane(mouvements.haut);
        }

        else if (possibleDallerDansLaCase(mouvements.gauche, "gauche")) {
            deplacerAriane(mouvements.gauche);
        } else {
            deplacerAriane(determinerOuVaAllerAriane());
        }

    } 

    afficherLabyrinthe(labyrinthe, ariane);
    console.log("C'est gagné !");
    console.log("Ariane est à la case : (" + ariane[0] +"," + ariane[1]+")");
    console.log("Nombre de pas : " + filDariane.length);
}


function cEstGagne() {
    if (ariane[0] == arrivee[0] && ariane[1] == arrivee[1]) {
        return true;
    } else {
        return false;
    }
}

function afficherLabyrinthe(labyrinthe, ariane) {
    console.log("------------------------------------------------------");
    for (let i = 0; i < labyrinthe.length; i++) {
        let labyrintheAffiche = "";
        for (let j = 0; j < labyrinthe[i].length; j++) {
            if (labyrinthe[i][j] == "m") {
                labyrintheAffiche += "  M  ";
            } else {
                if (ariane[0] == j && ariane[1] == i) {
                    labyrintheAffiche += " ICI ";
                } else {
                    labyrintheAffiche += "  _  ";
                }
            }
        }
        console.log(labyrintheAffiche);
    }
}

function possibleDallerDansLaCase(mouvement, nomMouvement) {

    let mur = false;
    let plateau = false;
    let visite = false;

    if (caseDansPlateau(nomMouvement)) {
        plateau = true;
        if (casePasMur(mouvement)) {
            mur = true;
        }
        if (caseJamaisVisitee(mouvement)) {
            visite = true;
        } else {
            casesDejaVisitees.push(mouvement);
        }
    }
    if (mur && plateau && visite) {
        return true;
    } else {
        return false;
    }

}

function caseDansPlateau(mouvement) {

    let test;
    switch (mouvement) {
        case "bas": test = ariane[1] < labyrinthe.length -1;      
            break;
        case "droite": test = ariane[0]  < labyrinthe[0].length -1;
            break;
        case "haut":  test = ariane[1] > 0 ;
            break;
        case "gauche": test = ariane[0] > 0;
            break;
    }

    return test;
}

function casePasMur(mouvement) {

    //console.log(labyrinthe.length);

    if (labyrinthe[ariane[1] + mouvement[1]][ariane[0] + mouvement[0]] == "m") {
        return false;
    } else {
        return true;
    }

}

function caseJamaisVisitee(mouvement) {

    if (labyrinthe[ariane[1] + mouvement[1]][ariane[0] + mouvement[0]].possibilitesRestantes == 4) {
        return true;
    } else {
        return false;
    }

}
function deplacerAriane(mouvement) {

    // console.log(mouvement);

    const caseActuelle = labyrinthe[ariane[1]][ariane[0]];

    //J'ajoute ma position actuelle au fil d'ariane
    filDariane.push([ariane[0], ariane[1]]);

    modificationDesPossibilitesRestantes(mouvement, caseActuelle);

    if (caseActuelle.eloignement == 0) {
        eloignement++;
        caseActuelle.eloignement = eloignement;
    }

    //J'indique le nombre de pas que j'ai fait depuis le début <=> la longueur du fil d'ariane
    caseActuelle.pas = filDariane.length;

    //Je me déplace 
    ariane[0] = ariane[0] + mouvement[0];
    ariane[1] = ariane[1] + mouvement[1];
}

function modificationDesPossibilitesRestantes(mouvement, caseActuelle) {
    let possibilitesTestees;

    if (mouvement[0] == 0 && mouvement[1] == 1) {
        possibilitesTestees = 1;
    }

    if (mouvement[0] == 1 && mouvement[1] == 0) {
        possibilitesTestees = 2;
    }

    if (mouvement[0] == 0 && mouvement[1] == -1) {
        possibilitesTestees = 3;
    }

    if (mouvement[0] == -1 && mouvement[1] == 0) {
        possibilitesTestees = 4;
    }

    caseActuelle.possibilitesRestantes = caseActuelle.possibilitesRestantes - possibilitesTestees;

}


function determinerOuVaAllerAriane() {

    let eloignementMin = 10000;
    let mvtAvecPlusPetitEloignement;
    for (let i = 0; i < casesDejaVisitees.length; i++) {

        let caseOuAller = labyrinthe[ariane[1] + casesDejaVisitees[i][1]][ariane[0] + casesDejaVisitees[i][0]];

        if (caseOuAller.eloignement < eloignementMin) {
            eloignementMin = caseOuAller.eloignement;
            mvtAvecPlusPetitEloignement = casesDejaVisitees[i];
        }
    }
    return mvtAvecPlusPetitEloignement;
}






