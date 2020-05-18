const name = document.getElementById('name');
const minAge = document.getElementById('minAge');
const btnSearch = document.getElementById('btnSearch');
const ulResult = document.getElementById('result');


btnSearch.addEventListener('click', () => {
  const ajaxRequest = new XMLHttpRequest();
  const nameValue = name.value.trim();
  const ageValue = minAge.value;
  let url = "";

  // Pregunto si el input de name esta vacio, si tiene valor lo concateno a la url
  if (nameValue != "") {
    url = `/person?name=${nameValue}`;
  } else {
    url = "/person"
  }
  // Pregunto si el input de minAge esta vacio, si tiene valor lo concateno a la url
  if(minAge.value != ""){
    url += `&age=${ageValue}`
  }

  ajaxRequest.addEventListener("load", function () {
    if (this.status == 200) {
      document.getElementById("result").innerHTML = "";
      const resultData = JSON.parse(this.responseText);

      // forEach para recorrer todos los objetos de mi array de personas e ir agregando los li al ul del index
      resultData.forEach(person => {

        const newLi = document.createElement('li');

        newLi.textContent = person.name + ", " + person.age;

        //Pregunto si es mayor a 1 año para concatener el string "años" u "año"
        if(person.age > 1){
          newLi.textContent += " años"
        } else {
          newLi.textContent += " año"
        }

        ulResult.appendChild(newLi);
      });
    }

  });

  ajaxRequest.open("GET", url);
  ajaxRequest.send();

});

