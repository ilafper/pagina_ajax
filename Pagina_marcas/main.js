$(function () {
    $.getJSON("https://randomuser.me/api/?results=20", function (data) {
      var users = data.results;
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var firstName = user.name.first;
        var lastName = user.name.last;
        var picture = user.picture.large;
  
        var cardHTML = ` <main class="profile-card">
          <img class="profile-pic" src="${picture}" />
          <div class="details">
            <h1 class="name">${firstName} ${lastName}</h1>
            <div class="button">
              <button class="borrar">Pasar</button>
            </div>
          </div>
        </main>
        `;
  
        $(".persona_lista").append(cardHTML);
      }
      $(".borrar").on("click", function () {
        $(this).closest(".profile-card").remove(); // Eliminar la carta más cercana al botón clickeado
      });
    });
  });
  
  