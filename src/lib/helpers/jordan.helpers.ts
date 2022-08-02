export class JordanHelper {
    
    static async getSkills():Promise<Skill[]> {
        let skills:Skill[] = [
            {name:"HTML5/CSS3"},
            {name:"JAVASCRIPT"},
            {name:"STENCILJS"},
            {name:"VUEJS"},
            {name:"GRAPHQL"},
            {name:"MONGODB"},
            {name:"JASMINE"},
            {name:"AWS"},
            {name:"TERRAFORM"}
        ];

        return skills;
    }

    static async getExperience():Promise<Experience[]> {
        let experiences:Experience[] = [];
        let exp:Experience = {
            companyName: 'Expion',
            location: 'Raleigh, NC',
            position: 'Front End Developer',
            startDate: new Date('2012-01-02'),
            endDate: new Date('2016-8-01'),
            tasksPerformed: [
                "Created and assisted with yjr development Facebook apps using Jquery, HTML, CSS, ASP.NET",
                "Played a key role in the development, improvement and operation of Social Media Publishing Tool ",
                "Translated designs into social media apps for clients such as Applebees and Coca-cola"
            ]
        };
        experiences.push(exp);

        exp = {
            companyName: 'Sysomos',
            location: 'Raleigh, NC',
            position: 'Web Developer',
            startDate: new Date('2016-8-01'),
            endDate: new Date('2018-8-01'),
            tasksPerformed: [
                "Played a key role in the development, improvement, and operation of the Social Feed tool",
                "Worked as part of a team to implement features using AngularJS, HTML, CSS, C#, ASP.NET",
                "Created and assisted with development of a Social Media Feed used by Mondelez, Coca Cola, and other Fortune 500 Companies"
            ]
        };
        experiences.push(exp);

        exp = {
            companyName: 'Meltwater',
            location: 'Raleigh, NC',
            position: 'Full Stack Web Developer I - II',
            startDate: new Date('2018-8-01'),
            tasksPerformed: [
                "Created and assisted in creating web components for Meltwater Engage Publish product",
                "Collaborated with designers to create mocks for tools need for the Engage product",
                "Held meetings with Product owners to create roadmaps for release",
                "Gave presentations on new ideas and new coding standards",
                "Help train new developers"
            ]
        };
        experiences.push(exp);
        return experiences.reverse();
    }

    static async getEducation():Promise<Education> {
         return {
            schoolName: 'DeVry University',
            location: 'Orlando, Florida',
            startDate: new Date('2006-6-01'),
            endDate: new Date('2009-6-01'),
            degree: "BS in Game and Simulation Programming"
        }
    }
}

export interface Skill {
    name:string;
    description?:string;
    exampleLink?:string;
}

export interface Experience {
    companyName:string;
    location:string;
    position:string;
    startDate:Date;
    endDate?:Date;
    tasksPerformed:string[];
}

export interface Education {
    schoolName:string;
    location:string;
    degree:string;
    startDate:Date;
    endDate:Date;
}