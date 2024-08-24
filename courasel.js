

const buttons = document.querySelectorAll('.menu-btn');
const contentItems = document.querySelectorAll('.content-item');

buttons.forEach((btn) => {
    btn.addEventListener('click', function() {
        // Hapus class 'active' dari semua konten
        contentItems.forEach((item) => item.classList.remove('active'));
        
        // Ambil target ID dari tombol yang diklik
        const target = btn.getAttribute('data-target');
        
        // Tampilkan konten yang sesuai dengan menambahkan class 'active'
        document.getElementById(target).classList.add('active');
    });
});
