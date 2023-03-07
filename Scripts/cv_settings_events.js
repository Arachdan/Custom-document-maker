function update_name_and_lastname_on_cv_canvas() {
    cv_settings_bank.name_and_lastname = document.getElementById('name_and_lastname_input').value;
    canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    canvas_obj.loadCVContent.all();
}

function update_professional_title_on_cv_canvas() {
    cv_settings_bank.professional_title = document.getElementById('professional_title_input').value;
    canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    canvas_obj.loadCVContent.all();
}

function update_phone_nr_on_cv_canvas() {
    cv_settings_bank.phone_nr = document.getElementById('phone_number_input').value;
    canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    canvas_obj.loadCVContent.all();
}

function update_email_on_cv_canvas() {
    cv_settings_bank.email = document.getElementById('email_input').value;
    canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
    canvas_obj.loadCVContent.all();
}

document.getElementById('name_and_lastname_input').addEventListener('input', update_name_and_lastname_on_cv_canvas);
document.getElementById('professional_title_input').addEventListener('input', update_professional_title_on_cv_canvas);
document.getElementById('phone_number_input').addEventListener('input', update_phone_nr_on_cv_canvas);
document.getElementById('email_input').addEventListener('input', update_email_on_cv_canvas);