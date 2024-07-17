import toast from "react-hot-toast";


export default async function upload(ev,callbackFn){
    const file = ev.target.files?.[0];
    //console.log("file:", file);
    if (file) {
      const UploadPromise = new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        //console.log("insed if");
        //console.log(formData.get("file"));
        fetch("/api/upload", {
          method: "POST",
          body: formData,
        }).then((response) => {
          if (response.ok) {
            response.json().then((link) => {
              //console.log("link", link);
              callbackFn(link);
              resolve(link);
            });
          } else {
            reject();
          }
        });
      });

      await toast.promise(UploadPromise, {
        loading: "Uploading...",
        success: "uploaded",
        error: "Upload error",
      });
    }
  }