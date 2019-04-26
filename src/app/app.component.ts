import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JogoVelha';
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;
  Casa1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  Ganhei = 0;
  aux: any;
  Player = 1;
  jogada = 9;
  Casa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  tela: HTMLCanvasElement;
  x = 0;
  y = 0;

  limpaTela() {
    this.tela = this.myCanvas.nativeElement;
    this.ctx = this.tela.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.clearRect(0, 0, 450, 450);
    this.ctx.fillRect(0, 0, 450, 450);
  }
  board() {
    this.tela = this.myCanvas.nativeElement;
    this.ctx = this.tela.getContext('2d');
    this.ctx.fillStyle = 'lightgray';
    this.ctx.fillRect(0, 0, 450, 450);
    this.ctx.moveTo(150, 0);
    this.ctx.lineTo(150, 450);
    this.ctx.stroke();
    this.ctx.moveTo(300, 0);
    this.ctx.lineTo(300, 450);
    this.ctx.stroke();
    this.ctx.moveTo(0, 150);
    this.ctx.lineTo(450, 150);
    this.ctx.stroke();
    this.ctx.moveTo(0, 300);
    this.ctx.lineTo(450, 300);
    this.ctx.stroke();
  }
  Verifica() {
    setTimeout(() => {
      // tslint:disable: max-line-length
      if (((this.Casa1[0] !== 0 && this.Casa1[1] !== 0 && this.Casa1[2] !== 0) && (this.Casa1[0] === this.Casa1[1] && this.Casa1[1] === this.Casa1[2]))
        || ((this.Casa1[6] !== 0 && this.Casa1[7] !== 0 && this.Casa1[8] !== 0) && (this.Casa1[6] === this.Casa1[7] && this.Casa1[7] === this.Casa1[8]))
        || ((this.Casa1[3] !== 0 && this.Casa1[4] !== 0 && this.Casa1[5] !== 0) && (this.Casa1[3] === this.Casa1[4] && this.Casa1[4] === this.Casa1[5]))
        || ((this.Casa1[0] !== 0 && this.Casa1[3] !== 0 && this.Casa1[6] !== 0) && (this.Casa1[0] === this.Casa1[3] && this.Casa1[3] === this.Casa1[6]))
        || ((this.Casa1[1] !== 0 && this.Casa1[4] !== 0 && this.Casa1[7] !== 0) && (this.Casa1[1] === this.Casa1[4] && this.Casa1[4] === this.Casa1[7]))
        || ((this.Casa1[2] !== 0 && this.Casa1[5] !== 0 && this.Casa1[8] !== 0) && (this.Casa1[2] === this.Casa1[5] && this.Casa1[5] === this.Casa1[8]))
        || ((this.Casa1[0] !== 0 && this.Casa1[4] !== 0 && this.Casa1[8] !== 0) && (this.Casa1[0] === this.Casa1[4] && this.Casa1[4] === this.Casa1[8]))
        || ((this.Casa1[2] !== 0 && this.Casa1[4] !== 0 && this.Casa1[6] !== 0) && (this.Casa1[2] === this.Casa1[4] && this.Casa1[4] === this.Casa1[6]))) {
        this.Ganhei = this.Ganhei + 1;

      }
      if (this.Ganhei === 1) {

        if (this.Player === 2) {
          alert('O X Ganhou');

        }
        if (this.Player === 1) {
          alert('O Bolinha Ganhou');

        }
      }
      if (this.jogada === 0 && this.Ganhei === 0) {
        alert('Deu Velha, Começando Novo Jogo');
        this.reseta();
      }
    }, 20);
  }

  posicao(evento) {
    this.x = evento.pageX - this.tela.offsetLeft;
    this.y = evento.pageY - this.tela.offsetTop;
    if (this.Ganhei === 0) {
      if (this.x > 0 && this.x < 150 && this.y > 0 && this.y < 150 && this.Casa[0] === 0) {
        this.x = 75;
        this.y = 75;
        this.Casa[0] = 1;
        this.Casa1[0] = this.Player;
        this.desenha();
        this.Verifica();
      }
      if (this.x > 0 && this.x < 150 && this.y > 150 && this.y < 300 && this.Casa[1] === 0) {
        this.x = 75;
        this.y = 225;
        this.Casa[1] = 1;
        this.Casa1[1] = this.Player;
        this.desenha();
        this.Verifica();

      }
      if (this.x > 0 && this.x < 150 && this.y > 300 && this.y < 450 && this.Casa[2] === 0) {
        this.x = 75;
        this.y = 375;
        this.Casa[2] = 1;
        this.Casa1[2] = this.Player;
        this.desenha();
        this.Verifica();
      }
      if (this.x > 150 && this.x < 300 && this.y > 0 && this.y < 150 && this.Casa[3] === 0) {
        this.x = 225;
        this.y = 75;
        this.Casa[3] = 1;
        this.Casa1[3] = this.Player;
        this.desenha();
        this.Verifica();

      }
      if (this.x > 150 && this.x < 300 && this.y > 150 && this.y < 300 && this.Casa[4] === 0) {
        this.x = 225;
        this.y = 225;
        this.Casa[4] = 1;
        this.Casa1[4] = this.Player;
        this.desenha();
        this.Verifica();
      }
      if (this.x > 150 && this.x < 300 && this.y > 300 && this.y < 450 && this.Casa[5] === 0) {
        this.x = 225;
        this.y = 375;
        this.Casa[5] = 1;
        this.Casa1[5] = this.Player;
        this.desenha();
        this.Verifica();
      }
      if (this.x > 300 && this.x < 450 && this.y > 0 && this.y < 150 && this.Casa[6] === 0) {
        this.x = 375;
        this.y = 75;
        this.Casa[6] = 1;
        this.Casa1[6] = this.Player;
        this.desenha();
        this.Verifica();
      }
      if (this.x > 300 && this.x < 450 && this.y > 150 && this.y < 300 && this.Casa[7] === 0) {
        this.x = 375;
        this.y = 225;
        this.Casa[7] = 1;
        this.Casa1[7] = this.Player;
        this.desenha();
        this.Verifica();

      }
      if (this.x > 300 && this.x < 450 && this.y > 300 && this.y < 450 && this.Casa[8] === 0) {
        this.x = 375;
        this.y = 375;
        this.Casa[8] = 1;
        this.Casa1[8] = this.Player;
        this.desenha();
        this.Verifica();
      }
    } else {
      alert('Jogo Finalizado, Começando novo Jogo');
      this.reseta();
    }

  }

  desenha(reseta?: boolean) {
    if (this.jogada % 2 === 1 && this.jogada > 0) {

      this.ctx.beginPath();
      this.ctx.moveTo(this.x - 60, this.y - 60);
      this.ctx.lineTo(this.x + 60, this.y + 60);
      this.ctx.moveTo(this.x + 60, this.y - 60);
      this.ctx.lineTo(this.x - 60, this.y + 60);
      this.ctx.stroke();

      this.jogada = this.jogada - 1;
      this.Player = this.Player + 1;


    } else if (this.jogada % 2 === 0 && this.jogada > 0) {

      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 60, 0, 2 * 3.14);
      this.ctx.stroke();
      this.jogada = this.jogada - 1;
      this.Player = this.Player - 1;

    }
  }
  reseta() {
    window.location.reload()

  }
  ngOnInit() {
    this.board();
  }
}

