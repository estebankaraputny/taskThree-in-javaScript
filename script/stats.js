const data = {
    fechaActual: "2022-01-01",
    eventos: [
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        name: "Collectivities Party",
        date: "2021-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
        name: "Korean style",
        date: "2021-08-12",
        description:
          "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 10,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
        name: "Jurassic Park",
        date: "2021-11-02",
        description:
          "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        assistance: 65892,
        price: 15,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
        name: "Parisian Museum",
        date: "2022-11-02",
        description:
          "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 8200,
        estimate: 8200,
        price: 3500,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
        name: "Comicon",
        date: "2021-02-12",
        description:
          "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
        place: "Room C",
        capacity: 120000,
        assistance: 110000,
        price: 54,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
        name: "Halloween Night",
        date: "2022-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
        name: "Metallica in concert",
        date: "2022-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
      },
      {
        image:
          "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
        name: "Electronic Fest",
        date: "2021-01-22",
        description:
          "The best national and international DJs gathered in one place.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        assistance: 110300,
        price: 250,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
        name: "10K for life",
        date: "2021-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Campo de FutbÃ³l",
        capacity: 30000,
        assistance: 25698,
        price: 3,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
        name: "15K NY",
        date: "2021-03-01",
        description:
          "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 3000000,
        assistance: 2569800,
        price: 3,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
        name: "School's book fair",
        date: "2022-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        estimate: 123286,
        price: 1,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
        name: "Just for your kitchen",
        date: "2021-11-09",
        description:
          "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
        place: "Room D6",
        capacity: 130000,
        assistance: 90000,
        price: 100,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
        name: "Batman",
        date: "2021-3-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Room D1",
        capacity: 11000,
        assistance: 9300,
        price: 225,
      },
      {
        image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
        name: "Avengers",
        date: "2022-10-15",
        description:
          "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
      },
    ],
};

const events = data.eventos;


let arrayCompleto = [...events];
// console.log("Todos los eventos",arrayCompleto)
// console.log(data.eventos[2].capacity);

//ORDENADOS SEGÚN SU CAPACIDAD
const resultadosOrdenados = arrayCompleto.sort((a,b) =>
     a.capacity - b.capacity
);

console.log(resultadosOrdenados)

let arrayMayCap = resultadosOrdenados.slice(resultadosOrdenados.length-5);
// 10.50/100
console.log(arrayMayCap)




// const pastEvents = [];
// const upcomingEvents = [];


// const pastAndUpcoming = () =>{
//   let key = "assistance";
//   for(let i = 0; i < events.length; i++){
//     if(key in events[i]){
//       pastEvents.push(events[i])
//     } else {
//       upcomingEvents.push(events[i])
//     }
//   };
//   console.log("Past Events", pastEvents)
//   console.log("Upcoming Events", upcomingEvents)
// };
// pastAndUpcoming()

// Eventos con mayor porcentaje de asistencia
// Eventos con menor porcentaje de asistencia
// Evento con mayor capacidad

//Hacer el 10% con metodos de Math

// let arrayPastCut = pastEvents.slice(0, 5);
// let arrayUpcomigCut = upcomingEvents.slice(0, 5)
// console.log(arrayPastCut)
// console.log(arrayUpcomigCut)

// for(let i = 0; i < arrayPastCut.length; i++){
  //   const numberMax = Math.max(arrayPastCut[i].assistance);
  // const numberOrder = numberMax.sort((a,b) => b - a);
  // console.log(numberOrder)
  
  //   const arrayMay = event.assistance.Match.max()
  //   console.log(arrayMay)
  // }


// const resultadosOrdenados = arrayPastCut.forEach((event) => {
//   let valoresAsistencia = [];
//   let valorMax = Math.max(event.assistance);
//   valoresAsistencia.push(valorMax);
//   console.log(valorMax)
//   console.log(valoresAsistencia)
  // const resultadosOrdenados = valoresAsistencia.sort((a,b) =>{
  //   return Number.parseInt(a.value) - Number.parseInt(b.value)
  // });
  // console.log("Resultados Ordenados", resultadosOrdenados);
// }) 




// EJEMPLO DE LEO
// let arrayCompleto = [...events]; // 50 eventos

//ORDENADOS SEGÚN SU CAPACIDAD
// const resultadosOrdenados = arrayCompleto.sort((a,b) =>
    //  a.capacity - b.capacity
// );

//Cuentas math
// const diezpercentage = resultadosOrdenados.length - Math.round(resultadosOrdenados.length * 0.1) //  50 - 5 = 45

// let arrayMayCap = resultadosOrdenados.slice(diezpercentage, resultadosOrdenados.length);
// let arrayMayCap = resultadosOrdenados.slice(resultadosOrdenados.length - Math.round(resultadosOrdenados.length * 0.1), resultadosOrdenados.length); // Un recorte del ultimo 10% del array, que significa el 10% de los arrays con mayor capacidad

// let arrayMayCap = resultadosOrdenados.slice(9, 14); //A modo de ejemplo
// let arrayMayCap = resultadosOrdenados.slice((50-5), 50); 
// let arrayMayCap = resultadosOrdenados.slice(45, 50);

// console.log(arrayMayCap)


//Capacity: 45000
// Assistance: 42000

// 45000 = 100%
// 42000 = ?

// (42000 * 100) / 45000 Output= ?% Assistance
// const percentageAsisst = (Assistance * 100) / Capacity

// const ordenPercentage = arrayCompleto.sort((a,b) =>
//      a.percentageAsisst - b.percentageAsisst
// );