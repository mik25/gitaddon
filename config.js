module.exports = {
  name: 'marveltv', // unique addon name
  prefix: 'marveltv', // unique addon prefix (must be different for all addons!)
  icon: 'https://github.com/mik25/gitaddon.git/logo.png', // set the correct domain name here so the logo is accessible
  description: 'Mixed category iptv.', // addon description
  connLimit: false, // can be false or an integer, if set to an integer, it will show a message with "Limited to X connections."
  paginate: 100, // how many catalogs to show per page
  playlistUrl: 'http://marveldc.best/get.php?username=mikes3pm2019&password=MyTgDlKv5643871&type=m3u_plus', // the URL to the M3U playlist
}