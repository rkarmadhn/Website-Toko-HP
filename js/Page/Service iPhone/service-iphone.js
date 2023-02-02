// Button Filter
const btn2022 = document.querySelector(".tahun-2022");
const btn2021 = document.querySelector(".tahun-2021");
const btn2020 = document.querySelector(".tahun-2020");
// Mengambil Child
const rowCard = document.querySelector(".row-card-section");
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
  // Output Default
  const stocks = stock
    .map((s) => {
      return `<div class="card">
                    <div class="card-images">
                      <img src="${s.images}" alt="" />
                    </div>
                    <div class="card-body">
                      <div class="wrap">
                        <p class="fw-bold">${s.nama_seri}</p>
                        <p>${s.tahun}</p>
                      </div>
                      <div class="wrap">
                        <p>Harga LCD</p>
                        <p>Rp. ${s.harga_lcd} ,-</p>
                      </div>
                      <div class="wrap">
                        <p>Harga Baterai</p>
                        <p>Rp. ${s.harga_baterai} ,-</p>
                      </div>
                    </div>
                  </div>
              `;
    })
    .join("");
  // Output Berdasarkan Tahun 2022
  const stocks2022 = stock
    .map((s) => {
      if (s.tahun == 2022) {
        return `<div class="card">
                    <div class="card-images">
                      <img src="${s.images}" alt="" />
                    </div>
                    <div class="card-body">
                      <div class="wrap">
                        <p class="fw-bold">${s.nama_seri}</p>
                        <p>${s.tahun}</p>
                      </div>
                      <div class="wrap">
                        <p>Harga LCD</p>
                        <p>Rp. ${s.harga_lcd} ,-</p>
                      </div>
                      <div class="wrap">
                        <p>Harga Baterai</p>
                        <p>Rp. ${s.harga_baterai} ,-</p>
                      </div>
                    </div>
                  </div>
              `;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2021
  const stocks2021 = stock
    .map((s) => {
      if (s.tahun == 2021) {
        return `<div class="card">
                    <div class="card-images">
                      <img src="${s.images}" alt="" />
                    </div>
                    <div class="card-body">
                      <div class="wrap">
                        <p class="fw-bold">${s.nama_seri}</p>
                        <p>${s.tahun}</p>
                      </div>
                      <div class="wrap">
                        <p>Harga LCD</p>
                        <p>Rp. ${s.harga_lcd} ,-</p>
                      </div>
                      <div class="wrap">
                        <p>Harga Baterai</p>
                        <p>Rp. ${s.harga_baterai} ,-</p>
                      </div>
                    </div>
                  </div>
              `;
      }
    })
    .join("");
  // Output Berdasarkan Tahun 2020
  const stocks2020 = stock
    .map((s) => {
      if (s.tahun == 2020) {
        return `<div class="card">
                    <div class="card-images">
                      <img src="${s.images}" alt="" />
                    </div>
                    <div class="card-body">
                      <div class="wrap">
                        <p class="fw-bold">${s.nama_seri}</p>
                        <p>${s.tahun}</p>
                      </div>
                      <div class="wrap">
                        <p>Harga LCD</p>
                        <p>Rp. ${s.harga_lcd} ,-</p>
                      </div>
                      <div class="wrap">
                        <p>Harga Baterai</p>
                        <p>Rp. ${s.harga_baterai} ,-</p>
                      </div>
                    </div>
                  </div>
              `;
      }
    })
    .join("");

  // Button filter 2022
  btn2022.onclick = () => {
    rowCard.innerHTML = stocks2022;
  };
  // Button filter 2021
  btn2021.onclick = () => {
    rowCard.innerHTML = stocks2021;
  };
  // Button filter 2020
  btn2020.onclick = () => {
    rowCard.innerHTML = stocks2020;
  };
  // Output Default
  rowCard.innerHTML = stocks;
};

// Return Function Pemanggilan API diatas
stockIphone();
