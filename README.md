# GiraFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



# How this app was created

## projects

The projects module is lazy loaded via the angular router.

```
ng generate module projects
```

The project-container component is a smart component that uses sub-components to orchestrate
the UI for projects.

The project-container component puts the list of projects into the display
component project-list using an @Input properpty for display and selection. The project-list component
does not talk to the store. The project-list component has an EventEmitter for project deletion
and project selection to which the project-container component subscribes.

It also uses the project-form component to retrieve events about the creation of projects.
The project-form component has an EventEmitter as a @Output property to send events about newly
created projects. The project-form component does not talk to the store.

```
ng generate component projects/components/project-container
ng generate component projects/components/project-form
ng generate component projects/components/project-list
```

### The Projects Module and the NgRx Store Architecture

https://ngrx.io/guide/schematics

#### Install the schematics:
First, it is necessary to install the NgRx schematics for the angular CLI:
https://stackoverflow.com/questions/62725724/schematic-store-not-found-in-collection-schematics-angular

```
npm install @ngrx/{store,effects,entity,store-devtools} --save
ng add @ngrx/store
ng add @ngrx/schematics@latest
```

#### Install root store state to the app module

Generate the initial state management and register it within the app.module.ts

```
ng generate @ngrx/schematics:store State --root --module app.module.ts
```

To test, start the app, install Redux Development tools in your browser and look at the
raw state after visiting your page. The raw state should be an empty object.

#### install the NgRx store into a feature module

To install the NgRx store to a module, the CLI provides a schematic for adding NgRx stores to a module:

```
ng generate store <PATH_TO_MODULE_INSIDE_APP_FOLDER>/<MODULE_NAME> --module <MODULE_TS_FILE>
```

Here is an example call:

```
ng generate store projects/Projects --module projects.module.ts
```

The module was updated. Edit the project.module.ts file.

Remove the meta reducers so make the first snippet look like the last snippet.

```
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProject.projectFeatureKey, fromProject.reducers, { metaReducers: fromProject.metaReducers })
  ]
})
export class ProjectModule { }
```

```
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProject.projectFeatureKey, fromProject.reducers)
  ]
})
export class ProjectModule { }
```

In app/project/reducers/index.ts comment out the line about the environment import
and comment out the line about the meta reducers.

The only component that talks to the store is the project-container component.

#### actions

```
ng generate action projects/actions/action
```

#### effects

Installation

```
npm install @ngrx/effects --save
ng add @ngrx/effects@latest
```

Generate:

```
ng generate effect <EffectName> [options]
```

Example:

```
ng generate effect ProjectsLoadAllEffect --group=true --module=projects
```

#### Selectors

```
ng generate selector selectorName [options]
```

Example:

```
ng generate selector allProjectsSelector
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
