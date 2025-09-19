window.addEventListener("load", (function() {
    document.querySelectorAll("input[required], textarea[required]").forEach((function(e, t) {
        let s = document.createElement("div");
        s.classList.add("input-alert"), s.innerHTML = "!", s.style.position = "absolute", s.style.top = "0.5rem", s.style.right = "0.5rem";
        let a = document.createElement("div");
        a.classList.add("input-wrapper"), a.style.position = "relative", e.before(a), a.appendChild(e), a.appendChild(s)
    }));
    var e = document.querySelector("#form-subscribe");
    e.addEventListener("submit", (function(t) {
        t.preventDefault();
        var s = e.getAttribute("action");
        s || (s = "ajaxserver/serverfile.php"),
            function(t, s) {
                axios.post(s, t).then((t => {
                    var s = t.data;
                    console.log("POST success", s), e.classList.add("form-success")
                })).catch((t => {
                    console.error(t), e.classList.add("form-error")
                }))
            }({
                name: e.querySelector("#name-subscribe").value,
                email: e.querySelector("#email-subscribe").value,
                submit_email: "submit_email"
            }, s)
    }));
    var t = new bootstrap.Modal(document.getElementById("messageModal")),
        s = document.querySelector("#form-message");
    s.addEventListener("submit", (function(a) {
        a.preventDefault();
        var r = s.getAttribute("action");
        r || (r = "ajaxserver/serverfile.php"),
            function(a, r) {
                axios.post(r, a).then((a => {
                    var r = a.data;
                    console.log("POST success", r), e.classList.add("form-success"), t.hide(), s.querySelectorAll("input, textarea").forEach((function(e) {
                        e.value = ""
                    }))
                })).catch((t => {
                    console.error(t), e.classList.add("form-error")
                }))
            }({
                name: s.querySelector("#name-message").value,
                email: s.querySelector("#email-message").value,
                message: s.querySelector("#message-message").value,
                submit_message: "submit_message"
            }, r)
    }))
}));