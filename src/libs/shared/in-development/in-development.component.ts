import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'adbe-in-development',
    imports: [CommonModule],
    templateUrl: './in-development.component.html',
    styleUrls: ['./in-development.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InDevelopmentComponent {

}
