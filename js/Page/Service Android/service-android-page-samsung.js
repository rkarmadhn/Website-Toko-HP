const row = document.querySelector(".row-card-page-samsung");
const itemsTitle = document.querySelector(".title-items");

// Panggil API
let type = [];
const stock = async () => {
  try {
    const res = await fetch("/json/page/android-type-samsung.json");
    type = await res.json();
    // Function
    loadStockSamsung(type.samsung);
  } catch (error) {
    console.log(error);
  }
};

const loadStockSamsung = (types) => {
  // Output Pada Show items
  document.querySelector(".showed-items").innerHTML = types.length;

  // Output Default
  const tampilDefault = types
    .map((tps) => {
      return `<div class="col-lg-4 col-md-4 col-sm-6">
      <div class="card">
        <div class="card-images">
          <img src="${tps.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="group">
            <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
            <div class="wrap">
              <p class="fw-bold">${tps.nama_seri}</p>
              <p>${tps.tahun}</p>
            </div>
          </div>
          <div class="wrap">
            <p>Harga LCD</p>
            <p>Rp. ${tps.harga_lcd} ,-</p>
          </div>
          <div class="wrap">
            <p>Harga Baterai</p>
            <p>Rp. ${tps.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  // Output Default
  row.innerHTML = tampilDefault;
};

stock();
