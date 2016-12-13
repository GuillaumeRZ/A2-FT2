var cat1 = document.getElementById("categorie1");
var cat2 = document.getElementById("categorie2");
var cat3 = document.getElementById("categorie3");
var cat4 = document.getElementById("categorie4");
var cat5 = document.getElementById("categorie5");
var cat6 = document.getElementById("categorie6");
var menuButton = document.getElementById("menuButton");
//Dictionnary declaration for my categorie
var menuCategorie = [$("#menuButton"), $("#detailCategorie1"), $("#detailCategorie2"), $("#detailCategorie3"), $("#detailCategorie4"), $("#detailCategorie5"), $("#detailCategorie6"), $("#menuCategories")];

cat1.addEventListener("click", categorie1);
cat2.addEventListener("click", categorie2);
cat3.addEventListener("click", categorie3);
cat4.addEventListener("click", categorie4);
cat5.addEventListener("click", categorie5);
cat6.addEventListener("click", categorie6);
menuButton.addEventListener("click", returnMenu);

//Reset fonction for the button return who fadeout all
function returnMenu(){
    menuCategorie[0].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[7].fadeIn(200);
        },
    200);
}


function categorie1(){
    var dictCat1 = [$("#selectionNiveau"), $("#buttonFacile"), $("#buttonMoyenne"), $("#buttonDure"), $("#recetteFacile"), $("#recetteMoyenne"), $("#recetteDure")];
    
    menuButton.addEventListener("click", resetCat1);
    
    menuCategorie[7].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    
    setTimeout(
        //Listening the click on my button for fadeIn content associate
        function(){
            var facile = document.getElementById("buttonFacile");
            var moyen = document.getElementById("buttonMoyenne");
            var difficile = document.getElementById("buttonDure");
            
            facile.addEventListener("click", recetteFacile);
            moyen.addEventListener("click", recetteMoyenne);
            difficile.addEventListener("click", recetteDifficile);
            
            menuCategorie[0].fadeIn(200);
            menuCategorie[1].fadeIn(200);
            
            dictCat1[0].fadeIn(500);
        
            function recetteFacile(){            
                dictCat1[1].fadeOut(0);
                dictCat1[2].fadeOut(0);
                dictCat1[3].fadeOut(0);
                dictCat1[4].fadeIn(200);
            }
            function recetteMoyenne(){
                dictCat1[1].fadeOut(0);
                dictCat1[2].fadeOut(0);
                dictCat1[3].fadeOut(0);
                dictCat1[5].fadeIn(200);
            }
            function recetteDifficile(){
                dictCat1[1].fadeOut(0);
                dictCat1[2].fadeOut(0);
                dictCat1[3].fadeOut(0);
                dictCat1[6].fadeIn(200);
            }
        },
        400);        
    
    //Special reset for this cat for fadein the buttons
    function resetCat1(){
        dictCat1[4].fadeOut(200);
        dictCat1[5].fadeOut(200);
        dictCat1[6].fadeOut(200);
        $("#buttonCat1").fadeOut(200);
        setTimeout(
            function(){
                dictCat1[1].fadeIn(0);
                dictCat1[2].fadeIn(0);
                dictCat1[3].fadeIn(0);
            },
        200);
    }
}

//For this Category I use a libraries called: ddsclick. It's used for callback an object when my select form is touched, and show an img around my text in the select form
function categorie2(){
    var explicationsCarotte = $("#explicationCarotte");
    var selectCat2 = [{
            text: "Aubergines",
            value: 1,
            selected: false,
            imageSrc: "images/menu/2/aubergine.svg"
        },{
            text: "Carottes",
            value: 4,
            selected: false,
            imageSrc: "images/menu/3/carotte.svg"
        },{
            text: "Poivrons",
            value: 3,
            selected: false,
            imageSrc: "images/menu/2/poivron.svg"
        },{
            text: "Tomates",
            value: 2,
            selected: false,
            imageSrc: "images/menu/3/tomate.svg"
        }
    ];
    
    menuButton.addEventListener("click", resetCat2);
    
    menuCategorie[7].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[0].fadeIn(200);
            menuCategorie[2].fadeIn(200);
        },
    400);
    
    //On dropdown select I ask the content of my object selectedData.text and fadeIn explications associated (here I've got only one because we have overstimate our time...)
    $('#dropdownSelect').ddslick({
        data: selectCat2,
        selectText: "Veuillez sélectionner un aliment.",
        onSelected: function (data) {
            if (data.selectedData.text == "Carottes"){
                explicationsCarotte.fadeIn(200);
            } else if (data.selectedData.text == "Poivrons"){
                explicationsCarotte.fadeIn(200);
            } else if (data.selectedData.text == "Tomates"){
                explicationsCarotte.fadeIn(200);
            } else {
                explicationsCarotte.fadeIn(200);
            }
        }
    });
    
    //Again, special reset for this section because we've to FadeOut the explications (here, just one too)
    function resetCat2(){
        explicationsCarotte.fadeOut(200); 
    }
    
}

