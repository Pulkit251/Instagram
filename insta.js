const pup = require('puppeteer');
let id = "jackiechan4177";
let pass = "insta@com";
let name = "MS Dhoni";
let tab;
let comment = "The Best Captain- CAPTAIN COOL";
async function main(){
    let browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    })

    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector("input[name='username']",{visible: true});
    await tab.type("input[name='username']",id);
    await tab.type("input[name='password']",pass);
    await tab.click(".sqdOP.L3NKy.y3zKF");
    await tab.waitForSelector(".q9xVd",{visible: true});
    await tab.click(".q9xVd");
    await tab.waitForSelector(".aOOlW.HoLwm",{visible: true});
    await tab.click(".aOOlW.HoLwm");
    await tab.waitForSelector(".eyXLr.wUAXj",{visible: true});
    await tab.click(".eyXLr.wUAXj");
    await tab.type(".XTCLo.x3qfX",name);
    await tab.waitForSelector(".-qQT3",{visible: true});    
    let url = await tab.$$(".-qQT3",{delay:3000});
    await url[0].click({delay: 100});
   
    await tab.waitForSelector(".vtbgv",{visible: true}); 
    await tab.waitForSelector("._9AhH0",{visible: true});


    let pic = await tab.$$("._9AhH0");
    await pic[0].click({delay: 100});
    let i = 0;
    while(i < 10){
        await tab.waitForSelector(".fr66n button",{visible: true});
        await tab.click(".fr66n button");   
        await tab.click("._15y0l button",{delay: 500});
        await tab.type(".Ypffh",comment);
        await tab.waitForSelector(".sqdOP.yWX7d.y3zKF",{visible: true});        
        await tab.click("button[type='submit']",{delay: 1000});        
        await tab.waitForSelector("._65Bje.coreSpriteRightPaginationArrow",{visible: true});
        await tab.click("._65Bje.coreSpriteRightPaginationArrow"); 
        i++;
    }        
}   
main();

    