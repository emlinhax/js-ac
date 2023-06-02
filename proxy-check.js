function check_proxy(f) {
    try {
        f.apply()
    } catch(e) {
        if(e.stack.includes("Object.apply")) {
            alert("hook detected on " + f.name)
        }
    }
}

check_proxy(requestAnimationFrame)
