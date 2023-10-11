function chooseLanguage() {
    switch(language_selector.value) {
        case 'eng':
            used_language = language_selector.value;
            language_holder.update();
            canvas_obj.reloadCVContent();

            document.getElementById('choose_the_language_field').innerText = 'Choose the language';
            document.getElementById('select_language_option_one').innerText = 'English';
            document.getElementById('select_language_option_two').innerText = 'Polish';

            document.getElementById('choose_the_type_of_document_you_want_to_create_field').innerText = 'Choose the type of document you want to create';
            document.getElementById('select_document_type_option_one').innerText = 'Select';
            document.getElementById('select_document_type_option_two').innerText = 'CV';

            break;
        case 'pl':
            used_language = language_selector.value;
            language_holder.update();
            canvas_obj.reloadCVContent();

            document.getElementById('choose_the_language_field').innerText = 'Wybierz język';
            document.getElementById('select_language_option_one').innerText = 'Angielski';
            document.getElementById('select_language_option_two').innerText = 'Polski';

            document.getElementById('choose_the_type_of_document_you_want_to_create_field').innerText = 'Wybierz rodzaj dokumentu, który chcesz stworzyć';
            document.getElementById('select_document_type_option_one').innerText = 'Wybierz';
            document.getElementById('select_document_type_option_two').innerText = 'CV';
            
            break;
        default:
            alert('Some error occured!');
            break;
    }

    

    document.getElementById('personal_info_field').innerText = language_holder.personal_info_text;
    document.getElementById('name_and_lastname_input_label').innerText = language_holder.name_and_lastname_text;
    document.getElementById('professional_title_input_label').innerText = language_holder.professional_title_text;
    document.getElementById('phone_number_input_label').innerText = language_holder.phone_number_text;
    document.getElementById('email_input_label').innerText = 'E-mail';
    document.getElementById('media_input_label').innerText = 'Media';
    
    document.getElementById('education_field').innerText = language_holder.education_text;
    if(document.getElementById('education_check_button').checked === true) document.getElementById('education_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('education_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('school_name_input_label').innerText = language_holder.school_name_text;
    document.getElementById('school_city_input_label').innerText = language_holder.city_text;
    document.getElementById('school_start_time_input_label').innerText = language_holder.start_date_text;
    document.getElementById('school_end_time_input_label').innerText = language_holder.end_date_text;
    document.getElementById('school_additional_info_input_label').innerText = language_holder.additional_info_text;
    document.getElementsByClassName('add_school_button')[0].innerText = language_holder.add_school_text;

    document.getElementById('work_experience_field').innerText = language_holder.work_experience_text;
    if(document.getElementById('work_experience_check_button').checked === true) document.getElementById('work_experience_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('work_experience_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('job_title_input_label').innerText = language_holder.job_title_text;
    document.getElementById('employer_input_label').innerText = language_holder.employer_text;
    document.getElementById('work_city_input_label').innerText = language_holder.city_text;
    document.getElementById('work_start_time_input_label').innerText = language_holder.start_date_text;
    document.getElementById('work_end_time_input_label').innerText = language_holder.end_date_text;
    document.getElementById('work_additional_info_input_label').innerText = language_holder.additional_info_text;
    document.getElementsByClassName('add_work_button')[0].innerText = language_holder.add_work_text;

    document.getElementById('certificates_field').innerText = language_holder.certificates_text;
    if(document.getElementById('certificates_check_button').checked === true) document.getElementById('certificates_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('certificates_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('certificate_name_input_label').innerText = language_holder.certificate_name_text;
    document.getElementById('certificate_institution_input_label').innerText = language_holder.certificate_institution_text;
    document.getElementById('certificate_start_time_input_label').innerText = language_holder.start_date_text;
    document.getElementById('certificate_end_time_input_label').innerText = language_holder.end_date_text;
    document.getElementsByClassName('add_certificate_button')[0].innerText = language_holder.add_certificate_text;

    document.getElementById('skills_field').innerText = language_holder.skills_text;
    if(document.getElementById('skills_check_button').checked === true) document.getElementById('skills_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('skills_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('skill_name_input_label').innerText = language_holder.skill_name_text;
    document.getElementById('skill_level_input_label').innerText = language_holder.skill_level_text;
    document.getElementById('skill_level_bar_span').innerText = language_holder.skill_level_bar_span_text;
    document.getElementsByClassName('add_skill_button')[0].innerText = language_holder.add_skill_text;

    document.getElementById('hobbies_field').innerText = language_holder.hobbies_and_interests_text;
    if(document.getElementById('hobbies_and_interests_check_button').checked === true) document.getElementById('hobbies_and_interests_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('hobbies_and_interests_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('hobby_or_interest_name_input_label').innerText = language_holder.hobby_or_interest_name_text;
    document.getElementsByClassName('add_hobby_or_interest_button')[0].innerText = language_holder.add_hobby_or_interest_text;

    document.getElementById('languages_field').innerText = language_holder.languages_text;
    if(document.getElementById('languages_check_button').checked === true) document.getElementById('languages_check_button_label').innerText = language_holder.active_text;
    else document.getElementById('languages_check_button_label').innerText = language_holder.inactive_text;
    document.getElementById('language_name_input_label').innerText = language_holder.language_name_text;
    document.getElementById('language_level_input_label').innerText = language_holder.language_level_text;
    document.getElementById('language_level_bar_span').innerText = language_holder.language_level_bar_span_text;
    document.getElementsByClassName('add_language_button')[0].innerText = language_holder.add_language_text;

    document.getElementsByClassName('preview_cv_button')[0].innerText = language_holder.preview_cv_text;
    document.getElementsByClassName('download_cv_button')[0].innerText = language_holder.download_cv_text;
}
chooseLanguage();