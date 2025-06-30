function tambahTransaksi(event) {
  event.preventDefault(); // ✅ Benar, tidak perlu <script>

  const nama = document.getElementById('nama').value.trim();
  const judul = document.getElementById('judul').value.trim();
  const harga = parseFloat(document.getElementById('harga').value);
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const total = harga * jumlah;

  const tbody = document.getElementById('tabelTransaksi');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${nama}</td>
    <td>${judul}</td>
    <td>Rp ${harga.toLocaleString()}</td>
    <td>${jumlah}</td>
    <td>Rp ${total.toLocaleString()}</td>
  `;

  tbody.appendChild(row);
  document.getElementById('formTransaksi').reset();
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formTransaksi');
  form.addEventListener('submit', tambahTransaksi);
});

function validasiLogin() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (!user || !pass) {
    alert("Username dan Password harus diisi!");
    return false;
  }
  alert("Login berhasil!");
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

