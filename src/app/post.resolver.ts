import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post, PostsService } from "./posts.service";

@Injectable({providedIn:'root'})

export class PostResolver implements Resolve<any>
{
  constructor(public postServices: PostsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postServices.getById(parseInt(route.params['id'], 10))

  }


}
