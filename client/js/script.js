const name = document.getElementById('name');
const btnSearch = document.getElementById('btnSearch');
const ulResult = document.getElementById('result');

btnSearch.addEventListener('click', () => {
  const ajaxRequest = new XMLHttpRequest();
  const nombre = name.value.trim();
  let url = "";

  if (nombre != "") {
    url = `/person?name=${nombre}`;
  } else {
    url = "/person"
  }

  ajaxRequest.addEventListener("load", function () {
    if (this.status == 200) {
      document.getElementById("result").innerHTML = "";
      const resultData = JSON.parse(this.responseText);

      resultData.forEach(person => {
        // 2 Maneras de pintar el html
        //document.getElementById("result").innerHTML += `<li>${person.name}</li>`;
        const newLi = document.createElement('li');

        newLi.textContent = person.name + " " + person.age;
        ulResult.appendChild(newLi);
      });
    }

  });

  ajaxRequest.open("GET", url);
  ajaxRequest.send();

});

