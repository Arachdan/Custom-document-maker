function activateCanvas() {
    canvas_obj.canvas.classList.replace('inactive_canvas', 'active_canvas');
}

function deactivateCanvas() {
    canvas_obj.canvas.classList.replace('active_canvas', 'inactive_canvas');
}