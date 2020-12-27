let calcAge = (birthday) => {
    birthday = birthday.split(".");
    birthday = new Date(birthday[0], birthday[1], birthday[2]);
    let today = new Date();
    let diff = today - birthday;
    console.log(parseInt(diff / 1000 / 60 / 60 / 24 / 365) + 1 + "살");
}


const BIRTHDAY = '1992.10.14';
const age = calcAge(BIRTHDAY);