import { CanDeactivate } from "@angular/router";
import { Stock1Component } from "../stock1/stock1.component";


export class FocusGuard implements CanDeactivate<Stock1Component> {
    canDeactivate(component: Stock1Component) {
        if (component.isFocus()) {
            return true;
        } else {
            return window.confirm('不关注就离吗？这股票能赚钱哦。');
        }
    }

}