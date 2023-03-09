let str1 = 'Uwielbiam JavaScript';
let str2 = 'Jestem świetnym programistą';

function str1str2(str1, str2) {
    if (str1.length > str2.length) {
        console.log(`${str1} `);
    }
    else {
        console.log(`${str2}`);
    }
}

str1str2(str1, str2);