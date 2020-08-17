const list = document.getElementById("list");
const topStreamers = [];
const topTitles = [];
const topViewers = [];

//ID y Clave para la API
const clientID = config.clientID;
const authKey = config.authKey;

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

        //Función que muestra la lista en el DOM
        displayList = () => {
          list.innerHTML +=
            "<li>" +
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
    },
    (err) => {
      console.log(err);
    }
  );
