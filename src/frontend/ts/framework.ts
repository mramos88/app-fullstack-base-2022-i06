class FrameWork{
                     
  public ejecutarRequest(metodo: string, url: string,lister:ResponseLister) {
    let xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
          if (xmlHttp.readyState == 4) {
              lister.handlerResponse(xmlHttp.status,xmlHttp.responseText)
           
            }
        }
        xmlHttp.open(metodo, url, true);
        xmlHttp.send();
        console.log("Hago el GET");
  }
}