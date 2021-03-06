import { parsePhoneNumber } from 'libphonenumber-js';
export const phoneNumberValidator = (control) => {
    const error = { validatePhoneNumber: true };
    let numberInstance;
    if (control.value) {
        try {
            numberInstance = parsePhoneNumber(control.value);
        }
        catch (e) {
            control.setValue(null);
            return error;
        }
        if (numberInstance && !numberInstance.isValid()) {
            control.setValue(null);
            if (!control.touched) {
                control.markAsTouched();
            }
            return error;
        }
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmVOdW1iZXIudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcnMtbWF0LWludGwtdGVsZXBob25lLWlucHV0L3NyYy9saWIvdmFsaWRhdG9ycy9waG9uZU51bWJlci52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFbEUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEVBQUU7SUFDekQsTUFBTSxLQUFLLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM1QyxJQUFJLGNBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ2YsSUFBSTtZQUNBLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEQ7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDM0I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwYXJzZVBob25lTnVtYmVyLCBQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcblxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID0gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHRydWUgfTtcbiAgICBsZXQgbnVtYmVySW5zdGFuY2U6IFBob25lTnVtYmVyO1xuICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBudW1iZXJJbnN0YW5jZSA9IHBhcnNlUGhvbmVOdW1iZXIoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtYmVySW5zdGFuY2UgJiYgIW51bWJlckluc3RhbmNlLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgY29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGlmICghY29udHJvbC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuIl19