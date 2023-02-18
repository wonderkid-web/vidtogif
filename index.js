import puppeteer from "puppeteer";
const targetWeb = 'https://ezgif.com/video-to-gif'

const openPage = async (browser) =>{
  
}

const launch = async () =>{
    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0)

    const targetLink = [
                            'https://www.facebook.com/',
                            'https://www.instagram.com/accounts/login/',
                            'https://telegram.org'
                       ]
    
    for (const link of targetLink){
        let fileName = link.split('//')[1].split('/')[0]
        await page.goto(link)
        await page.screenshot({
            path: `./screenshot/${fileName}.png`,
            fullPage: true
        })
    }

    await browser.close()
}



launch()