import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  providers: [HttpClientModule, UserService],
})
export class UsersServiceModule { }
