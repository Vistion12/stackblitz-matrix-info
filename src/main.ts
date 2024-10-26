import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule
import { MatrixInfoComponent } from './app/matrix-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Добро пожаловать в мир Матрицы!</h1>
    <matrix-info></matrix-info>
  `,
  imports: [CommonModule, MatrixInfoComponent], // Добавляем CommonModule и компонент
})
export class App {}

bootstrapApplication(App);
