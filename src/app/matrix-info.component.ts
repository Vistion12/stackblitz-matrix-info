import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'matrix-info',
  templateUrl: './matrix-info.component.html',
  styleUrls: ['./matrix-info.component.css'],
  imports: [CommonModule], // Добавляем CommonModule
})
export class MatrixInfoComponent {
  title = 'Трилогия Матрица';
  description = 'Это культовая трилогия о мире, управляемом машинами.';
  showMovies = false;
  movies = [
    { title: 'Матрица', year: new Date(1999, 0, 1), image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/300x450' },
    { title: 'Матрица: Перезагрузка', year: new Date(2003, 4, 15), image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/a53d1c75-4d1a-4c86-a936-65b2a724345c/300x450' },
    { title: 'Матрица: Революция', year: new Date(2003, 10, 5), image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/37fc55e7-dfc7-406f-a187-17ef49f65b6f/300x450' },
  ];

  toggleMovies() {
    this.showMovies = !this.showMovies;
  }
}