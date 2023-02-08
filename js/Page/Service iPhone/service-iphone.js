// Mengambil Element
const rowCard = document.querySelector(".row-cards");

// Pemanggilan json
let typeIphone = [];
const stockIphone = async () => {
  try {
    const resData = await fetch("/json/page/iPhone-type.json");
    typeIphone = await resData.json();
    // Menjalankan Function untuk mengambil array Iphone Type .json
    loadStock(typeIphone.iphone);
  } catch (error) {
    console.log(error);
  }
};

// Function Stock / Isi file Json
const loadStock = (stock) => {
  // Output Pada Show items
  document.querySelector(".showed-items").innerHTML = stock.length;
  // Output Default
  const stockDefault = stock
    .map((s) => {
      return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  // Output Berdasarkan Tahun 2022
  const year2022 = stock
    .map((s) => {
      if (s.tahun === 2022) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2021
  const year2021 = stock
    .map((s) => {
      if (s.tahun === 2021) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2020
  const year2020 = stock
    .map((s) => {
      if (s.tahun === 2020) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2019
  const year2019 = stock
    .map((s) => {
      if (s.tahun === 2019) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2018
  const year2018 = stock
    .map((s) => {
      if (s.tahun === 2018) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2017
  const year2017 = stock
    .map((s) => {
      if (s.tahun === 2017) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2016
  const year2016 = stock
    .map((s) => {
      if (s.tahun === 2016) {
        return `<div class="col-lg-4 col-md-4 col-sm-6 col-6">
      <div class="card">
        <div class="card-images">
          <img src="${s.images}" alt="" class="w-100" />
        </div>
        <div class="card-text">
          <div class="wrap" style="border: none;">
            <p class="m-0" style="color: #A2AAAD;">${typeIphone.nama_brand}</p>
            <p >${s.tahun}</p>
            </div>
            <div class="wrap">
              <p class="fw-bold">${s.nama_seri}</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga LCD</p>
            <p>Rp. ${s.harga_lcd} ,-</p>
          </div>
          <div class="wrap" style="border: none;">
            <p>Harga Baterai</p>
            <p>Rp. ${s.harga_baterai} ,-</p>
          </div>
        </div>
      </div>
    </div>`;
      }
    })
    .join("");

  // Output Default
  rowCard.innerHTML = stockDefault;

  $(document).ready(function () {
    $(".year2022").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2022;
    });
    $(".year2021").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2021;
    });
    $(".year2020").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2020;
    });
    $(".year2019").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2019;
    });
    $(".year2018").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2018;
    });
    $(".year2017").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2017;
    });
    $(".year2016").click(function () {
      $(".title-items").hide();
      rowCard.innerHTML = year2016;
    });
    $(".button-reset").click(function () {
      $(this).hide();
      $(".title-items").show();
      rowCard.innerHTML = stockDefault;
    });
  });
};

// Return Function Pemanggilan API diatas
stockIphone();
