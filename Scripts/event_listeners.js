document.getElementsByClassName('select_document_type')[0].addEventListener('change', showCanvas);
for(let i = 0; i < document.getElementsByClassName('text_structure_button').length; i++) {
    document.getElementsByClassName('text_structure_button')[i].addEventListener('click', canvas_obj.reloadCVContent);
}

cv_professional_title_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_phone_number_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_email_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_media_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});