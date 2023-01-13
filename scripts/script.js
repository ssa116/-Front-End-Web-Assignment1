'use strict';

const detailTraigle = document.getElementById('referredby');
const detail = document.getElementById('detail');


function detailBox() {
    if (detailTraigle.value === "Magic!" || detailTraigle.value === "Other")
    {
        detail.style.display = "block";
      
    }
    else {

        detail.style.display = "none";

    }

}


detailTraigle.addEventListener('change', detailBox);
