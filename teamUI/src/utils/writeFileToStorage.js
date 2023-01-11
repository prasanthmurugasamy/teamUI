import { DocumentDirectoryPath, DownloadDirectoryPath, writeFile } from 'react-native-fs';

export const writeFileToStorage = (_path,data)=>{
    const path = DownloadDirectoryPath + `${_path}.txt`;
    // write the file
    writeFile(path, JSON.stringify(data) , 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
        return true
      })
      .catch((err) => {
        return false
        console.log(err.message);
      });
}

