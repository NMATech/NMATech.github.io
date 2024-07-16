let text_result_bmi = document.getElementById("text_result_bmi");
let text_berat_badan = document.getElementById("text_berat_badan");
let container_result = document.getElementById("container_result");
let text_kategori = document.getElementById("text_kategori");
let text_saran = document.getElementById("text_saran");
let text_saran2 = document.getElementById("text_saran2");
let ul_list_penyakit = document.getElementById("list_penyakit");

let jenis_kelamin = document.getElementById("jenis_kelamin");
let berat_badan = document.getElementById("berat_badan");
let usia = document.getElementById("usia");
let tinggi_badan = document.getElementById("tinggi_badan");

let list_penyakit = [];

const statusBeratBadan = (x) => {
  let status = null;
  let kategori = null;

  if (x < 18.5) {
    status = "Kekurangan berat badan";
    kategori = "Lower Weight";
  } else if (x >= 18.5 && x <= 24.9) {
    status = "Normal (ideal)";
    kategori = "Normal";
  } else if (x >= 25 && x <= 29.9) {
    status = "Kelebihan berat badan";
    kategori = "Pre Obesitas";
  } else if (x >= 30) {
    status = "Kegemukan (Obesitas)";
    kategori = "Obesitas";
  }

  return [status, kategori];
};

const penyakit = (string) => {
  if (string == "Lower Weight") {
    list_penyakit.push("Marasmus");
    list_penyakit.push("Anemia");
    list_penyakit.push("Gondok");
  } else if (string == "Pre Obesitas" || string == "Obesitas") {
    list_penyakit.push("Penyakit Jantung");
    list_penyakit.push("Stroke");
    list_penyakit.push("Kanker Tertentu");
  } else {
    list_penyakit.push("Tidak ada anda normal");
  }

  return list_penyakit;
};

const saran = (string) => {
  if (string == "Lower Weight") {
    text_saran.innerText =
      "Cara terbaik untuk menaikan berat badan adalah dengan perbanyak makan yang mengandung protein dan seimbangi dengan karbohidrat.";
    text_saran2.innerText =
      "Jika anda sudah berada pada BMI ini anda dianjurkan menaikkan berat badan anda sampe normal.";
  } else if (string == "Normal") {
    text_saran.innerText =
      "Bagus anda sudah berada pada kategori normal pertahankan.";
    text_saran2.innerText =
      "Jika anda sudah berada pada BMI ini anda dianjurkan untuk mempertahankan.";
  } else if (string == "Pre Obesitas" || string == "Obesitas") {
    text_saran.innerText =
      "Cara terbaik untuk menurunkan berat badan adalah dengan perbanyak olahraga dan latihan kardio.";
    text_saran2.innerText =
      "Jika anda sudah berada pada BMI ini anda dianjurkan menurunkan berat badan anda sampe normal.";
  }
};

const BMI = () => {
  berat_badan_hasil = parseFloat(berat_badan.value);
  tinggi_badan_hasil = parseFloat(tinggi_badan.value);

  let result = berat_badan_hasil / (tinggi_badan_hasil / 100) ** 2;
  let [status, kategori] = statusBeratBadan(result);
  let list_penyakit = penyakit(kategori);

  text_result_bmi.innerText = `${result}`;
  text_berat_badan.innerText = `Anda termasuk ${status}`;
  text_kategori.innerText = `Anda berada dalam kategori ${kategori}`;
  saran(kategori);
  for (let i = 0; i < list_penyakit.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerText = `${list_penyakit[i]}`;
    ul_list_penyakit.appendChild(liElement);
  }
  container_result.style.display = "block";
};

const reset = () => {
  jenis_kelamin.value = "";
  berat_badan.value = "";
  usia.value = "";
  tinggi_badan.value = "";

  for (let i = 0; i < list_penyakit.length; i++) {
    list_penyakit.pop();
  }

  container_result.style.display = "none";
};

let button_hitung = document.getElementById("button_hitung");
let button_reset = document.getElementById("button_reset");

button_hitung.addEventListener("click", () => {
  BMI();
});

button_reset.addEventListener("click", () => {
  reset();
});
