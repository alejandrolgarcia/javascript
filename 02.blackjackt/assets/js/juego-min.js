const miModulo = (() => {
    "use strict";
    let e = [];
    const t = ["C", "D", "H", "S"],
        n = ["A", "J", "Q", "K"];
    let o = [];
    const r = document.querySelector("#btnPedir"),
        a = document.querySelector("#btnDetener"),
        l = (document.querySelector("#btnNuevo"), document.querySelectorAll(".divCartas")),
        s = document.querySelectorAll("small"),
        d = () => {
            e = [];
            for (let n = 2; n <= 10; n++)
                for (let o of t) e.push(n + o);
            for (let o of t)
                for (let t of n) e.push(t + o);
            return _.shuffle(e)
        },
        c = () => { if (0 === e.length) throw "No hay cartas en el deck"; return e.pop() },
        i = (e, t) => (o[t] = o[t] + (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t })(e), s[t].innerText = o[t], o[t]),
        u = (e, t) => {
            const n = document.createElement("img");
            n.src = `assets/cartas/${e}.png`, n.classList.add("carta"), l[t].append(n)
        },
        h = e => {
            let t = 0;
            do {
                const e = c();
                t = i(e, o.length - 1), u(e, o.length - 1)
            } while (t < e && e <= 21);
            (() => {
                const [e, t] = o;
                setTimeout(() => { t === e ? alert("Nadie gana!") : e > 21 ? alert("Computadora Gana") : t > 21 ? alert("Jugador gana") : alert("Computadora gana") }, 100)
            })()
        };
    return r.addEventListener("click", () => {
        const e = c(),
            t = i(e, 0);
        u(e, 0), t > 21 ? (console.warn("Lo siento mucho, perdiste"), r.disabled = !0, a.disabled = !0, r.disabled = !0, h(t)) : 21 === t && (console.warn("21, genial"), r.disabled = !0, r.disabled = !0, h(t))
    }), a.addEventListener("click", () => { r.disabled = !0, a.disabled = !0, h(o[0]) }), {
        nuevoJuego: (t = 2) => {
            e = d(), o = [];
            for (let e = 0; e < t; e++) o.push(0);
            s.forEach(e => e.innerText = 0), l.forEach(e => e.innerHTML = ""), r.disabled = !1, a.disabled = !1
        }
    }
})();