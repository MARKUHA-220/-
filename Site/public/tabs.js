function showTab(id) {
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block";
}
