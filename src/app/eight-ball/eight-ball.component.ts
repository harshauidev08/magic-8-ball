import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))]),
      transition(':leave', [animate('2s', style({ opacity: 0 }))]),
    ]),
  ]
})
export class EightBallComponent {
  question = '';
  answer = '';
  answers = [
    "It is certain", "As I see it, yes", "Reply hazy, try again", "Don't count on it", 
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", 
    "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", 
    "Most likely", "Outlook good", "Yes", "Signs point to yes", 
    "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"
  ];

  showAnswer = false;

  askQuestion() {
    if (!this.question) return;
    this.answer = ''; // Clear previous answer
    this.showAnswer = false;

    setTimeout(() => {
      this.answer = this.answers[Math.floor(Math.random() * this.answers.length)];
      this.showAnswer = true;
    }, 500); // Delay for animation
  }
}
