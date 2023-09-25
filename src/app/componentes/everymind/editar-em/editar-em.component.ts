import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Everymind} from '../everymind';
import {EverymindService} from '../everymind.service';


@Component({selector: 'app-editar-em', templateUrl: './editar-em.component.html', styleUrls: ['./editar-em.component.css']})
export class EditarEmComponent {

    confirmacaoSenhaDigitada : string = '';

    everymind : Everymind = {
        id: 0,
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    };

    constructor(private service : EverymindService, private router : Router, private route : ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id !)).subscribe((everymind) => {
            this.everymind = everymind
        })
    }

    editarEverymind() {
        if (this.everymind.senha !== this.confirmacaoSenhaDigitada) {
            alert('A senha e a confirmação de senha não correspondem.');
            return;
        }

        this.service.editar(this.everymind).subscribe(() => {
            this.router.navigate(['/menu-em', this.everymind.id]);

        })
    }

    cancelar() {
        this.router.navigate(['/menu-em', this.everymind.id]);
    }

}
