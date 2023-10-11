const language_selector = document.getElementsByClassName('select_language')[0];
let used_language = 'eng';

const language_holder = new function() {
    this.update = () => {
        switch(used_language) {
            case 'eng':
                this.active_text = 'Active';
                this.inactive_text = 'Inactive';
                this.start_date_text = 'Start date';
                this.end_date_text = 'End date';
                
                this.add_school_text = 'Add school';
                this.add_work_text = 'Add work';
                this.add_certificate_text = 'Add certificate';
                this.add_skill_text = 'Add skill';
                this.add_hobby_or_interest_text = 'Add hobby/interest';
                this.add_language_text = 'Add language';

                this.rodo_clause_text =  'I hereby consent to my personal data being processed for the purpose of considering my application for the vacancy.';
                canvas_obj.rodo_clause = this.rodo_clause_text;

                this.personal_info_text = 'Personal info';
                this.name_and_lastname_text = 'Name and lastname';
                this.professional_title_text = 'Professional title';
                this.phone_number_text = 'Phone number';

                this.education_text = 'Education';
                this.school_name_text = 'School/University name';

                this.work_experience_text = 'Work experience';
                this.job_title_text = 'Job title';
                this.employer_text = 'Employer';

                this.certificates_text = 'Certificates';
                this.certificate_name_text = 'Certificate name';
                this.certificate_institution_text = 'Institution';

                this.skills_text = 'Skills';
                this.skill_name_text = 'Skill name';
                this.skill_level_text = 'Skill level';
                this.skill_level_bar_text = 'Skill level bar';
                this.skill_level_bar_span_text = 'Skill level bar (1-5)';

                this.hobbies_and_interests_text = 'Hobbies and interests';
                this.hobby_or_interest_name_text = 'Hobby/Interest';

                this.languages_text = 'Languages';
                this.language_name_text = 'Language name';
                this.language_level_text = 'Language level';
                this.language_level_bar_text = 'Language level bar';
                this.language_level_bar_span_text = 'Language level bar (1-5)';
                
                this.city_text = 'City';
                this.start_and_end_date_text = 'Start and end date';
                this.additional_info_text = 'Additional info';

                this.preview_cv_text = 'Preview CV';
                this.download_cv_text = 'Download CV';

                break;
            case 'pl':
                this.active_text = 'Aktywny';
                this.inactive_text = 'Nieaktywny';
                this.start_date_text = 'Data rozpoczęcia';
                this.end_date_text = 'Data zakończenia';

                this.add_school_text = 'Dodaj szkołę';
                this.add_work_text = 'Dodaj pracę';
                this.add_certificate_text = 'Dodaj certyfikat';
                this.add_skill_text = 'Dodaj umiejętność';
                this.add_hobby_or_interest_text = 'Dodaj hobby/zainteresowanie';
                this.add_language_text = 'Dodaj język';

                this.rodo_clause_text = 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporzędzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.';
                canvas_obj.rodo_clause = this.rodo_clause_text;

                this.personal_info_text = 'Informacje osobiste';
                this.name_and_lastname_text = 'Imię i nazwisko';
                this.professional_title_text = 'Tytuł zawodowy';
                this.phone_number_text = 'Numer telefonu';

                this.education_text = 'Wykształcenie';
                this.school_name_text = 'Nazwa szkoły';

                this.work_experience_text = 'Doświadczenie w pracy';
                this.job_title_text = 'Stanowisko';
                this.employer_text = 'Pracodawca';

                this.certificates_text = 'Certyfikaty';
                this.certificate_name_text = 'Nazwa certyfikatu';
                this.certificate_institution_text = 'Instytucja';

                this.skills_text = 'Umiejętności';
                this.skill_name_text = 'Nazwa umiejętności';
                this.skill_level_text = 'Poziom umiejętności';
                this.skill_level_bar_text = 'Pasek poziomu umiejętności';
                this.skill_level_bar_span_text = 'Pasek poziomu umiejętności (1-5)';

                this.hobbies_and_interests_text = 'Zainteresowania';
                this.hobby_or_interest_name_text = 'Hobby/Zainteresowanie';
                
                this.languages_text = 'Języki';
                this.language_name_text = 'Nazwa języka';
                this.language_level_text = 'Poziom języka';
                this.language_level_bar_text = 'Pasek poziomu języka';
                this.language_level_bar_span_text = 'Pasek poziomu języka (1-5)';
                
                this.city_text = 'Miasto';
                this.start_and_end_date_text = 'Data rozpoczęcia i zakończenia';
                this.additional_info_text = 'Dodatkowe informacje';

                this.preview_cv_text = 'Podgląd CV';
                this.download_cv_text = 'Pobierz CV';

                break;
        }
    }
}
language_holder.update();