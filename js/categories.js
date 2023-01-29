const cardCat = document.querySelector("#card-row");
let catData = [];

const loadDatas = async () => {
  try {
    const resData = await fetch("/json/categories.json");
    catData = await resData.json();
    loadOutputDataCat(catData);
  } catch (error) {
    console.log(error);
  }
};

const loadOutputDataCat = (data) => {
  const tampilCard = data
    .map((eData) => {
      return ``;
    })
    .join("");
};

loadDatas();
