const cronJob = require('cron').CronJob;
const isMaster = require('is-master');
const fs = require('fs');
const jobs = require('path').join(__dirname, './jobs');

var syncTime = '*/5 * * * *';

isMaster.start();

module.exports = exports = function () {
  console.log('\n#########################################################################');
  console.log('# Cron ['+(new Date().toLocaleString('pt-BR'))+']: setting up cron jobs...');
  console.log('# Time: '+syncTime);
  console.log('#########################################################################\n');

  var syncJobs = [];

  fs.readdirSync(jobs).forEach((file) => {
    let job = file.replace('.js','');
    let cronjob = new cronJob(syncTime, function () {
      isMaster.isMaster(function (err) {
        if (err) return console.log(err);
        console.log('# [sync] '+job+' ['+(new Date().toLocaleString('pt-BR'))+']: sync start...');
        try {
          require(jobs+'/'+job)();
        } catch (error) {
          console.log('# [sync] '+job+' Error ['+(new Date().toLocaleString('pt-BR'))+']: ', error);
        }
      });
    }, null, true, null, null, true);
    cronjob.start();
    syncJobs.push(cronjob);
  });

  setInterval(() => {
    console.log('\n# [sync] Cron next run: ', jobsNext(), '\n');
  }, 60000);


  const jobsNext = () => {
    return syncJobs[0].nextDates(1).toLocaleString();
  };
};
