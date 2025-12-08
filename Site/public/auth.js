async function checkLogin() {
    const login = document.getElementById("loginInput").value;
    const pass  = document.getElementById("passInput").value;

    const res = await fetch("users.json");
    const users = await res.json();

    const user = users.find(u => u.login === login && u.password === pass);

    if (!user) {
        document.getElementById("errorMsg").textContent = "Неверный логин или пароль!";
        return;
    }

    // сохраняем данные пользователя
    localStorage.setItem("login", user.login);
    localStorage.setItem("role", user.role);

    window.location.href = "protected.html";
}
