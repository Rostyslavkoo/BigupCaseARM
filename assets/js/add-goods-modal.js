let addCase = document.querySelector('.add_cases')
let addCharge = document.querySelector('.add_charges')
let addGlass = document.querySelector('.add_glasses')
let btnCase = document.querySelector('#btnAddCase')
let btnCharge = document.querySelector('#btnAddCharge')
let btnGlass = document.querySelector('#btnAddGlass')
let addGoodsModal = document.querySelector('#addGoodsModal')
let idNewCase = document.querySelector('#idNewCase')
let idNewCharge = document.querySelector('#idNewCharge')
let idNewGlass = document.querySelector('#idNewGlass')

function show_cases() {
    addCharge.style.display = 'none';
    addGlass.style.display = 'none';
    addCase.style.display = 'flex';
    btnCase.classList.add("_active-btn");
    btnGlass.classList.remove("_active-btn");
    btnCharge.classList.remove("_active-btn");
      setTimeout(function(){ document.querySelector('#idNewCase').focus(); }, 1000);

}

function show_charge() {
    addCharge.style.display = 'flex';
    addGlass.style.display = 'none';
    addCase.style.display = 'none';
    btnCharge.classList.add("_active-btn");
    btnCase.classList.remove("_active-btn");
    btnGlass.classList.remove("_active-btn");
    idNewCharge.focus();


}

function show_glasse() {
    addCharge.style.display = 'none';
    addGlass.style.display = 'flex';
    addCase.style.display = 'none';
    btnGlass.classList.add("_active-btn");
    btnCase.classList.remove("_active-btn");
    btnCharge.classList.remove("_active-btn");
    idNewGlass.focus()


}