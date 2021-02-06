import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    // country | search:'searchCriteria'
    transform(country, searchCriteria) {
        if (!searchCriteria || searchCriteria === '') {
            return true;
        }
        return `${country.name}+${country.dialCode}`
            .toLowerCase()
            .includes(searchCriteria.toLowerCase());
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'search'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ycy1tYXQtaW50bC10ZWxlcGhvbmUtaW5wdXQvc3JjL2xpYi9waXBlcy9zZWFyY2gucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLFVBQVU7SUFFckIsb0NBQW9DO0lBQ3BDLFNBQVMsQ0FBQyxPQUFnQixFQUFFLGNBQXVCO1FBQ2pELElBQUksQ0FBQyxjQUFjLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTthQUN6QyxXQUFXLEVBQUU7YUFDYixRQUFRLENBQ1AsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUM3QixDQUFDO0lBQ04sQ0FBQzs7b0VBYlUsVUFBVTsyREFBVixVQUFVO3VGQUFWLFVBQVU7Y0FIdEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi8uLi9tb2RlbC9jb3VudHJ5Lm1vZGVsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2VhcmNoJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgLy8gY291bnRyeSB8IHNlYXJjaDonc2VhcmNoQ3JpdGVyaWEnXG4gIHRyYW5zZm9ybShjb3VudHJ5OiBDb3VudHJ5LCBzZWFyY2hDcml0ZXJpYT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghc2VhcmNoQ3JpdGVyaWEgfHwgc2VhcmNoQ3JpdGVyaWEgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7Y291bnRyeS5uYW1lfSske2NvdW50cnkuZGlhbENvZGV9YFxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmNsdWRlcyhcbiAgICAgICAgc2VhcmNoQ3JpdGVyaWEudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgfVxuXG59XG4iXX0=