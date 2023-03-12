function updateNameAndLastnameOnCVCanvas() {
    cv_settings_bank.name_and_lastname = document.getElementById('name_and_lastname_input').value;
    canvas_obj.reloadCVContent();
}

function updateProfessionalTitleOnCVCanvas() {
    cv_settings_bank.professional_title = document.getElementById('professional_title_input').value;
    canvas_obj.reloadCVContent();
}

function updatePhoneNrOnCVCanvas() {
    cv_settings_bank.phone_nr = document.getElementById('phone_number_input').value;
    canvas_obj.reloadCVContent();
}

function updateEmailOnCVCanvas() {
    cv_settings_bank.email = document.getElementById('email_input').value;
    canvas_obj.reloadCVContent();
}

function addSchool() {
    function bestowDeletingSchoolFunctionality() {
        for(i = 0; i < cv_settings_bank.schools.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_school_button')[i].onclick = () => {
                document.getElementsByClassName('school_list_item')[i_var].remove();
                cv_settings_bank.schools.splice(i_var, deletetion_range);
    
                bestowDeletingSchoolFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let school = new School(
        document.getElementById('school_name_input').value,
        document.getElementById('school_city_input').value,
        document.getElementById('school_start_time_input').value,
        document.getElementById('school_end_time_input').value,
        document.getElementById('school_additional_info_input').value
    );

    cv_settings_bank.schools.push(school);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('schools_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.schools.length; i++) {
        document.getElementsByClassName('schools_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal school_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.schools[i].name}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_school_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingSchoolFunctionality();

    document.getElementById('school_name_input').value = '';
    document.getElementById('school_city_input').value = '';
    document.getElementById('school_start_time_input').value = '';
    document.getElementById('school_end_time_input').value = '';
    document.getElementById('school_additional_info_input').value = '';
}

function addWork() {
    function bestowDeletingWorkFunctionality() {
        for(i = 0; i < cv_settings_bank.work_experience.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_work_button')[i].onclick = () => {
                document.getElementsByClassName('work_list_item')[i_var].remove();
                cv_settings_bank.work_experience.splice(i_var, deletetion_range);
    
                bestowDeletingWorkFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let work = new Work(
        document.getElementById('job_title_input').value,
        document.getElementById('employer_input').value,
        document.getElementById('work_city_input').value,
        document.getElementById('work_start_time_input').value,
        document.getElementById('work_end_time_input').value,
        document.getElementById('work_additional_info_input').value
    );

    cv_settings_bank.work_experience.push(work);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('works_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.work_experience.length; i++) {
        document.getElementsByClassName('works_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal work_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.work_experience[i].job_title}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_work_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingWorkFunctionality();

    document.getElementById('job_title_input').value = '';
    document.getElementById('employer_input').value = '';
    document.getElementById('work_city_input').value = '';
    document.getElementById('work_start_time_input').value = '';
    document.getElementById('work_end_time_input').value = '';
    document.getElementById('work_additional_info_input').value = '';
}

document.getElementById('name_and_lastname_input').addEventListener('input', updateNameAndLastnameOnCVCanvas);
document.getElementById('professional_title_input').addEventListener('input', updateProfessionalTitleOnCVCanvas);
document.getElementById('phone_number_input').addEventListener('input', updatePhoneNrOnCVCanvas);
document.getElementById('email_input').addEventListener('input', updateEmailOnCVCanvas);

const cv_education_check_button_label = document.getElementById('education_check_button_label');
cv_education_check_button.addEventListener('change', () => {
    if(cv_education_check_button.checked === true) {
        cv_education_check_button_label.innerText = 'Active';
    }
    else {
        cv_education_check_button_label.innerText = 'Inactive';
    }
});

const cv_work_experience_check_button_label = document.getElementById('work_experience_check_button_label');
cv_work_experience_check_button.addEventListener('change', () => {
    if(cv_work_experience_check_button.checked === true) {
        cv_work_experience_check_button_label.innerText = 'Active';
    }
    else {
        cv_work_experience_check_button_label.innerText = 'Inactive';
    }
});

document.getElementsByClassName('add_school_button')[0].addEventListener('click', addSchool);
document.getElementsByClassName('add_work_button')[0].addEventListener('click', addWork);