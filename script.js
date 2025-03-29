particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff0080", "#ff8c00", "#ffffff"] },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            out_mode: "out",
            straight: false,
        },
        line_linked: { enable: false },
    }
});

document.addEventListener("mousemove", (event) => {
    const hero = document.querySelector(".hero");
    let x = (window.innerWidth / 2 - event.pageX) / 150;
    let y = (window.innerHeight / 2 - event.pageY) / 150;
    hero.style.transform = `translate(${x}px, ${y}px)`;
});