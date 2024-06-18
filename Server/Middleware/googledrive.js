const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load client secrets from a local file.
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json'); // Download this file from Google Cloud Console
const TOKEN_PATH = path.join(__dirname, 'token.json'); // Generate this token as per the Google Drive API quickstart guide

const authorize = () => {
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);

    return oAuth2Client;
};

const uploadFile = async (filePath, fileName, folderId) => {
    const auth = authorize();
    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
        name: fileName,
        parents: [folderId],
    };
    const media = {
        mimeType: 'image/jpeg',
        body: fs.createReadStream(filePath),
    };

    const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id',
    });

    return `https://drive.google.com/thumbnail?id=${response.data.id}`;
};

const getGoogleDriveFileId = (link) => {
    const match = link.match(/id=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };
  
const deleteFile = async(link) => {
    const auth = authorize();
    const drive = google.drive({ version: 'v3', auth });
    const fileId = getGoogleDriveFileId(link);
    if (!fileId) {
      return ("Invalid File ID");
    }

    // Delete the photo from Google Drive
    await drive.files.delete({ fileId });
    return; 
}

module.exports = { uploadFile, deleteFile };
