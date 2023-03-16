const canvas_obj = new function() {
    this.canvas = document.getElementsByClassName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.setFont = (weight, style, size, family) => {
        this.ctx.font = `${weight} ${style} ${size}px ${family}`;
        this.font_size = size;
    };
    this.setFont('normal', 'normal', 30, 'Arial');

    this.y = 0;
    this.y_break = 5;
    this.setY = (size) => {
        if(size === 'small') this.y = Math.ceil(this. y + (this.font_size + this.y_break) / 3);
        else this.y += this.font_size + this.y_break;
    }
    this.resetY = () => this.y = 0;

    this.break_sign = '===';
    this.setBreak = () => {
        this.setY();
        this.ctx.fillText(this.break_sign, 10, this.y);
    }

    this.printHeading = (heading) => {
        this.setY();

        this.setFont('normal', 'normal', 50, 'Copperplate');
        
        this.ctx.fillText(heading, 10, this.y);

        this.setFont('normal', 'normal', 30, 'Arial');

        this.setY('small');
    }
    this.printText = (label, text) => {
        let x = 10;
        const x_step = 10;

        let start_of_printing = true;

        function textWidthCheckAndPrinting() {
            let words = [];

            if(canvas_obj.ctx.measureText(`${label}: ${text}`).width < canvas_obj.width) {
                canvas_obj.setFont('bold', 'italic', 30, 'Arial');

                canvas_obj.ctx.fillText(`${label}: `, x, canvas_obj.y);
                x += canvas_obj.ctx.measureText(`${label}: `).width;

                canvas_obj.setFont('normal', 'normal', 30, 'Arial');

                canvas_obj.ctx.fillText(text, x, canvas_obj.y);
            }
            else if(canvas_obj.ctx.measureText(`${label}: ${text}`).width >= canvas_obj.width) {
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
                        canvas_obj.setFont('bold', 'italic', 30, 'Arial');
                        canvas_obj.ctx.fillText(`${label}: `, x, canvas_obj.y);
                        start_of_printing = false;
                        x += canvas_obj.ctx.measureText(`${label}: `).width;
                        canvas_obj.setFont('normal', 'normal', 30, 'Arial');
                    }

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

        if(label === '#none') {
            this.setY();
            this.ctx.fillText(text, x, this.y);
        }
        else {
            this.setY();
            textWidthCheckAndPrinting();
        }
    }

    this.printBarWithText = (text, bar_value) => {
        let x = 10;

        this.setY();

        canvas_obj.setFont('bold', 'italic', 30, 'Arial');

        this.ctx.fillText(`${text}: `, x, this.y);
        x += canvas_obj.ctx.measureText(`${text}: `).width;
        
        canvas_obj.setFont('normal', 'normal', 30, 'Arial');

        const x_border_bar = x - 4;
        const y_border_bar = this.y - 17;
        const x_container_bar = x - 2;
        const y_container_bar = this.y - 15;
        const y_level_bar = this.y - 13;
        const x_level_bar = x;


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

    this.reloadCVContent = () => {
        this.ctx.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
        this.loadCVContent.all();
    }

    this.loadCVContent = {
        personal_info: () => {
            this.resetY();

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

        skills: () => {
            if(cvModuleCheck('skills')) {
                this.setBreak();

                this.printHeading('Skills');

                for(i = 0; i < cv_settings_bank.skills.length; i++) {
                    this.printText('Skill name', cv_settings_bank.skills[i].skill_name);
                    if(cv_settings_bank.skills[i].skill_level !== 'none') this.printText('Skill level', cv_settings_bank.skills[i].skill_level);
                    if(cv_settings_bank.skills[i].skill_level_bar !== 'none') this.printBarWithText('Skill level bar', cv_settings_bank.skills[i].skill_level_bar);

                    if(i + 1 !== cv_settings_bank.skills.length) this.setY();
                }
            }
        },

        all: () => {
            this.loadCVContent.personal_info();
            this.loadCVContent.education();
            this.loadCVContent.work_experience();
            this.loadCVContent.skills();
        }
    };
};