var posts=["2026/08/02/hello-world/","2026/09/22/javascript-prototype-pollution/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };