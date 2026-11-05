// Data jadwal kuliah. Silakan ubah isi data di bagian ini jika ada perubahan.
const semesterData = [
  {
    title: "Semester 1 — Data sementara",
    note: "",
    rows: [
      ["—", "—", "Mata kuliah Semester 1 (ganti)", "—"],
      ["—", "—", "Mata kuliah Semester 1 (ganti)", "—"],
      ["—", "—", "Mata kuliah Semester 1 (ganti)", "—"]
    ],
    placeholder: true
  },
  {
    title: "Semester 2",
    note: "",
    rows: [
      ["Senin", "10.30–13.00", "Infrastruktur TI", "Ruang L"],
      ["Selasa", "08.00–09.35", "Design Thinking", "Ruang D"],
      ["Selasa", "10.30–13.00", "Sistem Informasi Manajemen dan Bisnis", "Ruang G"],
      ["Selasa", "13.00–16.15", "Algoritma dan Pemrograman", "Ruang F"],
      ["Selasa", "16.20–17.55", "Aljabar Linier", "Ruang J"],
      ["Kamis", "09.40–11.15", "Bahasa Inggris Lanjutan", "Ruang K"],
      ["Jumat", "08.00–11.15", "Manajemen Basis Data", "Ruang C"]
    ]
  },
  {
    title: "Semester 3",
    note: "",
    rows: [
      ["Senin", "13.00–14.35", "Riset Operasi", "—"],
      ["Senin", "14.40–16.15", "Pemrograman Dasar I", "—"],
      ["Selasa", "08.00–09.35", "Analisis dan Perancangan Sistem Informasi", "—"],
      ["Selasa", "09.40–11.15", "Statistika Data", "—"],
      ["Selasa", "14.40–16.15", "Pemrograman Dasar — Praktikum", "Lab RPL"],
      ["Rabu", "08.00–09.35", "Arsitektur Komputer dan Sistem Operasi", "—"],
      ["Rabu", "10.30–12.05", "Analisis dan Perancangan Sistem Informasi", "—"],
      ["Rabu", "13.00–14.35", "Kalkulus I", "—"],
      ["Kamis", "08.00–09.35", "Web Desain — Praktikum", "Lab RPL"],
      ["Kamis", "09.40–11.15", "English Communication", "—"],
      ["Kamis", "13.00–14.35", "Web Desain — Materi", "Ruang C"],
      ["Jumat", "08.00–10.25", "Analisis Proses Bisnis", "—"],
      ["Jumat", "13.00–14.35", "Statistika Data — Praktikum", "Lab MM"]
    ]
  }
];

const semesterContainer = document.getElementById("semesterTables");

semesterData.forEach((semester, index) => {
  const section = document.createElement("section");
  section.className = "semester-block";

  const heading = document.createElement("h4");
  heading.textContent = semester.title;
  section.appendChild(heading);

  if (semester.note) {
    const note = document.createElement("p");
    note.className = "academic-note";
    note.textContent = semester.note;
    note.style.cssText = "font-size:11px;color:#667789;margin:0 0 7px;";
    section.appendChild(note);
  }

  const wrap = document.createElement("div");
  wrap.className = "table-wrap";
  const table = document.createElement("table");
  table.innerHTML = `
    <thead><tr><th>Hari</th><th>Waktu</th><th>Mata Kuliah</th><th>Ruang</th></tr></thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  semester.rows.forEach(row => {
    const tr = document.createElement("tr");
    if (semester.placeholder) tr.className = "placeholder-row";
    row.forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  wrap.appendChild(table);
  section.appendChild(wrap);
  semesterContainer.appendChild(section);
});

// Navigasi versi mobile.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
