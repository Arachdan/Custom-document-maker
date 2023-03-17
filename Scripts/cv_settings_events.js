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

function updateMediaOnCVCanvas() {
    cv_settings_bank.media = document.getElementById('media_input').value;
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

function addSkill() {
    function bestowDeletingSkillFunctionality() {
        for(i = 0; i < cv_settings_bank.skills.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_skill_button')[i].onclick = () => {
                document.getElementsByClassName('skill_list_item')[i_var].remove();
                cv_settings_bank.skills.splice(i_var, deletetion_range);
    
                bestowDeletingSkillFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let skill = new Skill(
        document.getElementById('skill_name_input').value,
        document.getElementById('skill_level_input').value,
        document.getElementById('skill_level_bar_range').value
    );

    cv_settings_bank.skills.push(skill);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('skills_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.skills.length; i++) {
        document.getElementsByClassName('skills_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal skill_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.skills[i].skill_name}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_skill_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingSkillFunctionality();

    document.getElementById('skill_name_input').value = '';
    document.getElementById('skill_level_input').value = '';
    document.getElementById('skill_level_bar_range').value = 3;
}

function addCertificate() {
    function bestowDeletingCertificateFunctionality() {
        for(i = 0; i < cv_settings_bank.certificates.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_certificate_button')[i].onclick = () => {
                document.getElementsByClassName('certificate_list_item')[i_var].remove();
                cv_settings_bank.certificates.splice(i_var, deletetion_range);
    
                bestowDeletingCertificateFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let certificate = new Certificate(
        document.getElementById('certificate_name_input').value,
        document.getElementById('certificate_institution_input').value,
        document.getElementById('certificate_start_time_input').value,
        document.getElementById('certificate_end_time_input').value
    );

    cv_settings_bank.certificates.push(certificate);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('certificates_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.certificates.length; i++) {
        document.getElementsByClassName('certificates_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal certificate_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.certificates[i].certificate_name}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_certificate_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingCertificateFunctionality();

    document.getElementById('certificate_name_input').value = '';
    document.getElementById('certificate_institution_input').value = '';
    document.getElementById('certificate_start_time_input').value = '';
    document.getElementById('certificate_end_time_input').value = '';
}

function addHobby() {
    function bestowDeletingHobbyFunctionality() {
        for(i = 0; i < cv_settings_bank.hobbies_and_interests.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_hobby_button')[i].onclick = () => {
                document.getElementsByClassName('hobby_list_item')[i_var].remove();
                cv_settings_bank.hobbies_and_interests.splice(i_var, deletetion_range);
    
                bestowDeletingHobbyFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let hobby = new Hobby(
        document.getElementById('hobby_or_interest_name_input').value
    );

    cv_settings_bank.hobbies_and_interests.push(hobby);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('hobbies_and_interests_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.hobbies_and_interests.length; i++) {
        document.getElementsByClassName('hobbies_and_interests_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal hobby_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.hobbies_and_interests[i].hobby_name}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_hobby_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingHobbyFunctionality();

    document.getElementById('hobby_or_interest_name_input').value = '';
}

function addLanguage() {
    function bestowDeletingLanguageFunctionality() {
        for(i = 0; i < cv_settings_bank.languages.length; i++) {
            let i_var = i;
            const deletetion_range = 1;
            document.getElementsByClassName('delete_language_button')[i].onclick = () => {
                document.getElementsByClassName('language_list_item')[i_var].remove();
                cv_settings_bank.languages.splice(i_var, deletetion_range);
    
                bestowDeletingLanguageFunctionality();
            };
        }

        canvas_obj.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        canvas_obj.loadCVContent.all();
    }

    let language = new Language(
        document.getElementById('language_name_input').value,
        document.getElementById('language_level_input').value,
        document.getElementById('language_level_bar_range').value
    );

    cv_settings_bank.languages.push(language);

    canvas_obj.reloadCVContent();

    document.getElementsByClassName('languages_list')[0].innerHTML = '';
    for(i = 0; i < cv_settings_bank.languages.length; i++) {
        document.getElementsByClassName('languages_list')[0].innerHTML += (`
            <ul class="list-group list-group-horizontal language_list_item mb-1">
                <li class="list-group-item w-75">
                    <big>${cv_settings_bank.languages[i].language_name}</big>
                </li>
                <li class="list-group-item w-25 delete_button_container">
                    <button type="button" class="btn-close delete_language_button btn btn-danger" aria-label="Close"></button>
                </li>
            </ul>
        `);
    }

    bestowDeletingLanguageFunctionality();

    document.getElementById('language_name_input').value = '';
    document.getElementById('language_level_input').value = '';
    document.getElementById('language_level_bar_range').value = 3;
}

document.getElementById('name_and_lastname_input').addEventListener('input', updateNameAndLastnameOnCVCanvas);
document.getElementById('professional_title_input').addEventListener('input', updateProfessionalTitleOnCVCanvas);
document.getElementById('phone_number_input').addEventListener('input', updatePhoneNrOnCVCanvas);
document.getElementById('email_input').addEventListener('input', updateEmailOnCVCanvas);
document.getElementById('media_input').addEventListener('input', updateMediaOnCVCanvas);

function allowActivationAndDeactivationOfAModuleInCV(module_name) {
    const check_button = document.getElementById(`${module_name}_check_button`);
    const check_button_label = document.getElementById(`${module_name}_check_button_label`);

    check_button.addEventListener('change', () => {
        if(check_button.checked === true) {
            check_button_label.innerText = 'Active';
        }
        else {
            check_button_label.innerText = 'Inactive';
        }
    });

    check_button.addEventListener('click', () => {
        canvas_obj.reloadCVContent();
    });
}

document.getElementsByClassName('add_school_button')[0].addEventListener('click', addSchool);
document.getElementsByClassName('add_work_button')[0].addEventListener('click', addWork);
document.getElementsByClassName('add_skill_button')[0].addEventListener('click', addSkill);
document.getElementsByClassName('add_certificate_button')[0].addEventListener('click', addCertificate);
document.getElementsByClassName('add_hobby_or_interest_button')[0].addEventListener('click', addHobby);
document.getElementsByClassName('add_language_button')[0].addEventListener('click', addLanguage);