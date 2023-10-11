document.getElementsByClassName('select_document_type')[0].addEventListener('change', showCanvas);

document.getElementsByClassName('select_language')[0].addEventListener('change', chooseLanguage);

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