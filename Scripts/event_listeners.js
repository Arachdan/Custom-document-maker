document.getElementsByClassName('select_document_type')[0].addEventListener('change', showCanvas);

cv_professional_title_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_phone_number_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_email_checkbox.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});

cv_education_check_button.addEventListener('click', () => {
    canvas_obj.reloadCVContent();
});