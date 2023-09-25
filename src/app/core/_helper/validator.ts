export class Validator {
    TEXT: any = "^[dA-Za-z]+[A-Za-z ]*";
    TEXT_NUMBERS: any = "^[dA-Za-z0-9]+[A-Za-z0-9 ]*";
    TEXT_NUMBERS_SPECIAL: any = /^[a-zA-Z0-9\n@,-:;"',+<>.?*!/|{}#$%^&()=-_ ]*$/
    SEARCH_EMAIL: any = "[A-Za-z0-9@.]*";
    NUMBERS: any = "^[0-9]*$";
    EMAIL: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]*/;
    MOBILE: any = /^[0-9]+$/;
    OTP: any = "^[0-9]{4,10}$";
    ZIPCODE: any = "^[0-9]{5}(?:-[0-9]{4})?$";
    URL: any = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
    PASSWORD: any = /^(?![0-9_])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#^!%*?&])[A-Za-z\d@$^#!%*?&]{8,}$/;
    LINKEDINURL: any = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
    FACEBOOKURL: any = /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
    INSTAGRAM: any = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
    YOUTUBEURL: any = '((http|https):\/\/|)(www\.|)youtube\.com\/(channel\/|user\/)[a-zA-Z0-9_-]{1,}';
    TWITTERURL: any = "https://twitter.com/(#!/)?[a-zA-Z0-9_]{1,15}"; //rejects emoji
    MINMAXLENGTH: any = "^[0-9]{1,7}$";
    SUMMARY: any = "^[A-Za-z0-9!`@#$%*.,\"^&()-_{}|~ \n']*$";
    SALARY: any = /^([1-9][0-9]{0,7})(,[0-9]{3})*$/;
    WITHOUTZERO: any = /^([1-9][0-9]{0,10})(,[0-9]{3})*$/;
    CITYSTATE: any = /^[a-zA-Z\s]+\,?[a-zA-Z\s]+$/;
    COVERLETTER: any = /^([\w])([^0-9_a-zA-Z%$#\s])?/;
    NUMBER_PLUS_MINUS: any = "^[0-9\\s+-]+$";
    NUMBER_PERCENTAGE: any = "^[0-9\\s%]+$";
}
