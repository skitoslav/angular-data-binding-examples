import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'adbe-default-angular-page',
    imports: [CommonModule],
    templateUrl: './default-angular-page.component.html',
    styleUrls: ['./default-angular-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultAngularPageComponent {
  title = 'angular-data-binding-examples';
}
