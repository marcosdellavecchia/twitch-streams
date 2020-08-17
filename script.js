const list = document.getElementById("list");
const topStreamers = [];
const topTitles = [];
const topViewers = [];
const topLanguage = [];

//ID y Clave para la API
const clientID = config.clientID;
const authKey = config.authKey;

//Agrega preloader
let loader = `<div id='loader'>Loading...</div>`;
list.innerHTML = loader;

//Petición a la API con Axios
axios
  .get("https://api.twitch.tv/helix/streams", {
    headers: {
      "Client-ID": clientID,
      Authorization: authKey,
    },
  })
  .then(
    (res) => {
      //Guarda la informacion en la constante streams
      const streams = res.data.data;

      //Mapea streams y guarda los datos correspondientes en distintos arrays
      streams.map((id) => {
        topStreamers.push(id.user_name);
        topTitles.push(id.title);
        topViewers.push(id.viewer_count);
        topLanguage.push(id.language);

        //Función que muestra la lista en el DOM
        displayList = () => {
          displayFlags();
          list.innerHTML +=
            "<li>" +
            topLanguage[topLanguage.length - 1] +
            " " +
            topStreamers[topStreamers.length - 1] +
            "</br>" +
            "<span style=color:yellow>" +
            topTitles[topTitles.length - 1] +
            "</span>" +
            "</br>" +
            "<span style=color:lightblue>" +
            " (" +
            topViewers[topViewers.length - 1] +
            " viewers)" +
            "</span>" +
            "</li>";
        };
        displayList();
      });

      //Elimina preloader una vez recibidos los datos de la API
      document.getElementById("loader").remove();
    },
    (err) => {
      console.log(err);
    }
  );

//Reemplaza el string que hace referencia al idioma con la bandera correspondiente
displayFlags = () => {
  for (i = 0; i < topLanguage.length; i++) {
    switch (topLanguage[i]) {
      case "en":
        topLanguage[i] = "<span class='flag-icons US'></span>";
        break;
      case "ja":
        topLanguage[i] = "<span class='flag-icons JP'></span>";
        break;
      case "ko":
        topLanguage[i] = "<span class='flag-icons KR'></span>";
        break;
      case "zh":
        topLanguage[i] = "<span class='flag-icons CN'></span>";
        break;
      case "ru":
        topLanguage[i] = "<span class='flag-icons RU'></span>";
        break;
      case "es":
        topLanguage[i] = "<span class='flag-icons ES'></span>";
        break;
      case "de":
        topLanguage[i] = "<span class='flag-icons DE'></span>";
        break;
      case "pt":
        topLanguage[i] = "<span class='flag-icons BR'></span>";
        break;
      case "it":
        topLanguage[i] = "<span class='flag-icons IT'></span>";
        break;
      case "fr":
        topLanguage[i] = "<span class='flag-icons FR'></span>";
        break;
    }
  }
};
