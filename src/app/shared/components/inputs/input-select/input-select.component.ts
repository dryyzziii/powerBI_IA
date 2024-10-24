import { CommonModule } from '@angular/common';
import { Component, effect, input, model, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-select',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})

export class InputSelectComponent {
  options = input.required<Ioptions[]>();
  classList = input<string[]>();
  formcontrolName = input.required<FormControl>();

  selectedOption = model.required<Ioptions>()
  dropdownIsOpen: WritableSignal<boolean> = signal(false)

  constructor(){
    effect(() => {
      console.log(this.options())
      console.log(this.formcontrolName())
    })
  }

  updateDrop() {
   this.dropdownIsOpen.update((a) => a = !a)
  }

}

export class Ioptions {
  value: any =" ";
  name: any = "";
  constructor(){}
}