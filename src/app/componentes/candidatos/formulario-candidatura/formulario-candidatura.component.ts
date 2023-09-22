import { Component, OnInit } from '@angular/core';
import { Curriculo  } from '../curriculo';
import { CurriculoService } from '../curriculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-candidatura',
  templateUrl: './formulario-candidatura.component.html',
  styleUrls: ['./formulario-candidatura.component.css'],
})
export class FormularioCandidaturaComponent implements OnInit {
    certificados : any[] = [];
    // idiomas: any[] = [{ idioma: '', nivel: '' }];

    constructor(private service : CurriculoService, private router : Router, private route : ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id !)).subscribe((curriculo) => {
            this.curriculo = curriculo
        })
    }

    curriculo : Curriculo = {
        candidatoId: 0,
        dataNascimento: '',
        genero: '',
        raca: '',
        deficiencias: {
            fisica: false,
            auditiva: false,
            visual: false,
            intelectual: false,
            autista: false
        },
        endereco: {
            cep: '',
            endereco: '',
            numero: '',
            cidade: '',
            estado: ''
        },
        linkedin: ''
    };


    finalizarCandidatura() {
        this.service.editar(this.curriculo).subscribe(() => {
          alert('Candidatura enviada com sucesso!');
          this.router.navigate(['/detalhes-vaga', this.curriculo.candidatoId]);
        });
    }

    // adicionarIdioma() {
    //     this.curriculo.idiomas.push({ idioma: '', nivel: '' });
    // }
    
    // adicionarCertificado() {
    //     this.curriculo.certificados.push({ nome: '', organizacao: '', dataEmissao: '' });
    // }

}
