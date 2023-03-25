class Certificate {
    constructor(certificate_name, certificate_institution, start_date, end_date) {
        this.certificate_name = certificate_name;
        this.certificate_institution = certificate_institution;
        this.start_date = start_date;
        this.end_date = end_date;
        if(cvElementCheck('certificate_time')) this.time = `${start_date} - ${end_date}`;
        else this.time = 'none';
    }
}