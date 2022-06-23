import axios from "axios";

class UploadFilesService
{
    upload(file, RosterId, onUploadProgress, self) {
        //var RosterId = 123;
        console.log(RosterId);
        //console.log();
        let formData = new FormData();
        formData.append("file", file);
        formData.append("RosterId", RosterId);
        formData.append("FileType", 27);
        //console.log("123");
        return axios.post(self.$baseapiurl + "Attachment/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress
        }).then(function (response)
        {
            return response.data
        });
      }
    getFiles(self) {
        return axios.get(self.$baseapiurl + "/Attachment/files");
      }
}
export default new UploadFilesService();