const cv_professional_title_checkbox = document.getElementsByClassName('professional_title_checkbox')[0];
const cv_phone_number_checkbox = document.getElementsByClassName('phone_number_checkbox')[0];
const cv_email_checkbox = document.getElementsByClassName('email_checkbox')[0];

function cvProfessionalTitleCheck() {
    if(cv_professional_title_checkbox.checked === true) return true;
    else return false;
}

function cvPhoneNrCheck() {
    if(cv_phone_number_checkbox.checked === true) return true;
    else return false;
}

function cvEmailCheck() {
    if(cv_email_checkbox.checked === true) return true;
    else return false;
}

function cvModuleCheck(module_name) {
    if(document.getElementById(`${module_name}_check_button`).checked === true) return true;
    else return false;
}

allowActivationAndDeactivationOfAModuleInCV('education');
allowActivationAndDeactivationOfAModuleInCV('work_experience');
allowActivationAndDeactivationOfAModuleInCV('skills');