import { RecipesService } from './recipes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipes.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
recipes: Recipe[];
  constructor(private recipesService: RecipesService, private navCtrl: NavController,) {
  }

  ngOnInit() {
    console.log('GetREcipes:OnInit');
  }

  ionViewDidLeave(){
   console.log("RecipePAge:viewDidLeave");
  }

  ngOnDestroy() {
    console.log("RecipePAge:onDestroy");
  }
  
  ionViewWillEnter(){
    console.log("RecipePAge:viewWillEnter");
    console.log('its here', this.recipes);
    this.recipes = this.recipesService.getAllRecipes();
    console.log('second its here', this.recipes);
  }





}
