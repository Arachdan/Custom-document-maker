const canvas_obj = new function() {
    this.canvas = document.getElementsByClassName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.setFont = (size, style) => {
        this.ctx.font = `${size}px ${style}`;
        this.font_size = size;
    };
    this.setFont(30, 'Arial');

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

        this.setFont(50, 'Copperplate');
        
        this.ctx.fillText(heading, 10, this.y);

        this.setFont(30, 'Arial');

        this.setY('small');
    }
    this.printText = (label, text) => {
        this.setY();
        this.ctx.fillText(`${label}: ${text}`, 10, this.y);
    }
    this.loadCVContent = {
        personal_info: () => {
            this.resetY();

            this.printText('First name and last name', cv_settings_bank.name_and_lastname);
            this.printText('Professional title', cv_settings_bank.professional_title);
            this.printText('Phone number', cv_settings_bank.phone_nr);
            this.printText('E-mail', cv_settings_bank.email);

            this.setBreak();
        },

        education: () => {
            this.printHeading('Education');

            for(i = 0; i < cv_settings_bank.schools.length; i++) {
                this.printText('School/University name', cv_settings_bank.schools[i].name);
                this.printText('City', cv_settings_bank.schools[i].city);
                this.printText('Start and end date', cv_settings_bank.schools[i].time);
                this.printText('Additional info', cv_settings_bank.schools[i].additional_info);

                this.setY();
            }
        },

        all: () => {
            this.loadCVContent.personal_info();
            this.loadCVContent.education();
        }
    };
};