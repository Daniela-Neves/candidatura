import {Component, OnInit} from '@angular/core';
import {Candidato} from '../candidato';
import {CandidatoService} from '../candidato.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({selector: 'app-menu-candidato', templateUrl: './menu-candidato.component.html', styleUrls: ['./menu-candidato.component.css']})
export class MenuCandidatoComponent implements OnInit {

    constructor(private service : CandidatoService, private router : Router, private route : ActivatedRoute) {}
   
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.service.buscarPorId(parseInt(id)).subscribe((candidato) => {
                this.candidato = candidato;
            });
        }
    }

    editarCandidato() {
        this.service.editar(this.candidato).subscribe(() => {
            this.router.navigate(['/listarCandidato'])
        })
    }

    cancelar() {
        this.router.navigate(['/listarCandidato'])
    }

    candidato : Candidato = {
        id: 0,
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    };
  }
