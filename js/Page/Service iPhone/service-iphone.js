const rowCard = document.querySelector(".row-card-section");
let typeIphone = [];

const stockIphone = async () => {
  try {
    const resData = await fetch("/json/page/iPhone-type.json");
    typeIphone = await resData.json();
    loadStock(typeIphone.iphone);
  } catch (error) {}
};

const loadStock = (stock) => {
  const stocks = stock
    .map((s) => {
      return `
        <div class="card">
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
                  <p>${s.harga_lcd}</p>
                </div>
                <div class="wrap">
                  <p>Harga Baterai</p>
                  <p>${s.harga_baterai}</p>
                </div>
              </div>
            </div>
        `;
    })
    .join("");

    rowCard.innerHTML = stocks
};

stockIphone();
