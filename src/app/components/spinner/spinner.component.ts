'use strict';
import {Component, Input, OnDestroy} from 'angular2/core';

@Component({
    selector: 'my-spinner',
    // template: 'Hello Spinner Component'
    templateUrl: 'app/components/spinner/spinner.html'
})

export class SpinnerComponent implements OnDestroy {
    private loading: boolean = true;

    ngOnInit(): any {
        console.log("Spinner Init");
    }

    @Input()
    public set isLoading(value: boolean) {
      this.loading = value;
      console.log("Spinner loading? " + this.loading);
    }

    ngOnDestroy(): any {
      this.loading = false;
    }
}
