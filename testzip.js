const compressing = require('compressing');

compressing.zip.compressDir('./components/avatar', './avatar.zip')
.then(() => {
  console.log('success');
})
.catch(err => {
  console.error(err);
});