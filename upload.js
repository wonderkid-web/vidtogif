import puppeteer from "puppeteer";


const selectorInput = '#new-image';
const targetWeb = 'https://ezgif.com/video-to-gif';
const saveBtn = '#output > table > tbody > tr > td:nth-child(14) > a';
const files = [
    '/home/wonderkid/Videos/Screencasts/Screencast from 07-02-23 17:36:53.webm'
]

const upload = async () =>{
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.setDefaultTimeout(0)
    // Reloading
    for( const file of files){
        await page.goto(targetWeb)

        await page.waitForSelector(selectorInput)
        const input = await page.$(selectorInput)
 
        await input.uploadFile(file)

        await page.click('#tool-submit-button > input')
        await page.waitForSelector('#size')
        await page.waitForSelector('#fps')
        await page.waitForSelector('#tool-submit-button > input')
    
    
        await page.select('#size', '800')
        await page.select('#fps', '33')
        await page.click('#tool-submit-button > input')
        await page.waitForSelector('.save')
        await page.click('.save')


        console.log('video berhasil di convert')
        
    }

 
    


}

upload()