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
      return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${tps.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
            <p>${tps.tahun}</p>
            </div>
            <div class="wrap" >
            <p class="fw-bold">${tps.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${tps.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${tps.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  // Output 2021
    const stock2021 = types
      .map((tps) => {
        if (tps.tahun === 2021) {
          return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
          <div class="card">
            <div class="card-images">
              <img src="${tps.images}" alt="" class="w-100" />
            </div>
            <div class="card-text">
              <div class="wrap" style="border: none;">
                <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
                <p>${tps.tahun}</p>
                </div>
                <div class="wrap" >
                <p class="fw-bold">${tps.nama_seri}</p>
              </div>
              <div class="wrap" style="border: none;">
                <p>Harga LCD</p>
                <p>Rp. ${tps.harga_lcd} ,-</p>
              </div>
              <div class="wrap" style="border: none;">
                <p>Harga Baterai</p>
                <p>Rp. ${tps.harga_baterai} ,-</p>
              </div>
            </div>
          </div>
        </div>`;
        }
      })
      .join("");

  // Output 2020
  const stock2020 = types
    .map((tps) => {
      if (tps.tahun === 2020) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="card">
          <div class="card-images">
            <img src="${tps.images}" alt="" class="w-100" />
          </div>
          <div class="card-text">
            <div class="wrap" style="border: none;">
              <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
              <p>${tps.tahun}</p>
              </div>
              <div class="wrap" >
              <p class="fw-bold">${tps.nama_seri}</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga LCD</p>
              <p>Rp. ${tps.harga_lcd} ,-</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga Baterai</p>
              <p>Rp. ${tps.harga_baterai} ,-</p>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .join("");

  // Output 2019
  const stock2019 = types
    .map((tps) => {
      if (tps.tahun === 2019) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="card">
          <div class="card-images">
            <img src="${tps.images}" alt="" class="w-100" />
          </div>
          <div class="card-text">
            <div class="wrap" style="border: none;">
              <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
              <p>${tps.tahun}</p>
              </div>
              <div class="wrap" >
              <p class="fw-bold">${tps.nama_seri}</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga LCD</p>
              <p>Rp. ${tps.harga_lcd} ,-</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga Baterai</p>
              <p>Rp. ${tps.harga_baterai} ,-</p>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .join("");

  // Output 2018
  const stock2018 = types
    .map((tps) => {
      if (tps.tahun === 2018) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="card">
          <div class="card-images">
            <img src="${tps.images}" alt="" class="w-100" />
          </div>
          <div class="card-text">
            <div class="wrap" style="border: none;">
              <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
              <p>${tps.tahun}</p>
              </div>
              <div class="wrap" >
              <p class="fw-bold">${tps.nama_seri}</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga LCD</p>
              <p>Rp. ${tps.harga_lcd} ,-</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga Baterai</p>
              <p>Rp. ${tps.harga_baterai} ,-</p>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .join("");

  // Output 2017
  const stock2017 = types
    .map((tps) => {
      if (tps.tahun === 2017) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="card">
          <div class="card-images">
            <img src="${tps.images}" alt="" class="w-100" />
          </div>
          <div class="card-text">
            <div class="wrap" style="border: none;">
              <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
              <p>${tps.tahun}</p>
              </div>
              <div class="wrap" >
              <p class="fw-bold">${tps.nama_seri}</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga LCD</p>
              <p>Rp. ${tps.harga_lcd} ,-</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga Baterai</p>
              <p>Rp. ${tps.harga_baterai} ,-</p>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .join("");

  // Output 2016
  const stock2016 = types
    .map((tps) => {
      if (tps.tahun === 2016) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="card">
          <div class="card-images">
            <img src="${tps.images}" alt="" class="w-100" />
          </div>
          <div class="card-text">
            <div class="wrap" style="border: none;">
              <p class="m-0" style="color: #0c4da2;">${type.nama_brand}</p>
              <p>${tps.tahun}</p>
              </div>
              <div class="wrap" >
              <p class="fw-bold">${tps.nama_seri}</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga LCD</p>
              <p>Rp. ${tps.harga_lcd} ,-</p>
            </div>
            <div class="wrap" style="border: none;">
              <p>Harga Baterai</p>
              <p>Rp. ${tps.harga_baterai} ,-</p>
            </div>
          </div>
        </div>
      </div>`;
      }
    })
    .join("");

  // Output Default
  row.innerHTML = tampilDefault;

  $(document).ready(function () {
    $(".year2021").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2021;
    });
    $(".year2020").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2020;
    });
    $(".year2019").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2019;
    });
    $(".year2018").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2018;
    });
    $(".year2017").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2017;
    });
    $(".year2016").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2016;
    });
    $(".button-reset").click(function () {
      $(this).hide();
      $(".title-items").show();
      row.innerHTML = tampilDefault;
    });
  });
};

stock();
