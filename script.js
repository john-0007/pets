const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];
function age(birthYear){
  let calculatedAge= new Date().getFullYear() - birthYear;
  if (calculatedAge == 1){
    return '1 year old'
  }else if(calculatedAge == 0){
    return 'baby'
  }else{
    return `${calculatedAge} years old`;
  }
}
function foods(foods){
 return `
 <h4>Favorite Foods</h4>
  <ul class='foods-list'>
    ${foods.map(food => `<li>${food}</li>`).join('')}
  </ul>
 `
}

function petTemplate({name,species,favFoods,birthYear,photo}){
  return `
    <div class='animal'>
      <img class='pet-photo' src=${photo} alt=""/>
      <h2 class='pet-name'>${name} <span class='species'>(${species})</span></h2>
      <p><strong>Age: </strong>${age(birthYear)}</p>
      ${favFoods ? foods(favFoods):''}
    </div>
  `
}

document.getElementById('app').innerHTML=`
<h1 class='app-title'>pets (${petsData.length} results)</h1>
${petsData.map(petTemplate)}
<p class="footer">These ${petsData.length} pets were added recently. check back soon for update</p>
`;