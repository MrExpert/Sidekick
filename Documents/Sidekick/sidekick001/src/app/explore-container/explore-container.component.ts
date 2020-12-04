import { Component, OnInit, Input } from "@angular/core";
import { Platform } from '@ionic/angular';
import { CallLog, CallLogObject } from "@ionic-native/call-log/ngx";

@Component({
  selector: "app-explore-container",
  templateUrl: "./explore-container.component.html",
  styleUrls: ["./explore-container.component.scss"],
})
export class ExploreContainerComponent {
 
  filters: CallLogObject[];
  recordsFound: any;
  recordsFoundText: string;
  listTyle: string;
  callDuration: number;
  topFive: any = []
  heroes: any;

  const heroes = ['John', 'Sally', 'Doe']
  constructor(private callLog: CallLog, private platform: Platform) {
    this.platform.ready().then(() => {
      this.callLog
        .hasReadPermission()
        .then((hasPermission) => {
          if (!hasPermission) {
            this.callLog
              .requestReadPermission()
              .then((results) => {
                this.getContacts("type", "1", "==");
                this.getMostFreq(results);
              })
              .catch((e) =>
                alert(" requestReadPermission " + JSON.stringify(e))
              );
          } else {
            this.getContacts("type", "1", "==");
          }
        })
        .catch((e) => alert(" hasReadPermission " + JSON.stringify(e)));
    });
  }

  getContacts(name, value, operator) {
    if (value == "1") {
      this.listTyle = "All Calls from yesterday";
    } else if (value == "2") {
      this.listTyle = "Ougoing Calls from yesterday";
    } else if (value == "5") {
      this.listTyle = "Rejected Calls from yesterday";
    }

    //Getting Yesterday Time
    var today = new Date('October 10, 2018 00:15:30');
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 7);
    var fromTime = yesterday.getTime();

    this.filters = [
      {
        name: name,
        value: value,
        operator: operator,
      },
      {
        name: "date",
        value: fromTime.toString(),
        operator: ">=",
      },{
        name: 'duration',
        value: 30,
        operator: ">="
      }
    ];
    this.callLog
      .getCallLog(this.filters)
      .then((results) => {
        this.recordsFoundText = JSON.stringify(results);
        this.recordsFound = results; //JSON.stringify(results);
        // results is Obj of callLog items
        /*
        - get new obj, 
        - set number as key, duration as value
        - get top 5 most duration calls
        */
        let arr = results;
        let obj = {};
        for(let i=0; i<arr.length; i++){
          if(!obj[arr[i]['number']]){
             obj[arr[i]['number']] = arr[i]['duration']
          } else {
            obj[arr[i]['number']] += arr[i]['duration']
          }
        }
        obj.sort((a,b) => b[1] - a[1] );
        this.topFive = obj.slice(0,5)
        
      })
      .catch((e) => alert(" LOG " + JSON.stringify(e)));
  }
}