function categorie3(){
    var prodSaison1 = document.getElementById("produitSaison1");
    var prodSaison2 = document.getElementById("produitSaison2");
    var prodSaison3 = document.getElementById("produitSaison3");
    var prodSaison4 = document.getElementById("produitSaison4");
    var prodSaison = [$("#produitSaison1"), $("#produitSaison2"), $("#produitSaison3"), $("#produitSaison4")];
    var recetteProd = [$("#recetteProduit1"), $("#recetteProduit2"), $("#recetteProduit3"), $("#recetteProduit4")];
    
    prodSaison1.addEventListener("click", demiProdSaison1);
    prodSaison2.addEventListener("click", demiProdSaison2);
    prodSaison3.addEventListener("click", demiProdSaison3);
    prodSaison4.addEventListener("click", demiProdSaison4);
    
    menuCategorie[7].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[0].fadeIn(200);
            menuCategorie[3].fadeIn(200);
        },
    400);
    
    //Listening for a click on my prodSaisonX and fadeIn tips associate / FadeOut the other / Changing my img src too
    function demiProdSaison1(){
        prodSaison[0].fadeOut(100);
        setTimeout(
            function(){
                prodSaison1.src = "images/menu/3/orange_demi.svg";
                prodSaison[0].fadeIn(100);
                recetteProd[0].fadeIn(500);
                recetteProd[1].fadeOut(0);
                recetteProd[2].fadeOut(0);
                recetteProd[3].fadeOut(0);
            },
        100);
    }
    
    function demiProdSaison2(){
        prodSaison[1].fadeOut(100);
        setTimeout(
            function(){
                prodSaison2.src = "images/menu/3/pomme_demi.svg";
                prodSaison[1].fadeIn(100);
                recetteProd[1].fadeIn(500);
                recetteProd[0].fadeOut(0);
                recetteProd[2].fadeOut(0);
                recetteProd[3].fadeOut(0);
            },
        100);
    }
    
    function demiProdSaison3(){
        prodSaison[2].fadeOut(100);
        setTimeout(
            function(){
                prodSaison3.src = "images/menu/3/carotte_demi.svg";
                prodSaison[2].fadeIn(100);
                recetteProd[2].fadeIn(500);
                recetteProd[0].fadeOut(0);
                recetteProd[1].fadeOut(0);
                recetteProd[3].fadeOut(0);
            },
        100);
    }    
    function demiProdSaison4(){
        prodSaison[3].fadeOut(100);
        setTimeout(
            function(){
                prodSaison4.src = "images/menu/3/tomate_demi.svg";
                prodSaison[3].fadeIn(100);
                recetteProd[3].fadeIn(500);
                recetteProd[0].fadeOut(0);
                recetteProd[1].fadeOut(0);
                recetteProd[2].fadeOut(0);
            },
        100);
    }
    
}

function categorie4(){
    menuCategorie[7].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[0].fadeIn(200);
            menuCategorie[4].fadeIn(200);
        },
    400);
}

function categorie5(){
    menuCategorie[7].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[6].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[0].fadeIn(200);
            menuCategorie[5].fadeIn(200);
        },
    400);
}

function categorie6(){
    var messageForm = document.getElementById("messageForm");
    var emailExpert = document.getElementById("emailExpert");
    var messageExpert = document.getElementById("messageExpert");
    
    menuCategorie[7].fadeOut(200);
    menuCategorie[1].fadeOut(200);
    menuCategorie[2].fadeOut(200);
    menuCategorie[3].fadeOut(200);
    menuCategorie[4].fadeOut(200);
    menuCategorie[5].fadeOut(200);
    setTimeout(
        function(){
            menuCategorie[0].fadeIn(200);
            menuCategorie[6].fadeIn(200);
        },
    400);
    
    messageForm.addEventListener('submit', function newRedirection(e){
        e.preventDefault();
        //I use a extern libraries here too, called SweetAlert, after my alert was gone, I reset the input with Js
        swal({
            title: "Merci pour votre message !",
            text: "Nous vous répondrons sous 2 jours ouvrés.",
            type: "success",
            timer: 3000,
            showConfirmButton: false
        });
        
        setTimeout(
            function(){
                menuCategorie[0].fadeOut(300);
                menuCategorie[6].fadeOut(300);
                emailExpert.value = "";
                messageExpert.value = "";
            },
        3100);
        
        setTimeout(
            function(){
                menuCategorie[7].fadeIn(200)
            },
        3400);
        
    });
}