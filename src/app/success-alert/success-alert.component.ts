import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h4>Your task was completed successfully!</h4>`,
  styles: [
    `
      h4 {
        height: 50px;
        color: green;
        border: 1px solid green;
        text-align: center;
        padding-top: 10px;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
