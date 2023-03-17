class Language {
    constructor(language_name, language_level, language_level_bar) {
        this.language_name = language_name;

        if(cvElementCheck('language_level')) this.language_level = language_level;
        else this.language_level = 'none';

        if(cvElementCheck('language_level_bar')) this.language_level_bar = language_level_bar;
        else this.language_level_bar = 'none';
    }
}