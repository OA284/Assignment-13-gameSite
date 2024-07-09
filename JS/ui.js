import { getGame } from "./game.js";

export class navChange{
    constructor(anc, cate){
        let anch = document.querySelector("." + anc);
        let active = document.querySelector(".active");

        anch.addEventListener("dblclick", function(){
            active.classList.add("text-white");
            $("body").css("overflow", "hidden");
            $(document).ready(function(){
                $(".loadPage").fadeIn(0);
                $(".loadPage").fadeOut(1000);
                $("body").css("overflow", "visible");
            });
            active.classList.remove("active");
            anch.classList.add("active");
            getGame(cate);
        });
    }
}