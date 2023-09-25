import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresas } from '../empresas';
import { EmpresasService } from '../empresas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {

  formulario!:FormGroup

  empresa:Empresas={
    id:0,
    cnpj:'',
    razaoSocial:'',
    nomeFantasia:'',
    endereco:{
      cep:'',
      rua:'',
      numero:0,
      cidade:'',
      estado:''
    },
    email:'',
    senha:'',
    linkedin:'',
    siteInstitucional:''
  }

  constructor(private service: EmpresasService,   private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((empresa) => {
        this.empresa = empresa
      })

    this.formulario = this.formBuilder.group({
      cnpj: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(14),
        Validators.maxLength(14)
      ])],
      endereco: this.formBuilder.group({
        cep: ['', Validators.compose([
          Validators.pattern('[0-9]+'),
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ])], // Campo CEP com validação
        rua: ['', Validators.required], // Outros campos do endereço com validação
        numero: ['', Validators.compose([
          Validators.pattern('[0-9]+'),
          Validators.required,
        ])],
      }),
      razaoSocial: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmacaoSenha:['', Validators.required],
      linkedin: ['', Validators.required],
      siteInstitucional: ['', Validators.required],
      nomeFantasia: ['']
    },
    {
      validators: this.senhaMatchValidator
    });

  }

  editarEmpresa() {
    // Verifique os erros no console
    console.log('Erros do formulário:', this.formulario.errors);
    this.service.editar(this.empresa).subscribe(() => {
      this.router.navigate(['/paginaInicialEmpresa', this.empresa.id]);
    })
  }
  

  cancelar() {
    this.router.navigate(['/paginaInicialEmpresa', this.empresa.id]);

  }


  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }
    else{
      return 'botao__desabilitado'
    }
  }

  senhaMatchValidator(form: FormGroup) {
    const senha = form.get('senha');
    const confirmacaoSenha = form.get('confirmacaoSenha');

    if (senha && confirmacaoSenha && senha.value !== confirmacaoSenha.value) {
      confirmacaoSenha.setErrors({ senhaNaoCoincide: true });
    } else {
      confirmacaoSenha!.setErrors(null);
    }
  }

}
