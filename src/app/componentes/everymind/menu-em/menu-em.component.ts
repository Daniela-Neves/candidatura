import { Component, OnInit } from '@angular/core';
import { Everymind } from '../everymind';
import {ActivatedRoute, Router} from '@angular/router';
import { EverymindService } from '../everymind.service';

@Component({
  selector: 'app-menu-em',
  templateUrl: './menu-em.component.html',
  styleUrls: ['./menu-em.component.css']
})

  export class MenuEmComponent implements OnInit {

  constructor(private service : EverymindService, private router : Router, private route : ActivatedRoute) {}
   
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id)).subscribe((everymind) => {
        this.everymind = everymind;
      });
    }
  }
  

  everymind : Everymind = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
};
}
