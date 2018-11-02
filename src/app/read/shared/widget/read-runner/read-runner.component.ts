import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import { switchMap, scan, takeWhile, map } from 'rxjs/operators';

@Component({
  selector: 'app-read-runner',
  templateUrl: './read-runner.component.html',
  styleUrls: ['./read-runner.component.scss']
})
export class ReadRunnerComponent implements OnInit, OnDestroy {

  @Input()
  set text(value: string) {
    this._textInArray = value.split(/\s+/).filter(n => n);
  }

  @Input()
  set speed(value: number) {
    this._setupSpeed(value);
  }

  @Output() start = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() stop = new EventEmitter();
  @Output() backward = new EventEmitter();
  @Output() finish = new EventEmitter();
  @Output() loading = new EventEmitter();

  private _running$: Observable<void>;
  private _running: Subscription;

  private _timePerWord = 0;
  private _indexWord = 0;
  private _textInArray: Array<string>;
  private _speedStart = 300;
  private _timeToComplete = 0;

  constructor() { }

  ngOnInit() {
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
      .pipe(scan((current, next) => this._indexWord++))
      .pipe(map(() => this._calculateToFinish()))
      .pipe(map(() => {
        this._loading();
      }))
      .pipe(takeWhile(() => this._indexWord <= this._textInArray.length));
  }

  private _calculateToFinish() {
    this._timeToComplete = 1 * (this._textInArray.length - this._indexWord) / this._speedStart;
  }

  private _start() {
    if (!this.reading()) {
      this._running = this._running$.subscribe(() => {
        if (this._indexWord >= this._textInArray.length) {
          this._pause();
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

      this.pause.emit();
      this._loading();
    }
  }

  private _loading() {
    this.loading.emit();
  }

  private _stop() {
    this._pause();
    this._indexWord = 0;
    this._calculateToFinish();

    this.stop.emit();
    this._loading();
  }

  private _backward() {
    this._pause();
    if (this._indexWord > 0) {
      this._indexWord--;
      this._calculateToFinish();
    }

    this.backward.emit();
    this._loading();
  }

  private _finish() {
    this.finish.emit();
    this._loading();
  }

  private _isFinish() {
    const finish = this._indexWord >= this._textInArray.length;
    if (finish) {
      this._finish();
    }
  }

  private _setupSpeed(value) {
    this._pause();
    this._speedStart = value;
    this._timeToComplete = 60000 / this._speedStart;
    this._calculateToFinish();
    this._setupRunning();
  }

}
