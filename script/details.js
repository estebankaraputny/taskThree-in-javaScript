const indiceDetails = Number(localStorage.getItem("detail"));

console.log(indiceDetails)

const renderDetails = (event) => {

  const detailsCards = document.getElementById("details__cards");

  detailsCards.innerHTML = `
          <div class="container__details">
              <div class="content__image">
                  <img src="${event.eventos[indiceDetails].image}" alt="imagen sobre el evento" class="image__events">
              </div>
              <div class="content__infoDetails">
                  <h2 class="name__events">${event.eventos[indiceDetails].name}</h2>
                  <p class="price__events">$${event.eventos[indiceDetails].price}</p>
                  <p class="category__events">${event.eventos[indiceDetails].category}</p>
                  <!-- <p>Ver formas de pago</p> -->
                  <p class="descriptions__events">${event.eventos[indiceDetails].description}</p>
                  <button type="button" class="button__buy">Buy Tickets</button>
              </div>
          </div>
        `;
}
renderDetails(data);