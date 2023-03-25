const preview_cv_button = document.getElementsByClassName('preview_cv_button')[0];

preview_cv_button.addEventListener('click', previewCV);

function previewCV() {
    const cv_preview = canvas_obj.canvas.toDataURL('image/pdf', 1);

    window.open(cv_preview);
}