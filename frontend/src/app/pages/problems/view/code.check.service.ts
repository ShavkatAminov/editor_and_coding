import {HttpClientService} from "../../../core/http/http.client.service";
import {FormRequest} from "../../../core/request/FormRequest";
import {delay} from "../../../core/basic/sleep";
import {firstValueFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CodeCheckService {
  constructor(private http: HttpClientService) {
  }

  buttonCheckText = "Send to previous check";


  resultText = '';
  resultStatusClass = '';

  checkCode(request: FormRequest) {
    this.buttonCheckText = 'Running...';
    this.http.request(request, 'post').subscribe(async (res: any) => {
      let cacheKey: string = res['cacheKey'];
      let request = new FormRequest('problems/cache-result');
      request.params = request.params.set('cacheKey', cacheKey);
      for (let i = 0; i < 3; i++) {
        await delay(2000);
        let res: any = await firstValueFrom(this.http.request(request));
        if (res) {
          this.buttonCheckText = 'Send to previous check';
          if(res && res.success) {
            this.resultText = res.success;
            this.resultStatusClass = 'success';
          }
          if(res && res.error) {
            this.resultText = res.error;
            this.resultStatusClass = 'error';
          }
          break;
        }
      }
    })
  }
}
