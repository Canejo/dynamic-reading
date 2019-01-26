import { ArticleEntity } from './../../entity/article.entity';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, OnChanges } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import { scan, takeWhile, map } from 'rxjs/operators';
import { ArticleTextService } from '../../service/article-text.service';

@Component({
  selector: 'app-read-runner',
  templateUrl: './read-runner.component.html',
  styleUrls: ['./read-runner.component.scss']
})
export class ReadRunnerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() article: ArticleEntity;
  @Input() speed: number;

  @Output() start = new EventEmitter();
  @Output() pause = new EventEmitter<number>();
  @Output() finish = new EventEmitter();
  @Output() loading = new EventEmitter();

  private _running$: Observable<void>;
  private _running: Subscription;

  private _timePerWord = 0;
  indexWord = 0;
  textInArray: Array<string>;
  speedStart = 300;

  constructor(
    private _articleTextService: ArticleTextService
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.article) {
      this.textInArray = this._articleTextService.textToArray(this.article.text);
      this._setupSpeed(this.speed);
    }
  }

  ngOnDestroy() {
    if (this.reading()) {
      this._running.unsubscribe();
    }
  }

  reading() {
    return this._running !== undefined;
  }

  private _setupRunning() {
    this._running$ = timer(0, this._timePerWord)
      .pipe(scan((current, next) => this.indexWord++))
      .pipe(map(() => {
        this._loading();
      }))
      .pipe(takeWhile(() => this.indexWord <= this.textInArray.length));
  }

  private _start() {
    if (!this.reading()) {
      this._running = this._running$.subscribe(() => {
        if (this.indexWord >= this.textInArray.length) {
          this._pause();
          this._finish();
        }
      });
      this.start.emit();
      this._loading();
    }
  }

  private _pause() {
    if (this.reading()) {
      this._running.unsubscribe();
      this._running = undefined;

      this.pause.emit(this.indexWord);
      this._loading();
    }
  }

  private _loading() {
    this.loading.emit();
  }

  _stop() {
    this._pause();
    this.indexWord = 0;

    this.pause.emit(this.indexWord);
    this._loading();
  }

  _backward() {
    this._pause();
    if (this.indexWord > 0) {
      this.indexWord--;
    }

    this.pause.emit(this.indexWord);
    this._loading();
  }

  private _finish() {
    this.finish.emit();
    this._loading();
  }

  isFinish() {
    return this.indexWord >= this.textInArray.length;
  }

  _setupSpeed(value) {
    this._pause();
    this.speedStart = value;
    this._timePerWord = 60000 / this.speedStart;
    this._setupRunning();
  }

  playOrPauseBody() {
    if (this.reading() && !this.isFinish()) {
      this.playOrPause();
    }
  }

  playOrPause() {
    if (!this.isFinish()) {
      if (this.reading()) {
        this._pause();
      } else {
        this._start();
      }
    }
  }
}
