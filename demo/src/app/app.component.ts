import { Component } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { share } from "rxjs/operators";

@Component({
    selector: "app",
    styleUrls: ["app.component.css"],
    templateUrl: "app.component.html",
    standalone: false
})
export class AppComponent {
    public number: number = 3000.25;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor() {
        this.observable = new Observable<boolean>(
            (observer: any) => (this.observer = observer)
        ).pipe(share());

        // For auto mode
        setTimeout(() => (this.number += 2999.75), 5000); // Update on 5 seconds
    }

    public trigger() {
        this.observer.next(true);
    }
}
