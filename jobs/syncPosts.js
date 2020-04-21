const _ =  require('underscore');
const fetch =  require('node-fetch');

const Posts = require('../models/posts');

const scriptSync = 'syncPosts';

const _getLocalData = () => {
  return new Promise((resolve, reject) => {
    Posts.find(null, { id: 1 }).lean().exec((err, data) => {
      if (!err) {
        console.log('# [sync] '+scriptSync+' ['+(new Date().toLocaleString('pt-BR'))+']: get ' + data.length + ' local objects...');
        return resolve();
      }
      return reject(err);
    });
  });
};

const _getRemoteData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log('# [sync] '+scriptSync+' ['+(new Date().toLocaleString('pt-BR'))+']: get ' + json.length + ' remote objects...');
      resolve(json);
    }).catch((err) => {
      reject(err.message);
    });
  });
};


const _saveOrUpdate = (data) => {
  const promises = [];
  Array.prototype.forEach.call(data, (el) => {
    promises.push(function() {
      return new Promise((resolve, reject) => {
        Posts.findOneAndUpdate({ id: el.id }, el, { new: true, upsert: true, setDefaultsOnInsert: true }, function (err, finded) {
          if (!err) {
            return resolve(finded);
          }
          return reject(err);
        });
      });
    }());
  });

  console.log('# [sync] '+scriptSync+' ['+(new Date().toLocaleString('pt-BR'))+']: save/update ' + promises.length + ' objects...');

  return new Promise((resolve) => {
    Promise.all(promises).then(resolve(data));
  });
};

const _compareAndRemove = (remoteData) => {
  return new Promise((resolve) => {
    Posts.find(null, { id: 1 }).sort({id: -1}).lean().exec((err, data) => {
      const localIds = data.map((el) => el['id']);
      const remoteIds = remoteData.map((el) => el['id']);
      const toRemoveIds = _.difference(localIds, remoteIds);
      Posts.deleteMany({ _id: { $in: toRemoveIds } }).exec(() => {
        console.log('# [sync] '+scriptSync+' ['+(new Date().toLocaleString('pt-BR'))+']: removed ' + toRemoveIds.length + ' objects...');
        resolve();
      });
    });
  });
};

const _syncData = () => {
  _getLocalData()
    .then(_getRemoteData)
    .then(_saveOrUpdate)
    .then(_compareAndRemove)
    .catch((error) => {
      console.log('# [sync] '+scriptSync+' ['+(new Date().toLocaleString('pt-BR'))+']: Error ', error);
    });
};

module.exports = _syncData;
