
export default class JobModel{
    constructor(id,jobcategory,jobdesignation,joblocation,companyname,salary,applyby,skillsrequired,numberofopenings,jobposted,applicants){
        this.id=id;
        this.jobcategory=jobcategory;
        this.jobdesignation=jobdesignation;
        this.joblocation=joblocation;
        this.companyname=companyname;
        this.salary=salary;
        this.applyby=applyby;
        this.skillsrequired=skillsrequired;
        this.numberofopenings=numberofopenings;
        this.jobposted=jobposted;
        this.applicants=Array.isArray(applicants)?applicants:[applicants];
    }

    static getAllJobs(){
        return jobs;
    }

    static addJob(jobcategory,
        jobdesignation,
        joblocation,
        companyname,
        salary,
        numberofopenings,
        skillsrequired,
        applyby){
        const job=new JobModel(jobs.length+1,jobcategory,jobdesignation,joblocation,companyname,salary,applyby,skillsrequired,numberofopenings,new Date().toISOString(),[]);
        jobs.push(job);        
        
    }
    static getJobById(id){
        return jobs.find(job=>job.id==id) ;
    }

    static deleteJobById(id){
       const index= jobs.findIndex(job=>job.id==id);
        jobs.splice(index,1);
        
    
    }
    static updateJob(jobObj){
        const index = jobs.findIndex(job => job.id == jobObj.id);
    const updatedJob = { ...jobObj }; 
    updatedJob.skillsrequired = Array.isArray(jobObj.skillsrequired) ? jobObj.skillsrequired : [jobObj.skillsrequired];
    updatedJob.applicants=[];
    updatedJob.jobposted=new Date().toISOString()
    jobs[index] = updatedJob;
    console.log("this is job array",jobs);
    }

    static applytojob(applicantObj,resume,jobid){
        
       const job=jobs.find(job=>job.id==jobid);
       if(job){
       const applicant=new Applicant(job.applicants.length+1,applicantObj.applicantName,applicantObj.email,applicantObj.contact,resume)
       job.applicants.push(applicant);
       console.log("added",job.applicants)
        return true;
       }
       return false;
    }

    static sendApplicantsbyJobId(id){
        const job=jobs.find(job=>job.id==id);
        if(job){
            return job.applicants;
        }else{
            return false
        }
    }

}

class Applicant{
    constructor(applicantid,applicantName,email,contact,resume){
        this.applicantid=applicantid;
        this.applicantName=applicantName;
        this.email=email;
        this.contact=contact;
        this.resume=resume;
    }
}


var jobs = [
    new JobModel(1, "SDE oppertunity in GURGAON HR IND REMOTE at Coding Ninjas", "Tech SDE", "Gurgaon HR IND Remote", "Coding Ninjas", "14-20 Lpa", "2024-01-30", ["React", "Angular", "Node Js", "SQL", "JS"], 5, "2021-01-25", []),

    new JobModel(2, "Angular Developer oppertunity in PUNE IND ON-SITE at Google", "Tech SDE", "Surat Remote", "Google", "20 - 25 Lpa", "2024-01-02", ["c++", "React", "Node Js", "SQL", "JS"], 11, "2021-01-25", []),
    new JobModel(3, "SDE oppertunity in BANGALORE IND at Juspay", "Tech Full Stack Developer", "Surat Remote", "Juspay", "15-17 Lpa", "2024-01-30", ["React", "Angular", "Node Js", "MongoDB", "JS"], 13, "2021-01-25", []),
    new JobModel(4, "Simplilearn", "Tech Full Stack Developer", "Surat Remote", "Simplilearn", "10-12 Lpa", "2024-01-20", ["React", "Angular", "Node Js", "MongoDB", "JS"], 13, "2021-01-25", [],),
    new JobModel(5, "Simplilearn", "Tech Full Stack Developer", "Mumbai", "Simplilearn", "17-19 Lpa", "2024-01-20", ["React", "Node Js", "MongoDB", "JS"], 7, "2021-01-25", [],),
];

