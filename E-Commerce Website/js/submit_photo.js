// Javascript from user teshguru Mar 3/12:
// https://stackoverflow.com/questions/572768/styling-an-input-type-file-button/25825731#2582573

function getFile() {
  document.getElementById("upload_file").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("submit_photo_button").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}