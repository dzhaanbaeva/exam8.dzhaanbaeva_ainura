'use strict';
window.addEventListener('load', function () {

    function creatCountry(country) {
        let countries = document.getElementById("country");

        const div = document.createElement('div');
        console.log(div);
        let h1 = document.createElement('h1');
        h1.innerHTML = country.name;
        let p = document.createElement('p');
        p.innerHTML = country.capital;
        let img = document.createElement('img');
        img.setAttribute('src', country.flag)
        img.setAttribute('height', '150px');
        img.setAttribute('width', '150px');
        let p1 = document.createElement('p');
        p1.innerHTML = country.region;
        let p2 = document.createElement('p');
        p2.innerHTML = country.currencies[0].name;
        let a = document.createElement('a');
        a.setAttribute("href", `https://www.google.com/search?q=${country.name}`);
        a.setAttribute("target", "_blank");
        a.innerHTML = "More"
        let a1 = document.createElement('a');
        a1.setAttribute("href", `https://ru.m.wikipedia.org/wiki/${country.name}`);
        a1.setAttribute("target", "_blank");
        a1.innerHTML = "More"
        div.append(h1);
        div.append(p);
        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(a);
        div.append(a1);
        countries.append(div)

       
    }

    

  
    const show = document.getElementById("search-country");
    const value = document.getElementById('value');

    show.addEventListener("click", function () {
            value.focus();
            if(value.value.trim() !== ""){
                const countries = fetch("https://restcountries.eu/rest/v2/name/" + value.value, {
                    method: 'GET',
                }).then(response => response.json()).then(res => {
                    res.forEach(country => {
                        creatCountry(country)
                    })
                value.value = ""
                }).catch(err => {
                    swal("not found", "error").then(() => {
                        value.value = ""
                        value.focus();
                    });
                })
                   
            }
        
    });

   
});
