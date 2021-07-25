import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProjectsLoadAllEffectEffects } from './projects-load-all-effect.effects';

describe('ProjectsLoadAllEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: ProjectsLoadAllEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsLoadAllEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProjectsLoadAllEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
