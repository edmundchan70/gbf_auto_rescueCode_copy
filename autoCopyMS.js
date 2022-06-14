
/*
Enter your profile name below 

*/
const profileName  ='Profile 1'
const COPY_APP = 'xclip'
const child_process = require('child_process')
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
              }, profileName) // e.g. 'Profile 2'
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
                
                   
                        copy(id)
                          
                    console.log(id)
                        } 
                    
                  
                  
                  }catch (err){
                      console.log(err)
                  }
       //<div class="rescue_id">349586C5</div>
       //#\37  > div.list-group > div:nth-child(4) > div.rescue_id
      }
                 
  })}
  function copy(data, encoding='utf8') {
    const proc = child_process.spawn(COPY_APP)
    proc.stdin.write(data,encoding)
    proc.stdin.end()
  }
setBrowser(url);