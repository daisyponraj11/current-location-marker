export interface IRegistration {
    FirstName: string;
    LastName: string;
    EmailID: string;
    Password: string;
    GmailID: string;
    LinkedInID: string;
    ProfileImage ?:string;
    ReferUser:string;
}

export interface ILogin {
    EmailID: string;
    Password: string;
    GmailID: string;
    LinkedInID: string;
}
