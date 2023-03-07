const canvas_obj = new function() {
    this.canvas = document.getElementsByClassName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.setFont = (size, style) => {
        this.ctx.font = `${size}px ${style}`;
    };
    this.setFont(30, 'Arial');
    this.loadCVContent = {
        personal_info: () => {
            this.ctx.fillText(`First name and last name: ${cv_settings_bank.name_and_lastname}`, 10, 50);
            this.ctx.fillText(`Professional title: ${cv_settings_bank.professional_title}`, 10, 100);
            this.ctx.fillText(`Phone number: ${cv_settings_bank.phone_nr}`, 10, 150);
            this.ctx.fillText(`E-mail: ${cv_settings_bank.email}`, 10, 200);
        },
        all: () => {
            this.loadCVContent.personal_info();
        }
    };
};