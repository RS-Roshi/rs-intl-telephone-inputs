import { MatFormFieldControl } from '@angular/material/form-field';
import { DoCheck, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CountryCode } from './data/country-code';
import { Country } from './model/country.model';
import { PhoneNumberFormat } from './model/phone-number-format.model';
import { E164Number, PhoneNumber } from 'libphonenumber-js';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CanUpdateErrorState, CanUpdateErrorStateCtor, ErrorStateMatcher } from '@angular/material/core';
import { MatMenu } from '@angular/material/menu';
import * as i0 from "@angular/core";
declare class NgxMatIntlTelInputBase {
    _defaultErrorStateMatcher: ErrorStateMatcher;
    _parentForm: NgForm;
    _parentFormGroup: FormGroupDirective;
    /** @docs-private */
    ngControl: NgControl;
    constructor(_defaultErrorStateMatcher: ErrorStateMatcher, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, 
    /** @docs-private */
    ngControl: NgControl);
}
declare const _NgxMatIntlTelInputMixinBase: CanUpdateErrorStateCtor & typeof NgxMatIntlTelInputBase;
export declare class RsMatIntlTelephoneInputComponent extends _NgxMatIntlTelInputMixinBase implements OnInit, OnDestroy, DoCheck, CanUpdateErrorState, MatFormFieldControl<any> {
    private countryCodeData;
    private fm;
    private elRef;
    ngControl: NgControl;
    static nextId: number;
    preferredCountries: Array<string>;
    enablePlaceholder: boolean;
    inputPlaceholder: string;
    cssClass: string;
    name: string;
    onlyCountries: Array<string>;
    errorStateMatcher: ErrorStateMatcher;
    enableSearch: boolean;
    searchPlaceholder: string;
    get format(): PhoneNumberFormat;
    set format(value: PhoneNumberFormat);
    matMenu: MatMenu | undefined;
    private _placeholder?;
    private _required;
    private _disabled;
    stateChanges: Subject<void>;
    focused: boolean;
    id: string;
    describedBy: string;
    phoneNumber: E164Number;
    allCountries: Array<Country>;
    preferredCountriesInDropDown: Array<Country>;
    selectedCountry: Country;
    numberInstance?: PhoneNumber;
    value: any;
    searchCriteria?: string;
    countryChanged: EventEmitter<Country>;
    private previousFormattedNumber?;
    private _format;
    static getPhoneNumberPlaceHolder(countryISOCode: any): string;
    onTouched: () => void;
    propagateChange: (_: any) => void;
    constructor(countryCodeData: CountryCode, fm: FocusMonitor, elRef: ElementRef<HTMLElement>, ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _defaultErrorStateMatcher: ErrorStateMatcher);
    ngOnInit(): void;
    ngDoCheck(): void;
    onPhoneNumberChange(): void;
    onCountrySelect(country: Country, el: any): void;
    getCountry(code: string): Country;
    onInputKeyPress(event: any): void;
    protected fetchCountryData(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get placeholder(): string;
    set placeholder(value: string);
    get required(): boolean;
    set required(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    reset(): void;
    ngOnDestroy(): void;
    private get formattedPhoneNumber();
    private formatAsYouTypeIfEnabled;
    static ɵfac: i0.ɵɵFactoryDef<RsMatIntlTelephoneInputComponent, [null, null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RsMatIntlTelephoneInputComponent, "rs-mat-intl-telephone-input", never, { "preferredCountries": "preferredCountries"; "enablePlaceholder": "enablePlaceholder"; "inputPlaceholder": "inputPlaceholder"; "cssClass": "cssClass"; "name": "name"; "onlyCountries": "onlyCountries"; "errorStateMatcher": "errorStateMatcher"; "enableSearch": "enableSearch"; "searchPlaceholder": "searchPlaceholder"; "format": "format"; "placeholder": "placeholder"; "required": "required"; "disabled": "disabled"; }, { "countryChanged": "countryChanged"; }, never, never>;
}
export {};
//# sourceMappingURL=rs-mat-intl-telephone-input.component.d.ts.map