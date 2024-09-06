const paddle1 = {
    x: 0,
    y: 0,
    w: 16,
    h: 128,
}

const paddle2 = {
    x: 0,
    y: 0,
    w: 16,
    h: 128,
}

const ball = {
    x: 0,
    y: 0,
    r: 8,
}

const canvas = document.createElement("canvas")
    canvas.style.backgroundColor = "black"
document.body.appendChild(canvas)

function onResize() {
    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = canvas.getBoundingClientRect().height
}

new ResizeObserver(onResize).observe(canvas)
