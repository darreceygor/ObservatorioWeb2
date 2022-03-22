window.onload = traerDatos();

async function traerDatos(){
    fetch('json/fichas.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
        let carta = document.getElementById("ficha");

        for (let i in datos) {         /*pongo el valor de cada campo*/
            
/*             carta.innerHTML +=`
                    <article class="item">
                        <div class="card">
                            <div class="iconCard">
                                <a href="resources/categories.html"><img src="${datos[i].image}" ></a>
                            </div>
                            <div class="cardDetail">
                                <h3>${datos[i].category}</h3>
                            </div>    
                        </div>
                    </article>
                    ` */
            carta.innerHTML +=`
                <div class="ficha" >
                    <div class="carta">
                        <img src="${datos[i].image}" />
                        
                    </div>
                    <h3>${datos[i].category}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero corporis incidunt saepe qui commodi quasi neque veniam quam, aspernatur est beatae maxime animi sed reiciendis mollitia ducimus veritatis repellendus?</p>
                    <button>+ Info</button>
                </div>
                `



        }  
    })
}