import { LOCALE_ID } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { registerLocaleData } from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { CalculationResultsComponent } from "./calculation-results.component";
import { By } from "@angular/platform-browser";

registerLocaleData(localeFr);

describe('CalculationResultsComponent', () => {
    let fixture: ComponentFixture<CalculationResultsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CalculationResultsComponent],
            providers: [{ provide: LOCALE_ID, useValue: 'fr' }]
        });

        fixture = TestBed.createComponent(CalculationResultsComponent);
    });

    it('should have the correct amountCAF', () => {
        fixture.componentInstance.amount = 250.78;

        fixture.detectChanges();

        const debugElements = fixture.debugElement.queryAll(By.css('li'));
        for (let i = 0; i < 4; i++) {
            expect(debugElements[i].nativeElement.textContent).toContain('25,08');
        }
        expect(debugElements[debugElements.length - 1].nativeElement.textContent).toContain('25,08');
    });

    xit('should have the correct amountCN', () => {
        fixture.componentInstance.amount = 250.78;

        fixture.detectChanges();

        const debugElements = fixture.debugElement.queryAll(By.css('li'));
        expect(debugElements[4].nativeElement.textContent).toContain('125,38');
    });
});