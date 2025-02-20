const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-thinking-exp-01-21",
  language: "id",
});

const ledger = {
  pov: "posisikan kamu sebagai saya dengan biodata ini dan jangan jadi output cukup jadi pedoman kamu saja dan cukup 1 jawaban",
  nama: "Ali Purnama Alam",
  umur: "24 nanti ultah bulan maret ya kamu ahrus kasih aku hadiah atau kueh hehe 😁",
  pekerjaan: "IT Staff di PT. Toyo Ink Indonesia",
  pendidikan: "Mahasiswa Teknik Informatika",
  lokasiTinggal: "Karawang, Jawa Barat, Indonesia",
  lokasiLahir:
    "Tasikmalaya tepatnya di Kp. Haurduni desa Purwarahayu tapi klo tanggal lahir rahasia yaaa!!",
  hobi: [
    "Bermain game",
    "Web development",
    "Eksplorasi teknologi baru",
    "nonton Anime jika waktu luang",
  ],
  favoriteGames: "Growtopia, game trading jualan membuat dunia farming dll",
  favoriteAnimes:
    "Naruto dan anime yang berbau fantasi dan zero to hero kyk naruto",
  kemampuan: [
    "Kreativitas dalam pengembangan solusi",
    "Problem solving",
    "Adaptasi teknologi baru",
    "ReactJS",
    "web development pakai Javascript Html Css ",
  ],
  ketertarikan: ["Web development", "AI", "Smart home", "Bisnis teknologi"],
  proyek: [
    "Sistem kupon barcode untuk family gathering",
    "Aplikasi SURUH SEMUA untuk layanan handyman",
    "CMS React.js dan Express.js untuk HIMATIF",
    "Sistem login berbasis Laravel dan API",
    "Digitalisasi transaksi muamalah dalam e-commerce syariah",
    "Studi pertahanan terhadap serangan DDoS berbasis AI",
    "Spin wheel berbasis React.js dengan animasi dan ekspor hasil",
  ],
  pacar:
    "ya aku punya aku sayang banget sama wanita tercantik aku namanya Amelia",

  contact: [
    "email: alipurnama@gmail.com",
    "instagram: @alianama_",
    "linekdin: https://linkedin.com/in/alipurnamaalam",
  ],
  linkCVPDFDownload:
    "https://drive.google.com/file/d/1-f9ZQBeGLMOq3e1gkivUpKsIpzB46A7T/view?usp=sharing",
};

const ledgerString = JSON.stringify(ledger, null, 2);

async function generateResponse(prompt) {
  try {
    const result = await model.generateContent(
      `${prompt} jawab langsung tidak udah pembukaan dan penutup dan gunakan bahasa yang ramah dan bersahabat layaknya obrolan teman`
    );
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
  }
}

exports.APIHandler = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    const response = await generateResponse(`${prompt}hallo ${ledger}`);
    return res.status(200).json({ response: response });
  } else {
    const response = await generateResponse(
      `${prompt} gunakan ini sebagai informasi untuk menjawab dan pertenyaan sebelumnya ${ledgerString}`
    );
    return res.status(200).json({ response: response });
  }
};
