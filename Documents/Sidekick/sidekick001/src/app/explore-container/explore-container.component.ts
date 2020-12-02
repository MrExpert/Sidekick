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
      this.listTyle = "Incoming Calls from yesterday";
    } else if (value == "2") {
      this.listTyle = "Ougoing Calls from yesterday";
    } else if (value == "5") {
      this.listTyle = "Rejected Calls from yesterday";
    }

    //Getting Yesterday Time
    var today = new Date('October 10, 2018 00:15:30');
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
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
      },
    ];
    this.callLog
      .getCallLog(this.filters)
      .then((results) => {
        this.recordsFoundText = JSON.stringify(results);
        this.recordsFound = results; //JSON.stringify(results);
      })
      .catch((e) => alert(" LOG " + JSON.stringify(e)));
  }
}
