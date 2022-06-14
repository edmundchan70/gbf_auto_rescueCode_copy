
const puppteer = require('puppeteer');
const url = 'https://gbf.life/';
const chrome = require('chrome-cookies-secure');
async function setBrowser(url)
    {
        const browser = await puppteer.launch();
  
        const getCookies =  (callback) => {

            chrome.getCookies(url, 'puppeteer', function(err, cookies) {
              if (err) {
                  console.log(err, 'error');
                  return
              }
          //    console.log(cookies, 'cookies');
              callback(cookies);
              }, 'Profile 1') // e.g. 'Profile 2'
              return 
      }
      ////*[@id="7"]/div[3]/div[3]/div[1]
      //document.querySelector("#\\37  > div.list-group > div:nth-child(6) > div.rescue_id")
          // find profiles at ~/Library/Application Support/Google/Chrome
        getCookies(async (cookies) => {
              const page = await browser.newPage();
              await page.setCookie(...cookies);
              await page.goto(url);
            
  
              
      
              var id = "";
            while(true)
           { 
             
            try{
          
 //class#\37  > div.list-group > div:nth-child(2)
                await page.waitForSelector('.rescue_id')
                  const newId=  await page.evaluate(
                    () =>  document.querySelector('.rescue_id').textContent
                  )
                  
                  if(newId != id )
                {
                          id= newId
                          var proc = require('child_process').spawn('pbcopy'); 
                          proc.stdin.write(newId); proc.stdin.end();
                          console.log(newId);
                 
                        }
                    
                  
                  
                  }catch (err){
                      console.log(err)
                  }
       //<div class="rescue_id">349586C5</div>
       //#\37  > div.list-group > div:nth-child(4) > div.rescue_id
      }
                 
  })}

setBrowser(url);