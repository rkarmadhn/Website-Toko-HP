let data = [];
const row = document.querySelector(".row-card-page");

const loadData = async () => {
  try {
    const resData = await fetch("/json/page/android-type-xiaomi.json");
    data = await resData.json();
    allData(data.xiaomi);
  } catch (error) {
    console.log(error);
  }
};

const allData = (datas) => {
  // Output Pada Show items
  document.querySelector(".showed-items").innerHTML = datas.length;
  // Default Output
  const tampilDefault = datas
    .map((dt) => {
      return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
    })
    .join("");
  // Filter 2022
  const stock2022 = datas
    .map((dt) => {
      if (dt.tahun === 2022) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2021
  const stock2021 = datas
    .map((dt) => {
      if (dt.tahun === 2021) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2020
  const stock2020 = datas
    .map((dt) => {
      if (dt.tahun === 2020) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2019
  const stock2019 = datas
    .map((dt) => {
      if (dt.tahun === 2019) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2018
  const stock2018 = datas
    .map((dt) => {
      if (dt.tahun === 2018) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2017
  const stock2017 = datas
    .map((dt) => {
      if (dt.tahun === 2017) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
  // Filter 2016
  const stock2016 = datas
    .map((dt) => {
      if (dt.tahun === 2016) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
              <div class="card">
                <div class="card-images">
                  <img src="${dt.images}" alt="" class="w-100" />
                </div>
                <div class="card-text">
                  <div class="wrap" style="border: none;">
                    <p class="m-0" style="color: #FD4900;">${data.nama_brand}</p>
                    <p>${dt.tahun}</p>
                    </div>
                    <div class="wrap" >
                    <p class="fw-bold">${dt.nama_seri}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga LCD</p>
                    <p>${dt.harga_lcd >= 1 ? `Rp. ${dt.harga_lcd} .-` : `Belum Tersedia`}</p>
                  </div>
                  <div class="wrap" style="border: none;">
                    <p>Harga Baterai</p>
                    <p>${dt.harga_baterai >= 1 ? `Rp. ${dt.harga_baterai} .-` : `Belum Tersedia`}</p>
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
    // Button Filter Tahun 2022
    $(".year2022").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2022;
    });
    // Button Filter Tahun 2021
    $(".year2021").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2021;
    });
    // Button Filter Tahun 2020
    $(".year2020").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2020;
    });
    // Button Filter Tahun 2019
    $(".year2019").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2019;
    });
    // Button Filter Tahun 2018
    $(".year2018").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2018;
    });
    // Button Filter Tahun 2017
    $(".year2017").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2017;
    });
    // Button Filter Tahun 2016
    $(".year2016").click(function () {
      $(".title-items").hide();
      row.innerHTML = stock2016;
    });
    // Button Reset
    $(".button-reset").click(function () {
      $(this).hide();
      $(".title-items").show();
      row.innerHTML = tampilDefault;
    });
  });
};

loadData();
