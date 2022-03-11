import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;

  name: string = "";
  email: string = "";
  comment: string = "";

  constructor(private builder: FormBuilder) {

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
      
    })

    console.log(this.FormData);
  }

  ngOnInit() { }

  onSubmit(FormData: FormGroup) {
    console.log(FormData);

    this.name = this.FormData.get('Fullname')?.value;
    this.email = this.FormData.get('Email')?.value;
    this.comment = this.FormData.get('Comment')?.value;

    window.alert(
      "Name : " + this.name + "\n Email : " + this.email + "\n Comment : " + this.comment
    );
  }
}
