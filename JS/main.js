import { getGame } from "./game.js";
import { navChange } from "./ui.js";

$(document).ready(function(){
    $(".loadPage").fadeOut(1000);
    $("body").css("overflow", "visible");
    getGame("MMORPG");
    
});

document.querySelector(".aOne").addEventListener("click", function(){
    new navChange('aOne', 'MMORPG');
});
document.querySelector(".aTwo").addEventListener("click", function(){
    new navChange('aTwo', 'Shooter');
});
document.querySelector(".aThree").addEventListener("click", function(){
    new navChange('aThree', 'Sailing');
});
document.querySelector(".aFour").addEventListener("click", function(){
    new navChange('aFour', 'Permadeath');
});
document.querySelector(".aFive").addEventListener("click", function(){
    new navChange('aFive', 'Superhero');
});
document.querySelector(".aSix").addEventListener("click", function(){
    new navChange('aSix', 'Pixel');
});