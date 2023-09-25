import { Component, OnInit } from '@angular/core';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../empresas/empresas.service';
import { InscricaoService } from '../inscricao.service';
import { CandidatoInscricao } from '../vaga/candidatoInscricao';
import { Inscricao } from '../inscricao';

@Component({
  selector: 'app-administrar-vaga',
  templateUrl: './administrar-vaga.component.html',
  styleUrls: ['./administrar-vaga.component.css']
})
export class AdministrarVagaComponent implements OnInit{
  listaVagas:CandidatoInscricao[] = []

  constructor(
    private service: VagasService,
    private router: Router,
    private empresaService: EmpresasService,
    private route: ActivatedRoute,
    private inscricaoService: InscricaoService
    ){

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log('este é o id',id);
    
    // this.service.buscarPorId(parseInt(id!)).subscribe((vagas) => {
    //   this.vagas = vagas
    // })

    this.inscricaoService.buscarPorVaga(Number(id)).subscribe((vagas) => {
      this.listaVagas = vagas
      
    })
  }

  novoStatus='';
  inscricao:Inscricao={
    statusInscricao:this.novoStatus,
  };

  voltar(){
    this.router.navigate(['/listarVagas/',this.route.snapshot.paramMap.get('idEmpresa')]);
  }

  salvar(idCandidato:number){
    console.log(this.novoStatus);
    this.inscricao.statusInscricao = this.novoStatus;
    console.log('o status é',this.inscricao.statusInscricao);
    
    this.inscricaoService.atualizarStatus(Number(this.route.snapshot.paramMap.get('id')),idCandidato,this.inscricao).subscribe(() => {
      alert('Status atualizado com sucesso!');
      
    })
  }
  
  
}
