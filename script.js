
document.addEventListener("DOMContentLoaded", function () {
    // Hiển thị năm hiện tại ở Footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Đóng menu trên điện thoại sau khi nhấn liên kết
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll("#menu .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                menu &&
                menu.classList.contains("show") &&
                window.bootstrap
            ) {
                const menuCollapse =
                    bootstrap.Collapse.getOrCreateInstance(menu);

                menuCollapse.hide();
            }
        });
    });
});
