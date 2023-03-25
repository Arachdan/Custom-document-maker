class School {
    constructor(name, city, start_date, end_date, additional_info) {
        this.name = name;
        this.city = city;
        this.start_date = start_date;
        this.end_date = end_date;
        this.time = `${start_date} - ${end_date}`;
        this.additional_info = additional_info;
    }
}