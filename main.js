// Mendapatkan elemen waktu
const waktu = document.getElementById("waktu");


function dateTime() {   // digunakan untuk menampilkan tanggal dan waktu secara real-time
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    waktu.innerHTML = formattedDate;
}

setInterval(dateTime, 1000);

dateTime();


function Submit() {
    Swal.fire({
        icon: "success",
        title: "Your work has been saved",
    });
}