const canvas_obj = new function() {
    this.canvas = document.getElementsByClassName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.list_sign = '>)';

    this.normal_font_size = 18;
    this.bigger_font_size = this.normal_font_size + 20;

    this.rodo_clause_text_in_english = 'I hereby consent to my personal data being processed for the purpose of considering my application for the vacancy.';
    
    this.setFont = (weight, style, size, family) => {
        this.ctx.font = `${weight} ${style} ${size}px ${family}`;
        this.font_size = size;
    };
    this.setFont('normal', 'normal', this.normal_font_size, 'Arial');

    this.y = 0;
    this.y_break = 5;
    this.setY = (size) => {
        if(size === 'small') this.y = Math.ceil(this.y + (this.font_size + this.y_break) / 3);
        else this.y += this.font_size + this.y_break;
    }
    this.resetY = (point) => {
        if(point === 'y_starting_point') this.y = this.y_starting_point;
        else this.y = 0;
    }

    this.y_starting_point = 0;

    this.y_ending_point = 0;
    this.y_ending_point_wrapped = 0;

    this.break_sign = '===';
    this.setBreak = (text_structure) => {
        let x = 0;
        if(text_structure === 'wrapped') x = canvas_obj.width / 2 + 10;
        else x = 10;

        if(text_structure !== 'wrapped_first') {
            this.setY();
            this.ctx.fillText(this.break_sign, x, this.y);
        }
    }

    this.printHeading = (heading, text_structure) => {
        let x = 0;
        if(text_structure === 'wrapped') x = canvas_obj.width / 2 + 10;
        else x = 10;

        this.setY();

        this.setFont('normal', 'normal', canvas_obj.bigger_font_size, 'Copperplate');
        
        this.ctx.fillText(heading, x, this.y);

        this.setFont('normal', 'normal', canvas_obj.normal_font_size, 'Arial');

        this.setY('small');
    }
    this.printText = (label, text, text_structure) => {
        let x = 0;
        if(text_structure === 'wrapped') x = canvas_obj.width / 2 + 10;
        else x = 10;

        const x_step = 5;

        let start_of_printing = true;

        function textWidthCheckAndPrinting() {
            let words = [];

            if(canvas_obj.ctx.measureText(`${label}: ${text}`).width < canvas_obj.width / 2) {
                if(label === 'list_sign') {
                    canvas_obj.ctx.fillText(`${canvas_obj.list_sign} `, x, canvas_obj.y);
                    x += canvas_obj.ctx.measureText(`${canvas_obj.list_sign} `).width;
                }
                else if(label !== '#none'){
                    canvas_obj.setFont('bold', 'italic', canvas_obj.normal_font_size, 'Arial');
                    canvas_obj.ctx.fillText(`${label}: `, x, canvas_obj.y);
                    x += canvas_obj.ctx.measureText(`${label}: `).width;
                }

                if(text === cv_settings_bank.name_and_lastname) {
                    canvas_obj.setFont('normal', 'normal', canvas_obj.bigger_font_size, 'Times New Roman');

                    canvas_obj.ctx.textAlign = 'center';
                    canvas_obj.ctx.fillText(text, canvas_obj.width / 2, canvas_obj.y);
                }
                else {
                    canvas_obj.setFont('normal', 'normal', canvas_obj.normal_font_size, 'Arial');

                    canvas_obj.ctx.fillText(text, x, canvas_obj.y);
                }

                canvas_obj.setFont('normal', 'normal', canvas_obj.normal_font_size, 'Arial');
                canvas_obj.ctx.textAlign = 'start';
            }
            else if(canvas_obj.ctx.measureText(`${label}: ${text}`).width >= canvas_obj.width / 2) {
                let word_start = 0;
                for(let char_pos = 0; char_pos <= text.length; char_pos++) {
                    if(text[char_pos] === ' ') {
                        words.push(text.slice(word_start, char_pos));
                        char_pos++;
                        word_start = char_pos;
                    }
                    else if(char_pos === text.length) words.push(
                        text.slice(word_start, char_pos)
                    );
                }

                for(word_nr = 0; word_nr < words.length; word_nr++) {
                    if(start_of_printing === true) {
                        if(label === 'list_sign') {
                            canvas_obj.ctx.fillText(`${canvas_obj.list_sign} `, x, canvas_obj.y);
                            x += canvas_obj.ctx.measureText(`${canvas_obj.list_sign} `).width;
                        }
                        else if(label !== '#none') {
                            canvas_obj.setFont('bold', 'italic', canvas_obj.normal_font_size, 'Arial');
                            canvas_obj.ctx.fillText(`${label}: `, x, canvas_obj.y);
                            x += canvas_obj.ctx.measureText(`${label}: `).width;
                        }
                        
                        start_of_printing = false;
                        canvas_obj.setFont('normal', 'normal', canvas_obj.normal_font_size, 'Arial');
                    }

                    if(x + canvas_obj.ctx.measureText(words[word_nr]).width + x_step >= canvas_obj.width / 2 && x < canvas_obj.width / 2) {
                        canvas_obj.setY();
                        x = 10;
                        canvas_obj.ctx.fillText(words[word_nr], x, canvas_obj.y);

                        x += canvas_obj.ctx.measureText(words[word_nr]).width + x_step;
                    }
                    else if(x + canvas_obj.ctx.measureText(words[word_nr]).width + x_step >= canvas_obj.width && x >= canvas_obj.width / 2) {
                        canvas_obj.setY();
                        x = (canvas_obj.width / 2) + (x_step * 2);
                        canvas_obj.ctx.fillText(words[word_nr], x, canvas_obj.y);

                        x += canvas_obj.ctx.measureText(words[word_nr]).width + x_step;
                    }
                    else {
                        canvas_obj.ctx.fillText(words[word_nr], x, canvas_obj.y);

                        x += canvas_obj.ctx.measureText(words[word_nr]).width + x_step;
                    }
                }
            }
            else alert('State: something went wrong...');
        }

        this.setY();
        textWidthCheckAndPrinting();
    }

    this.printBarWithText = (text, bar_value, text_structure) => {
        let x = 0;
        if(text_structure === 'wrapped') x = canvas_obj.width / 2 + 10;
        else x = 10;

        this.setY();

        canvas_obj.setFont('bold', 'italic', canvas_obj.normal_font_size, 'Arial');

        this.ctx.fillText(`${text}: `, x, this.y);
        x += canvas_obj.ctx.measureText(`${text}: `).width;
        
        canvas_obj.setFont('normal', 'normal', canvas_obj.normal_font_size, 'Arial');

        const x_border_bar = x;
        const y_border_bar = this.y - 14;
        const x_container_bar = x + 2;
        const y_container_bar = this.y - 12;
        const y_level_bar = this.y - 10;
        const x_level_bar = x + 4;


        const border_bar_height = 18;
        const border_bar_width = 5 * 20 + 4 + 4;
        const container_bar_height = 14;
        const container_bar_width = 5 * 20 + 4;
        const level_bar_height = 10;
        const level_bar_width = bar_value * 20;

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(x_border_bar, y_border_bar, border_bar_width, border_bar_height);

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(x_container_bar, y_container_bar, container_bar_width, container_bar_height);

        this.ctx.fillStyle = 'black'; 
        this.ctx.fillRect(x_level_bar, y_level_bar, level_bar_width, level_bar_height);
    }

    this.printRODOClause = (text) => {
        x = 10;
        const x_step = 5;

        function textWidthCheckAndPrinting() {
            let words = [];

            if(canvas_obj.ctx.measureText(text).width < canvas_obj.width) {
                canvas_obj.ctx.fillText(text, x, canvas_obj.y);
            }
            else if(canvas_obj.ctx.measureText(text).width >= canvas_obj.width) {
                let word_start = 0;
                for(let char_pos = 0; char_pos <= text.length; char_pos++) {
                    if(text[char_pos] === ' ') {
                        words.push(text.slice(word_start, char_pos));
                        char_pos++;
                        word_start = char_pos;
                    }
                    else if(char_pos === text.length) words.push(
                        text.slice(word_start, char_pos)
                    );
                }

                for(word_nr = 0; word_nr < words.length; word_nr++) {
                    if(x + canvas_obj.ctx.measureText(words[word_nr]).width + x_step >= canvas_obj.width) {
                        canvas_obj.setY();
                        x = 10;
                        canvas_obj.ctx.fillText(words[word_nr], x, canvas_obj.y);

                        x += canvas_obj.ctx.measureText(words[word_nr]).width + x_step;
                    }
                    else {
                        canvas_obj.ctx.fillText(words[word_nr], x, canvas_obj.y);

                        x += canvas_obj.ctx.measureText(words[word_nr]).width + x_step;
                    }
                }
            }
            else alert('State: something went wrong...');
        }

        this.setY();
        textWidthCheckAndPrinting();
    }

    this.reloadCVContent = () => {
        this.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        this.loadCVContent.all();
    }

    this.loadCVContent = {
        personal_info: () => {
            this.resetY();
            this.setY();

            this.printText('#none', cv_settings_bank.name_and_lastname);
            this.setY('small');
            
            if(cvElementCheck('professional_title')) this.printText('Professional title', cv_settings_bank.professional_title);
            if(cvElementCheck('phone_number')) this.printText('Phone number', cv_settings_bank.phone_nr);
            if(cvElementCheck('email')) this.printText('E-mail', cv_settings_bank.email);
            if(cvElementCheck('media')) this.printText('Media', cv_settings_bank.media);
        },

        education: () => {
            if(cvModuleCheck('education')) {
                this.setBreak();

                this.y_starting_point = this.y;

                this.printHeading('Education');

                for(i = 0; i < cv_settings_bank.schools.length; i++) {
                    this.printText('School/University name', cv_settings_bank.schools[i].name);
                    this.printText('City', cv_settings_bank.schools[i].city);
                    this.printText('Start and end date', cv_settings_bank.schools[i].time);
                    this.printText('Additional info', cv_settings_bank.schools[i].additional_info);

                    if(i + 1 !== cv_settings_bank.schools.length) this.setY();
                }
            }
        },

        work_experience: () => {
            if(cvModuleCheck('work_experience')) {
                this.setBreak();

                this.printHeading('Work experience');

                for(i = 0; i < cv_settings_bank.work_experience.length; i++) {
                    this.printText('Job title', cv_settings_bank.work_experience[i].job_title);
                    this.printText('Employer', cv_settings_bank.work_experience[i].employer);
                    this.printText('City', cv_settings_bank.work_experience[i].city);
                    this.printText('Start and end date', cv_settings_bank.work_experience[i].time);
                    this.printText('Additional info', cv_settings_bank.work_experience[i].additional_info);

                    if(i + 1 !== cv_settings_bank.work_experience.length) this.setY();
                }
            }
        },

        certificates: () => {
            if(cvModuleCheck('certificates')) {
                this.setBreak();

                this.printHeading('Certificates');

                for(i = 0; i < cv_settings_bank.certificates.length; i++) {
                    this.printText('Certificate name', cv_settings_bank.certificates[i].certificate_name);
                    this.printText('Institution', cv_settings_bank.certificates[i].certificate_institution);
                    if(cv_settings_bank.certificates[i].time !== 'none') this.printText('Start and end date', cv_settings_bank.certificates[i].time);

                    if(i + 1 !== cv_settings_bank.certificates.length) this.setY();
                }

                this.y_ending_point = this.y;
            }
        },

        skills: () => {
            if(cvModuleCheck('skills')) {
                this.resetY('y_starting_point');

                this.setBreak('wrapped_first');

                this.printHeading('Skills', 'wrapped');

                for(i = 0; i < cv_settings_bank.skills.length; i++, 'wrapped') {
                    this.printText('Skill name', cv_settings_bank.skills[i].skill_name, 'wrapped');
                    if(cv_settings_bank.skills[i].skill_level !== 'none') this.printText('Skill level', cv_settings_bank.skills[i].skill_level, 'wrapped');
                    if(cv_settings_bank.skills[i].skill_level_bar !== 'none') this.printBarWithText('Skill level bar', cv_settings_bank.skills[i].skill_level_bar, 'wrapped');

                    if(i + 1 !== cv_settings_bank.skills.length) this.setY();
                }
            }
        },

        hobbies_and_interests: () => {
            if(cvModuleCheck('hobbies_and_interests')) {
                this.setBreak('wrapped');

                this.printHeading('Hobbies and interests', 'wrapped');

                for(i = 0; i < cv_settings_bank.hobbies_and_interests.length; i++) {
                    this.printText('list_sign', cv_settings_bank.hobbies_and_interests[i].hobby_name, 'wrapped');

                    if(i + 1 !== cv_settings_bank.hobbies_and_interests.length) this.setY();
                }
            }
        },

        languages: () => {
            if(cvModuleCheck('languages')) {
                this.setBreak('wrapped');

                this.printHeading('Languages', 'wrapped');

                for(i = 0; i < cv_settings_bank.languages.length; i++) {
                    this.printText('Language name', cv_settings_bank.languages[i].language_name, 'wrapped');
                    if(cv_settings_bank.languages[i].language_level !== 'none') this.printText('Language level', cv_settings_bank.languages[i].language_level, 'wrapped');
                    if(cv_settings_bank.languages[i].language_level_bar !== 'none') this.printBarWithText('Language level bar', cv_settings_bank.languages[i].language_level_bar, 'wrapped');

                    if(i + 1 !== cv_settings_bank.languages.length) this.setY();
                }

                this.y_ending_point_wrapped = this.y;
            }
        },

        rodo_clause: () => {
            if(this.y_ending_point >= this.y_ending_point_wrapped) this.y = this.y_ending_point
            else this.y = this.y_ending_point_wrapped;

            this.setY();

            this.printRODOClause(this.rodo_clause_text_in_english);
        },

        all: () => {
            this.loadCVContent.personal_info();
            this.loadCVContent.education();
            this.loadCVContent.work_experience();
            this.loadCVContent.certificates();
            this.loadCVContent.skills();
            this.loadCVContent.hobbies_and_interests();
            this.loadCVContent.languages();
            this.loadCVContent.rodo_clause();
        }
    };
};