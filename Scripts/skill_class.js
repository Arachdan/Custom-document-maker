class Skill {
    constructor(skill_name, skill_level, skill_level_bar) {
        this.skill_name = skill_name;

        if(cvElementCheck('skill_level')) this.skill_level = skill_level;
        else this.skill_level = 'none';

        if(cvElementCheck('skill_level_bar')) this.skill_level_bar = skill_level_bar;
        else this.skill_level_bar = 'none';
    }
}