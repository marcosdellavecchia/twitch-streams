const list = document.getElementById("list");
const topStreamers = [];
const topTitles = [];
const topViewers = [];

axios
  .get("https://api.twitch.tv/helix/streams", {
    headers: {
      "Client-ID": "4fy281ji608puh2rl2z76lr1y7131j",
      Authorization: "Bearer 82ljz4sisz17xxt3re8g5y6t16js4v",
    },
  })
  .then(
    (res) => {
      //Guarda la informacion en la constante streams
      const streams = res.data.data;
      console.log(streams);

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
            "</br> </br>" +
            topTitles[topTitles.length - 1] +
            "</br> </br>" +
            "Viewers: " +
            topViewers[topViewers.length - 1] +
            "</li>";
        };
        displayList();
      });
    },
    (err) => {
      console.log(err);
    }
  );

console.log("top streamers are", topStreamers);
console.log("top titles are", topTitles);
