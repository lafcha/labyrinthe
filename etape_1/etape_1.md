# Labyrinthe

## Description des actions

Sur ma case, je regarde ce qu'il y a : devant moi, à droite et à gauche et en fonction de ce qu'il y a (mur, ou vide), je me déplace. 

Si je suis dans un cul-de-sac (c'est à dire qu'il y a des murs en face, à droite & à gauche), je recule. Je continue à reculer jusqu'à ce qu'il n'y ait pas de mur à droite ou à gauche. Et je tourne à droite.

Quand je peux aller tout droit, à droite ou à gauche (et que je ne recule pas), alors je vais à droite.

Si j'ai le choix entre la droite et la gauche (et qu'il y a un mur devant moi), je tourne à droite. 


## Pseudo-code en français

Je retiens mes positions dans un fil d'Ariane

TANT QUE ma position n'est pas égale à celle de l'arrivée

SI il n'y a rien devant ET qu'il y a des murs à droite ET à gauche
    J'avance
SINON
    SI il y n'y a rien à droite OU à gauche
        SI été à droite OU à gauche ET rien devant
            J'avance
        SINON
        Je tourne à gauche OU à droite
        FIN SI
    SINON s'il y a un mur à droite ET à gauche ET un mur devant
        Je fais demi-tour
    FIN SI
FIN SI

FIN TANT QUE






### Pseudo-code

plateau = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1], 
    [0, 1, 0, 1, 0, 1, 0], 
    [0, 0, 0, 0, 1, 1, 0], 
    [0, 1, 0, 1, 0, 0, 0], 
    [0, 1, 0, 0, 0, 1, 0], 
]

var ariane = (0,0)
var filDAriane =[]
var arrivée = (4,2)
var actionsPossibles = [(0,1),(1,0),(0,-1)(-1,0)]


---
    TANT QUE S différent de G
   
    SI ariane = filDariane au dernier indice -1
        numPossiblite = fildDariane au dernier indice -1[1]
    SINON
        numPossibilite = 0

    var possibilite = testPossibilites (ariane, fildariane,numPossiblite)

    SI possibite < actionsPossibles.length -2
        filDarianne =+ arianne, i
        ariane = ariane+actionsPossible[i]
    SINON
        ariane = filDariane au dernier indice -1

    FIN TANT QUE


    FONCTION testPossibilités (ariane, filDariane, numPossibilite)

    POUR i de numPossibilite à actionsPossibles
        var newPos = [ariane[0]+actionsPossibles[i][0], ariane[1]+actionsPossibles[i][0]]

        //On vérifie que newPos a des coordonnées qui sont contenues dans le tableau

        SI(newPos[0] < 0 OU newPos [1] < 0){
            i++
        } SINON
            SI newPos[0] > tab.length +1 OU newPos[0].length
            i++          
            SINON
            //On vérifie ce qu'il y a dans la case de la nouvelle position
                POUR j de 0 à plateau.length
                    POUR k de 0 à plateau.length
                        SI newPos = murs[j][k]
                            i++
                        SINON
                            RETOURNE i
                        FIN SI
                    FIN POUR
                FIN POUR
            FIN SI
        FIN SI
    FIN POUR
    RETOURNE i
     



