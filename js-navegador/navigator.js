
/* hola 

.navigator()
Geolocalizatión

.clearWatch()
.watchPosition()
.getCurrentPosition(success[error,options])

*/

// navigator.geolocation.getCurrentPosition(function(geoposition){

//     let coords = geoposition.coords,
//         lat = coords.latitude,
//         long = coords.longitude;

// console.log(lat,long);

// });


/* location  -> contiene la informacion de la paguna actual 

.htef -> url
-pathname -> la ruta deltro del dominio
.origin -> protocol + hostname
protocol -> http o https 
.hostname -> hostname(dominio o IP)
host -> hostname y puerto
port -> puerto
.search -> parametros de busqueda ?id=


ejerciico determinar item activo del menú


*/



function getCurrentMenuItem(containerElement){
    let url = location.href,
    links = [...containerElement.querySelectorAll('a')];
    links.map(link =>{
        if (link.href === url) return link.classList.add('active');
            
        
    })
}

getCurrentMenuItem(document.getElementById('menu'));

