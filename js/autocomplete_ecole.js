var submitEcole = document.getElementById("submitEcole");
var ecoleForm = document.getElementById("ecoleForm");
var imgValidation = document.getElementById("imgValidation");
//dictionnary declaration for my variables re-used in all my file
var accueilMessage = [$("#imgValidation"), $("#imgValidation2"), $("#pNoMessage"), $("#pWrongMessage"), $("#pOkMessage")];
var infoAnexxes = [$("#ecole"), $("#submitEcole"), $("#pTitle"), $("#h1Title"), $("#Logo"), $("#menuCategories")];
// Ecole list of Sodexo use for autocomplete my input (not really massive so I've didn't use a .json or a bdd).
var listeEcole = [
    "Pic - ensemble scolaire prive immaculee conception",
    "Ecole privee ste marie les jonquilles",
    "Ecole privee de provence",
    "Institut notre dame",
    "Ecole ste marie",
    "Prive ste madeleine",
    "College la presentation de marie",
    "Cours bastide",
    "College lycee notre dame des anges",
    "Ecole des freres - ecole college jean xxiii",
    "Ecole privee ste chretienne",
    "Ecole privee ste marie",
    "Enseignement catholique de sallanches",
    "College saint joseph",
    "New school",
    "Institution st joseph",
    "Ecole sainte thecle",
    "Centre scolaire aux lazaristes",
    "Groupe scolaire demotz de la salle",
    "Ec pontarlier les augustins",
    "Institution st jean bosco  & ste bernadette",
    "Ensemble scolaire la salle",
    "Groupe scolaire gerbert saint joseph",
    "Groupe scolaire gerbert saint eugene",
    "Ensemble scolaire la misericorde",
    "Institution privee chabrillan",
    "Ecole et college prives ste madeleine",
    "Ltp & lpp la joliverie",
    "Institution privee saint martin",
    "Ecole privee ste therese",
    "Ecoles ste therese",
    "Ecole notre dame de tourbian",
    "Ecole saint joseph du pilier rouge",
    "Ecole st joseph le chateau",
    "College st jean - ecole ste anne",
    "Ecole sainte famille des minimes",
    "Ensemble scolaire fenelon notre dame",
    "Ecole-college privee sainte sophie",
    "Ecole ste marie des ursulines",
    "Institution st pierre st paul",
    "Groupe scolaire st louis st clement",
    "Ecole picpus",
    "Ecole college ste marie- st justin",
    "Ecole normale catholique blomet",
    "Ecole saint jean de passy",
    "Groupe scolaire ste louise",
    "Institution notre dame de france"
];

submitEcole.addEventListener("click", ecoleValidation);
// I cancel the submit default comportment on my homepage
ecoleForm.addEventListener('submit', function stopRedirection(e){
    e.preventDefault();
});

//Jquery // UI comportment for autocomplete my input
$('#ecole').autocomplete({
    source : listeEcole,
    minLength : 3
});

//Condition if input is empty, wrong, or ok (animations are associated with all this type of action, and delete the other animation).
function ecoleValidation(){
    var ecoleVar = document.getElementById("ecole").value;
    //If input is empty, animations associate and remove class for re-anime if the user try.
    if (ecoleVar==null || ecoleVar==""){
        imgValidation.src = "images/accueilWrongMessage.svg";
        imgValidation.alt = "Champ n'est pas remplis";
        accueilMessage[0].addClass("animated");
        accueilMessage[0].addClass("shake");
        accueilMessage[1].addClass("animated");
        accueilMessage[1].addClass("shake");
        accueilMessage[1].fadeIn(100);
        accueilMessage[2].addClass("animated");
        accueilMessage[2].addClass("shake");
        accueilMessage[2].fadeIn(100);
        accueilMessage[3].fadeOut(0);
        setTimeout(
            function(){
                accueilMessage[0].removeClass("animated");
                accueilMessage[0].removeClass("shake");
                accueilMessage[1].removeClass("animated");
                accueilMessage[1].removeClass("shake");
                accueilMessage[2].removeClass("animated");
                accueilMessage[2].removeClass("shake");
            },
        400);
    //If my input is wrong (something other than a case of my tab "listeEcole"), if it's a case -> sendback the number of his case, if it's not in my "listEcole" -> sendback "-1".
    }else if (listeEcole.indexOf(ecoleVar) == -1){
        imgValidation.src = "images/accueilWrongMessage.svg";
        imgValidation.alt = "Champ mal remplis";
        accueilMessage[0].addClass("animated");
        accueilMessage[0].addClass("shake");
        accueilMessage[1].addClass("animated");
        accueilMessage[1].addClass("shake");
        accueilMessage[1].fadeIn(100);
        accueilMessage[3].addClass("animated");
        accueilMessage[3].addClass("shake");
        accueilMessage[3].fadeIn(100);
        accueilMessage[2].fadeOut(0);
        setTimeout(
            function(){
                accueilMessage[0].removeClass("animated");
                accueilMessage[0].removeClass("shake");
                accueilMessage[1].removeClass("animated");
                accueilMessage[1].removeClass("shake");
                accueilMessage[3].removeClass("animated");
                accueilMessage[3].removeClass("shake");
            },
        400);
    //My input is ok, I fadeOut all and bring my menu.
    }else{
        imgValidation.src = "images/accueilTrue.svg";
        imgValidation.alt = "Champ correctement remplis";
        accueilMessage[2].fadeOut(0);
        accueilMessage[3].fadeOut(0);
        accueilMessage[1].fadeIn(100);
        accueilMessage[4].fadeIn(100);
        setTimeout(
            function(){
                accueilMessage[4].fadeOut(300);
                accueilMessage[1].fadeOut(300);
            },
        1700);
        setTimeout(
            function(){
                accueilMessage[0].addClass("animated");
                accueilMessage[0].addClass("fadeOutRight");
                infoAnexxes[0].fadeOut(500);
                infoAnexxes[1].fadeOut(500);
                accueilMessage[0].fadeOut(500);
                infoAnexxes[2].fadeOut(500);
                infoAnexxes[3].fadeOut(500);
                infoAnexxes[4].fadeOut(500);
            },
        2000);
        
        setTimeout(
            function(){
                infoAnexxes[5].fadeIn(1000);
            },
        2700);
    }
}