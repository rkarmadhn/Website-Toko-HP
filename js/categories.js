let catData = [];

const loadData = async () => {
  try {
    const resData = await fetch("/json/categories.json");
    catData = await resData.json();
    loadOutputDataCat(catData);
  } catch (error) {
    console.log(error);
  }
};

const loadOutputDataCat = (data) => {
  const tampil = data.map((eData) => {
    return eData;
  });
  console.log(tampil);
};

loadData();
