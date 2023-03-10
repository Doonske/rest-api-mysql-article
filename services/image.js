const path = require('path');
const fs = require('fs');

async function uploadImage(image) {
  const imagePath = path.join(__dirname, 'images', image.name);

  return new Promise((resolve, reject) => {
    image.mv(imagePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`/images/${image.name}`);
      }
    });
  });
}

module.exports = {
    uploadImage,    
    };