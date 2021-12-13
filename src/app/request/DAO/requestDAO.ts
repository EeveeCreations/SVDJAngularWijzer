export class RequestDAO {

  private static requestDao;

  static getInstance(): RequestDAO {
    if (this.requestDao == null) {
      this.requestDao = new RequestDAO();
    }
    return this.requestDao;
  }

  /**
   * Sends request in diffrent Methods
   * @return requestAnswer
   * @throws IOException
   * @author Eefje | AntiEevee
   */
  sendRequest(readyRequest: Request, className: string, duty: string, specific: string) {
    let newRequest: string = null;
    this.setconectionSpecifics(className, duty, specific);
    // if (!duty === "GET") {
    //   this.formRequest(readyRequest, className);
    // }
    newRequest = this.readRequest();

    return newRequest;
  }

  private readRequest(): string {
    let content: string = "";
    // InputStream inputStream = con.getInputStream();
    // scan: RedableStreamDefaultController = new Scanner(inputStream);
    // if (con.getResponseCode() == 200) {
    //
    //   while (scan.hasNext()) {
    //     content.append(scan.next());
    //   }
    //
    // }
    // inputStream.close();
    // return content.toString();
    return "";
  }

  /**
   * sets the request ready
   * @
   */
  private formRequest(jsonRequest: Request, className: string): void {
    let parameters: Map<string, string>;
    // parameters.put(className.toLowerCase(), jsonRequest.to(:string));
    // con.setDoOutput(true);
    // DataOutputStream out = null;
    // out = new DataOutputStream(con.getOutputStream());
    //
    // for(Object item: jsonRequest.getGivenVariables()){
    //   out.writeBytes(item.to(:string));
    //   System.out.println(item.to(:string));
    //
    // out.flush();
    // out.close();

  }

  private setconectionSpecifics(className: string, duty: string, specific: string): void {
    let url: URL = new URL("http://localhost:8080/" + className.toLowerCase());
    if (!(specific === "")) {
      url = new URL(url.toString() +"/" + specific);
    }
    // con = (HttpURLConnection) url.openConnection();
    // con.setRequestProperty("content-type", "application/json; charset=utf8");
    // con.setRequestMethod(duty);
  }
}
