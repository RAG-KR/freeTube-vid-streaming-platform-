const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("x-rapidapi-key", "e318e8d46emsh24949e2f752d7dep1ddfb4jsne00f7f139039");
xhr.setRequestHeader("x-rapidapi-host", "youtube-v31.p.rapidapi.com");

xhr.send(data);