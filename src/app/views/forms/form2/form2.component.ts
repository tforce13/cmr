import { MDBDatePickerComponent } from './../../../typescripts/pro/date-picker/datepicker.component';
import { UploadFile, UploadInput, UploadOutput } from './../../../typescripts/pro/file-input/classes/mdb-uploader.class';
import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import { ClockPickerComponent } from './../../../typescripts/pro/time-picker/timepicker.component';
import { humanizeBytes } from './../../../typescripts/pro/file-input/';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit,AfterViewInit {

  // File import
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  model: string;
  visibility: boolean;
  // Autocomplete
  state: string;
  states = ['Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',  
             ];

  //Time picker
  @ViewChild("darkPicker") darkPicker: ClockPickerComponent;
  @ViewChild("datePicker") datePicker: MDBDatePickerComponent;


  constructor() {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
        
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(() =>  this.darkPicker.setHour("15"), 0);
   setTimeout(() => this.datePicker.onUserDateInput("2017-10-13"), 0);
    
  }

  range: any = 50;

      coverage() {
          if(typeof this.range === 'string' && this.range.length !== 0) {
              return this.range;
          }
      }

      showFiles() {
        let files = "";
        for(let i = 0; i< this.files.length; i ++) {
          files += this.files[i].name;
           if (!(this.files.length-1 == i)) {
             files += ", "
          }
        }        
        return files;
     }

    startUpload(): void {
        const event: UploadInput = {
        type: 'uploadAll',
        url: '/upload',
        method: 'POST',
        data: { foo: 'bar' },
        concurrency: 1
        }

        this.uploadInput.emit(event);
    }

    cancelUpload(id: string): void {
        this.uploadInput.emit({ type: 'cancel', id: id });
    }

    onUploadOutput(output: UploadOutput | any): void {

        if (output.type === 'allAddedToQueue') { 
        } else if (output.type === 'addedToQueue') {
          this.files.push(output.file); // add file to array when added
        } else if (output.type === 'uploading') {
          // update current data in files array for uploading file
          const index = this.files.findIndex(file => file.id === output.file.id);
          this.files[index] = output.file;
        } else if (output.type === 'removed') {
          // remove file from array when removed
          this.files = this.files.filter((file: UploadFile) => file !== output.file);
        } else if (output.type === 'dragOver') {
          this.dragOver = true;
        } else if (output.type === 'dragOut') {
        } else if (output.type === 'drop') {
          this.dragOver = false;
        }
        this.showFiles();
        console.log(output);
    }

}
