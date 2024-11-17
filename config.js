const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_47_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk4vamxGM0RnT1RrTHV5eXNKYkdDdEJHNnl0RnlVOG9XUWo2NHFrNkN6T1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg3MTQ5NTU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUE4MUY4M0U4NjEwNEE5OTEyRjNEMTI4QTgyODBEM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE4MzMyNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjNhdHJ3SThRZDJ0NlRPM1hNbXpBQVwiLFxuICBcInBob25lSWRcIjogXCI3Y2VkZWUzNS00MzY1LTRkMTMtYjRkNi0wNmY2ZTVjN2U3ZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxNixcbiAgICAgIDE0NixcbiAgICAgIDE1MixcbiAgICAgIDIxMixcbiAgICAgIDEzOCxcbiAgICAgIDIxNixcbiAgICAgIDEzOCxcbiAgICAgIDI0OSxcbiAgICAgIDc2LFxuICAgICAgMTQ3LFxuICAgICAgMTg2LFxuICAgICAgMjEyLFxuICAgICAgOTUsXG4gICAgICAxNzUsXG4gICAgICA0MSxcbiAgICAgIDE4MSxcbiAgICAgIDE4OCxcbiAgICAgIDE4MyxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMTc1LFxuICAgICAgNjYsXG4gICAgICA3NyxcbiAgICAgIDc2LFxuICAgICAgOTMsXG4gICAgICAyMDIsXG4gICAgICAxMjksXG4gICAgICA3MSxcbiAgICAgIDE4NCxcbiAgICAgIDQsXG4gICAgICAxNTIsXG4gICAgICAxNjYsXG4gICAgICA3MCxcbiAgICAgIDI0OCxcbiAgICAgIDQ0LFxuICAgICAgMTUwLFxuICAgICAgNTIsXG4gICAgICA4MSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNTRGNFo0UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg3MTQ5NTU4Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODgyMTA2Njc5NzI3Nzo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVHg2ZVFCRUtIYjVya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhjcExkZ3Y5anV6cDNCT2tlTmdKSnpxZTdTUFB5djBiOHIxdlBEVlozd1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVM3YnpuZEZQUGQzc3BYTUZuQTRWSm5XQ25VZ2VScmpnOXVyRUw2RVVWdzZDQWFvMHJpc3lmcFRNZ1Fhd1QzMGZnRmhtQ1dSTHJ4N2J3NUlFYzlnQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRldJaHFDN2NoN0piOG9XZS9PTWtpVWdadWJNN1JXbVdXZXI0YmMrQUVUejJnTW5xNkZmbU1TQ3VzdHpyMW1taE00Rk9ZKzkyUHJvelhLaktRYVpzQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg3MTQ5NTU4Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTgzMzI1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU40ZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjRlLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjdPQ294QXQ3TmpTQXI0bytNTjViTmlsdTRvTmlhNStVUkVORUY1MGMxOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Nzk4ODU0NDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTgxNzc4MzM5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
