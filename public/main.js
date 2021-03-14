let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      });
      n += 1;
    }
  };
  request.send()
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const object = JSON.parse(request.response)
      MyName.textContent = object.name
    }
  };
  request.send()
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseXML)
      const dom = request.responseXML;
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  };
  request.send();

}
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onload = () => {
    // console.log(request.response);
    const div = document.createElement('div');
    div.innerHTML = request.response;
    document.body.appendChild(div)
  };
  request.onerror = () => { };
  request.send();
}
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');
  request.onload = () => {
    //创建script标签
    const script = document.createElement('script');
    //填写script标签
    script.innerHTML = request.response;
    //插入
    document.body.appendChild(script);
  };
  request.onerror = () => { };
  request.send();
}

getCSS.onclick = () => {
  //创建请求
  const request = new XMLHttpRequest();
  //调用请求方法
  request.open('GET', '/style.css');;

  //监听成功or失败
  request.onreadystatechange = () => {
    console.log(request.readyState)
    //'下载完成,但不知道是成功2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // console.log('成功')
        // console.log('request.response')
        // console.log(request.response)

        //创建style标签
        const style = document.createElement('style');
        //填写style内容
        style.innerHTML = request.response;
        //插入头里面
        document.head.appendChild(style);
      } else {
        alert('加载css失败')
      }
    }

  }

  //发送请求
  request.send();
};