export const products = [
  // 1
  { name: "Ninja Crispi 1700W CleanCrisp Glass Air Fryer ", store: "Amazon", cat: "Kitchen", url: "https://link.amazon/B029bsMfW", image: "https://m.media-amazon.com/images/I/312eilYdoZL._SY300_SX300_QL70_FMwebp_.jpg" },

  // 2
  { name: "IBELL MT600SM Electric Chopper", store: "Amazon", cat: "Kitchen", url: "https://link.amazon/A09aXv6jL", image: "https://m.media-amazon.com/images/I/51KZxTfgaZL._SX679_.jpg" },
  // 3
  { name: "", store: "", cat: "", url: "", image: "" },
  // 4
  { name: "", store: "", cat: "", url: "", image: "" },
  // 5
  { name: "", store: "", cat: "", url: "", image: "" },
  // 6
  { name: "", store: "", cat: "", url: "", image: "" },
  // 7
  { name: "", store: "", cat: "", url: "", image: "" },
  // 8
  { name: "", store: "", cat: "", url: "", image: "" },
  // 9
  { name: "", store: "", cat: "", url: "", image: "" },
  // 10
  { name: "", store: "", cat: "", url: "", image: "" },


].map((p, index) => ({ ...p, id: index + 1 }));
