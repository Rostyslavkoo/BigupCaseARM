let addCase = document.querySelector('.add_cases')
let addCharge = document.querySelector('.add_charges')
let addGlass = document.querySelector('.add_glasses')
let btnCase = document.querySelector('#btnAddCase')
let btnCharge = document.querySelector('#btnAddCharge')
let btnGlass = document.querySelector('#btnAddGlass')


function show_cases(){
  addCharge.style.display = 'none';
  addGlass.style.display = 'none';
  addCase.style.display = 'flex';
  btnCase.classList.add("_active-btn-case");
  btnGlass.classList.remove("_active-btn-glass");
  btnCharge.classList.remove("_active-btn-charge");
}
function show_charge(){
  addCharge.style.display = 'flex';
  addGlass.style.display = 'none';
  addCase.style.display = 'none';
  btnCharge.classList.add("_active-btn-charge");
  btnCase.classList.remove("_active-btn-case");
  btnGlass.classList.remove("_active-btn-glass");

}
function show_glasse(){
  addCharge.style.display = 'none';
  addGlass.style.display = 'flex';
  addCase.style.display = 'none';
  btnGlass.classList.add("_active-btn-glass");
  btnCase.classList.remove("_active-btn-case");
  btnCharge.classList.remove("_active-btn-charge");

}
